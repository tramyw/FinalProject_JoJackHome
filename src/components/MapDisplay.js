import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconUrl from "../arrow.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import { Button } from "@mui/material";

const customIcon = L.icon({
  iconUrl,
  shadowUrl,
  iconSize: [45, 45],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
});

function MapDisplay() {
  const markers = [
    {
      position: [22.37368405, 114.11026608000796],
      address: "Superluck Industrial Centre Phase 2",
      org: "香港拯救貓狗協會HKSCDA",
      name: "realdogdog",
      species: "柴犬",
      gender: "男仔",
      age: "4歲",
      phone: 21800000,
      characteristics: " 藍色珠鏈",
      lost_location: "8月30日 晚上10:30在大坪走失, $2000 REWARD薄酬",
      src: "https://www.hkscda.com/img/logo.jpg",
    },
    {
      position: [22.36330235264489, 114.13267672061922],
      address: "Millennium Trade Centre",
      org: "Generation HK",
      name: "FEWD-9",
      species: "哈士奇",
      gender: "男仔",
      age: "4歲",
      phone: 21800000,
      characteristics: " 無頸帶, 長尾, 四隻腳都係白襪",
      lost_location: "係西環邨西苑台走失",
      src: "https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxNzI4NjQyLXdpa2ltZWRpYS1pbWFnZS1rb3dyMjB5cy5qcGc.jpg",
    },
    {
      position: [22.363550400409355, 114.13270354270936],
      address: "Millennium Trade Centre",
      org: "Generation HK",
      name: "Jo2",
      species: "標準貴賓犬",
      gender: "男仔",
      age: "4歲",
      phone: 21800000,
      characteristics: " 無頸帶, 長尾, 四隻腳都係白襪",
      lost_location: "係西環邨西苑台走失",
      src: "https://assets-metrostyle.abs-cbn.com/prod/metrostyle/attachments/e0ca6539-d432-4177-a385-7b0259ca0041_z%20giant%20poodles%202.jpg",
    },
    {
      position: [22.363371806063473, 114.13241922855379],
      address: "Millennium Trade Centre",
      org: "Generation HK",
      name: "Jack",
      species: "柴犬",
      gender: "男仔",
      age: "4歲",
      phone: 21800000,
      characteristics: " 藍色珠鏈",
      lost_location: "8月30日 晚上10:30在大坪走失, $2000 REWARD薄酬",
      src: "https://i.redd.it/6gf7xrn1dxk61.jpg",
    },
  ];
  function ImgaePopUp({
    src,
    name,
    phone,
    age,
    characteristics,
    lost_location,
    species,
  }) {
    return (
      <div>
        <img src={src} alt="dog" style={{ width: "150px" }} />
        <h3>
          {name}, {age}, {species}
        </h3>
        <h4>
          {" "}
          {characteristics}
          <span>{lost_location}</span>
        </h4>

        <p>{`Call me : ${phone}`}</p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <MapContainer
        style={{ width: "700px", height: "500px" }}
        center={[22.37071382920351, 114.121470451355]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={customIcon}>
            <Popup>
              <ImgaePopUp
                src={marker.src}
                name={marker.name}
                phone={marker.phone}
                characteristics={marker.characteristics}
                age={marker.age}
                lost_location={marker.lost_location}
                species={marker.species}
              />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div>
        <h1 style={{ alignSelf: "center" }}>有狗狗貓貓走失咗? 搵禾地報料 ⬇️</h1>
        <Button>報料熱線</Button>
      </div>
    </div>
  );
}

export default MapDisplay;
