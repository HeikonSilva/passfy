import type * as React from 'react'
import {
  Binoculars,
  Cloud,
  Dice5,
  FileUp,
  HelpCircleIcon,
  LayoutDashboardIcon,
  SettingsIcon,
} from 'lucide-react'
import Passfy from '@/assets/logo.svg'

import { NavMain } from '@/components/layout/nav-main'
import { NavSecondary } from '@/components/layout/nav-secundary'
import { NavUser } from '@/components/layout/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

import sidebarData from '@/api/routes-data.json'

const iconMap = {
  LayoutDashboardIcon,
  Dice5,
  Cloud,
  Binoculars,
  FileUp,
  SettingsIcon,
  HelpCircleIcon,
}

// Process the data to include actual icon components
const processedData = {
  ...sidebarData,
  navMain: sidebarData.navMain.map((item) => ({
    ...item,
    icon: iconMap[item.icon as keyof typeof iconMap],
  })),
  navSecondary: sidebarData.navSecondary.map((item) => ({
    ...item,
    icon: iconMap[item.icon as keyof typeof iconMap],
  })),
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <img src={Passfy} />
                <span className="text-base font-semibold">Passfy</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={processedData.navMain} />
        <NavSecondary items={processedData.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={processedData.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
