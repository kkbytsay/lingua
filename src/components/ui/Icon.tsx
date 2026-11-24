import { EIconNames } from "@/src/lib/icons";
import { ICONS } from "@/src/shared/icons";
import { Box } from "@mui/material";

interface IconProps {
  name: EIconNames;
  className?: string;
}

export function Icon({ name }: IconProps) {
  const SvgIcon = ICONS[name];
  return <SvgIcon />;
}

export function LogoIcon() {
  const SvgIcon = ICONS[EIconNames.logo];

  return (
    <Box
      sx={{
        display: "inline-flex",
      }}
    >
      <SvgIcon />
    </Box>
  );
}
