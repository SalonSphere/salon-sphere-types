export enum EBarbershopServices {
  HAIRCUT = "Haircut",
  SHAVE = "Shave",
  BEARD_TRIM = "Beard Trim",
  HAIR_STYLING = "Hair Styling",
}

export enum EBeautySalonServices {
  MANICURE = "Manicure",
  PEDICURE = "Pedicure",
  FACIAL = "Facial",
  WAXING = "Waxing",
}

export enum ESalonServiceType {
  MAN,
  WOMAN,
}

export enum ESalonServiceMessages {
  SUCCESS = "Appointment created",
  NO_SERVICE_WITH_ID = "No service found with id",
  DELETED = "Service successfully deleted",
  UPDATED = "Service successfully updated",
}
export enum ESalonServiceErrorCodes {
  SUCCESS,
  NO_SERVICE_WITH_ID,
}
