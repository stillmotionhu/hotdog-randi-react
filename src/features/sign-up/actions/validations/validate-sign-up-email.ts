import { SignUpFormPayload } from "@/features/sign-up/sign-up-slice";
import { FormError } from "@/types/form-error";

export const validateSignUpEmail = (
  data: SignUpFormPayload,
): FormError | boolean => {
  const { email } = data;

  if (!email.trim()) {
    return {
      code: "sign-up/email-missing",
      message: "You must enter your email address.",
      target: "email",
    };
  }

  return true;
};
