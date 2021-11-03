import React, { useState } from "react";
import Chatbot from "./Chatbot";
import Forum from "@material-ui/icons/ForumOutlined";
import { FaRobot } from "react-icons/fa";
import { Container, Typography, IconButton } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "800px",
    position: "relative",
  },
  icon: {
    backgroundColor: "#F5821F",
    borderRadius: "50%",
    color: "#fff",
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "10%",
    padding: "0.5rem 0.7rem",
  },

  fullIcon: {
    backgroundColor: "#F5821F",
    borderRadius: "50%",
    color: "#fff",
    position: "fixed",
    bottom: "30px",
    right: "50px",
    width: "50px",
    padding: "0.5rem 0.7rem",
  },
}));
export default function App() {
  const [click, setClick] = useState(false);
  const classes = useStyles();
  const responsive = useMediaQuery("(min-width: 600px)");

  const handleClick = () => {
    setClick((prev) => !prev);
  };
  return (
    <div className={classes.root}>
      <Container
        style={{ display: click ? "none" : "block", marginTop: "10rem" }}
      >
        <Typography style={{ marginBottom: "1rem" }} variant="h2">
          Have any Queries?
        </Typography>
        <Typography variant="h5">
          Chat with us <Forum fontSize="large" />
        </Typography>
      </Container>
      <div
        className={responsive ? classes.fullIcon : classes.icon}
        style={{ display: click ? "none" : "block" }}
      >
        <IconButton size="large" onClick={handleClick}>
          <FaRobot fontSize="2rem" />
        </IconButton>
      </div>
      {click && (
        <div>
          <Chatbot handleClick={handleClick} />
        </div>
      )}
    </div>
  );
}
