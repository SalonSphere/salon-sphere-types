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
  SUCCESS = "Service created",
  NO_SERVICE_WITH_ID = "No service found with id",
  NO_SERVICES = "No services found",
  DELETED = "Service successfully deleted",
  UPDATED = "Service successfully updated",
  FOUND = "Sercvice found",
  FOUND_MULTIPLE = "Services found",
}
export enum ESalonServiceErrorCodes {
  SUCCESS,
  NO_SERVICE_WITH_ID,
  NO_SERVICES,
  DELETED,
  UPDATED,
  FOUND,
  FOUND_MULTIPLE,
}
