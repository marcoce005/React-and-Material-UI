import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

import { useNavigate } from "react-router-dom";

export default function MenuAppBar() {
  
  let navigate = useNavigate();

  const [anchorEl2, setAnchorEl2] = React.useState(null); 
  const [anchorEl, setAnchorEl] = React.useState(null);

//  Menù a tendina
  const [openAnagrafica, setOpenAnagrafica] = React.useState(null);
  const [openOrdiniF, setOpenOrdiniF] = React.useState(null); 
  const [openOrdiniC, setOpenOrdiniC] = React.useState(null);
  const [openLotti, setOpenLotti] = React.useState(null);
  const [openMov, setOpenMov] = React.useState(null);
  const [openDoc, setOpenDoc] = React.useState(null);
  const [openReport, setOpenReport] = React.useState(null);
  const [openContoF, setOpenContoF] = React.useState(null);
  const [openContoC, setOpenContoC] = React.useState(null);
  const [openProd, setOpenProd] = React.useState(null);
  const [openList, setOpenList] = React.useState(null);
  const [openInventario, setOpenInventario] = React.useState(null);
  const [openAbilitazioni, setOpenAbilitazioni] = React.useState(null);
  const [openTabS, setOpenTabS] = React.useState(null);
  const [openTabR, setOpenTabR] = React.useState(null);
  const [openMagF, setOpenMagF] = React.useState(null);
  
  const clickAnagrafica = () => {
    setOpenAnagrafica(!openAnagrafica);
  };
  const clickOrdiniF = () => {
    setOpenOrdiniF(!openOrdiniF);
  };
  const clickOrdiniC = () => {
    setOpenOrdiniC(!openOrdiniC);
  };
  const clickLotti = () => {
    setOpenLotti(!openLotti);
  };
  const clickMov = () => {
    setOpenMov(!openMov);
  };
  const clickDoc = () => {
    setOpenDoc(!openDoc);
  };
  const clickReport = () => {
    setOpenReport(!openReport);
  };
  const clickContoF = () => {
    setOpenContoF(!openContoF);
  };
  const clickContoC = () => {
    setOpenContoC(!openContoC);
  };
  const clickProd = () => {
    setOpenProd(!openProd);
  };
  const clickList = () => {
    setOpenList(!openList);
  };
  const clickInventario = () => {
    setOpenInventario(!openInventario);
  };
  const clickAbilitazioni = () => {
    setOpenAbilitazioni(!openAbilitazioni);
  };
  const clickTabS = () => {
    setOpenTabS(!openTabS);
  };
  const clickTabR = () => {
    setOpenTabR(!openTabR);
  };
  const clickMagF = () => {
    setOpenMagF(!openMagF);
  };
  

  const clickRightMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickLeftMenu = event => {
    setAnchorEl2(event.currentTarget);
    setOpenAnagrafica(false);
    setOpenOrdiniF(false);
    setOpenOrdiniC(false);
    setOpenLotti(false);
    setOpenMov(false);
    setOpenProd(false);
    setOpenList(false);
    setOpenInventario(false);
    setOpenAbilitazioni(false);
    setOpenTabS(false);
    setOpenTabR(false);
    setOpenMagF(false);
  };

  /* routePaths are defined in App.js */
  const redirectRoute = routePath => {
    navigate(routePath);
    setAnchorEl(null);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={clickLeftMenu}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl2}
            open={Boolean(anchorEl2)}
            onClose={() => {setAnchorEl2(null);}}>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItem button onClick={() => redirectRoute("/home")}>
                  <ListItemText primary="Home" />
                </ListItem>
                <hr />

                <ListItem button onClick={clickAnagrafica}>
                  <ListItemText primary="Anagrafiche" />
                  {openAnagrafica ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openAnagrafica} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                <ListItem button onClick={() => redirectRoute("/Anagrafica/AnagraficaC")}>
                      <ListItemText primary="Anagrafiche clienti" />
                    </ListItem>     
                  </List>
                </Collapse>

                <hr />

                <ListItem button onClick={clickOrdiniF}>
                  <ListItemText primary="Ordini fornitori" />
                  {openOrdiniF ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openOrdiniF} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
             {/*   <ListItem button onClick={() => redirectRoute("/OrdiniFornitori/Feature1")}>
                      <ListItemText primary="Feature1" />
                    </ListItem>     */}
                  </List>
                </Collapse>

                <ListItem button onClick={clickOrdiniC}>
                  <ListItemText primary="Ordini clienti" />
                  {openOrdiniC ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openOrdiniC} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
             {/*   <ListItem button onClick={() => redirectRoute("OrdiniClienti/Feature1")}>
                      <ListItemText primary="Feature1" />
                    </ListItem>     */}
                  </List>
                </Collapse>

                <ListItem button onClick={clickLotti}>
                  <ListItemText primary="Lotti" />
                  {openLotti ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openLotti} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
             {/*   <ListItem button onClick={() => redirectRoute("Lotti/Feature1")}>
                      <ListItemText primary="Feature1" />
                    </ListItem>     */}
                  </List>
                </Collapse>

                <ListItem button onClick={clickMov}>
                  <ListItemText primary="Movimenti di magazzino" />
                  {openMov ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openMov} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
             {/*   <ListItem button onClick={() => redirectRoute("/MovimentiMagazzino/Feature1")}>
                      <ListItemText primary="Feature1" />
                    </ListItem>     */}
                  </List>
                </Collapse>

                <ListItem button onClick={clickDoc}>
                  <ListItemText primary="Documenti di trasporto" />
                  {openDoc ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openDoc} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
             {/*   <ListItem button onClick={() => redirectRoute("/DocumentiTrasporto/Feature1")}>
                      <ListItemText primary="Feature1" />
                    </ListItem>     */}
                  </List>
                </Collapse>

                <ListItem button onClick={clickReport}>
                  <ListItemText primary="Report Generali" />
                  {openReport ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openReport} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
             {/*   <ListItem button onClick={() => redirectRoute("/ReportGenerali/Feature1")}>
                      <ListItemText primary="Feature1" />
                    </ListItem>     */}
                  </List>
                </Collapse>

                <ListItem button onClick={clickContoF}>
                  <ListItemText primary="Conto lavorazione a fornitore" />
                  {openContoF ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openContoF} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
             {/*   <ListItem button onClick={() => redirectRoute("/ContoFornitore/Feature1")}>
                      <ListItemText primary="Feature1" />
                    </ListItem>     */}
                  </List>
                </Collapse>

                <ListItem button onClick={clickContoC}>
                  <ListItemText primary="Conto lavorazione da cliente" />
                  {openContoC ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openContoC} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
             {/*   <ListItem button onClick={() => redirectRoute("/ContoCliente/Feature1")}>
                      <ListItemText primary="Feature1" />
                    </ListItem>     */}
                  </List>
                </Collapse>

                <ListItem button onClick={clickProd}>
                  <ListItemText primary="Prodotti & Formule" />
                  {openProd ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openProd} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
             {/*   <ListItem button onClick={() => redirectRoute("/ProdottiFormule/Feature1")}>
                      <ListItemText primary="Feature1" />
                    </ListItem>     */}
                  </List>
                </Collapse>

                <ListItem button onClick={clickList}>
                  <ListItemText primary="Listino clienti" />
                  {openList ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openList} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
             {/*   <ListItem button onClick={() => redirectRoute("/ListinoClienti/Feature1")}>
                      <ListItemText primary="Feature1" />
                    </ListItem>     */}
                  </List>
                </Collapse>

                <ListItem button onClick={clickInventario}>
                  <ListItemText primary="Inventario" />
                  {openInventario ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openInventario} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
             {/*   <ListItem button onClick={() => redirectRoute("/Inventario/Feature1")}>
                      <ListItemText primary="Feature1" />
                    </ListItem>     */}
                  </List>
                </Collapse>

                <ListItem button onClick={clickAbilitazioni}>
                  <ListItemText primary="Abilitazioni" />
                  {openAbilitazioni ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openAbilitazioni} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
             {/*   <ListItem button onClick={() => redirectRoute("/Abilitazioni/Feature1")}>
                      <ListItemText primary="Feature1" />
                    </ListItem>     */}
                  </List>
                </Collapse>

                <ListItem button onClick={clickTabS}>
                  <ListItemText primary="Tabelle di sevizio" />
                  {openTabS ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openTabS} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
             {/*   <ListItem button onClick={() => redirectRoute("/TabServizio/Feature1")}>
                      <ListItemText primary="Feature1" />
                    </ListItem>     */}
                  </List>
                </Collapse>

                <ListItem button onClick={clickTabR}>
                  <ListItemText primary="Tabelle risevate" />
                  {openTabR ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openTabR} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
             {/*   <ListItem button onClick={() => redirectRoute("/TabRiservate/Feature1")}>
                      <ListItemText primary="Feature1" />
                    </ListItem>     */}
                  </List>
                </Collapse>

                <hr />
                <ListItem button  onClick={() => redirectRoute("/Azienda")}>
                  <ListItemText primary="Azienda" />
                </ListItem>
                <hr />

                <ListItem button  onClick={() => redirectRoute("/Attivita")}>
                  <ListItemText primary="Attività" />
                </ListItem>
                <hr />

                <ListItem button  onClick={() => redirectRoute("/Operatori")}>
                  <ListItemText primary="Operatori" />
                </ListItem>
                <hr />

                <ListItem button onClick={clickMagF}>
                  <ListItemText primary="Magazzino fiscale" />
                  {openMagF ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openMagF} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
             {/*   <ListItem button onClick={() => redirectRoute("/MagazzinoFiscale/Feature1")}>
                      <ListItemText primary="Feature1" />
                    </ListItem>     */}
                  </List>
                </Collapse>
              </List>
          </Menu>

          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            <b>SoftSolutions</b>
          </Typography>

          {/* Right hand side */}

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={clickRightMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <ListItem button onClick={() => redirectRoute("/profile")}>
                  <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button onClick={() => redirectRoute("/myaccount")}>
                  <ListItemText primary="My Account" />
                </ListItem>                
                <ListItem button onClick={() => redirectRoute("/login")}>
                  <ListItemText primary="Login" />
                </ListItem>
                <ListItem button onClick={() => redirectRoute("/logout")}>
                  <ListItemText primary="Logout" />
                </ListItem>
                <ListItem button onClick={() => redirectRoute("/register")}>
                  <ListItemText primary="Register" />
                </ListItem>
              </Menu>

        </Toolbar>
      </AppBar>
    </Box>



  );
}
