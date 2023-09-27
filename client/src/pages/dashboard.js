import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "@mui/material";
import withRoot from "../modules/withRoot";

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mr: 1,
  "&:hover": {},
};

const Container = styled.div`
  height: 89.1vh;
  width: 100vw
  margin: 2px;
  background-color: #1a1a1a;
  color: white;
`;
const Wrapper = styled.div`
  height: 100%;
  margin: 2px;
  background-color: "black";
  display: flex;
  justify-content: space-between;
  color: white;
`;
const Left = styled.div`
  margin: 30px;
  display: flex;
  flex: 1.5;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #282828;
  color: white;
`;

const LeftItem = styled.div`
  margin-top: 10px;
  color: grey;
`;

const Socialhandles = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const Center = styled.div`
  margin: 10px;
  display: flex;
  flex: 2;
  align-items: center;
  background-color: #282828;
  position: relative;
  flex-direction: column;
  color: white;
`;
const TopItem = styled.div`
  border: 3px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
`;
const BottomItem = styled.div`
  border: 2px solid grey;
  height: 20rem;
  width: 25rem;
  display: flex;
  // align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-radius: 7%;
`;
const List = styled.ul`
  // list-style: none;
  margin-top: 25px;
  margin-left: 10px;
  padding: 0;
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 30px;
  margin-left: 20px;
`;
const Right = styled.div`
  margin: 10px;
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
  background-color: #282828;
  flex-direction: column;
  color: white;
`;
const RightText = styled.div`
  font-weight: bolder;
  color: #f9d6d6;
  font-size: 1.2rem;
`;
const RightItem = styled.div`
  border: 2px solid grey;
  height: 25rem;
  width: 25rem;
  // background-color: white;
  display: flex;
  // align-items: center;
  flex-direction: column;
  justify-content: center;
  // margin-top: 2rem;
  margin-bottom: 1rem;
  border-radius: 7%;
`;
const RightList = styled.ul``;

const Dashboard = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <Wrapper>
          <Left>
            <Avatar
              src="/broken-image.jpg"
              sx={{ width: "5rem", height: "5rem" }}
            />
            <LeftItem> sardarsj </LeftItem>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#288651",
                marginTop: "10px",
                width: "90%",
              }}
            >
              EDIT PROFILE
            </Button>
            <Socialhandles>
              {" Follow us on:"}
              <Link
                href="https://www.facebook.com/login/"
                style={{ marginTop: "10px", color: "white" }}
              >
                <FacebookIcon />
              </Link>
              <Link
                href="https://www.instagram.com/"
                style={{ marginTop: "10px", color: "white" }}
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://twitter.com/i/flow/login"
                style={{ marginTop: "10px", color: "white" }}
              >
                <TwitterIcon />
              </Link>
              <Link
                href="https://github.com"
                style={{ marginTop: "10px", color: "white" }}
              >
                <GitHubIcon />
              </Link>
              <Link
                href="https://www.youtube.com"
                style={{ marginTop: "10px", color: "white" }}
              >
                <YouTubeIcon />
              </Link>
            </Socialhandles>
          </Left>
          <Center>
            <TopItem>
              {"Quiz solved: "}

              {"4/10"}
            </TopItem>
            <BottomItem>
              <List>
                <ListItem>Quiz #1: Language: English Score: 10</ListItem>
                <ListItem>Quiz #2: Language: German Score: 09/10</ListItem>
                <ListItem>Quiz #3: Language: French Score: 10/10</ListItem>
                <ListItem>Quiz #4: Language: Spanish Score: 08/10</ListItem>
              </List>
            </BottomItem>
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: 120, width: "90%" }}
            >
              <InputLabel
                id="demo-simple-select-standard-label"
                style={{ color: "#f39e1c", marginLeft: "20px" }}
              >
                Update Language
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Language"
              >
                <MenuItem value={10}>English</MenuItem>
                <MenuItem value={20}>Spanish</MenuItem>
                <MenuItem value={30}>German</MenuItem>
              </Select>
            </FormControl>
          </Center>
          <Right>
            <RightText>{"TOP CONTESTANTS"}</RightText>

            <RightItem>
              <RightList>
                <ListItem>John</ListItem>
                <ListItem>John</ListItem>
                <ListItem>John</ListItem>
                <ListItem>John</ListItem>
              </RightList>
            </RightItem>
            <Button
              variant="contained"
              sx={{
                // backgroundColor: "#a41111",
                backgroundColor: "#ef4743",
                marginTop: "10px",
                width: "90%",
              }}
            >
              RESET PROGRESS
            </Button>
          </Right>
        </Wrapper>
      </Container>
    </React.Fragment>
  );
};

export default withRoot(Dashboard);
