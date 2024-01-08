import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";

const PAGES = [
  "主頁",
  "關於我們",
  "領養動物",
  "領養須知",
  "登記待領動物",
  "報失寵物",
];
const Drawercomp = () => {
  const [openDrawer, setopenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setopenDrawer(false)}>
        <List>
          {PAGES.map((page, index) => (
            <ListItemButton onClick={() => setopenDrawer(false)} key={index}>
              <ListItemIcon>
                <ListItemText sx={{ color: "#508FF7" }}>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setopenDrawer(!openDrawer)}
      >
        <MenuTwoToneIcon sx={{ color: "#E8B338" }} />
      </IconButton>
    </React.Fragment>
  );
};

export default Drawercomp;
