"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import {
  SignInPayload,
  signInUserWithEmailAndPassword,
} from "@features/auth/actions";
import {
  handleFormOnChange,
  setSignInEmail,
  setSignInPassword,
  SignInState,
} from "@features/sign-in/sign-in-slice";

import { PageContainer } from "@components/layout/page";
import {
  Card,
  CardContainer,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@components/shared/card";
import { Form, FormSeparator } from "@components/shared/form";
import { Input } from "@components/shared/input";
import { Button } from "@components/shared/button";
import { Paragraph } from "@/components/shared/paragraph";
import { Link } from "@components/shared/link";
import { ContinueWithGoogleButton } from "@components/features/auth/continue-with-google-button";

export default function SignInPage(): React.ReactNode {
  const { data, isSubmitButtonDisabled, status, error }: SignInState =
    useAppSelector((state) => state.signIn);
  const dispatch = useAppDispatch();

  const handleSignInFormSubmit = (): void => {
    const payload: SignInPayload = {
      email: data.email,
      password: data.password,
    };

    dispatch(signInUserWithEmailAndPassword(payload));
  };

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <PageContainer isCentered>
      <Card>
        <CardContainer>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
          </CardHeader>

          <CardContent>
            <Form
              onChange={() => dispatch(handleFormOnChange())}
              onSubmit={handleSignInFormSubmit}
            >
              <Input
                type="email"
                name="email"
                label="Email Address"
                autocomplete="email"
                required
                value={data.email}
                onValueChange={(value: string) =>
                  dispatch(setSignInEmail(value))
                }
              />
              <Input
                type="password"
                name="password"
                label="Password"
                autocomplete="password"
                required
                value={data.password}
                onValueChange={(value: string) =>
                  dispatch(setSignInPassword(value))
                }
              />
              <Button
                type="submit"
                isDisabled={isSubmitButtonDisabled}
                isLoading={status === "loading"}
              >
                Sign In
              </Button>
            </Form>
          </CardContent>

          <CardFooter>
            <Paragraph>
              Don't have an account?{" "}
              <Link href="/sign-up" color="primary" isUnderlinedOnHover>
                Sign Up
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
