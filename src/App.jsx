import { ThemeProvider } from 'styled-components';
import { Route,Routes } from 'react-router-dom'
import theme from "./utils/constants/theme";
import HomePage from './pages/Home/HomePage';
import ProvinsiPage from "./pages/Provinsi/ProvinsiPage";

function App() {
  return (
    <>
     <ThemeProvider theme={theme}>
        <Routes>
            <Route path='/' element={ <HomePage /> }></Route>
            <Route path='/covid/provinsi' element={ <ProvinsiPage /> }></Route>
        </Routes>
     </ThemeProvider>
    </>
  );
}

export default App;
