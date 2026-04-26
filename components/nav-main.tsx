"use client";

import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

type Section = {
  title: string;
  items: NavItem[];
};

export function NavMain({ sections }: { sections: Section[] }) {
  return (
    <>
      {sections.map((section) => (
        <SidebarGroup key={section.title}>
          <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
          <SidebarMenu>
            {section.items.map((item) => (
              <SidebarMenuItem key={item.label}>
                {item.children?.length ? (
                  <Collapsible>
                    <SidebarMenuButton tooltip={item.label}>
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                    <CollapsibleTrigger
                      render={
                        <SidebarMenuAction className="data-[panel-open]:rotate-90" />
                      }
                    >
                      <ChevronRight />
                      <span className="sr-only">Toggle</span>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.children.map((child) => (
                          <SidebarMenuSubItem key={child.label}>
                            <SidebarMenuSubButton
                              render={<Link href={child.href} prefetch />}
                            >
                              <span>{child.label}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <SidebarMenuButton
                    tooltip={item.label}
                    render={<Link href={item.href || ""} prefetch />}
                  >
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  );
}
