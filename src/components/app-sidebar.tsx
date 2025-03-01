import { Calendar, Plus, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [


  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
<Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel> Tab Tracker </SidebarGroupLabel>
        </SidebarGroup>

        <SidebarGroup>
        <SidebarGroupLabel asChild><span>Tabs</span></SidebarGroupLabel>
            <a href="/addTab">
              <SidebarGroupAction title="Add Tab">
                <Plus /> <span className="sr-only">Add Tab</span>
              </SidebarGroupAction>
            </a>
            <SidebarMenuSub>
            <SidebarMenuSubItem>

      <SidebarMenuSubButton>tab 1</SidebarMenuSubButton>
    </SidebarMenuSubItem>
    <SidebarMenuSubItem>
      <SidebarMenuSubButton>tab 2</SidebarMenuSubButton>
    </SidebarMenuSubItem>
    </SidebarMenuSub>
        </SidebarGroup>
        <SidebarGroup>
        {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>

  )
}
