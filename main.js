// import "ol/ol.css";
import GeoTIFF from "ol/source/GeoTIFF";
import Map from "ol/Map";
import TileLayer from "ol/layer/WebGLTile";

const source = new GeoTIFF({
  sources: [
    {
      url: "https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/2020/S2A_36QWD_20200701_0_L2A/TCI.tif",
    },
  ],
});

const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: source,
    }),
  ],
  view: source.getView(),
});
