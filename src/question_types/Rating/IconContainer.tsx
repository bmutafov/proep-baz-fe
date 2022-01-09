import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { IconContainerProps } from "@mui/material/Rating";
import useIsMobile from "../../hooks/useIsMobile";

interface CustomIconsType {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
}

const FONT_SIZE_DESKTOP = 80;
const FONT_SIZE_MOBILE = 40;

export const getCustomIcons = (isMobile: boolean): CustomIconsType => ({
  1: {
    icon: (
      <SentimentVeryDissatisfiedIcon
        sx={{ fontSize: isMobile ? FONT_SIZE_MOBILE : FONT_SIZE_DESKTOP }}
      />
    ),
    label: "Very Dissatisfied",
  },
  2: {
    icon: (
      <SentimentDissatisfiedIcon
        sx={{ fontSize: isMobile ? FONT_SIZE_MOBILE : FONT_SIZE_DESKTOP }}
      />
    ),
    label: "Dissatisfied",
  },
  3: {
    icon: (
      <SentimentSatisfiedIcon
        sx={{ fontSize: isMobile ? FONT_SIZE_MOBILE : FONT_SIZE_DESKTOP }}
      />
    ),
    label: "Neutral",
  },
  4: {
    icon: (
      <SentimentSatisfiedAltIcon
        sx={{ fontSize: isMobile ? FONT_SIZE_MOBILE : FONT_SIZE_DESKTOP }}
      />
    ),
    label: "Satisfied",
  },
  5: {
    icon: (
      <SentimentVerySatisfiedIcon
        sx={{ fontSize: isMobile ? FONT_SIZE_MOBILE : FONT_SIZE_DESKTOP }}
      />
    ),
    label: "Very Satisfied",
  },
});

export function IconContainer(props: IconContainerProps) {
  const isMobile = useIsMobile();
  const { value, ...other } = props;

  return <span {...other}>{getCustomIcons(isMobile)[value].icon}</span>;
}
