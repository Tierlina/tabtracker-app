import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import React from "react";
import { EyeClosed } from "lucide-react";
import { Eye } from "lucide-react";

export default function SignupPage() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [isVisibleConfirm, setIsVisibleConfirm] = React.useState(false);

  const toggleVisibilityConfirm = () => setIsVisibleConfirm(!isVisibleConfirm);

  const [submitted, setSubmitted] = React.useState<Record<
    string,
    string
  > | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = Object.fromEntries(formData) as Record<
      string,
      string
    >;

    setSubmitted(data);
    window.location.href = "/dashboard";
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <Card className="w-full p-8">
          <CardBody>
            Sign Up
            <Form onSubmit={onSubmit}>
              <Input
                isRequired
                errorMessage="Please enter a valid email"
                label="Email"
                labelPlacement="outside"
                name="email"
                type="email"
              />
                <Input
                isRequired
                errorMessage="Please enter your name"
                label="Name"
                labelPlacement="outside"
                name="Name"
                type="text"
              />
              <Input
                label="Username"
                labelPlacement="outside"
                name="username"
                type="text"
              />
              <Input
                isRequired
                errorMessage="Please enter a password"
                endContent={
                  <button
                    aria-label="toggle password visibility"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? <Eye /> : <EyeClosed />}
                  </button>
                }
                label="Password"
                labelPlacement="outside"
                type={isVisible ? "text" : "password"}
              />
              <Input
                //className="max-w-xs"
                isRequired
                errorMessage="Please enter a password"
                endContent={
                  <button
                    aria-label="toggle password visibility"
                    type="button"
                    onClick={toggleVisibilityConfirm}
                  >
                    {isVisibleConfirm ? <Eye /> : <EyeClosed />}
                  </button>
                }
                label="Confirm Password"
                labelPlacement="outside"
                type={isVisible ? "text" : "password"}
              />
              <Button className="mt-4" type="submit" variant="bordered">
                Submit
              </Button>
              {submitted && (
                <div className="text-smalll text-default-500 ">
                  You submitted:<code>{JSON.stringify(submitted)}</code>
                </div>
              )}
            </Form>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

// function validate() {
//   throw new Error("Function not implemented.");
// }
