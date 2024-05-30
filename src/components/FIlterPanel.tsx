import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { MapPanel } from "./MapPanel";
import {
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import {
  confidenceToggled,
  dateChanged,
  hourChanged,
} from "../store/slices/filters/filtersSlices";
import { Confidence, colorCodes } from "../utils/satelliteConf";

const dates = ["2023-01-01", "2023-01-02"];

export const FiltersPanel = () => {
  const dispatch = useDispatch();
  const { date, hour, visibleConfidences } = useSelector(
    (state: RootState) => state.filters
  );

  return (
    <MapPanel position={{ top: 10, left: 10 }} title="Filters">
      <Box sx={{ display: "flex", gap: 1 }}>
        <FormControl>
          <InputLabel>Date</InputLabel>
          <Select
            label={"Date"}
            value={date}
            onChange={(e) => dispatch(dateChanged(e.target.value as string))}
          >
            {dates.map((date) => (
              <MenuItem key={date} value={date}>
                {date}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Hour</InputLabel>
          <Select
            label={"Hour"}
            value={hour}
            onChange={(e) => dispatch(hourChanged(e.target.value as string))}
          >
            {Array.from({ length: 24 }, (_, i) =>
              i.toString().padStart(2, "0")
            ).map((hour) => (
              <MenuItem key={hour} value={hour}>
                {hour}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box>
        {Object.values(Confidence).map((conf) => (
          <Box
            key={conf}
            sx={{ display: "flex", gap: 1, alignItems: "center" }}
          >
            <Checkbox
              checked={visibleConfidences.includes(conf)}
              onChange={() => dispatch(confidenceToggled(conf))}
              sx={{
                color: colorCodes[conf],
                "&.Mui-checked": { color: colorCodes[conf] },
              }}
            />
            <Typography>{conf}</Typography>
          </Box>
        ))}
      </Box>
    </MapPanel>
  );
};
