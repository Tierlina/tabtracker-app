import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import React from "react";
import {Form} from "@heroui/form";
import {  Drawer,  DrawerContent,  DrawerHeader,  DrawerBody,  DrawerFooter} from "@heroui/drawer";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Input } from "@heroui/input";

export default function IndexPage() {
  const [submitted, setSubmitted] = React.useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data);
  }
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <Card>
            <CardBody>
              Welcome to TabTracker!
              <p><br></br></p>
              <Form className= "w-full max-w-L" onSubmit={onSubmit}>
                <Input
                  isRequired
                  errorMessage="Please enter a valid email"
                  label="Email"
                  labelPlacement="outside"
                  name="email"
                  placeholder="enter your email"
                  type="email"
                  />
                  <Button type="submit" variant="bordered">
                    Submit
                  </Button>
                  {submitted && (
                    <div className="text-smalll text-default-500">
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
