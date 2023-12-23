import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Login() {

  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [nome, setNome] = React.useState('');
  const handleChange = (event) => {
    setNome(event.target.value);
  };

  const [pass, setPass] = React.useState('');
  const handleChange2 = (event) => {
    setPass(event.target.value);
  };
  
  const redirectRoute = routePath => {
    navigate(routePath);
    setAnchorEl(null);
  };

  function invio() {
    
    const handleChange = (event) => {
      setNome(event.target.value);
    };
    
    const handleChange2 = (event) => {
      setPass(event.target.value);
    };

    console.log("Nome Utente: " + nome);
    console.log("Password: " + pass);

    if (nome === "prova" && pass === "qwe123") {
      console.log("ok");
      redirectRoute("/home");
    }
    else {
      window.alert("Credenziali errate");
    }
  }
  
  function cancella() {
    window.location.reload();
  }
  
  return (

      
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      ><br />
      <div align="center">

        <h1>Login</h1>

        <TextField
          required
          id="outlined-required"
          label="Nome utente"
          value={nome}
          onChange={handleChange}
        />

      <br />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          required
          value={pass}
          onChange={handleChange2}
        />
      </div>

      <Box>
            <Button onClick={cancella} variant="contained" color="error" size="large" Cancella>
                Cancella
            </Button>
            
            <Button onClick={invio} variant="contained" color="primary" size="large" Accedi>
                Accedi
            </Button>
        </Box>

    </Box>
    
  );
}