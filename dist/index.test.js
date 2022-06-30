"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('Testes for validate email', () => {
    test('should validate email', () => {
        expect((0, _1.isValidEmail)('string@email.co')).toBeTruthy();
        expect((0, _1.isValidEmail)('string@email.com')).toBeTruthy();
        expect((0, _1.isValidEmail)('string@email.com.br')).toBeTruthy();
        expect((0, _1.isValidEmail)('string@email.co.com.br')).toBeTruthy();
        expect((0, _1.isValidEmail)('String@email.co.com.br')).toBeTruthy();
        expect((0, _1.isValidEmail)('string.string@email.com.br')).toBeTruthy();
        expect((0, _1.isValidEmail)('string-string@email.com.br')).toBeTruthy();
        expect((0, _1.isValidEmail)('string@email')).toBeFalsy();
        expect((0, _1.isValidEmail)('string@email-co')).toBeFalsy();
        expect((0, _1.isValidEmail)('string;456@email.co')).toBeFalsy();
        expect((0, _1.isValidEmail)('string@email.1.2')).toBeFalsy();
    });
});
