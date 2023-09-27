import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import LiveHelp from "@mui/icons-material/LiveHelp";
import AppAppBar from "../modules/views/AppAppBar";
import AppFooter from "../modules/views/AppFooter";
import withRoot from "../modules/withRoot";
import Navbar from "../components/Navbar";

const styles = (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    width: "60%",
    margin: "0 auto",
  }),
  button: {
    pointerEvents: "none",
    boxShadow: "none",
  },
  questionMeta: {
    marginLeft: 10,
    display: "inline",
  },
  footer: {
    marginTop: "40px",
  },
});

function PaperSheet(props) {
  const [current, setCurrent] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState("0");
  const [revealed, setRevealed] = useState(false);
  const quiz = [
    {
      question: "How tall are you?",
      options: ["a1", "b1", "c1", "d1"],
      answer: "1",
      score: "2",
    },
    {
      question: "How fast are you?",
      options: ["a2", "b2", "c2", "d2"],
      answer: "1",
      score: "2",

    },
    {
      question: "How heavy are you?",
      options: ["a3", "b3", "c3", "d3"],
      answer: "1",
      score: "2",
    },
    {
      question: "How heavy are you?",
      options: ["a3", "b3", "c3", "d3"],
      answer: "1",
      score: "2",

    },
    {
      question: "How heavy are you?",
      options: ["a3", "b3", "c3", "d3"],
      answer: "1",
      score: "2",

    },
    {
      question: "How heavy are you?",
      options: ["a3", "b3", "c3", "d3"],
      answer: "1",
      score: "2",

    },
    {
      question: "How heavy are you?",
      options: ["a3", "b3", "c3", "d3"],
      answer: "1",
      score: "2",

    },
    {
      question: "How tall are you?",
      options: ["a1", "b1", "c1", "d1"],
      answer: "1",
      score: "2",

    },
    {
      question: "How fast are you?",
      options: ["a2", "b2", "c2", "d2"],
      answer: "1",
      score: "2",

    },
    {
      question: "How heavy are you?",
      options: ["a3", "b3", "c3", "d3"],
      answer: "1",
      score: "2",

    },
    {
      question: "How heavy are you?",
      options: ["a3", "b3", "c3", "d3"],
      answer: "1",
      score: "2",

    },
    {
      question: "How heavy are you?",
      options: ["a3", "b3", "c3", "d3"],
      answer: "1",
      score: "2",

    },
    {
      question: "How heavy are you?",
      options: ["a3", "b3", "c3", "d3"],
      answer: "1",
      score: "2",

    },
    {
      question: "How heavy are you?",
      options: ["a3", "b3", "c3", "d3"],
      answer: "1",
      score: "2",

    },
  ];
  const refs = useRef([]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const moveNext = () => {
    clearBacks();
    setCurrent(current + 1)
  };

  const movePrevious = () => {
    clearBacks();
    setCurrent(current - 1);
  };

  const clearBacks = () => {
    const question = quiz[current];
    for (let i = 0; i < question.options.length; i++) {
      refs.current[i].style.background = "white";
    }
  };

  const revealCorrect = () => {
    const question = quiz[current];
    const answerIndex = parseInt(question.answer); // Convert the answer to an integer
  
    clearBacks();
  
    if (selectedValue === question.answer) {
      refs.current[answerIndex].style.background = "lightgreen";
      setCurrentScore(currentScore + parseInt(question.score));
    } else {
      refs.current[answerIndex].style.background = "lightgreen";
      refs.current[selectedValue].style.background = "lightcoral";
    }
    setRevealed(true);
  };

  const question = quiz[current];
  const curQuestion = current + 1;
  const size = quiz.length;
  const moveRight = current + 1 < quiz.length;
  const moveLeft = current === 0;

  return (
    <>
      {/* <AppAppBar /> */}
      <Navbar/>

      <div>
        <Paper
          sx={{
            paddingTop: 16,
            paddingBottom: 16,
            marginTop: 12,
            width: "60%",
            margin: "0 auto",
          }}
          elevation={4}
        >
          <Typography component="p" sx={{display: "flex",justifyContent:"space-between", marginLeft: '20px', marginBottom: '5px', marginRight: '20px'}}>
            
            <span sx={{ display: "inline" }}>
              {" "}
              Question: {curQuestion} / {size}
            </span>
            <span sx={{ display: "inline"}}>
              {" "}
              Current Score: {currentScore} / {size * 2} 
            </span>
          </Typography>

          <hr style={{ marginBottom: "20px" }} />
          <Typography variant="headline" component="h3" marginLeft={"20px"}>
            {question.question}
          </Typography>

          {question.options.map((opt, index) => (
            <div
              key={index}
              style={{ marginTop: "5px", marginLeft: "20px" }}
              ref={(el) => (refs.current[index] = el)}
            >
              <Radio
                checked={selectedValue === index.toString()}
                onChange={handleChange}
                value={index.toString()}
                name="radio-button-demo"
                aria-label="A"
              />
              {opt}
            </div>
          ))}
          <div sx={{ marginTop: "40px" }}>
            <Button onClick={revealCorrect} variant="raised" color="secondary">
              Submit
            </Button>
            {moveRight ? (
              <Button
                onClick={moveNext}
                variant="raised"
                color="primary"
                style={{ float: "right" }}
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={moveNext}
                disabled
                variant="raised"
                color="primary"
                style={{ float: "right" }}
              >
                Next
              </Button>
            )}

            {moveLeft ? (
              <Button
                onClick={movePrevious}
                disabled
                variant="raised"
                color="primary"
                style={{ float: "right", marginRight: "50px" }}
              >
                Previous
              </Button>
            ) : (
              <Button
                onClick={movePrevious}
                variant="raised"
                color="primary"
                style={{ float: "right", marginRight: "50px" }}
              >
                Previous
              </Button>
            )}
          </div>
        </Paper>
      </div>
      <AppFooter />
    </>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(PaperSheet);
