import React from "react";
import "./AdoptionInfoPage.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Navbar from "./NewNavbar/AliceNavbar.js";
import ErrorTwoToneIcon from "@mui/icons-material/ErrorTwoTone";
import { Link } from "react-router-dom";
import Footer from "./components/Footer.js";

function AdoptionInfoPage() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <div className="content">
          <h1 className="adoptionheading">基本領養需知</h1>
          <ul>
            <li>
              領養前仔細考慮：領養動物是一個長期承諾，請確保您有足夠的時間、資源和能力來照顧動物的生活需求。
            </li>
            <li>
              選擇合適的寵物：根據您的生活方式、住房狀況和家庭成員的需求，選擇適合的寵物品種和性格。
            </li>
            <li>
              準備領養費用:領養動物通常需要支付已用於動物的醫療保健、疫苗接種、結紮手術、晶片植入等費用。具體金額可能因機構、動物種類和需求而有所不同。
            </li>
            <li>
              寵物繁殖控制：如果您領養的是未結紮的寵物，請進行結紮手術，以控制寵物繁殖和負擔。
            </li>
            <li>
              注冊和標識寵物：根據香港法律，您需要為寵物進行注冊和標識，如植入晶片或佩戴識別圈等。
            </li>
            <li>
              提供良好的飲食和醫療照顧：給予寵物均衡的飲食，定期接受獸醫檢查和必要的疫苗接種，並提供必要的醫療照顧。
            </li>
            <li>
              寵物訓練和社交化：提供寵物適當的訓練和社交化，以確保其行為和與人類及其他動物的相處方式良好。
            </li>
            <li>
              耐心和愛心：給予寵物足夠的耐心和愛心，建立牢固的信任關係，並對其提供家庭的溫暖和關懷。
            </li>
            <li>
              提供適當的運動和娛樂：確保寵物有足夠的運動和娛樂，例如遛狗、玩耍和提供適合的玩具等，以維持其身心健康。
            </li>
          </ul>
          <h5 className="precautions">
            <ErrorTwoToneIcon />
            請注意，以上僅是一些基本的領養需知，具體領養程序和要求會因應不同的領養機構或動物種類而有所不同。建議您在領養前進一步了解相關資訊，並與相關機構聯繫以獲取更詳細的指引。
          </h5>
        </div>
        <div className="awaitinglist">
          <Stack spacing={2} direction="row">
            <Link
              to={{
                pathname: `/Category_Page`,
              }}
              rel="noopener noreferrer"
            >
              <Button variant="contained">立即看正在尋家的動物</Button>
            </Link>
          </Stack>
        </div>

        <div className="logocontainer">
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
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default AdoptionInfoPage;
