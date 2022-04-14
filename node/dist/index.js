"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
let nome = 'João';
let idade = 25;
let n1 = 20;
let n2 = 80;
let email = 'fernandos@gmail.com';
let name = 'Fernando';
if (validator_1.default.isLowercase(name)) {
    console.log('Tudo minúsculo: ' + name + '.');
}
else {
    console.log('Algumas letras maiúsculas');
}
console.log(nome, idade);
console.log(validator_1.default.isEmail(email));
