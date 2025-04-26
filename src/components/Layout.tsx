import { AppSidebar } from '@/components/layout/app-sidebar'
import { SiteHeader } from '@/components/layout/site-header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { Outlet } from 'react-router'
import sidebarData from '@/api/routes-data.json'

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader items={sidebarData.navMain} />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <Outlet />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
