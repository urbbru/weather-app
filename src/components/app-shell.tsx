"use client";

import { useMemo, useState } from "react";
import { MENU_ITEMS } from "../../constants";
import Link from "next/link";

function Navigation() {
  const [transitionClass, setTransitionClass] = useState("max-h-0");
  const menuItemsRender = useMemo(
    () =>
      MENU_ITEMS.map((menuItem) => (
        <Link
          href={menuItem.href}
          onClick={() => setTransitionClass("max-h-0")}
          key={menuItem.href}
          className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
          aria-current="page"
        >
          {menuItem.label}
        </Link>
      )),
    []
  );

  const toggleMenu = () =>
    setTransitionClass((transitionClass) =>
      transitionClass === "max-h-screen" ? "max-h-0" : "max-h-screen"
    );

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                {menuItemsRender}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu"
              aria-expanded={transitionClass === "max-h-0" ? "false" : "true"}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open mobile menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`transition-all overflow-hidden ${transitionClass}`}
        id="mobile-menu"
      >
        <div className="flex flex-col space-y-2 px-2 pb-3 pt-2 sm:px-3">
          {menuItemsRender}
        </div>
      </div>
    </nav>
  );
}

export function AppShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full">
      <Navigation />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
