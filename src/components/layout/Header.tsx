"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { MAIN_NAV } from "@/config/navigation";
import { EMERGENCY_PHONE, telHref } from "@/config/site";
import { departments } from "@/data/departments";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { SearchDialog } from "./SearchDialog";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the departments dropdown on route change
  useEffect(() => {
    setDeptOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-surface/90 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop navigation */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {MAIN_NAV.map((item) => {
            if (item.label === "Departments") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setDeptOpen(true)}
                  onMouseLeave={() => setDeptOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={deptOpen}
                    aria-haspopup="true"
                    onClick={() => setDeptOpen((v) => !v)}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        deptOpen && "rotate-180"
                      )}
                      aria-hidden
                    />
                  </button>

                  {deptOpen ? (
                    <div className="absolute left-1/2 top-full w-[min(92vw,42rem)] -translate-x-1/2 pt-3">
                      <div className="animate-fade-up rounded-2xl border border-border bg-surface p-3 shadow-lift">
                        <div className="grid grid-cols-2 gap-1">
                          {departments.map((dept) => {
                            const Icon = dept.icon;
                            return (
                              <Link
                                key={dept.slug}
                                href={`/departments/${dept.slug}`}
                                className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-surface-muted"
                              >
                                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                  <Icon className="h-[1.15rem] w-[1.15rem]" />
                                </span>
                                <span className="flex flex-col">
                                  <span className="text-sm font-semibold text-foreground">
                                    {dept.name}
                                  </span>
                                  {dept.description ? (
                                    <span className="line-clamp-1 text-xs text-muted">
                                      {dept.description}
                                    </span>
                                  ) : null}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="mt-2 border-t border-border pt-2">
                          <Link
                            href="/departments"
                            className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
                          >
                            View all departments
                            <ChevronDown className="h-4 w-4 -rotate-90" aria-hidden />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search the site"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-surface-muted hover:text-primary sm:inline-flex"
          >
            <Search className="h-5 w-5" />
          </button>

          <Button
            href={telHref(EMERGENCY_PHONE)}
            variant="emergency"
            size="sm"
            external
            className="hidden sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Emergency
          </Button>

          <Button
            href="/appointment"
            size="sm"
            className="hidden md:inline-flex"
          >
            Book Appointment
          </Button>

          <MobileMenu onSearch={() => setSearchOpen(true)} />
        </div>
      </div>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
