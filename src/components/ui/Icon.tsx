import { EIconNames } from "@/src/lib/icons";
import { ICONS } from "@/src/shared/icons";

interface IconProps {
  name: EIconNames;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const SvgIcon = ICONS[name];
  return <SvgIcon className={className} />;
}
