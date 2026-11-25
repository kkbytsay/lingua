"use client";

import { getInitials } from "@/src/lib/getInitials";
import {
  Avatar,
  Card,
  CardProps,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

interface IProps extends CardProps {
  name: string;
  position?: string;
  chip: string;
}
export default function TeacherCard({
  name,
  position,
  chip,
  ...cardProps
}: IProps) {
  return (
    //TODO: Change alt when add api call
    <Card
      sx={{
        boxSizing: "border-box",
        padding: "13px 16px 23px 16px",
        boxShadow: "none",
        borderRadius: "14px",
        background: "#F8FAFC",
        border: "1px solid #E9EEF5",
        marginTop: "auto",
      }}
    >
      <Stack direction="row" spacing={2}>
        <Avatar
          alt="Random avatar"
          sx={{ width: 36, height: 36, bgcolor: "#4F46E5" }}
        >
          {getInitials(name)}
        </Avatar>
        <Stack direction="column" spacing={0.5}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body1">{position}</Typography>
          {chip && (
            <Chip
              sx={{
                height: "auto", // убирает стандартную фиксированную высоту MUI (24px/32px), чтобы шрифт 7.5px смотрелся аккуратно
                borderRadius: "9px",
                background: "#EEF2FF",
                boxSizing: "border-box",
                padding: "3px 6px",
                "& .MuiChip-label": {
                  fontSize: "7.5px",
                  fontWeight: 700,
                  lineHeight: "12px",
                  letterSpacing: "0.3px",
                  color: "#4F46E5",
                },
              }}
              label={chip}
              color="secondary"
            />
          )}
        </Stack>
      </Stack>
    </Card>
  );
}
