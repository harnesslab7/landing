import type { CSSProperties } from "react";

// Small stroke icons used by the chat mockups and cards. Paths come from the
// approved design artboard; all render as 16px `.mi` icons unless overridden.

function Mi({
  paths,
  className,
  style,
}: {
  paths: string[];
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg className={className ?? "mi"} viewBox="0 0 24 24" aria-hidden="true" style={style}>
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

export function FileIcon(props: { style?: CSSProperties }) {
  return (
    <Mi
      className="mi"
      style={props.style}
      paths={[
        "M14 3v4a1 1 0 0 0 1 1h4",
        "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2",
      ]}
    />
  );
}

export function FolderIcon(props: { style?: CSSProperties }) {
  return (
    <Mi
      className="mi"
      style={props.style}
      paths={[
        "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",
      ]}
    />
  );
}

export function RouteIcon(props: { style?: CSSProperties }) {
  return (
    <Mi
      className="mi"
      style={props.style}
      paths={[
        "M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
        "M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4z",
        "M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5",
      ]}
    />
  );
}

export function ChevronIcon({ className }: { className?: string }) {
  return <Mi className={className ?? "mi"} paths={["M6 9l6 6l6 -6"]} />;
}

export function PlusIcon({ className, style }: { className?: string; style?: CSSProperties }) {
  return <Mi className={className ?? "mi"} style={style} paths={["M12 5l0 14", "M5 12l14 0"]} />;
}

export function SendArrowIcon() {
  return <Mi className="mi" paths={["M12 19V5", "M6 11l6 -6l6 6"]} />;
}

export function CopyIcon() {
  return (
    <Mi
      className="mi"
      paths={[
        "M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z",
        "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1",
      ]}
    />
  );
}

export function ThumbUpIcon() {
  return (
    <Mi
      className="mi"
      paths={[
        "M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3",
      ]}
    />
  );
}

export function ThumbDownIcon() {
  return (
    <Mi
      className="mi"
      paths={[
        "M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3",
      ]}
    />
  );
}

export function MicIcon({ className }: { className?: string }) {
  return (
    <Mi
      className={className ?? "mi"}
      paths={[
        "M9 5a3 3 0 0 1 6 0v5a3 3 0 0 1 -6 0z",
        "M5 10a7 7 0 0 0 14 0",
        "M8 21l8 0",
        "M12 17l0 4",
      ]}
    />
  );
}
