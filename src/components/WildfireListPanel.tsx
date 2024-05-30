import { useDispatch, useSelector } from "react-redux";
import { Wildfire } from "../App";
import { RootState } from "../store/store";
import { useEffect, useMemo, useRef } from "react";
import { FixedSizeList } from "react-window";
import {
  getSatelliteColor,
  getSatelliteConfidence,
} from "../utils/satelliteConf";
import { MapPanel } from "./MapPanel";
import { selectedChanged } from "../store/slices/wildfire/wildfireSlices";
import { Button, Typography } from "@mui/material";

export const WildfireListPanel = ({ wildfires }: { wildfires: Wildfire[] }) => {
  const { visibleConfidences } = useSelector(
    (state: RootState) => state.filters
  );
  const listRef = useRef<FixedSizeList>(null);
  const { selected } = useSelector((state: RootState) => state.wildfire);
  const dispatch = useDispatch();

  const filteredWildfires = useMemo(
    () =>
      wildfires.filter((item) =>
        visibleConfidences.includes(getSatelliteConfidence(item.sat, item.conf))
      ),
    [wildfires, visibleConfidences]
  );

  useEffect(() => {
    if (selected) {
      const selectedWildfire = filteredWildfires.findIndex(
        (item) => item.id === selected?.id
      );
      if (selectedWildfire) {
        listRef.current?.scrollToItem(selectedWildfire);
      }
    }
  }, [selected, filteredWildfires]);

  return (
    <MapPanel
      position={{ bottom: 10, right: 10 }}
      title={`${filteredWildfires.length} Focos encontrados`}
    >
      <FixedSizeList
        ref={listRef}
        height={500}
        itemCount={filteredWildfires.length}
        itemSize={50}
        width={400}
      >
        {({ index, style }) => {
          const item = filteredWildfires[index];
          return (
            <Button
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: "flex-start",
              }}
              variant={selected?.id === item.id ? "outlined" : "text"}
              style={style}
              key={item.id}
              onClick={() => dispatch(selectedChanged(item))}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: getSatelliteColor(item.sat, item.conf),
                }}
              ></div>
              <Typography>{item.id}</Typography>
            </Button>
          );
        }}
      </FixedSizeList>
    </MapPanel>
  );
};
