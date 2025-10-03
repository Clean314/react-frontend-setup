import React, { useRef, useEffect } from "react";
import "./Map.css";

const Map = ({ center, zoom, className, style }) => {
  const mapRef = useRef();

  useEffect(() => {
    // 이미 로드된 경우
    if (window.ol) {
      initMap();
      return;
    }

    // 동적으로 ol.js 스크립트 추가
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/ol@5.3.0/dist/ol.js";
    script.onload = () => {
      initMap();
    };
    document.body.appendChild(script);

    function initMap() {
      new window.ol.Map({
        target: mapRef.current,
        layers: [
          new window.ol.layer.Tile({
            source: new window.ol.source.OSM(),
          }),
        ],
        view: new window.ol.View({
          center: window.ol.proj.fromLonLat([center.lng, center.lat]),
          zoom: zoom,
        }),
      });
    }
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${className}`}
      style={style}
    ></div>
  );
};

export default Map;
