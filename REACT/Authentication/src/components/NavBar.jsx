import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAuth0 } from "@auth0/auth0-react";

export default function ButtonAppBar() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
           Auth0
          </Typography>
          {isAuthenticated ? (
            <div>
              <Button color="inherit" onClick={handleMenuOpen}>
                {user.name}
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>
                  <Typography>{user.name}</Typography>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Typography>{user.email}</Typography>
                </MenuItem>
                <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>
                  <Typography>Logout</Typography>
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Button color="inherit" onClick={() => loginWithRedirect()}>
              Log In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
