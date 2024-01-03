"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EUserMessages = exports.EUserErrorCodes = void 0;
var EUserErrorCodes;
(function (EUserErrorCodes) {
    EUserErrorCodes[EUserErrorCodes["SUCCESS"] = 0] = "SUCCESS";
    EUserErrorCodes[EUserErrorCodes["NO_USER_WITH_ID"] = 1] = "NO_USER_WITH_ID";
})(EUserErrorCodes || (exports.EUserErrorCodes = EUserErrorCodes = {}));
var EUserMessages;
(function (EUserMessages) {
    EUserMessages["NO_USER_WITH_ID"] = "No user with id";
    EUserMessages["DELETED"] = "No user with id";
    EUserMessages["UPDATED"] = "No user with id";
    EUserMessages["SUCCESS"] = "User created";
})(EUserMessages || (exports.EUserMessages = EUserMessages = {}));
