import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              {/* <Box
                component="img"
                src="/static/themes/onepirate/productValues1.svg"
                alt="suitcase"
                sx={{ height: 55 }}
              /> */}
              <Typography variant="h6" sx={{ my: 5 }}>
                Study several Tongues.
              </Typography>
              <Typography variant="h5">
                {
                  "Explore various languages like English, Spanish, Japanese and many more through different fun activities."
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              
              <Typography variant="h6" sx={{ my: 5 }}>
                Weekly Challenges
              </Typography>
              <Typography variant="h5">
                {
                  "New different challenges will be there every week through which you can earn bonus points."
                }

                
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              
              <Typography variant="h6" sx={{ my: 5 }}>
                Exclusive Quizzes
              </Typography>
              <Typography variant="h5">
                {"By registering, you will access various quizzes which can help you stay at the top of ladder."}

              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
