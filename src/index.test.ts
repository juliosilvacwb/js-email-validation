import { isEmailValid } from ".";

describe('Testes for validate email', () => {

    test('should validate email', () => {
        expect(isEmailValid('string@email.co')).toBeTruthy();
        expect(isEmailValid('string@email.com')).toBeTruthy();
        expect(isEmailValid('string@email.com.br')).toBeTruthy();
        expect(isEmailValid('string@email.co.com.br')).toBeTruthy();
        expect(isEmailValid('String@email.co.com.br')).toBeTruthy();

        expect(isEmailValid('string.string@email.com.br')).toBeTruthy();
        expect(isEmailValid('string-string@email.com.br')).toBeTruthy();

        expect(isEmailValid('string@email')).toBeFalsy();
        expect(isEmailValid('string@email-co')).toBeFalsy();
        expect(isEmailValid('string;456@email.co')).toBeFalsy();
        expect(isEmailValid('string@email.1.2')).toBeFalsy();
    });

});