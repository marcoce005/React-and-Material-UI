import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function Anagrafica() {

  const [coge, setCoge] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [Rsociale, setRsociale] = React.useState('');
  const [indirizzo, setIndirizzo] = React.useState('');
  const [nCivico, setNcivico] = React.useState('');
  const [interno, setInterno] = React.useState('');
  const [CAP, setCAP] = React.useState(''); 
  const [local, setLocal] = React.useState('');
  const [provincia, setProvincia] = React.useState(''); 
  const [fineValidita, setFine] = React.useState('');

  const [Denominazione, setDeno] = React.useState('');
  const [indirizzo2, setIndirizzo2] = React.useState('');
  const [nCivico2, setNcivico2] = React.useState('');
  const [interno2, setInterno2] = React.useState('');
  const [CAP2, setCAP2] = React.useState(''); 
  const [local2, setLocal2] = React.useState('');
  const [provincia2, setProvincia2] = React.useState('');
  const [fineValidita2, setFine2] = React.useState('');

  const changeRsociale = (event) => {
    setRsociale(event.target.value);
  };
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changeCoge = (event) => {
    setCoge(event.target.value);
  };
  const changeIndirizzo = (event) => {
    setIndirizzo(event.target.value);
  };
  const changeNcivico = (event) => {
    setNcivico(event.target.value);
  };
  const changeInterno = (event) => {
    setInterno(event.target.value);
  };
  const changeCAP = (event) => {
    setCAP(event.target.value);
  };
  const changeLocal = (event) => {
    setLocal(event.target.value);
  };
  const changeProvincia = (event) => {
    setProvincia(event.target.value);
  };
  const changeFine = (event) => {
    setFine(event.target.value);
  };
    

  const changeDenominazione = (event) => {
    setDeno(event.target.value);
  };
  const changeIndirizzo2 = (event) => {
    setIndirizzo2(event.target.value);
  };
  const changeNcivico2 = (event) => {
    setNcivico2(event.target.value);
  };
  const changeInterno2 = (event) => {
    setInterno2(event.target.value);
  };
  const changeCAP2 = (event) => {
    setCAP2(event.target.value);
  };
  const changeLocal2 = (event) => {
    setLocal2(event.target.value);
  };
  const changeProvincia2 = (event) => {
    setProvincia2(event.target.value);
  };
  const changeFine2 = (event) => {
    setFine2(event.target.value);
  };

  return (
  <div align="left">
    
    <div align="center">
        <h1>
          Registrazione
        </h1>
    </div>

      {/*  Sezione aziende  */}

  <div align="left" class="anagrafica">

  <div class="box"><h2>Azienda</h2></div>

      <Box sx={{ flexGrow: 1 }}>
        <Stack direction="row" spacing={10}>
          <TextField
            required
            id="outlined-required"
            label="Regione Sociale"
            value={Rsociale}
            onChange={changeRsociale}
          />
          <FormControl >
            <FormLabel id="demo-radio-buttons-group-label">Contratto</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel value="si" control={<Radio />} label="Si" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <FormControl >
            <FormLabel id="demo-radio-buttons-group-label">Black List</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel value="si" control={<Radio />} label="Si" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Stack>
          <br />
          <TextField
            required
            id="outlined-required"
            label="Indirizzo e-mail"
            value={email}
            onChange={changeEmail}
          />
          <br /><br />
          <TextField
            required
            id="outlined-required"
            label="Codice Coge"
            value={coge}
            onChange={changeCoge}
          />
          <br /><br />
          <TextField
            required
            id="outlined-required"
            label="Indirizzo"
            value={indirizzo}
            onChange={changeIndirizzo}
          />
          <br /><br />
          <Stack direction="row" spacing={5}>
            <TextField
              required
              id="outlined-required"
              label="Numero civico"
              value={nCivico}
              onChange={changeNcivico}
            />
            
            <TextField
              required
              id="outlined-required"
              label="Interno"
              value={interno}
              onChange={changeInterno}
              sx={{width: '90px' }}
            />
            <TextField
              required
              id="outlined-required"
              label="CAP"
              value={CAP}
              onChange={changeCAP}
              sx={{width: '90px' }}
            /><ht /><ht /><ht /><ht />
            <Stack>
              <Button variant="contained" color="primary">Nuova azienda</Button>
            </Stack>
          </Stack>
          <br />
          <Stack direction="row" spacing={57}>
          <TextField
              required
              id="outlined-required"
              label="Località"
              value={local}
              onChange={changeLocal}
            />
            <Stack>
              <Button variant="contained" color="warning">Modifica azienda</Button>
            </Stack>
          </Stack>
          <br />
        <Stack direction="row" spacing={17.7}>
          <TextField
              required
              id="outlined-required"
              label="Provincia"
              value={provincia}
              onChange={changeProvincia}
              sx={{width: '105px' }}
            />

          <FormControl >
            <FormLabel id="demo-radio-buttons-group-label">Tipo Azienda</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel value="cliente" control={<Radio />} label="Cliente" />
              <FormControlLabel value="fornitore" control={<Radio />} label="Fornitore" />
              <FormControlLabel value="altro" control={<Radio />} label="Altro" />
            </RadioGroup>
          </FormControl>
          <Stack>
              <Button variant="contained" color="error">Rimuovi azienda</Button>
            </Stack>
        </Stack>
          <br />
          <Stack direction="row" spacing={57}>
            <TextField
                required
                id="outlined-required"
                label="Data fine validità"
                value={fineValidita}
                onChange={changeFine}
              />
            <Stack>
              <Button variant="contained" color="primary">Aggiorna</Button>
            </Stack>
          </Stack>
          <br />
          <Stack direction="row" spacing={59}>
            <TextField
            id="outlined-multiline-static"
            label="Note"
            multiline
            rows={4}
          />
            <Stack>
              <Button variant="contained" color="primary">Annulla</Button>
            </Stack>
          </Stack>
        </Box>
    </div>

      {/*  Sezione denominazioni  */}

  <div class="vl">
    <div align="left" class="anagrafica">

        <div align="center"><h2>Denominazione</h2></div>

      <Box sx={{ flexGrow: 1 }}>
        <Stack direction="row" spacing={10}>
          <TextField
            required
            id="outlined-required"
            label="Denominazione"
            value={Denominazione}
            onChange={changeDenominazione}
          />
        </Stack>
          <br />
          <TextField
            required
            id="outlined-required"
            label="Indirizzo"
            value={indirizzo2}
            onChange={changeIndirizzo2}
          />
          <br /><br />
          <Stack direction="row" spacing={5}>
            <TextField
              required
              id="outlined-required"
              label="Numero civico"
              value={nCivico2}
              onChange={changeNcivico2}
            />
            
            <TextField
              required
              id="outlined-required"
              label="Interno"
              value={interno2}
              onChange={changeInterno2}
              sx={{width: '90px' }}
            />
            <TextField
              required
              id="outlined-required"
              label="CAP"
              value={CAP2}
              onChange={changeCAP2}
              sx={{width: '90px' }}
            /><ht /><ht /><ht /><ht />
            <Stack>
              <Button variant="contained" color="primary">Nuova denominazioni</Button>
            </Stack>
          </Stack>
          <br />
          <Stack direction="row" spacing={57}>
          <TextField
              required
              id="outlined-required"
              label="Località"
              value={local2}
              onChange={changeLocal2}
            />
            <Stack>
              <Button variant="contained" color="warning">Modifica denominazioni</Button>
            </Stack>
          </Stack>
          <br />
        <Stack direction="row" spacing={71.5}>
          <TextField
              required
              id="outlined-required"
              label="Provincia"
              value={provincia2}
              onChange={changeProvincia2}
              sx={{width: '105px' }}
            />
          <Stack>
              <Button variant="contained" color="error">Rimuovi denominazioni</Button>
            </Stack>
        </Stack>
          <br />
          <Stack direction="row" spacing={57}>
            <TextField
                required
                id="outlined-required"
                label="Data fine validità"
                value={fineValidita2}
                onChange={changeFine2}
              />
            <Stack>
              <Button variant="contained" color="primary">Aggiorna</Button>
            </Stack>
          </Stack>
          <br />
          <Stack direction="row" spacing={59}>
            <TextField
            id="outlined-multiline-static"
            label="Note"
            multiline
            rows={4}
          />
            <Stack>
              <Button variant="contained" color="primary">Annulla</Button>
            </Stack>
          </Stack>
        </Box>
    </div>
  </div>
      
  </div>
  );
}