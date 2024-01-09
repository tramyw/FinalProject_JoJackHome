import React from "react";
import styles from "./NGOLogo.module.css";

const NGOLogo = () => {
  return (
    <div className={styles["LOGO-wrapper"]}>
      <a
        href="https://hkscda.com/adoption/instructions"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="./icons/HKSCDA_logo.jpeg"
          className={styles["logo-one"]}
          alt="HKSCDA"
        />
      </a>
      <a
        href="https://www.spca.org.hk/zh-hant/what-we-do/adoption/adoption-process/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="./icons/HKSPCA_logo.jpeg"
          className={styles["logo-one"]}
          alt="HKSPCA"
        />
      </a>

      <a
        href="https://www.hk-aac.org.hk/image/data/pdf/dogs.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="./icons/HKAAC_logo.jpeg"
          className={styles["logo-one"]}
          alt="HKAAC"
        />
      </a>

      <a
        href="https://drive.google.com/file/d/18i9IPSWbWwd1Jypv3uaN4T5wnualOCRB/view"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="./icons/LAP_logo.jpeg"
          className={styles["logo-one"]}
          alt="LAP"
        />
      </a>

      <a
        href="https://www.saa.org.hk/zh/service.php?id=1"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="./icons/SAA_logo.jpeg"
          className={styles["logo-one"]}
          alt="SAA"
        />
      </a>
    </div>
  );
};
export default NGOLogo;
