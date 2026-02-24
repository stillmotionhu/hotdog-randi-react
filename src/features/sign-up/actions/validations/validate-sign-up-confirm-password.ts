import { SignUpFormPayload } from "@/features/sign-up/sign-up-slice";
import { FormError } from "@/types/form-error";

export const validateSignUpConfirmPassword = (
  data: SignUpFormPayload,
): FormError | boolean => {
  const { password, confirmPassword } = data;

  if (password !== confirmPassword) {
    return {
      code: "sign-up/password-confirmation-does-not-match",
      message: "Those passwords didn't match. Try again.",
      target: "confirmPassword",
      secondaryTarget: "password",
    };
  }

  return true;
};
