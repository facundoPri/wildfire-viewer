import { useEffect, useMemo, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Popup, CircleMarker } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getSatelliteColor } from "../utils/satelliteConf";
import { selectedChanged } from "../store/slices/wildfire/wildfireSlices";
import { Wildfire } from "../App";

export const WildFireMarker = ({ item }: { item: Wildfire }) => {
  const dispatch = useDispatch();
  const { selected } = useSelector((state: RootState) => state.wildfire);
  const markerRef = useRef<L.Circle>(null);
  const eventHandlers = useMemo(
    () => ({
      click() {
        dispatch(selectedChanged(item));
      },
    }),
    [dispatch, item]
  );

  useEffect(() => {
    if (selected?.id === item.id) {
      markerRef.current?.openPopup();
    }
  }, [selected, item.id]);

  return (
    <CircleMarker
      ref={markerRef}
      key={item.id}
      center={[item.y, item.x]}
      pathOptions={{ color: getSatelliteColor(item.sat, item.conf) }}
      radius={5}
      eventHandlers={eventHandlers}
    >
      <Popup>
        <div>
          <h2>Wildfire</h2>
          <p>Confidence: {item.conf}</p>
          <p>Latitude: {item.y}</p>
          <p>Longitude: {item.x}</p>
          <p>Satellite: {item.sat}</p>
          <p>Date: {item.date}</p>
        </div>
      </Popup>
    </CircleMarker>
  );
};
