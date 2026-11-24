"use client";

import { getInitials } from "@/src/lib/getInitials";
import { Avatar, Card, CardProps, Stack } from "@mui/material";

interface IProps extends CardProps {
  name: string;
  position: string;
  chipType: string;
}
export default function TeacherCard({
  name,
  position,
  chipType,
  ...cardProps
}: IProps) {
  return (
    //TODO: Change alt when add api call
    <Card>
      <Stack direction="row" spacing={2}>
        <Avatar
          alt="Random avatar"
          sx={{ width: 36, height: 36, bgcolor: "#4F46E5" }}
        >
          {getInitials(name)}
        </Avatar>
        <Stack direction="column"></Stack>
      </Stack>
    </Card>
  );
}
