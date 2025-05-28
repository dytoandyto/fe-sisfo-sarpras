import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionCards } from "@/components/section-cards"
// import { ChartAreaInteractive } from "@/components/chart-area-interactive"

export default function AdminDashboard() {
  return (

    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>

        <header className="flex h-16 items-center gap-2">

          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Admin Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Admin Panel</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
          <div className="px-4 lg:px-6">

          </div>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              // { name: "Item Unit", link: "/admin/itemunit" },
              // { name: "Items", link: "/admin/items" },
              // { name: "Categories", link: "/admin/categories" },
              // { name: "Register User", link: "/admin/users" },
              // { name: "Peminjaman", link: "/admin/peminjaman" },
              // { name: "Pengembalian", link: "/admin/pengembalian" },
              // { name: "Export Excel", link: "/admin/export/excel" },
              // { name: "Export PDF", link: "/admin/export/pdf" },
            ].map((item) => (
              <Link key={item.name} href={item.link}>
                <Card className="cursor-pointer hover:shadow-lg transition">
                  <CardHeader>
                    {/* <CardTitle>{item.name}</CardTitle> */}
                  </CardHeader>
                  <CardContent>
                    {/* <p>Manage {item.name.toLowerCase()} here</p> */}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>


        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
