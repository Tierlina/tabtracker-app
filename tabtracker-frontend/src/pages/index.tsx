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
import { shouldProcessLinkClick } from "react-router-dom/dist/dom";

export default function LoginPage() {


  return (
    <DefaultLayout>
      <section className="flex flex-col items-left justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className="text-7xl mt-20 mb-10">Welcome to TabTracker!</h1>
          <Button
          showAnchorIcon
          as={Link}
          color="success"
          href="/login"
          variant="solid"
          >
            Login
          </Button>

        </div>
      </section>
    </DefaultLayout>
  );
}
function useDisclosure(): { isOpen: any; onOpen: any;onOpenChange: any; } {
  throw new Error("Function not implemented.");
}
