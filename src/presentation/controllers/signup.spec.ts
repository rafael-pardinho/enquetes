import { SignUpController } from './signup'

describe('SignUp Controller', () => {
    test('Deve retornar 400 se nenhum nome for fornecido', () => {
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                email: 'any_email',
                password: 'any_password',
                passwordConfirmation: 'any_password'
            }
        }
        const httpResponse = sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new Error('parâmetro name ausente'))
    })

    test('Deve retornar 400 se nenhum email for fornecido', () => {
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                name: 'any_name',
                password: 'any_password',
                passwordConfirmation: 'any_password'
            }
        }
        const httpResponse = sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new Error('parâmetro email ausente'))
    })
})
