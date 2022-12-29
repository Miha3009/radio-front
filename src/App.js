import Main from './pages/main/main';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Page from './pages/page';
import PageNotFound from './pages/pageNotFound/pageNotFound';
import Contacts from './pages/contacts/contacts';
import Podcasts from './pages/podcasts/podcasts';
import Programs from './pages/programs/programs';
import About from './pages/about/about';
import News from './pages/news/news';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page content={<Main />}/>}/>
        <Route path="/contacts" element={<Page content={<Contacts />}/>}/>
        <Route path="/podcasts" element={<Page content={<Podcasts />}/>}/>
        <Route path="/programs" element={<Page content={<Programs />}/>}/>
        <Route path="/news" element={<Page content={<News />}/>}/>
        <Route path="/about" element={<Page content={<About />}/>}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
