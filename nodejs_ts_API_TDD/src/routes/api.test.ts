import request from 'supertest';
import app from '../app';
import { User } from '../models/User'

describe('2-Testing request api', () => {

  const email = 'test@jest.com';
  const password = '1234';

  beforeAll(async () => {
    await User.sync({ force : true });
  });

  it('a) Should /ping correct', (done) => {
    request(app) // Cria o servidor
      .get('/ping') // Tipo da requisição | GET | POST | PUT | DELETE ...
      .then(response => {
        expect(response.body.pong).toBeTruthy(); // Verifica o body, headers da resposta.
        return done(); // Função que auxilia o jest para informar que terminou o teste.
      });
  });

  it('b) Should /ping error', (done) => {
    request(app)
      .get('/ping')
      .then(response => {
        expect(response.body.pongs).toBeFalsy();
        return done();
      });
  });


  it('b) Should register a new user', (done) => {
    request(app)
      .post('/register')
      .send(`email=${email}&password=${password}`)
      .then(response => {
        expect(response.body.error).toBeUndefined();
        expect(response.body).toHaveProperty('id')
        return done();
      });
  });

// Enviar email sem a senha
  it('c) Should not allow to register with existing email', (done) => {
    request(app)
      .post('/register')
      .send(`email=${email}`)
      .then(response => {
        expect(response.body.error).not.toBeUndefined();
        return done();
      });
  });
});