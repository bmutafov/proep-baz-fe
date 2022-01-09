import { useMediaQuery, useTheme } from "@mui/material";

const useIsMobile = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.down("sm"));

  return isDesktop;
};

export default useIsMobile;
