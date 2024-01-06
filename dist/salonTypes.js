"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESalonMessages = exports.ESalonErrorCodes = void 0;
var ESalonErrorCodes;
(function (ESalonErrorCodes) {
    ESalonErrorCodes[ESalonErrorCodes["SUCCESS"] = 0] = "SUCCESS";
    ESalonErrorCodes[ESalonErrorCodes["NO_SALON_WITH_ID"] = 1] = "NO_SALON_WITH_ID";
    ESalonErrorCodes[ESalonErrorCodes["NO_SALON"] = 2] = "NO_SALON";
    ESalonErrorCodes[ESalonErrorCodes["DELETED"] = 3] = "DELETED";
    ESalonErrorCodes[ESalonErrorCodes["UPDATED"] = 4] = "UPDATED";
    ESalonErrorCodes[ESalonErrorCodes["FOUND"] = 5] = "FOUND";
    ESalonErrorCodes[ESalonErrorCodes["FOUND_MULTIPLE"] = 6] = "FOUND_MULTIPLE";
})(ESalonErrorCodes || (exports.ESalonErrorCodes = ESalonErrorCodes = {}));
var ESalonMessages;
(function (ESalonMessages) {
    ESalonMessages["SUCCESS"] = "Salon created";
    ESalonMessages["NO_SALON_WITH_ID"] = "No salon found with id";
    ESalonMessages["NO_SALON"] = "No salon found";
    ESalonMessages["DELETED"] = "Salon successfully deleted";
    ESalonMessages["UPDATED"] = "Salon successfully updated";
    ESalonMessages["FOUND"] = "Salon found";
    ESalonMessages["FOUND_MULTIPLE"] = "Salons found";
})(ESalonMessages || (exports.ESalonMessages = ESalonMessages = {}));
