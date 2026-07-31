import * as React from "react";
import { cn } from "@/lib/utils";

function Timeline({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline"
      className={cn("relative", className)}
      {...props}
    />
  );
}

function TimelineItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-item"
      className={cn("group relative pb-6 pl-12 last:pb-0", className)}
      {...props}
    />
  );
}

function TimelineConnector({ className }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="timeline-connector"
      className={cn(
        "absolute top-8 left-4 h-[calc(100%-2rem)] w-px -translate-x-1/2 bg-border group-last:hidden",
        className,
      )}
    />
  );
}

function TimelineIndicator({
  className,
  icon: Icon,
  ...props
}: React.ComponentProps<"span"> & {
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <span
      data-slot="timeline-indicator"
      className={cn(
        "absolute top-0 left-0 flex h-8 w-8 items-center justify-center rounded-full border bg-background",
        className,
      )}
      {...props}
    >
      {Icon && <Icon className="size-3.5 text-muted-foreground" />}
    </span>
  );
}

export { Timeline, TimelineConnector, TimelineIndicator, TimelineItem };
