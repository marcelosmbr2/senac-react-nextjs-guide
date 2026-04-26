"use client";

import * as React from "react";
import { Command } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const sections = [
  {
    title: "Home",
    items: [{ label: "Introdução", href: "/" }],
  },
  {
    title: "Fundamentos do React",
    items: [
      { label: "O que é React?", href: "/react" },
      { label: "JSX", href: "/react/jsx" },
      {
        label: "Components",
        children: [
          { label: "Component", href: "/react/components" },
          { label: "Props", href: "/react/components/props" },
          { label: "Children", href: "/react/components/children" },
        ],
      },
      {
        label: "Hooks",
        children: [
          { label: "useState", href: "/react/hooks/use-state" },
          { label: "useEffect", href: "/react/hooks/use-effect" },
          { label: "useRef", href: "/react/hooks/use-ref" },
        ],
      },
      { label: "Context API", href: "/react/context" },
      {
        label: "Exemplos",
        children: [
          { label: "Formulário", href: "/react/examples/form" },
          { label: "Todo List", href: "/react/examples/todo-list" },
          { label: "Tabela", href: "/react/examples/table" },
        ],
      },
    ],
  },
  {
    title: "Fundamentos do Next.js",
    items: [
      { label: "O que é Next.js?", href: "/nextjs" },
      { label: "App Router", href: "/nextjs/app-router" },
      { label: "Server Components", href: "/nextjs/server-side" },
      { label: "Client Components", href: "/nextjs/client-side" },
      { label: "Fetch & Cache", href: "/nextjs/fetch-cache" },
      { label: "Otimizações", href: "/nextjs/optimizations" },
    ],
  },
  {
    title: "Estilização",
    items: [
      { label: "Tailwind CSS", href: "/styling/tailwind-css" },
      { label: "Shadcn UI", href: "/styling/shadcn-ui" },
    ],
  },
  {
    title: "Fetch Api",
    items: [
      {
        label: "Fetch Api",
        children: [
          { label: "Server Component", href: "/fetch-api/server-component" },
          { label: "Client Component", href: "/fetch-api/client-component" },
        ],
      },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="/" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <Command className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">Aprendendo</span>
                <span className="truncate text-xs">React & Next.js</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain sections={sections} />
      </SidebarContent>
    </Sidebar>
  );
}
