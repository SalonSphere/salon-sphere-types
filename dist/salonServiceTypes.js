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
    ESalonServiceMessages["SUCCESS"] = "Service created";
    ESalonServiceMessages["NO_SERVICE_WITH_ID"] = "No service found with id";
    ESalonServiceMessages["NO_SERVICES"] = "No services found";
    ESalonServiceMessages["DELETED"] = "Service successfully deleted";
    ESalonServiceMessages["UPDATED"] = "Service successfully updated";
    ESalonServiceMessages["FOUND"] = "Sercvice found";
    ESalonServiceMessages["FOUND_MULTIPLE"] = "Services found";
})(ESalonServiceMessages || (exports.ESalonServiceMessages = ESalonServiceMessages = {}));
var ESalonServiceErrorCodes;
(function (ESalonServiceErrorCodes) {
    ESalonServiceErrorCodes[ESalonServiceErrorCodes["SUCCESS"] = 0] = "SUCCESS";
    ESalonServiceErrorCodes[ESalonServiceErrorCodes["NO_SERVICE_WITH_ID"] = 1] = "NO_SERVICE_WITH_ID";
    ESalonServiceErrorCodes[ESalonServiceErrorCodes["NO_SERVICES"] = 2] = "NO_SERVICES";
    ESalonServiceErrorCodes[ESalonServiceErrorCodes["DELETED"] = 3] = "DELETED";
    ESalonServiceErrorCodes[ESalonServiceErrorCodes["UPDATED"] = 4] = "UPDATED";
    ESalonServiceErrorCodes[ESalonServiceErrorCodes["FOUND"] = 5] = "FOUND";
    ESalonServiceErrorCodes[ESalonServiceErrorCodes["FOUND_MULTIPLE"] = 6] = "FOUND_MULTIPLE";
})(ESalonServiceErrorCodes || (exports.ESalonServiceErrorCodes = ESalonServiceErrorCodes = {}));
