import { useContext, useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import CopyToClipboard from "react-copy-to-clipboard";
import { Assignment, Phone, PhoneDisabled } from "@mui/icons-material";

import { SocketContext } from "../SocketContext";

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  return (
    <Container style={{ display:'flex',justifyContent:'center' ,width: "100%",marginTop:70 }}>
      <Paper
        elevation={10}
        sx={{ padding: "10px 20px" }}
      >
        <form sx={{display:'flex',flexDirection:'column'}} noValidate autoComplete="off">
          <Grid container style={{display:'flex',flexDirection:'row'}}>
            <Grid item xs={12} md={6} style={{padding:10}}>
              <Typography gutterBottom variant="h6">
                Account Info
              </Typography>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
              <CopyToClipboard text={me}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<Assignment fontSize="large" />}
                  style={{marginTop:10}}
                >
                  Copy your id
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} style={{padding:10}}>
              <Typography gutterBottom variant="h6">
                Make a call
              </Typography>
              <TextField
                label="ID to call"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                fullWidth
              />
              {callAccepted && !callEnded ? (
                <Button
                  variant="contained"
                  // color="secondary"
                  startIcon={<PhoneDisabled fontSize="large" />}
                  fullWidth
                  onClick={leaveCall}
                  style={{marginTop:10,backgroundColor:'red'}}  
                >
                  Hang Up
                </Button>
              ) : (
                <Button
                  variant="contained"
                  // color="secondary"
                  startIcon={<Phone fontSize="large" />}
                  fullWidth
                  onClick={() => callUser(idToCall)}
                  style={{marginTop:10,backgroundColor:'#0CC014'}}
                >
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Options;
