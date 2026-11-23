import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import NavigationLink from "@/src/components/ui/NavigationLink";
import { Icon } from "@/src/components/ui/Icon";
import { EIconNames } from "@/src/lib/icons";

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
      <List>
        <NavigationLink
          link="/dashboard"
          icon={<Icon name={EIconNames.home} />}
          label="Дашбоард"
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
    </Drawer>
  );
};
