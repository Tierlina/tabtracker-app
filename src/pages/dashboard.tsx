import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@heroui/button"
import { Card, CardBody } from "@heroui/card"
import { Link } from "lucide-react"
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
          <section className="w-full p-8 flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
          <h1>Dashboard</h1>
          <Card >
            <CardBody>
              <Button as="a" href="/addTab">
                <Link className="mr-2"/> Add Tab
              </Button>
            </CardBody>
          </Card>
      </section>

          <SidebarProvider>
        <AppSidebar />
        <main>
        <SidebarTrigger className="absolute left-100 top-0 h-16 w-16"/>
        {children}

        </main>

      </SidebarProvider>

      </>




  )
}

