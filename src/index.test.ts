import { isValidEmail } from ".";

describe('Testes for validate email', () => {

    test('should validate email', () => {
        expect(isValidEmail('string@email.co')).toBeTruthy();
        expect(isValidEmail('string@email.com')).toBeTruthy();
        expect(isValidEmail('string@email.com.br')).toBeTruthy();
        expect(isValidEmail('string@email.co.com.br')).toBeTruthy();
        expect(isValidEmail('String@email.co.com.br')).toBeTruthy();

        expect(isValidEmail('string.string@email.com.br')).toBeTruthy();
        expect(isValidEmail('string-string@email.com.br')).toBeTruthy();

        expect(isValidEmail('string@email')).toBeFalsy();
        expect(isValidEmail('string@email-co')).toBeFalsy();
        expect(isValidEmail('string;456@email.co')).toBeFalsy();
        expect(isValidEmail('string@email.1.2')).toBeFalsy();
    });

});