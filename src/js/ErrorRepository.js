export default class ErrorRepository {
    constructor() {
        this.errors = new Map([
            [400, 'Bad Request'], 
            [401, 'Unauthorized'],
            [402, 'Payment Required'],
            [403, 'Forbidden'],
            [404, 'Not Found'],
            [405, 'Method Not Allowed']
        ]);
    }

    translate(code) {
        if (this.errors.has(code)) {
            return this.errors.get(code)
        } else {
            throw new Error('Unknown error');
        }
    }
}
