export class SignUpController {
    handle(httpRequest: any): any {
        if (!httpRequest.body.name) {
            return {
                statusCode: 400,
                body: new Error('parâmetro name ausente')
            }
        }
        if (!httpRequest.body.email) {
            return {
                statusCode: 400,
                body: new Error('parâmetro email ausente')
            }
        }
    }
}