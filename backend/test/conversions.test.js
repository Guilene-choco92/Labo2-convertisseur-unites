import assert from 'node:assert/strict';
import test from 'node:test';
import request from 'supertest';
import app from '../src/app.js';

test('convertit les pieds en mètres', async () => {
  const response = await request(app)
    .post('/api/convert/feet-to-meters')
    .send({ value: 10 });

  assert.equal(response.status, 200);
  assert.equal(response.body.result, 3.048);
  assert.equal(response.body.resultUnit, 'mètres');
});

test('convertit les litres en gallons américains', async () => {
  const response = await request(app)
    .post('/api/convert/liters-to-gallons')
    .send({ value: 1 });

  assert.equal(response.status, 200);
  assert.equal(response.body.result, 0.2641720524);
});

test('rejette une valeur non numérique', async () => {
  const response = await request(app)
    .post('/api/convert/feet-to-meters')
    .send({ value: 'invalide' });

  assert.equal(response.status, 400);
  assert.match(response.body.error, /nombre valide/);
});
