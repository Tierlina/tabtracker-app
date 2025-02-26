import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import React from "react";
import { JSX } from "react/jsx-runtime";
import { EyeClosed } from 'lucide-react';
import {Eye} from 'lucide-react'



export default function SignupPage() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [isVisibleConfirm, setIsVisibleConfirm] = React.useState(false);

  const toggleVisibilityConfirm = () => setIsVisibleConfirm(!isVisibleConfirm);


  const [submitted, setSubmitted] = React.useState<Record<string,string> | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = Object.fromEntries(formData) as Record<string, string>;
    setSubmitted(data);
    window.location.href = "/dashboard"

  }
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={"mb-8"}>Sign Up</h1>
          <Card className="w-full max-w-3xl p-8">
            <CardBody>
              <Form  
              onSubmit={onSubmit}
              className="mr-20 ml-20"
              >
              <Input
                  isRequired
                  errorMessage="Please enter a valid email"
                  label="Email/Username"
                  className="max-w-xs"
                  labelPlacement="outside"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  />
                  <Input
                  label="Username"
                  labelPlacement="outside"
                  name="username"
                  placeholder="Enter your username"
                  type="text"
                  />
                  <Input
                    className="max-w-xs"
                    endContent={
                      <button
                        aria-label="toggle password visibility"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <Eye />                        ) : (
                          <EyeClosed/>
                        )}
                      </button>
                    }
                    label="Password"
                    labelPlacement="outside"
                    placeholder="Enter your password"
                    type={isVisible ? "text" : "password"}                  />
                  <Input
                    className="max-w-xs"
                    endContent={
                      <button
                        aria-label="toggle password visibility"
                        type="button"
                        onClick={toggleVisibilityConfirm}
                      >
                        {isVisibleConfirm ? (
                          <Eye />                        ) : (
                          <EyeClosed/>
                        )}
                      </button>
                    }
                    label="Confirm Password"
                    labelPlacement="outside"
                    placeholder="Enter your password again"
                    type={isVisible ? "text" : "password"}                  />
                  <Button
                   type="submit"
                    variant="bordered"
                    className = "mt-2"
                    >
                    Submit
                  </Button>
                  {submitted && (
                    <div className="text-smalll text-default-500 ">
                      You submitted:<code>{JSON.stringify(submitted)}

                      </code>
                    </div>
                  )}
                
              </Form>
            </CardBody>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}
function useDisclosure(): { isOpen: any; onOpen: any;onOpenChange: any; } {
  throw new Error("Function not implemented.");
}
function validate() {
  throw new Error("Function not implemented.");
}

