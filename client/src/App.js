import React from 'react';
import { Typography, AppBar } from "@mui/material";

import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    tab: {
      fontSize: 20,
    },
  },
  palette: {
    common: {
      purple: 'purple',
    },
  },
})


const App = () => {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="inherit">
          <Typography variant="h2" align="center">
            P2P Video Player
          </Typography>
        </AppBar>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </ThemeProvider>
    </div>
  );
};

export default App;
