import { useParams, Link } from "react-router-dom";
import HKSCDA_info from "../HKSCDA_animal_info.json";
import { Button, Stack } from "@mui/material";
import Navbar from "../Navbar";
import Footer from "./Footer";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageG from "./ImageGallery";

function AnimalsProfile() {
  let { animal_Name } = useParams();
  let unfilteredInfo = [];
  for (let keys in HKSCDA_info) {
    unfilteredInfo.push(...HKSCDA_info[keys]);
  }
  let animalInfo = unfilteredInfo.filter((el) => el.name === animal_Name);
  return (
    <div>
      <div className="containerA">
        <Navbar />
        <Stack direction="row" justifyContent="space-evenly" spacing={3}>
          <div>
            <ImageG data={animalInfo} />
          </div>
          <div>
            <h1>{animalInfo[0].name}</h1>
            <p>
              我係{animalInfo[0].gender}仔 {animalInfo[0].specis}, 我的歲數是{" "}
              {animalInfo[0].age}
            </p>
            <p>
              我現時
              {
                <em>
                  <span style={{ textDecoration: "underline" }}>
                    {animalInfo[0].chipped}
                  </span>
                </em>
              }
              晶片, 而且
              <em>
                <span style={{ textDecoration: "underline" }}>
                  {animalInfo[0].castrated}
                </span>
              </em>
              ~
            </p>
            <br></br>
            <br></br>
            <p>
              性別: {animalInfo[0].gender}({animalInfo[0].castrated})
            </p>
            <p>歲數: {animalInfo[0].age}</p>
            <p>晶片: {animalInfo[0].chipped}</p>
            <br></br>
            <br></br>
            <div>
              <p>狗狗準備好返屋企，你準備好未?</p>
              <h3>領養前，停一停，諗一諗</h3>
            </div>
            <Stack spacing={2}>
              <a href={`${animalInfo[0].href}`}>
                <Button variant="contained">去了解我更多</Button>
              </a>
              <Link
                to={{
                  pathname: `/Category_Page`,
                }}
              >
                <Button variant="contained">返回上一頁</Button>
              </Link>
            </Stack>
          </div>
          <div></div>
        </Stack>
        <br></br>
        <br></br>
      </div>

      <Footer />
    </div>
  );
}

export default AnimalsProfile;
