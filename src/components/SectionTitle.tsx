
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  centered = true,
  className,
  titleClassName,
  subtitleClassName,
}: SectionTitleProps) => {
  return (
    <div className={cn(centered && "text-center", className)}>
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold font-serif relative inline-block pb-3",
        "after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:bg-church-red",
        centered ? "after:right-0 after:mx-auto" : "after:w-24",
        titleClassName
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-gray-600 max-w-2xl", centered && "mx-auto", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
