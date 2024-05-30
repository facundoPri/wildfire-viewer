import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { MapBox } from "./MapBox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const MapPanel = ({
  position,
  title,
  children,
}: {
  position?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
  title: string;
  children: React.ReactNode;
}) => (
  <MapBox position={position}>
    <Accordion
      disableGutters
      elevation={0}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  </MapBox>
);
