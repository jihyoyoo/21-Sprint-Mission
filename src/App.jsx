import './App.css';
import { Routes, Route } from 'react-router-dom';
import UsedItems from './pages/UsedItems';
import { BrowserRouter } from 'react-router-dom';
import AddItem from './pages/AddItem';
import CommunityBoard from './pages/CommunityBoard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommunityBoard />}/>
        <Route path="/items" element={<UsedItems />}/>
        <Route path="/additem" element={<AddItem />}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
