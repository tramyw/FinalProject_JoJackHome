import React from "react";
import Navbar from "./NewNavbar/AliceNavbar.js";
import Footer from "./components/Footer";
import "./AdoptionInfoPage.css";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className="container">
      <Navbar />

      <div className={styles["middle-content"]}>
        <div className="title">
          <h2 className={styles["title-About-Us"]}>關於我們</h2>
        </div>
        <div className={styles["about-us-1"]}>
          <div className={styles["about-us-photo-wrapper"]}>
            <img
              className={styles["about-us-photo-1"]}
              src="https://images.unsplash.com/photo-1551730459-92db2a308d6a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us"
            />
          </div>
          <div className={styles["about-us-para-1"]}>
            <div className={styles["para"]}>
              <div className={styles["para-title"]}>
                <span>歡迎來到祖積家， 這是領養寵物的最佳目的地！</span>
              </div>
              <div className={styles["para-content"]}>
                祖積家是一個革命性的網路平臺，匯集來多個香港動物協會及組織的待領養寵物資訊，您只需要訪問祖積家就找到能完美的毛茸茸的寵物伴侶。
              </div>
              <br></br>
              <div className={styles["para-content"]}>
                我們是一群熱愛動物的人，我們希望能幫助流浪動物找到一個溫暖的家。我們的網站提供了各種寵物的資訊，包括品種、性格、健康狀況等，讓你可以根據自己的喜好和條件選擇最適合你的寵物。我們也提供了領養流程和注意事項，讓你可以順利地完成領養手續，並且給予你的新朋友最好的照顧。
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles["about-us-2"]}>
            <div className={styles["about-us-para-2"]}>
              <div className={styles["para"]}>
                <div className={styles["para-title"]}>
                  我們相信每一隻動物都有自己的個性和故事，都值得被愛和尊重。
                </div>
                <div className={styles["para-content"]}></div>
                <br></br>
                <div className={styles["para-content"]}>
                  我們也會定期舉辦實體的領養活動，讓寵物和領養者可以面對面地互動。我們希望透過我們的平台，能夠減少流浪動物的數量，提高寵物的福利，並且創造更多幸福的家庭。如果你也想成為我們的一份子，歡迎你加入我們的領養大家庭！
                </div>
              </div>
            </div>
            <div className={styles["about-us-photo-wrapper"]}>
              <img
                className={styles["about-us-photo-2"]}
                src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About Us"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["logocontainer"]}>
        <div className={styles["allLogos"]}>
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
      <div className={styles["contactUs-wrapper"]}>
        <div>
          <h2 className={styles["contact-Title"]}>聯絡我們</h2>
        </div>
        <div>
          <img
            className={styles["contact-Image"]}
            src="https://images.unsplash.com/photo-1516007049085-2a9077b4b512?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact Us"
          />
        </div>
        <div>
          <div className={styles["contact-Us"]}>
            <span className={styles["contact-Info"]}>
              <span className={styles["contact-Details"]}>電話：3500 7164</span>{" "}
            </span>
            <p className={styles["contact-Info"]}>
              <span className={styles["contact-Details"]}>
                一般查詢： generationhk@generation.org
              </span>
            </p>
            <span className={styles["contact-Info"]}>
              <span className={styles["contact-Details"]}>
                領養/走失查詢： communicationhk@generation.org
              </span>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
