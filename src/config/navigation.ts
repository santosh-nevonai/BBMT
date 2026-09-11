export type NavItem = {
  label: string;
  href: string;
};

/** Primary header navigation. */
export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Departments", href: "/departments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Facilities", href: "/facilities" },
  { label: "Contact", href: "/contact" },
];

/** Footer link groups. */
export const FOOTER_NAV: { title: string; links: NavItem[] }[] = [
  {
    title: "Hospital",
    links: [
      { label: "About", href: "/about" },
      { label: "Departments", href: "/departments" },
      { label: "Doctors", href: "/doctors" },
      { label: "Facilities", href: "/facilities" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Patient Care",
    links: [
      { label: "Book Appointment", href: "/appointment" },
      { label: "Emergency", href: "/emergency" },
      { label: "Patient Information", href: "/patient-information" },
      { label: "Health Library", href: "/health-library" },
    ],
  },
  {
    title: "Departments",
    links: [
      { label: "General Medicine", href: "/departments/general-medicine" },
      {
        label: "Critical Care",
        href: "/departments/critical-care-emergency-medicine",
      },
      {
        label: "Surgery",
        href: "/departments/general-minimal-access-surgery",
      },
      {
        label: "Orthopedics",
        href: "/departments/orthopedics-trauma-surgery",
      },
      { label: "Pediatrics", href: "/departments/pediatrics-neonatology" },
      { label: "Cardiology", href: "/departments/cardiology" },
    ],
  },
];
