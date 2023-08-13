import { useBreakpoint } from "@chakra-ui/react";

const isMobile = (breakpoint: string | undefined) => {
  return breakpoint === "base" || breakpoint === "sm" || breakpoint === "md";
};

export const useIsMobile = () => {
  const breakpoint = useBreakpoint();
  return isMobile(breakpoint);
};
