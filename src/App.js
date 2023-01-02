import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import About from 'pages/about/About';
import Contacts from 'pages/contacts/Contacts';
import Main from 'pages/main/main';
import News from 'pages/news/News';
import Page from 'pages/Page';
import PageNotFound from 'pages/pageNotFound/PageNotFound';
import Podcasts from 'pages/podcasts/Podcasts';
import Programs from 'pages/programs/Programs';
import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const store = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, []);

  if (store.isLoading) {
    return <div />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page content={<Main />} />} />
        <Route path="/contacts" element={<Page content={<Contacts />} />} />
        <Route path="/podcasts" element={<Page content={<Podcasts />} />} />
        <Route path="/programs" element={<Page content={<Programs />} />} />
        <Route path="/news" element={<Page content={<News />} />} />
        <Route path="/about" element={<Page content={<About />} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default observer(App);
