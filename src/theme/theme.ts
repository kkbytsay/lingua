"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    text: {
      primary: "#64748B",
    },
    secondary: {
      main: "#4F46E5",
      light: "#EEF2FF",
    },
  },
  typography: {
    fontFamily: "var(--font-inter), sans-serif",
    fontWeightRegular: 400,
    body1: {
      fontSize: "10px",
      lineHeight: "14px", // или 1.4
      fontWeight: 400,
      letterSpacing: 0,
      color: "#64748B",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "10px",
          lineHeight: "14px",
          fontWeight: 400,
          letterSpacing: 0,
          color: "#64748B",
        },
      },
    },
    MuiListItem: {
      defaultProps: {
        disablePadding: true, // Убираем лишние отступы по умолчанию, если внутри ListItemButton
      },
      styleOverrides: {
        root: {
          marginBottom: "4px",
        },
      },
    },

    // Настройка интерактивной кнопки ListItemButton
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          padding: "12px 16px",
          transition: "all 0.2s ease-in-out",
          borderRadius: "8px",
          "& svg": {
            color: "#64748B",
            fill: "#64748B",
          },
          "&:hover": {
            backgroundColor: "#EEF2FF",
            "& svg": {
              color: "#4F46E5",
              fill: "#4F46E5",
            },
            "& .MuiListItemText-primary": {
              color: "#4F46E5",
            },
          },
        },
      },
    },

    // Настройка текста внутри пункта списка
    MuiListItemText: {
      defaultProps: {
        disableTypography: false,
      },
      styleOverrides: {
        primary: {
          fontSize: "14px", // Можно задать свой размер для меню
          fontWeight: "600",
        },
      },
    },
  },
});
