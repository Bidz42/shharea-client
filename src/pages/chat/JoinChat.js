import React, {useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';

const JoinChat = () => {

const [room, setRoom] = useState(null);

const handleJoin = (e) => {
    e.preventDefault();
    window.open(`/room/${room}`)
}

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
  
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <SearchIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          JOIN A CHAT ROOM
        </Typography>
        <Box component="form" noValidate onSubmit={handleJoin} sx={{ mt: 1 }}>
    
            <TextField
            margin="normal"
            required
            fullWidth
            type="text"
            id="text"
            label="Search"
            name="search"
            autoFocus
            onChange={(e) => setRoom(e.target.value)}
          />
         
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Join
          </Button>
 
        </Box>
      </Box>
    </Grid>
    <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1530811761207-8d9d22f0a141?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                />
  </Grid>

    
    )
}

export default JoinChat
