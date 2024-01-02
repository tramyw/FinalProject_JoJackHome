import React from "react";
import "./Profile.css";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";

import { Button, CircularProgress, Stack } from "@mui/material";

const Profile = () => {
  return (
    <div className="containerA">
      <Stack direction="row" justifyContent="space-evenly" spacing={3}>
        <div>
          <h1>Foster</h1>
          <p>我是 雌性 唐狗., 我的生日是 2022-12-29.</p>
          <p>我正身處於 九龍中心.</p>
          <br></br>
          <br></br>
          <p>品種: 唐狗</p>
          <p>性別: 雌性(已絕育)</p>
          <p>生日日期: 2022-12-29</p>
          <p>中心地點: 九龍中心</p>
          <p>晶片號碼: 606 375 282</p>
          <br></br>
          <br></br>
          <div>
            <CircularProgress />
            <p>狗狗準備好返屋企，你準備好未?</p>
            <p>領養前，停一停諗一諗</p>
          </div>
          <div>
            <a href="https://www.spca.org.hk/zh-hant/adoptions/k06-007-foster/">
              <Button variant="contained">帶我回家</Button>
            </a>
          </div>
        </div>
        <div>
          <ImageGallery />
        </div>
      </Stack>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default Profile;
