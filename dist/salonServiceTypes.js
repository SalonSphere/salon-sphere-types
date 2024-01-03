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
    ESalonServiceMessages["NO_APPOINTMENT_WITH_ID"] = "No appointment found with id";
    ESalonServiceMessages["APPOINTMENT_DELETED"] = "Appointment successfully deleted";
    ESalonServiceMessages["APPOINTMENT_UPDATED"] = "Appointment successfully updated";
})(ESalonServiceMessages || (exports.ESalonServiceMessages = ESalonServiceMessages = {}));
var ESalonServiceErrorCodes;
(function (ESalonServiceErrorCodes) {
})(ESalonServiceErrorCodes || (exports.ESalonServiceErrorCodes = ESalonServiceErrorCodes = {}));
