import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import React from "react";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";

export default function LoginPage() {
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
        <Card className="w-full max-w-3xl p-8">
          <CardBody>
            Welcome to TabTracker!
            <p>
              <br />
            </p>
            <Form className="w-3xl" onSubmit={onSubmit}>
              <Input
                //isRequired
                //errorMessage="Please enter a valid email"
                label="Email/Username"
                labelPlacement="outside"
                name="email"
                type="email"
              />
              <Input
                label="Password"
                labelPlacement="outside"
                name="email"
                type="password"
              />
              <Button type="submit" variant="bordered">
                Submit
              </Button>
              {submitted && (
                <div className="text-smalll text-default-500">
                  You submitted:<code>{JSON.stringify(submitted)}</code>
                </div>
              )}
            </Form>
            <p className="mt-5 mb-1">Don't have an account?</p>
            <Button showAnchorIcon as={Link} href="/signup">
              Sign Up Here
            </Button>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
function useDisclosure(): { isOpen: any; onOpen: any; onOpenChange: any } {
  throw new Error("Function not implemented.");
}
