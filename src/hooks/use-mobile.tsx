import * as React from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * Read breakpoint synchronously so the very first render already knows
 * whether we're on mobile. Prevents a one-tick flash where mobile users
 * see desktop animation values (larger y/x offsets, heavier effects).
 */
function getIsMobileSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth < MOBILE_BREAKPOINT;
}

export function useIsMobile() {
  // Initialise synchronously — no undefined / false flash on mobile
  const [isMobile, setIsMobile] = React.useState<boolean>(getIsMobileSnapshot);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    mql.addEventListener("change", onChange);
    // Re-sync in case a resize happened between render and effect
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}
