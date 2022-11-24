import { SignUpController } from './sigup'

describe('Signup Controller', () => {
  test('Shoul return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'lucas@gmail.com',
        password: '123',
        passwordConfirmation: '123'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
