import Home from "./pages/Home";
import {Route,Routes} from 'react-router-dom'
import CreateMovie from "./pages/Movie/Create";
import NowPlayingMovie from "./pages/Movie/NowPlaying";
import PopularMovie from "./pages/Movie/Popular";
import TopRatedMovie from "./pages/Movie/TopRated";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle.js";
import theme from "./utils/constants/theme.js";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/create" element={<CreateMovie />} />
          <Route path="/movie/popular" element={<PopularMovie />} />
          <Route path="/movie/now" element={<NowPlayingMovie />} />
          <Route path="/movie/top" element={<TopRatedMovie />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App
