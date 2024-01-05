export interface Data<T> {
  data?: [T] | T;
  message?: string;
  errorCode?: number;
}
