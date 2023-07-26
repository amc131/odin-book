const { server, BASE_URL } = require('./jest.config');

describe('Get /index', () => {
  test('Should return a 200 status code and JSON message', async () => {
    const response = await server.get(BASE_URL);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Welcome to Express API' })
  });
});
