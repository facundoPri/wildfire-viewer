import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useGetWildfiresQuery } from "./store/api/apiSlice";
import { Typography } from "@mui/material";
import { getSatelliteConfidence } from "./utils/satelliteConf";
import { WildFireMarker } from "./components/WildfireMarker";
import { MapBox } from "./components/MapBox";
import { FiltersPanel } from "./components/FIlterPanel";
import { WildfireListPanel } from "./components/WildfireListPanel";

export interface Wildfire {
  id: string;
  x: number;
  y: number;
  conf: number;
  sat: string;
  date: string;
}

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

function App() {
  const { date, hour, visibleConfidences } = useSelector(
    (state: RootState) => state.filters
  );
  const { selected } = useSelector((state: RootState) => state.wildfire);
  const { data: wildfires } = useGetWildfiresQuery({ date, hour });
  const [map, setMap] = useState<L.Map | null>(null);

  useEffect(() => {
    if (selected) {
      map?.setView([selected.y, selected.x], 10);
    }
  }, [selected, map]);

  return (
    <div className="App">
      <MapContainer
        ref={setMap}
        style={{ height: "100vh", width: "100%" }}
        center={[-10, -58.38]}
        zoom={4}
        attributionControl={false}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {wildfires?.items.map(
          (item: Wildfire) =>
            visibleConfidences.includes(
              getSatelliteConfidence(item.sat, item.conf)
            ) && <WildFireMarker key={item.id} item={item} />
        )}
      </MapContainer>
      <MapBox position={{ top: 10, right: 10 }}>
        <Typography>
          Focos del {date} a las {hour}h
        </Typography>
      </MapBox>
      <FiltersPanel />
      <WildfireListPanel wildfires={wildfires?.items || []} />
    </div>
  );
}

export default App;
