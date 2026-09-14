import { Router } from 'express';

const router = Router();

const validateValue = (request, response, next) => {
  const value = Number(request.body?.value);

  if (!Number.isFinite(value)) {
    return response.status(400).json({
      error: 'La valeur fournie doit être un nombre valide.'
    });
  }

  request.conversionValue = value;
  return next();
};

router.post('/feet-to-meters', validateValue, (request, response) => {
  const result = request.conversionValue * 0.3048;

  response.json({
    input: request.conversionValue,
    inputUnit: 'pieds',
    result,
    resultUnit: 'mètres'
  });
});

router.post('/liters-to-gallons', validateValue, (request, response) => {
  const result = request.conversionValue * 0.2641720524;

  response.json({
    input: request.conversionValue,
    inputUnit: 'litres',
    result,
    resultUnit: 'gallons américains'
  });
});

export default router;
router.post('/celsius-to-fahrenheit', validateValue, (request, response) => {
    const result = (request.conversionValue * 9) / 5 + 32;

    response.json({
      input: request.conversionValue,
      inputUnit: 'degrés Celsius',
      result,
      resultUnit: 'degrés Fahrenheit'
    });
  });