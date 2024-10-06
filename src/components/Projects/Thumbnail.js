import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { yellow } from '@mui/material/colors';
// import Skeleton from '@mui/material/Skeleton';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    [theme.breakpoints.down('sm')]: {
      padding: "10px",
    },

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 400, // Adjust as needed for uniform height
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: '60%', // Adjust as needed
    backgroundColor: "white",

  },
  button: {
    fontSize: 14,
    padding: 8,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  cardArea: {
    backgroundColor: "white",
    color: "gray"
  },
}));

const StyledButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: yellow[500],
  borderColor: yellow[500],
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: yellow[700],
    borderColor: yellow[700],
    boxShadow: 'none',
  },
});



function Thumbnail(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent className={classes.cardArea}>
          <Typography gutterBottom variant="h6" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.button}>
        <StyledButton
          href={props.linkGithub}
          variant="contained"
          disableRipple
        >
          View Details
        </StyledButton>
        <StyledButton
          variant="contained"
          href={props.linkLive}
        >
          Live Demo
        </StyledButton>
      </CardActions>
    </Card>
  );
}

export default Thumbnail;
