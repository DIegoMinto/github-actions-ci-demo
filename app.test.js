const request = require('supertest');
const app = require('./app');

<<<<<<< HEAD
describe('API Tests', () => {
  test('GET /health debe retornar status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('GET /users debe retornar una lista de usuarios', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(2);
  });
=======
describe('Pruebas de API Películas', () => {
  test('GET /movies - listar películas', async () => {
    const res = await request(app).get('/movies');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
  });

  test('POST /movies - crear película', async () => {
    const res = await request(app).post('/movies').send({ title: "Inception", category: "Sci-Fi" });
    expect(res.statusCode).toBe(201);
  });
>>>>>>> 8b64fe3b2d800d62343769fee1ed1ce59402e8da
});