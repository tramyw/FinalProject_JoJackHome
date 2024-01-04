import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "150px",
        backgroundColor: "primary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="white" variant="h5">
              祖積家
            </Typography>
          </Grid>
          <br></br>
          <Grid item xs={12}>
            <a href="https://www.facebook.com/">
              <img
                src="https://cdn-icons-png.flaticon.com/512/20/20837.png"
                alt="Facebook Icon"
                style={{ width: "25px", height: "25px" }}
              ></img>
            </a>
            {"\u00A0"}
            <a href="https://twitter.com/home/">
              <img
                src="https://cdn-icons-png.flaticon.com/512/11823/11823292.png"
                alt="X Icon"
                style={{ width: "23px", height: "23px" }}
              ></img>
            </a>
            {"\u00A0"}
            <a href="https://www.instagram.com/">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
                alt="IG Icon"
                style={{ width: "25px", height: "25px" }}
              ></img>
            </a>
            <br></br>
            <Typography color="textSecondary" variant="subtitle1">
              {`Copyright© ${new Date().getFullYear()} 祖積家愛心無限公司 |`}{" "}
              <a href="https://www.spca.org.hk/zh-hant/">SPCA Demo Link</a>
              {` |`} This is a Link {`|`} This is a Link
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
