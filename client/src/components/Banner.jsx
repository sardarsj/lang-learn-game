import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const Container = styled.div`
  height: 70vh;
  background-color: #1976d2;
  //   background-color: pink;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const Left = styled.div`
  display: flex;
  padding: 10px;

  flex: 1;
  //   background-color: green;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Image = styled.img`
  height: 100%;
`;

const Navbar = () => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent={"space-between"}
        sx={{ height: "100%" }}
      >
        <Box
          sx={{ width: "50%" }}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Typography variant="h3" gutterBottom marginTop={"70px"}>
            h3. Heading
          </Typography>

          <Typography variant="h5" gutterBottom>
            h5. Heading
          </Typography>
          <Button variant="contained" color="error" disableElevation>
            Jump to Quiz
          </Button>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Image
            src={
              "https://images.pexels.com/photos/5598300/pexels-photo-5598300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
