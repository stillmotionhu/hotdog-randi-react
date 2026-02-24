"use client";

import { useAppDispatch, useAppSelector } from "@app/hooks";
import {
  handleSignUpFormOnChange,
  setSignUpConfirmPassword,
  setSignUpEmail,
  setSignUpFirstname,
  setSignUpLastname,
  setSignUpPassword,
  signUpFailed,
  signUpIdle,
  signUpLoading,
  SignUpState,
} from "@/features/sign-up/sign-up-slice";
import {
  validateSignUpFirstname,
  validateSignUpLastname,
  validateSignUpEmail,
  validateSignUpPassword,
  validateSignUpConfirmPassword,
} from "@/features/sign-up/actions/validations";
import { signUpUser } from "@/features/sign-up/actions/sign-up-user";
import { FormResponse } from "@/types/form-response";
import { FormError } from "@/types/form-error";

import { PageContainer } from "@/components/layout/page";
import {
  Card,
  CardContainer,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shared/card";
import { Form, FormSeparator } from "@/components/shared/form";
import { Input } from "@/components/shared/input";
import { Button } from "@/components/shared/button";
import { Paragraph } from "@/components/shared/paragraph";
import { Link } from "@/components/shared/link";
import { ContinueWithGoogleButton } from "@/components/features/auth/continue-with-google-button";

/**
 * STYLES FOR THE WHOLE PAGE
 */
import "./page.styles.scss";

export default function SignUpPage(): React.ReactNode {
  const { data, isSubmitButtonDisabled, status }: SignUpState = useAppSelector(
    (state) => state.signUp,
  );
  const dispatch = useAppDispatch();

  const handleSignUpFormSubmit = async (): Promise<FormResponse> => {
    return signUpUser(data);
  };

  const handleSignUpFormValidation = (
    targetName: string,
  ): FormError | boolean => {
    switch (targetName) {
      case "firstname":
        return validateSignUpFirstname(data);
      case "lastname":
        return validateSignUpLastname(data);
      case "email":
        return validateSignUpEmail(data);
      case "password":
        return validateSignUpPassword(data);
      case "confirmPassword":
        return validateSignUpConfirmPassword(data);
      default:
        return true;
    }
  };

  return (
    <PageContainer id="signUpPage" isCentered>
      <Card>
        <CardContainer>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
          </CardHeader>

          <CardContent>
            <Form
              onChange={() => dispatch(handleSignUpFormOnChange())}
              onSubmit={handleSignUpFormSubmit}
              setFormIdleStatus={() => dispatch(signUpIdle())}
              setFormLoadingStatus={() => dispatch(signUpLoading())}
              setFormFailedStatus={() => dispatch(signUpFailed())}
              validate={handleSignUpFormValidation}
            >
              <Input
                type="text"
                name="firstname"
                label="First Name"
                autocomplete="given-name"
                required
                value={data.firstname}
                onValueChange={(value: string) =>
                  dispatch(setSignUpFirstname(value))
                }
              />
              <Input
                type="text"
                name="lastname"
                label="Last Name"
                autocomplete="family-name"
                required
                value={data.lastname}
                onValueChange={(value: string) =>
                  dispatch(setSignUpLastname(value))
                }
              />
              <Input
                type="email"
                name="email"
                label="Email Address"
                autocomplete="email"
                required
                value={data.email}
                onValueChange={(value: string) =>
                  dispatch(setSignUpEmail(value))
                }
              />
              <Input
                type="password"
                name="password"
                label="Password"
                autocomplete="new-password"
                required
                value={data.password}
                onValueChange={(value: string) =>
                  dispatch(setSignUpPassword(value))
                }
              />
              <Input
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                autocomplete="new-password"
                required
                value={data.confirmPassword}
                onValueChange={(value: string) =>
                  dispatch(setSignUpConfirmPassword(value))
                }
              />
              <Button
                type="submit"
                isDisabled={isSubmitButtonDisabled}
                isLoading={status === "loading"}
                isFailed={status === "failed"}
              >
                Sign Up
              </Button>
            </Form>
          </CardContent>

          <CardFooter>
            <Paragraph>
              Already have an account?{" "}
              <Link href="/sign-in" color="primary" isUnderlinedOnHover>
                Sign In
              </Link>
            </Paragraph>

            <FormSeparator />

            <ContinueWithGoogleButton />
          </CardFooter>
        </CardContainer>
      </Card>
    </PageContainer>
  );
}
