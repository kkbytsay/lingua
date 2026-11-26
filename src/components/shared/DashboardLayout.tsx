import SearchField from "@/src/components/shared/SearchField";
import { Sidebar } from "@/src/components/shared/Sidebar";
import { Box } from "@mui/material";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Box
        component="aside"
        sx={{
          width: 240,
          flexShrink: 0,
          borderRight: "1px solid #E2E8F0",
        }}
      >
        <Sidebar />
      </Box>

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Box
          component="header"
          sx={{
            height: 64,
            flexShrink: 0,
            borderBottom: "1px solid #E2E8F0",
          }}
        >
          <SearchField />
        </Box>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
