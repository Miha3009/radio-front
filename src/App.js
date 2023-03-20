import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import About from 'pages/about/about';
import Contacts from 'pages/contacts/contacts';
import Main from 'pages/main/main';
import News from 'pages/news/news';
import NewsList from 'pages/news/NewsList';
import Page from 'pages/page';
import PageNotFound from 'pages/pageNotFound/pageNotFound';
import Podcast from 'pages/podcasts/Podcast';
import PodcastList from 'pages/podcasts/PodcastList';
import Programs from 'pages/programs/programs';
import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const userStore = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      userStore.checkAuth()
    }
  }, [userStore]);

  if (userStore.isLoading) {
    return <div />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page content={<Main />} />} />
        <Route path="/contacts" element={<Page content={<Contacts />} />} />
        <Route path="/podcasts" element={<Page content={<PodcastList page={1} />} />} exact />
        <Route path="/podcasts/page/:id" element={<Page content={<PodcastList />} />} exact />
        <Route path="/podcasts/:id" element={<Page content={<Podcast />} />} />
        <Route path="/programs" ex element={<Page content={<Programs />} />} />
        <Route path="/news" element={<Page content={<NewsList page={1} />} />} exact />
        <Route path="/news/page/:id" element={<Page content={<NewsList />} />} exact />
        <Route path="/news/:id" element={<Page content={<News />} />} />
        <Route path="/about" element={<Page content={<About />} />} />
        <Route path="*" element={<Page content={<PageNotFound />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default observer(App);
