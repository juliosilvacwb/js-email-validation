"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('Testes for validate email', () => {
    test('should validate email', () => {
        expect((0, _1.isEmailValid)('string@email.co')).toBeTruthy();
        expect((0, _1.isEmailValid)('string@email.com')).toBeTruthy();
        expect((0, _1.isEmailValid)('string@email.com.br')).toBeTruthy();
        expect((0, _1.isEmailValid)('string@email.co.com.br')).toBeTruthy();
        expect((0, _1.isEmailValid)('String@email.co.com.br')).toBeTruthy();
        expect((0, _1.isEmailValid)('string.string@email.com.br')).toBeTruthy();
        expect((0, _1.isEmailValid)('string-string@email.com.br')).toBeTruthy();
        expect((0, _1.isEmailValid)('string@email')).toBeFalsy();
        expect((0, _1.isEmailValid)('string@email-co')).toBeFalsy();
        expect((0, _1.isEmailValid)('string;456@email.co')).toBeFalsy();
        expect((0, _1.isEmailValid)('string@email.1.2')).toBeFalsy();
    });
});
