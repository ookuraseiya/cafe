import './css/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './components/items/Main';
import { ItemConcept } from './components/items/ItemConcept';
import { ItemMenu } from './components/items/ItemMenu';
import { ItemEvent } from './components/items/ItemEvent';
import { ItemAccess } from './components/items/ItemAccess';
import { ItemContact } from './components/items/ItemContact';
import { NewsDetail } from './components/items/NewsDetail';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/items/concept" element={<ItemConcept />} />
          <Route exact path="/items/menu" element={<ItemMenu />} />
          <Route exact path="/items/event" element={<ItemEvent />} />
          <Route exact path="/items/access" element={<ItemAccess />} />
          <Route exact path="/items/contact" element={<ItemContact />} />
          <Route exact path="/items/news/:id" element={<NewsDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
