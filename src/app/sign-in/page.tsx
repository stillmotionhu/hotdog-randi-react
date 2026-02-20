"use client";

import { useState } from "react";

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
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignInFormSubmit = (): void => {
    setIsLoading(true);
  };

  return (
    <PageContainer isCentered>
      <Card>
        <CardContainer>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
          </CardHeader>

          <CardContent>
            <Form>
              <Input
                type="email"
                name="email"
                label="Email Address"
                autocomplete="email"
                required
                value={email}
                onValueChange={setEmail}
              />
              <Input
                type="password"
                name="password"
                label="Password"
                autocomplete="password"
                required
                value={password}
                onValueChange={setPassword}
              />
              <Button isLoading={isLoading} onClick={handleSignInFormSubmit}>
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
