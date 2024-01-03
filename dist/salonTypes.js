"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESalonMessages = exports.ESalonErrorCodes = void 0;
var ESalonErrorCodes;
(function (ESalonErrorCodes) {
    ESalonErrorCodes[ESalonErrorCodes["SUCCESS"] = 0] = "SUCCESS";
    ESalonErrorCodes[ESalonErrorCodes["SALON_NOT_FOUND"] = 1] = "SALON_NOT_FOUND";
})(ESalonErrorCodes || (exports.ESalonErrorCodes = ESalonErrorCodes = {}));
var ESalonMessages;
(function (ESalonMessages) {
    ESalonMessages["SUCCESS"] = "Salon created";
    ESalonMessages["NO_SALON_WITH_ID"] = "No salon with id";
    ESalonMessages["DELETED"] = "Salon deleted";
    ESalonMessages["UPDATED"] = "Salon updated";
})(ESalonMessages || (exports.ESalonMessages = ESalonMessages = {}));
