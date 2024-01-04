import {
  Stack,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
  Menu,
  Container,
  //Tooltip,
  MenuItem,
  //Avatar,
} from "@mui/material";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import React from "react";
import { Link } from "react-router-dom";

const pages = [
  { 主頁: "Home" },
  { 關於我們: "About_us" },
  { 領養: "Category_Page" },
];

const objKeys = pages.map((el) => Object.keys(el));
const objValues = pages.map((el) => Object.values(el));

//console.log(pages);
console.log(objValues);
//const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  /*const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };*/

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  /*const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };*/

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HomeTwoToneIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Link to={{ pathname: `/Home` }} style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              祖積愛
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuTwoToneIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={Object.values(page)}
                  onClick={handleCloseNavMenu}
                >
                  <Link
                    style={{ textDecoration: "none" }}
                    key={Object.values(page)}
                    to={`/${Object.values(page)}`}
                  >
                    <Typography textAlign="center">
                      {Object.keys(page)}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <HomeTwoToneIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            祖積愛
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                style={{ textDecoration: "none" }}
                key={Object.values(page)}
                to={`/${Object.values(page)}`}
              >
                <Button
                  key={Object.values(page)}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {Object.keys(page)}
                </Button>
              </Link>
            ))}
          </Box>
          <Stack direction="row" spacing={2}>
            <Link
              to={{
                pathname: "/Adoption_Info_Page",
              }}
              rel="noopener noreferrer"
            >
              <Button variant="outlined" color="inherit">
                領養須知
              </Button>
            </Link>
          </Stack>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Baby Shark" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
              </Box>*/}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
