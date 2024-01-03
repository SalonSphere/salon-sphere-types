"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESalonServiceErrorCodes = exports.ESalonServiceMessages = exports.ESalonServiceType = exports.EBeautySalonServices = exports.EBarbershopServices = void 0;
var EBarbershopServices;
(function (EBarbershopServices) {
    EBarbershopServices["HAIRCUT"] = "Haircut";
    EBarbershopServices["SHAVE"] = "Shave";
    EBarbershopServices["BEARD_TRIM"] = "Beard Trim";
    EBarbershopServices["HAIR_STYLING"] = "Hair Styling";
})(EBarbershopServices || (exports.EBarbershopServices = EBarbershopServices = {}));
var EBeautySalonServices;
(function (EBeautySalonServices) {
    EBeautySalonServices["MANICURE"] = "Manicure";
    EBeautySalonServices["PEDICURE"] = "Pedicure";
    EBeautySalonServices["FACIAL"] = "Facial";
    EBeautySalonServices["WAXING"] = "Waxing";
})(EBeautySalonServices || (exports.EBeautySalonServices = EBeautySalonServices = {}));
var ESalonServiceType;
(function (ESalonServiceType) {
    ESalonServiceType[ESalonServiceType["MAN"] = 0] = "MAN";
    ESalonServiceType[ESalonServiceType["WOMAN"] = 1] = "WOMAN";
})(ESalonServiceType || (exports.ESalonServiceType = ESalonServiceType = {}));
var ESalonServiceMessages;
(function (ESalonServiceMessages) {
    ESalonServiceMessages["SUCCESS"] = "Appointment created";
    ESalonServiceMessages["NO_SERVICE_WITH_ID"] = "No service found with id";
    ESalonServiceMessages["DELETED"] = "Service successfully deleted";
    ESalonServiceMessages["UPDATED"] = "Service successfully updated";
})(ESalonServiceMessages || (exports.ESalonServiceMessages = ESalonServiceMessages = {}));
var ESalonServiceErrorCodes;
(function (ESalonServiceErrorCodes) {
    ESalonServiceErrorCodes[ESalonServiceErrorCodes["SUCCESS"] = 0] = "SUCCESS";
    ESalonServiceErrorCodes[ESalonServiceErrorCodes["NO_SERVICE_WITH_ID"] = 1] = "NO_SERVICE_WITH_ID";
})(ESalonServiceErrorCodes || (exports.ESalonServiceErrorCodes = ESalonServiceErrorCodes = {}));
