"use client";

import Link from "next/link";
import { useState } from "react";

interface ChildItem {
  label: string;
  href: string;
}

interface ExpandableNavItemProps {
  label: string;
  children: ChildItem[];
}

export function ExpandableNavItem({ label, children }: ExpandableNavItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 text-zinc-800 dark:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
      >
        <span className="font-medium">{label}</span>
        <span className="text-zinc-400 transition-transform duration-200" style={{ display: "inline-block", transform: open ? "rotate(90deg)" : "rotate(0deg)" }}>
          →
        </span>
      </button>

      {open && (
        <ul className="flex flex-col gap-2 mt-2 pl-4">
          {children.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center justify-between rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 text-zinc-800 dark:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
              >
                <span className="font-medium">{item.label}</span>
                <span className="text-zinc-400">→</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
