var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
let I18nSupportService = class I18nSupportService {
    constructor() {
        this.welcomeMsg = {
            'ko': '안녕하세요',
            'en': 'Hello',
            'jp': '일본어인사',
            'fr': 'Bonjour'
        };
    }
    getWelcomeMsgByCode(userName, code) {
        const helloMsg = this.welcomeMsg[code];
        return `${helloMsg}, ${userName}!`;
    }
};
I18nSupportService = __decorate([
    Injectable()
], I18nSupportService);
export { I18nSupportService };
