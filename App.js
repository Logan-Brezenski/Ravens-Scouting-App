import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import ReactDOM from "react-dom/client";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ButtonBase, Typography} from '@mui/material';
import fieldImage from './field_image.jpg';


// Custom styles to make text blue
const textFieldStyles = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'purple',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'blue',
  },
  '& .MuiFormLabel-root': {
    color: 'blue',
  },
  '& .MuiFormControlLabel-label': {
    color: 'blue',
  }
};

const inputPropsStyles = {
  style: {
    color: 'blue',
  },
};

function ScouterInitials() {
  return (
    <TextField
      required
      id="outlined-required"
      label="Scouter Initials"
      defaultValue=""
      variant="outlined"
      color="secondary"
      className="Scouting-initials"
      sx={textFieldStyles}
      InputProps={inputPropsStyles}
    />
  );
}
function Event() {
  return (
    <TextField
      required
      id="outlined-required"
      label="Event"
      defaultValue="WVROX"
      variant="outlined"
      color="secondary"
      className="Event"
      sx={textFieldStyles}
      InputProps={inputPropsStyles}
    />
  );
}

function MatchLevel() {
  return (
    <FormControl>
      <FormLabel id="match-level-radio-buttons-group-label" sx={{ color: 'blue' }}>
        Match Level
      </FormLabel>
      <RadioGroup
        aria-labelledby="match-level-radio-buttons-group-label"
        defaultValue="Quals"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Quals" control={<Radio sx={{ color: 'blue' }} />} label="Q" sx={{ color: 'blue' }} />
        <FormControlLabel value="Double Elim" control={<Radio sx={{ color: 'blue' }} />} label="DE" sx={{ color: 'blue' }} />
        <FormControlLabel value="Finals" control={<Radio sx={{ color: 'blue' }} />} label="F" sx={{ color: 'blue' }} />
      </RadioGroup>
    </FormControl>
  );
}

function MatchNumber() {
  return (
    <TextField
      required
      id="outlined-required"
      label="Match#"
      defaultValue=""
      variant="outlined"
      color="secondary"
      className="MatchNumber"
      sx={textFieldStyles}
      InputProps={inputPropsStyles}
    />
  );
}

function Robot() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" style={{ color: 'blue' }}>Robot</FormLabel>
      <RadioGroup aria-label="robot" name="robot-group">
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 2 }}>
            <FormControlLabel value="Red1" control={<Radio sx={{ color: 'blue' }} />} label={<span style={{ color: 'blue' }}>r1</span>} />
            <FormControlLabel value="Red2" control={<Radio sx={{ color: 'blue' }} />} label={<span style={{ color: 'blue' }}>r2</span>} />
            <FormControlLabel value="Red3" control={<Radio sx={{ color: 'blue' }} />} label={<span style={{ color: 'blue' }}>r3</span>} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <FormControlLabel value="Blue1" control={<Radio sx={{ color: 'blue' }} />} label={<span style={{ color: 'blue' }}>b1</span>} />
            <FormControlLabel value="Blue2" control={<Radio sx={{ color: 'blue' }} />} label={<span style={{ color: 'blue' }}>b2</span>} />
            <FormControlLabel value="Blue3" control={<Radio sx={{ color: 'blue' }} />} label={<span style={{ color: 'blue' }}>b3</span>} />
          </Box>
        </Box>
      </RadioGroup>
    </FormControl>
  );
}
function TeamNumber() {
  return (
    <TextField
      required
      id="outlined-required"
      label="TeamNumber"
      defaultValue="1188"
      variant="outlined"
      color="secondary"
      className="TeamNumber"
      sx={textFieldStyles}
      InputProps={inputPropsStyles}
    />
  );
}

function Preload() {
  return (
    <FormGroup>
      <FormControlLabel required control={<Checkbox sx={{ color: 'blue' }} />} label="Preload?" sx={{ color: 'blue' }} />
    </FormGroup>
  );
}

function PreMatch() {
  const [activeBox, setActiveBox] = useState({
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false,
    box6: false,
  });
  const handleBoxClick = (box) => {
    setActiveBox((prev) => ({
      ...prev,
      [box]: !prev[box],
    }));
  };

  return (
    <div className="PreMatch">
      <header className="App-header">
        <h1 className="App-title">PreMatch</h1>
        <Event />
        <MatchLevel />
        <MatchNumber />
        <Robot />
        <TeamNumber />
        <Preload />''
        <Typography variant="h6" style={{ color: 'blue' }}>Auto Start Pos</Typography> 
        <Box sx={{position: 'relative'}}>
          
          <img src= {fieldImage} alt="Auto Start Pos" style={{ width: '300px', height: '200px'}} />                 
          <Box sx={{  border: '2px solid blue',  height: '70px', width:'40px', zIndex: 1300, position: 'absolute', top: '0px', left:'0px', '&:focus': { borderColor: 'green' }
  }}
          onClick={() => handleBoxClick('box1')}
          tabIndex={0}>
          </Box>
          <Box sx={{  border: '2px solid blue', height: '60px', width:'40px', zIndex: 1300, position: 'absolute', top: '70px', left:'0px',              '&:focus': { borderColor: 'green' }
  }} 
          onClick={() => handleBoxClick('box2')}
          tabIndex={0}>
          </Box>
          <Box sx={{  border: '2px solid blue', height: '60px', width:'40px', zIndex: 1300, position: 'absolute', top: '140px', left:'0px',               '&:focus': { borderColor: 'green' }
  }} 
          onClick={() => handleBoxClick('box3')}
          tabIndex={0}>
          </Box>
          <Box sx={{  border: '2px solid red', height: '70px', width:'40px', zIndex: 1300, position: 'absolute', top: '0px', right:'0px',               '&:focus': { borderColor: 'green' }
  }} 
          onClick={() => handleBoxClick('box4')}
          tabIndex={0}>
          </Box>
          <Box sx={{  border: '2px solid red', height: '60px', width:'40px', zIndex: 1300, position: 'absolute', top: '70px', right:'0px',               '&:focus': { borderColor: 'green' }
  }} 
          onClick={() => handleBoxClick('box5')}
          tabIndex={0}>
          </Box>
          <Box sx={{  border: '2px solid red', height: '60px', width:'40px', zIndex: 1300, position: 'absolute', top: '140px', right:'0px',               '&:focus': { borderColor: 'green' }
  }} 
          onClick={() => handleBoxClick('box6')}
          tabIndex={0}>
          </Box>
         
          
        </Box> 
        

      </header>
    </div>
  );
}
function Teleop(){ //start of page 2
  return (
    <div className="Teleop">
      <header className="App-header">
        <h1 className="App-title">Teleop</h1>
        </header>
        </div>
  )
}
function SignIn({ onSignIn }) {
  return (
    <Button variant="contained" onClick={onSignIn} color="secondary">
      Sign In
    </Button>
  );
}

export default function App() {
  const [view, setView] = useState('signin');

  const handleSignIn = () => {
    setView('prematch');
  };

  return (
    
    <div className="App">
      <header className="App-header">
        {view === 'signin' && <h1 className="App-title">Raven Scout Portal</h1>}
        {view === 'signin' && (
          <>
            <ScouterInitials />
            <SignIn onSignIn={handleSignIn} />
          </>
        )}
        {view === 'prematch' && <PreMatch />}
      </header>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
