import { useEffect, useState } from "react";
import Globe from "react-globe.gl";

function GlobeComponent() {
  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
  }));

  const [polygonData, setPolygonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "/src/assets/ne_110m_admin_0_countries.geojson"
        );
        const countries = await response.json();

        const filteredData = countries.features.filter(
          (d: { properties: { ISO_A2: string } }) =>
            d.properties.ISO_A2 !== "AQ"
        );
        console.log(filteredData);
        setPolygonData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      showAtmosphere={false}
      polygonsData={polygonData}
      polygonCapColor={() => "rgba(255, 188, 0, 0.8)"}
      polygonAltitude={0.005}
      arcsData={arcsData}
      arcColor={() => "#ffbc00"}
      arcDashGap={() => Math.random()}
      arcDashAnimateTime={() => Math.random() * 4000 + 500}
      backgroundColor="#333"
    />
  );
}

export default GlobeComponent;
