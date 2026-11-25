import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

import NavigationLink from "@/src/components/ui/NavigationLink";
import { Icon, LogoIcon } from "@/src/components/ui/Icon";
import { EIconNames } from "@/src/lib/icons";
import { Box, Typography } from "@mui/material";
import TeacherCard from "@/src/components/ui/TeacherCard";

const drawerWidth = 260;

export const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        boxSizing: "border-box",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          padding: "24px 16px",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        sx={{
          display: "flex",
          gap: "12px",
        }}
      >
        <LogoIcon />
        <Box>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontSize: "20px", fontWeight: "700", color: "#0F172A" }}
          >
            Lingua
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "700", fontSize: "8px", letterSpacing: "1.2px" }}
          >
            СТУДИЯ РЕПЕТИТОРА
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontSize: "10px",
            fontWeight: 700,
            margin: "44px 0px 0px 22px;",
          }}
        >
          МЕНЮ
        </Typography>
        <List>
          <NavigationLink
            link="/"
            icon={<Icon name={EIconNames.home} />}
            label="Дашборд"
          />
          <NavigationLink
            link="/classes"
            icon={<Icon name={EIconNames.schedule} />}
            label="Классы и расписание"
          />
          <NavigationLink
            link="/lessons"
            icon={<Icon name={EIconNames.lessonsLibrary} />}
            label="База уроков"
          />
          <NavigationLink
            link="/shop"
            icon={<Icon name={EIconNames.rewardShop} />}
            label="Магазин наград"
          />
          <NavigationLink
            link="/achievement"
            icon={<Icon name={EIconNames.achievement} />}
            label="Достижения"
          />
        </List>
      </Box>

      <TeacherCard
        name="Анна Петровна"
        position="CEO of Planet"
        chip="topRated"
      />
    </Drawer>
  );
};
