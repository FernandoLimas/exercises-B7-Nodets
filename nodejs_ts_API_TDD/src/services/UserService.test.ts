import * as UserService from './UserService';
import { User, UserInstance } from '../models/User'

describe('Testing Service', () => {

  // Antes de começar a criar os testes é preciso popular o banco de dados de testes.
  beforeAll( async () => {
    await User.sync({ force: true }); // antes de criar deleta todas as tabelas;
  });
  
  const email = 'test@jest.com';
  const password = '123';

  describe('1-The user was create.', () => {
  
    it('1) Should create a new user.', async () => {
      const newUser = await UserService.createUser(email, password) as UserInstance; // assertion
      expect(newUser).not.toBeInstanceOf(Error);
      expect(newUser).toHaveProperty('id');
      expect(newUser).toHaveProperty('password');
      expect(newUser.email).toBe(email);
    });
  
    // Reverte os dados do banco para cada;
    beforeEach(async () => {
      await User.sync({ force: true })
    })

      it('2) Property "email" exist.', async () => {
        const newUser = await UserService.createUser(email, password);
        expect(newUser).toHaveProperty('email');
      });

  });

  describe('2-Service error: user create with email exist.', () => {

    it('1) The user already exists.', async () => {
      const newUser = await UserService.createUser(email, password);
      expect(newUser).toBeInstanceOf(Error);
    });

  });

  describe('3-Should find a user by the email.', () => {

    it('1) Get user by email.', async () => {
      const byEmail = await UserService.findByEmail(email) as UserInstance;
      expect(byEmail.email).toBe(email);
    });

  });

  describe('4-Should match password from database.', () => {

    it('1) User password OK.', async () => {
      const user = await UserService.findByEmail(email) as UserInstance;
      const matchPass = UserService.matchPassword(password, user.password);

      expect(matchPass).toBeTruthy();
      
    });

    it('2) User not password.', async () => {
      const user = await UserService.findByEmail(email) as UserInstance;
      const matchPass = UserService.matchPassword('wrongPassword', user.password);

      expect(matchPass).toBeFalsy();
      
    });

  });

});