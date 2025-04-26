import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '../ui/breadcrumb'
import { NavLink, useLocation } from 'react-router-dom'

type NavItem = {
  title: string
  url: string
  icon?: string // Optional since we're now using navMain items
}

export function SiteHeader({ items }: { items: NavItem[] }) {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  // Find matching item from nav items
  const getCurrentPageTitle = (path: string) => {
    const matchingItem = items.find((item) => item.url === `/${path}`)
    return matchingItem?.title || path
  }

  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <NavLink to="/">Main</NavLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {pathnames.map((value, index) => {
              const url = `/${pathnames.slice(0, index + 1).join('/')}`
              const isLast = index === pathnames.length - 1

              return (
                <BreadcrumbItem key={url}>
                  <BreadcrumbLink
                    asChild
                    aria-current={isLast ? 'page' : undefined}
                  >
                    <NavLink to={url}>{getCurrentPageTitle(value)}</NavLink>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              )
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  )
}
