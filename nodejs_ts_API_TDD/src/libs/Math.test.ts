import { Math } from './Math';

describe('Testing Math', () => {

  it('should sum two numbers', () => {
    const response = Math.sum(5,3);
    expect(response).toBe(8);
  })

  it('should multiply two numbers', () => {
    const response = Math.mult(5,5);
    expect(response).toBe(25);
  })

  it('shold divide two numbers', () => {
    const response = Math.div(10,2);
    expect(response).toBe(5);
  })

  it('shoul subtract two numbers', () => {
    const response = Math.sub(5,2);
    expect(response).toBe(3);
  })
});

/* LIFECYCLE PARA TESTES:
beforeAll() / beforeEach() / afterAll() /afterEach() */