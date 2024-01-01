"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EAppointmntMessages = exports.EAppointmntError = void 0;
var EAppointmntError;
(function (EAppointmntError) {
    EAppointmntError[EAppointmntError["SUCCES"] = 0] = "SUCCES";
    EAppointmntError[EAppointmntError["NO_USER_WITH_ID"] = 1] = "NO_USER_WITH_ID";
    EAppointmntError[EAppointmntError["NO_APPOINTMENT_WITH_ID"] = 2] = "NO_APPOINTMENT_WITH_ID";
})(EAppointmntError || (exports.EAppointmntError = EAppointmntError = {}));
var EAppointmntMessages;
(function (EAppointmntMessages) {
    EAppointmntMessages["SUCCESS"] = "Appointment created";
    EAppointmntMessages["NO_USER_WITH_ID"] = "No user with id";
    EAppointmntMessages["NO_SALON_WITH_ID"] = "No salon with id";
    EAppointmntMessages["NO_APPOINTMENT_WITH_ID"] = "No appointment found with id";
    EAppointmntMessages["APPOINTMENT_DELETED"] = "Appointment successfully deleted";
    EAppointmntMessages["APPOINTMENT_UPDATED"] = "Appointment successfully updated";
})(EAppointmntMessages || (exports.EAppointmntMessages = EAppointmntMessages = {}));
