"use client";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";

interface IProps {
  icon: React.ReactNode;
  link: string;
  label: string;
}

function NavigationLink(props: IProps) {
  return (
    <ListItem disablePadding>
      <ListItemButton LinkComponent={Link} href={props.link}>
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
