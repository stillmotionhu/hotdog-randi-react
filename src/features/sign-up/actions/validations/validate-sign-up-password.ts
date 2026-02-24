import { SignUpFormPayload } from "@/features/sign-up/sign-up-slice";
import { FormError } from "@/types/form-error";
import { PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH } from "@/constants/firebase";

export const validateSignUpPassword = (
  data: SignUpFormPayload,
): FormError | boolean => {
  const { password } = data;

  if (!password.trim()) {
    return {
      code: "sign-up/password-missing",
      message: "You must enter a password.",
      target: "password",
    };
  }

  if (password.length < PASSWORD_MIN_LENGTH) {
    return {
      code: "sign-up/password-too-short",
      message: "Your password must be at least 6 characters long.",
      target: "password",
    };
  }

  if (password.length > PASSWORD_MAX_LENGTH) {
    return {
      code: "sign-up/password-too-long",
      message:
        "You're sure you'll remember that? Your password must be maximum 4,096 characters long.",
      target: "password",
    };
  }

  return true;
};
