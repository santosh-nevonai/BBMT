import Link from "next/link";
import { Home, Stethoscope, Phone } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { EMERGENCY_PHONE, telHref } from "@/config/site";

export default function NotFound() {
  return (
    <section className="section bg-surface-muted">
      <Container size="narrow" className="flex flex-col items-center gap-6 text-center">
        <span className="font-display text-7xl font-bold text-primary/20">404</span>
        <h1 className="text-3xl font-semibold sm:text-4xl">Page not found</h1>
        <p className="max-w-md text-muted">
          The page you&apos;re looking for may have moved or no longer exists.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/">
            <Home className="h-4 w-4" />
            Back to Home
          </Button>
          <Button href="/departments" variant="outline">
            <Stethoscope className="h-4 w-4" />
            Browse Departments
          </Button>
        </div>
        <Link
          href={telHref(EMERGENCY_PHONE)}
          className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-emergency-dark hover:underline"
        >
          <Phone className="h-4 w-4" />
          Emergency? Call our 24/7 helpline
        </Link>
      </Container>
    </section>
  );
}
