import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { MdWavingHand } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import Dot from "@material-ui/icons/FiberManualRecord";
import Forum from "@material-ui/icons/ForumOutlined";
import CloseIcon from "@material-ui/icons/Close";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@mui/material/Slide";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: "25px",
    margin: "6rem auto",
    fontFamily: "DMSans",
    width: "80%",
    minHeight: "800px",
    backgroundColor: "white",
    position: "relative",
  },
  closeIcon: {
    position: "absolute",
    right: "15px",
    color: "#fff",
    fontSize: "2rem"
  },
  hero: {
    background: "linear-gradient(90deg, #F5821F 0%, #FF5C00 100%)",
    borderRadius: "25px 25px 0 0",
    color: "#fff",
    padding: "2rem 3rem 6rem",
    height: "200px",
  },
  wave: {
    marginLeft: "1rem",
  },
  queriesSection: {
    position: "absolute",
    top: "200px",
    margin: "1rem",
    padding: "3rem 1rem 1rem",
  },
  robot: {
    position: "absolute",
    top: "-40px",
    left: "25px",
    fontSize: "2rem",
    padding: "1rem 1rem 0.8rem",
    color: "white",
    borderRadius: "50%",
    backgroundColor: "#FF5C00",
  },
  qMark: {
    padding: "5px",
    backgroundColor: "##fff6ea",
    borderRadius: "30px",
    color: "#FF5C00",
    fontSize: "1.2rem",
  },
  queries: {
    marginTop: "1rem",
  },
  queriesIcon: {
    minWidth: "0",
    marginRight: "10px",
    fontSize: "1rem",
  },
  dot: {
    padding: "0",
    color: "#FF5C00",
    fontSize: "10px",
  },
  newConvo: {
    borderRadius: "25px",
    display: "flex",
    margin: "2rem auto",
    padding: "0.85rem 2rem",
    textTransform: "none",
  },

  //for larger devices

  fullRoot: {
    borderRadius: "25px",
    margin: "6rem auto",
    fontFamily: "DMSans",
    width: "450px",
    minHeight: "800px",
    backgroundColor: "white",
    position: "relative",
  },
  fullQueriesSection: {
    position: "absolute",
    borderRadius: "10px",
    top: "200px",
    left: "35px",
    padding: "3rem 2rem 1rem",
  },
}));

export default function Chatbot(props) {
  const classes = useStyles();
  const responsive = useMediaQuery("(min-width: 600px)");

  return (
    <Slide in={true} direction="up" timeout={1000}>
      <Paper className={responsive ? classes.fullRoot : classes.root}>
        <div className={classes.closeIcon}>
          <IconButton color="inherit" size="large" onClick={props.handleClick}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className={classes.hero}>
          <Typography variant="h4">IRIS</Typography>
          <Typography variant="h6">
            Hello <MdWavingHand className={classes.wave} />
          </Typography>

          <Typography>I am Iris, a Virtual Assistant</Typography>
          <Typography>How may I help you?</Typography>
        </div>
        <Paper
          className={
            responsive ? classes.fullQueriesSection : classes.queriesSection
          }
        >
          <div className={classes.robot}>
            <FaRobot />
          </div>
          <Typography style={{ fontWeight: "500" }}>
            Frequently Asked Questions <span className={classes.qMark}>?</span>
          </Typography>

          <List disablePadding>
            <Fade in={true} timeout={2000}>
              <Paper className={classes.queries}>
                <ListItem>
                  <ListItemButton disableGutters>
                    <ListItemIcon className={classes.queriesIcon}>
                      <Dot className={classes.dot} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="caption">
                          Can I redeem my FB before the original term?
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              </Paper>
            </Fade>
            <Fade in={true} timeout={3000}>
              <Paper className={classes.queries}>
                <ListItem>
                  <ListItemButton disableGutters>
                    <ListItemIcon className={classes.queriesIcon}>
                      <Dot className={classes.dot} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="caption">
                          How do I pay my Credit Card bill?
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              </Paper>
            </Fade>
            <Fade in={true} timeout={4000}>
              <Paper className={classes.queries}>
                <ListItem>
                  <ListItemButton disableGutters>
                    <ListItemIcon className={classes.queriesIcon}>
                      <Dot className={classes.dot} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="caption">
                          How can i get my Account Statement?
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              </Paper>
            </Fade>
            <Fade in={true} timeout={5000}>
              <Paper className={classes.queries}>
                <ListItem>
                  <ListItemButton disableGutters>
                    <ListItemIcon className={classes.queriesIcon}>
                      <Dot className={classes.dot} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="caption">
                          What is the tenure of Fixed Deposit?
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              </Paper>
            </Fade>
          </List>

          <Button className={classes.newConvo} variant="outlined">
            <Forum style={{ marginRight: "8px" }} />
            Start a New Conversation
          </Button>
        </Paper>
      </Paper>
    </Slide>
  );
}
