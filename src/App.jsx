import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { Route,Routes } from 'react-router-dom'
import theme from "./utils/constants/theme";
import store from './store';
import HomePage from './pages/Home/HomePage';
import ProvinsiPage from "./pages/Provinsi/ProvinsiPage";
import AboutPage from './pages/About/AboutPage';

function App() {
  return (
    <>
        <Provider store={store}>
            <ThemeProvider theme={theme} store={store}>
                <Routes>
                    <Route path='/' element={ <HomePage /> }></Route>
                    <Route path='/covid/provinsi' element={ <ProvinsiPage /> }></Route>
                    <Route path='/covid/about' element={ <AboutPage /> }></Route>
                </Routes>
            </ThemeProvider>
        </Provider>
    </>
  );
}

export default App;
