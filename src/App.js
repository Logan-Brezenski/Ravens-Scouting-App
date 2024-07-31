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
import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
import { styled } from '@mui/system';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledIncrementButton,
        decrementButton: StyledDecrementButton,
      }}
      slotProps={{
        incrementButton: {
          children: <AddIcon fontSize="small" />,
          className: 'increment',
        },
        decrementButton: {
          children: <RemoveIcon fontSize="small" />,
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

function QuantityInput() {
  return <NumberInput aria-label="Quantity Input" min={0} max={10} />;
}

const blue = {
  100: '#daecff',
  200: '#b6daff',
  300: '#66b2ff',
  400: '#3399ff',
  500: '#007fff',
  600: '#0072e5',
  700: '#0059B2',
  800: '#004c99',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const StyledInputRoot = styled('div')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`,
);

const StyledInput = styled('input')(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.375;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? '#333' : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
  };
  border-radius: 8px;
  margin: 0 8px;
  padding: 10px 12px;
  outline: 0;
  min-width: 0;
  width: 4rem;
  text-align: center;

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
  }

  &:focus-visible {
    outline: 0;
  }
`,
);

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.5;
  border: 1px solid;
  border-radius: 999px;
  width: 32px;
  height: 32px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    cursor: pointer;
  }

  &:focus-visible {
    outline: 0;
  }

  &.increment {
    order: 1;
  }
`,
);

const StyledIncrementButton = styled(StyledButton)(
  ({ theme }) => `
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};

  &:hover {
    background: ${theme.palette.mode === 'dark' ? 'green' : 'lightgreen'};
    border-color: ${theme.palette.mode === 'dark' ? 'darkgreen' : 'green'};
    color: ${grey[50]};
  }
`,
);

const StyledDecrementButton = styled(StyledButton)(
  ({ theme }) => `
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};

  &:hover {
    background: ${theme.palette.mode === 'dark' ? 'red' : 'lightcoral'};
    border-color: ${theme.palette.mode === 'dark' ? 'darkred' : 'red'};
    color: ${grey[50]};
  }
`,
);


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

  const [view2, setView2] = useState('signin2');

  const handleSignIn2 = () => {
    setView2('autonomous'); //FOR PREMATCH TO AUTO
  };
  return (
    <div className="PreMatch">
      <header className="App-header">
        
      {view2 === 'signin2' && <h1 className="App-title">PreMatch</h1>}
      {view2 === 'signin2' && (
        <>
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
        <SignIn2 onSignIn2={handleSignIn2} /> 
        </>

      )}
 {view2 === 'autonomous' && <Autonomous />}
      </header>
    </div>
  );
}

function Autonomous(){ //start of page 2

  return (
    <div className="Autonomous">
      <header className="App-header">
        <h1 className="App-title">Teleop</h1>
        <Typography variant="h6" style={{ color: 'blue' }}>Auto Scoring</Typography>
        <img src= {fieldImage} alt="Auto Scoring" style={{ width: '300px', height: '200px'}} /> 
        
       <QuantityInput/>

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



function SignIn2({ onSignIn2 }) { // next button for Prematch to Auto.!!!!!!!!!!!!!!!
  return (
    <Button variant="contained" onClick={onSignIn2} color="secondary" >
      Next
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

