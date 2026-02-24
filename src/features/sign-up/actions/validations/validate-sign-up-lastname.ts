import { SignUpFormPayload } from "@/features/sign-up/sign-up-slice";
import { FormError } from "@/types/form-error";

export const validateSignUpLastname = (
  data: SignUpFormPayload,
): FormError | boolean => {
  const { lastname } = data;

  if (!lastname.trim()) {
    return {
      code: "sign-up/lastname-missing",
      message: "Please enter your lastname.",
      target: "lastname",
    };
  }

  return true;
};
