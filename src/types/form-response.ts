import { FormError } from "./form-error";

export interface FormResponse {
  success: boolean;
  error?: FormError;
}
