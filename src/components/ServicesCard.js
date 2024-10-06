import React from "react"; // Import the Component component from React
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    bgcolor: "red",
    // boxShadow: "2.5px 5px 4px #000",
  },
  media: {
    height: 200,
    justifyContent: "center",
  },
  button: {
    fontSize: 14,
    padding: 35,
    bgcolor: "transparent",
    justifyContent: "center",
  },
  cardArea: {
    bgcolor: "transparent",
  },
});

function ServicesCard(props) {
  const classes = useStyles();
  return (
    <Container>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.cardArea}>
            <Typography
              // style={{ color: "gray" }}
              gutterBottom
              variant="h6"
              component="h2"
            >
              {props.title}
            </Typography>
            <Typography variant="body2" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.button}></CardActions>
      </Card>
    </Container>
  );
}
export default ServicesCard;
