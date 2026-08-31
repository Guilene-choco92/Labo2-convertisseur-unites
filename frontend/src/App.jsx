import { useState } from 'react';
import CalculateIcon from '@mui/icons-material/Calculate';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import './App.css';

const converters = [
  {
    id: 'feet',
    title: 'Pieds vers mètres',
    label: 'Valeur en pieds',
    route: '/api/convert/feet-to-meters',
    outputUnit: 'mètres'
  },
  {
    id: 'liters',
    title: 'Litres vers gallons',
    label: 'Valeur en litres',
    route: '/api/convert/liters-to-gallons',
    outputUnit: 'gallons américains'
  }
];

function ConverterCard({ converter }) {
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const convert = async (event) => {
    event.preventDefault();
    setError('');
    setResult(null);

    if (value.trim() === '' || !Number.isFinite(Number(value))) {
      setError('Saisissez une valeur numérique valide.');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(converter.route, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: Number(value) })
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'La conversion a échoué.');
      }

      setResult(data.result);
    } catch (requestError) {
      setError(requestError.message || 'Impossible de joindre le serveur.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card component="section" elevation={3} sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Stack component="form" spacing={2.5} onSubmit={convert}>
          <Typography component="h2" variant="h5" fontWeight={700}>
            {converter.title}
          </Typography>
          <TextField
            label={converter.label}
            type="number"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            inputProps={{ step: 'any' }}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={loading}
            startIcon={loading ? <CircularProgress color="inherit" size={18} /> : <CalculateIcon />}
          >
            Convertir
          </Button>
          {error && <Alert severity="error">{error}</Alert>}
          {result !== null && (
            <Alert severity="success" icon={false}>
              Résultat : <strong>{result.toLocaleString('fr-CA', { maximumFractionDigits: 8 })} {converter.outputUnit}</strong>
            </Alert>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function App() {
  return (
    <Box className="app-shell">
      <Container maxWidth="md">
        <Stack spacing={4}>
          <Box component="header" textAlign="center">
            <Typography
              component="h1"
              variant="h3"
              fontWeight={800}
              gutterBottom
              className="animated-title"
            >
              Convertisseur d'unités
            </Typography>
            <Typography color="text.secondary">
              Convertissez rapidement vos mesures avec précision.
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {converters.map((converter) => (
              <Grid key={converter.id} size={{ xs: 12, md: 6 }}>
                <ConverterCard converter={converter} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
