import * as React from "react";
import {
  Button,
  Drawer,
  List,
  ListItemText,
  IconButton,
  Hidden,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  drawer: {
    alignContent: "right",
    color:"red",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  listItem: {
    width: "100%",
    textAlign: "right",
    paddingRight: "20px", // Adjust padding as needed
  },
  button: {
    justifyContent: "flex-end",
  },
}));

const drawerWidth = "100%";
const drawerHeight = "35%";

const MenuDrawer = () => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.drawer}>
      <List className={classes.list}>
        {["home", "about", "projects", "contact"].map(
          (sectionId) => (
            <ScrollLink
              key={sectionId}
              to={sectionId}
              smooth={true}
              duration={500}
              offset={-64} // Adjust according to AppBar height
              onClick={() => setMobileOpen(false)}
              className={classes.listItem}
            >
              <Button className={classes.button} fullWidth>
                {sectionId.toUpperCase()}
              </Button>
            </ScrollLink>
          )
        )}
      </List>
    </div>
  );

  return (
    <Box>
      <Hidden mdUp>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ ml: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              marginTop: 7,
              boxSizing: "border-box",
              width: drawerWidth,
              height: drawerHeight,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Box sx={{ display: "flex" }}>
          {["home", "about", "projects", "contact"].map(
            (sectionId) => (
              <Box key={sectionId} sx={{ mx: 2 }}>
                <ScrollLink
                  to={sectionId}
                  smooth={true}
                  duration={500}
                  offset={-64} // Adjust according to AppBar height
                  className="MuiButtonBase-root MuiListItem-root MuiListItem-button"
                >
                  <ListItemText primary={sectionId.toUpperCase()} />
                </ScrollLink>
              </Box>
            )
          )}
        </Box>
      </Hidden>
    </Box>
  );
};

export default MenuDrawer;
