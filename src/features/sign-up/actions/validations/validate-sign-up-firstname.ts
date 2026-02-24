import { SignUpFormPayload } from "@/features/sign-up/sign-up-slice";
import { FormError } from "@/types/form-error";

export const validateSignUpFirstname = (
  data: SignUpFormPayload,
): FormError | boolean => {
  const { firstname } = data;

  if (!firstname.trim()) {
    return {
      code: "sign-up/firstname-missing",
      message: "Please enter your firstname.",
      target: "firstname",
    };
  }

  return true;
};
