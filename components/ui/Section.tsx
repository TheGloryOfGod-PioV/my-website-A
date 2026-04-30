import Container from "./Container";
import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  align?: "left" | "center";
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  containerClassName,
  align = "left",
}: Props) {
  return (
    <section
      id={id}
      className={cn("py-24 sm:py-28 lg:py-36", className)}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <Container className={containerClassName}>
        {(eyebrow || title || description) && (
          <header
            className={cn("mb-12 lg:mb-20", align === "center" && "mx-auto max-w-3xl text-center")}
          >
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand sm:text-sm">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                id={id ? `${id}-title` : undefined}
                className="mt-4 max-w-5xl text-4xl font-bold tracking-tight text-gray-900 text-balance sm:text-5xl lg:text-6xl"
              >
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
