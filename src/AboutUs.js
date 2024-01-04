import React from "react";
import Navbar from "./Navbar";
import Footer from "./components/Footer";
import "./AdoptionInfoPage.css";
import { Paper } from "@mui/material";

import { Button, CircularProgress, Stack } from "@mui/material";

const AboutUs = () => {
  return (
    <div className="container">
      <Navbar />

      <Stack direction="row" justifyContent="space-evenly" spacing={3}>
        <div>
          <h2 style={{ color: "#17383D" }}>關於我們</h2>
          <img
            src="https://images.unsplash.com/photo-1551730459-92db2a308d6a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us"
            style={{ width: "300px", height: "500px" }}
          />
        </div>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ width: "400px", height: "600px" }}
        >
          <div>
            <div style={{ color: "#A94A52" }}>
              歡迎來到祖積家， 這是領養寵物的最佳目的地！
            </div>
            <div style={{ color: "#6E6E6E" }}>
              祖積家是一個革命性的網路平臺，匯集來多個香港動物協會及組織的待領養寵物資訊，您只需要訪問祖積家就找到能完美的毛茸茸的寵物伴侶。
            </div>
            <br></br>
            <div style={{ color: "#6E6E6E" }}>
              我們是一群熱愛動物的人，我們希望能幫助流浪動物找到一個溫暖的家。我們的網站提供了各種寵物的資訊，包括品種、性格、健康狀況等，讓你可以根據自己的喜好和條件選擇最適合你的寵物。我們也提供了領養流程和注意事項，讓你可以順利地完成領養手續，並且給予你的新朋友最好的照顧。
            </div>
          </div>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="space-evenly" spacing={3}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ width: "400px", height: "600px" }}
        >
          <div>
            <div style={{ color: "#A94A52" }}>
              我們相信每一隻動物都有自己的個性和故事，都值得被愛和尊重。
            </div>
            <div style={{ color: "#6E6E6E" }}></div>
            <br></br>
            <div style={{ color: "#6E6E6E" }}>
              我們也會定期舉辦實體的領養活動，讓寵物和領養者可以面對面地互動。我們希望透過我們的平台，能夠減少流浪動物的數量，提高寵物的福利，並且創造更多幸福的家庭。如果你也想成為我們的一份子，歡迎你加入我們的領養大家庭！
            </div>
          </div>
        </Stack>
        <div>
          <img
            src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us"
            style={{ width: "400px", height: "500px" }}
          />
        </div>
      </Stack>
      <div
        className="logocontainer"
        style={{ backgroundColor: "#FFAEC9", height: "250px" }}
      >
        <a
          href="https://hkscda.com/adoption/instructions"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./icons/HKSCDA_logo.jpeg" className="logo" alt="HKSCDA" />
        </a>
        <a
          href="https://www.spca.org.hk/zh-hant/what-we-do/adoption/adoption-process/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./icons/HKSPCA_logo.jpeg" className="logo" alt="HKSPCA" />
        </a>

        <a
          href="https://www.hk-aac.org.hk/image/data/pdf/dogs.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./icons/HKAAC_logo.jpeg" className="logo" alt="HKAAC" />
        </a>

        <a
          href="https://drive.google.com/file/d/18i9IPSWbWwd1Jypv3uaN4T5wnualOCRB/view"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./icons/LAP_logo.jpeg" className="logo" alt="LAP" />
        </a>

        <a
          href="https://www.saa.org.hk/zh/service.php?id=1"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./icons/SAA_logo.jpeg" className="logo" alt="SAA" />
        </a>
      </div>
      <Stack direction="column" justifyContent="space-evenly" spacing={3}>
        <div>
          <h2 style={{ color: "#17383D" }}>聯絡我們</h2>
          <img
            src="https://images.unsplash.com/photo-1516007049085-2a9077b4b512?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact Us"
            style={{ height: "300px" }}
          />
        </div>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ width: "400px" }}
        >
          <div>
            <div style={{ color: "#A94A52" }}>電話：3500 7164</div>
            <div style={{ color: "#A94A52" }}>
              一般查詢：generationhk@generation.org
            </div>
            <div style={{ color: "#A94A52" }}>
              領養/走失查詢：communicationhk@generation.org
            </div>
          </div>
        </Stack>
      </Stack>
      <Footer />
    </div>
  );
};

export default AboutUs;
