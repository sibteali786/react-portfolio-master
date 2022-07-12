import './App.scss';
import {Routes,Route} from "react-router-dom"
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { MuiThemeProvider,createTheme } from '@material-ui/core';
import Skills from './components/Skills';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff'
      }
    },
    overrides: {
      MuiInputBase: {
        input: {
          background: "#115173",
          borderRadius:"0.2rem",
          padding:"1rem",
          color:"#fff",
          fontSize:"1.4rem"
        },
      },
      MuiOutlinedInput:{  
        root:{
          borderRadius:"0.2rem",
          padding:"1rem",
        }
      },
      
    },
  });
  return (
    <MuiThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='skills' element={<Skills/>} />
      </Route>
    </Routes>
    </MuiThemeProvider>
  );
}

export default App;
