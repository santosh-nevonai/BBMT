import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HOSPITAL_NAME } from "@/config/site";

/**
 * Official BBMT brand mark (navy wordmark + gold tree of life).
 * A light variant (white wordmark) is used on dark backgrounds.
 */
export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "onDark";
}) {
  const src =
    variant === "onDark"
      ? "/images/logo-light.png"
      : "/images/logo-trimmed.png";

  return (
    <Link
      href="/"
      aria-label={`${HOSPITAL_NAME} — home`}
      className={cn(
        "inline-flex items-center transition-opacity hover:opacity-90",
        className
      )}
    >
      <Image
        src={src}
        alt={HOSPITAL_NAME}
        width={479}
        height={269}
        priority
        className="h-10 w-auto sm:h-11"
      />
    </Link>
  );
}
