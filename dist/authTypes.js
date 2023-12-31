"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EAuthMessages = exports.EAuthErrorCodes = void 0;
var EAuthErrorCodes;
(function (EAuthErrorCodes) {
    EAuthErrorCodes[EAuthErrorCodes["SUCCES"] = 0] = "SUCCES";
    EAuthErrorCodes[EAuthErrorCodes["USER_WITH_EMAIL"] = 1] = "USER_WITH_EMAIL";
})(EAuthErrorCodes || (exports.EAuthErrorCodes = EAuthErrorCodes = {}));
var EAuthMessages;
(function (EAuthMessages) {
    EAuthMessages["SUCCESS"] = "User created";
    EAuthMessages["USER_WITH_EMAIL"] = "User with email exist";
})(EAuthMessages || (exports.EAuthMessages = EAuthMessages = {}));
