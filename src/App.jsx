import './css/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { Concept } from './pages/Concept';
import { Menu } from './pages/Menu';
import { Event } from './pages/Event';
import { Access } from './pages/Access';
import { Contact } from './pages/Contact';
import { NewsList } from './pages/NewsList';
import { NewsDetail } from './pages/NewsDetail';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/concept" element={<Concept />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/event" element={<Event />} />
          <Route exact path="/access" element={<Access />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/newsList/:pageId" element={<NewsList />} />
          <Route exact path="/news/:id" element={<NewsDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
