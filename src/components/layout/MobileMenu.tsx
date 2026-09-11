"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { MAIN_NAV } from "@/config/navigation";
import { EMERGENCY_PHONE, telHref } from "@/config/site";
import { departments } from "@/data/departments";
import { Button } from "@/components/ui/Button";

export function MobileMenu({ onSearch }: { onSearch: () => void }) {
  const [open, setOpen] = useState(false);
  const [deptExpanded, setDeptExpanded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-surface-muted lg:hidden"
      >
        <Menu className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-primary-dark/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.nav
              aria-label="Mobile"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto bg-surface shadow-lift"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <span className="font-display text-sm font-bold">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted hover:bg-surface-muted hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-1 flex-col gap-1 px-3 py-4">
                {MAIN_NAV.map((item) => {
                  if (item.label === "Departments") {
                    return (
                      <div key={item.href}>
                        <button
                          type="button"
                          onClick={() => setDeptExpanded((v) => !v)}
                          aria-expanded={deptExpanded}
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-foreground hover:bg-surface-muted"
                        >
                          Departments
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              deptExpanded && "rotate-180"
                            )}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {deptExpanded ? (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22 }}
                              className="overflow-hidden pl-2"
                            >
                              {departments.map((dept) => (
                                <li key={dept.slug}>
                                  <Link
                                    href={`/departments/${dept.slug}`}
                                    className="block rounded-lg px-4 py-2.5 text-sm text-muted hover:bg-surface-muted hover:text-primary"
                                  >
                                    {dept.name}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          ) : null}
                        </AnimatePresence>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-4 py-3 text-base font-medium text-foreground hover:bg-surface-muted"
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    onSearch();
                  }}
                  className="mt-1 flex items-center gap-2 rounded-xl px-4 py-3 text-base font-medium text-foreground hover:bg-surface-muted"
                >
                  <Search className="h-5 w-5" />
                  Search
                </button>
              </div>

              <div className="flex flex-col gap-3 border-t border-border p-5">
                <Button href="/appointment" size="lg" className="w-full">
                  Book Appointment
                </Button>
                <Button
                  href={telHref(EMERGENCY_PHONE)}
                  external
                  variant="emergency"
                  size="lg"
                  className="w-full"
                >
                  <Phone className="h-4 w-4" />
                  Emergency
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
