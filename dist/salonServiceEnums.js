"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalonServiceType = exports.BeautySalonServices = exports.BarbershopServices = void 0;
var BarbershopServices;
(function (BarbershopServices) {
    BarbershopServices["HAIRCUT"] = "Haircut";
    BarbershopServices["SHAVE"] = "Shave";
    BarbershopServices["BEARD_TRIM"] = "Beard Trim";
    BarbershopServices["HAIR_STYLING"] = "Hair Styling";
})(BarbershopServices || (exports.BarbershopServices = BarbershopServices = {}));
var BeautySalonServices;
(function (BeautySalonServices) {
    BeautySalonServices["MANICURE"] = "Manicure";
    BeautySalonServices["PEDICURE"] = "Pedicure";
    BeautySalonServices["FACIAL"] = "Facial";
    BeautySalonServices["WAXING"] = "Waxing";
})(BeautySalonServices || (exports.BeautySalonServices = BeautySalonServices = {}));
var SalonServiceType;
(function (SalonServiceType) {
    SalonServiceType[SalonServiceType["MAN"] = 0] = "MAN";
    SalonServiceType[SalonServiceType["WOMAN"] = 1] = "WOMAN";
})(SalonServiceType || (exports.SalonServiceType = SalonServiceType = {}));
