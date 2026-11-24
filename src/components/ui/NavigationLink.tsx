"use client";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  icon: React.ReactNode;
  link: string;
  label: string;
}

function NavigationLink(props: IProps) {
  const pathname = usePathname();

  return (
    <ListItem disablePadding>
      <ListItemButton
        LinkComponent={Link}
        href={props.link}
        className={pathname === props.link ? "active" : ""}
      >
        <ListItemIcon
          sx={{
            "&:hover": {
              color: "secondary.main",
            },
          }}
        >
          {props.icon}
        </ListItemIcon>
        <ListItemText
          sx={{
            "&:hover": {
              color: "secondary.main",
            },
          }}
        >
          {props.label}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
}

export default NavigationLink;
