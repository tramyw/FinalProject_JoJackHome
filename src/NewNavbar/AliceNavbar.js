import React, { useState } from "react";
import {
  Stack,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import Drawercomp from "./Drawer.js";
import { Link } from "react-router-dom";

const pages = [
  { 主頁: "Home" },
  { 關於我們: "About_us" },
  { 領養: "Category_Page" },
];
const objKeys = pages.map((el) => Object.keys(el));
const objValues = pages.map((el) => Object.values(el));

const PAGES = ["主頁", "關於我們", "領養動物"];
function Navbar() {
  const [value, setValue] = useState();
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" sx={{ background: "#063970" }}>
      <Toolbar>
        <Link to={{ pathname: `/Home` }} style={{ textDecoration: "none" }}>
          <HomeTwoToneIcon sx={{ display: { md: "flex" }, mr: 1 }} />
        </Link>
        <Link to={{ pathname: `/Home` }} style={{ textDecoration: "none" }}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#E8B338",
              textDecoration: "none",
            }}
          >
            祖積家
          </Typography>
        </Link>

        {responsive ? (
          <>
            <Drawercomp />
          </>
        ) : (
          <>
            <Tabs
              sx={{ marginLeft: "auto" }}
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
              indicatorColor="#508FF7"
            >
              {pages.map((page, index) => (
                <Link
                  style={{ textDecoration: "none" }}
                  key={Object.values(page)}
                  to={`/${Object.values(page)}`}
                >
                  <Tab key={index} label={Object.keys(page)} />
                </Link>
              ))}
            </Tabs>

            <Stack direction="row" mt={2} mb={2} ml={2} spacing={2}>
              <Link
                to={{
                  pathname: "/Adoption_Info_Page",
                }}
                rel="noopener noreferrer"
              >
                <Button
                  sx={{
                    marginLeft: "auto",
                    color: "#063970",
                    background: "#9ED3F8",
                  }}
                  variant="contained"
                >
                  領養須知
                </Button>
              </Link>
              <Button
                sx={{
                  marginLeft: "10px",
                  color: "#063970",
                  background: "#9ED3F8",
                }}
                variant="contained"
                href="https://forms.gle/HESZBGAgCoJqW2xp9"
              >
                登記待領動物
              </Button>
              <Button
                sx={{
                  marginLeft: "10px",
                  color: "#063970",
                  background: "#9ED3F8",
                }}
                variant="contained"
                href="https://docs.google.com/forms/d/e/1FAIpQLScomQJmP_29GITVpcB5ipMJGoQhDMGBElZc-WtsRhrLRC2tbw/viewform?usp=sharing"
              >
                報失寵物
              </Button>
            </Stack>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
