import { Paper } from "@mui/material";

export const MapBox = ({
  position,
  children,
}: {
  position?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
  children: React.ReactNode;
}) => (
  <Paper
    sx={{
      p: 1,
      position: "absolute",
      zIndex: 1000,
      overflow: "hidden",
      ...position,
    }}
  >
    {children}
  </Paper>
);
