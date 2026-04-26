import logo from "@/assets/logo.png";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Ponchik Monchik"
      className={className}
      width={1264}
      height={848}
    />
  );
}
