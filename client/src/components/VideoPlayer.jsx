import { useContext } from "react";
import {
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { SocketContext } from "../SocketContext";

const VideoPlayer = () => {
  const { name,callAccepted, myVideo,userVideo,callEnded,stream,call } = useContext(SocketContext);
  return (
    <Grid container style={{ display:'flex',justifyContent:'center',gap:50,textAlign:'center',width: "100%",marginTop:30 }}>
      {stream && (
        <Paper>
          <Grid>
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video height="240px" playsInline muted ref={myVideo} autoPlay />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper>
          <Grid>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <video height="240px" playsInline ref={userVideo} autoPlay />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
