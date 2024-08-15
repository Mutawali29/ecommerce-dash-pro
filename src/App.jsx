import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Ecommerce from "./pages/Ecommerce";
import Order from "./pages/Order";
import Employers from './pages/Employers';
import Customers from './pages/Customers';
import Calendar from './apps/Calendar';
import Kanban from './apps/Kanban';
import Editor from './apps/Editor';
import Color from './apps/Color';
import Line from './charts/Line';
import AreaCharts from './charts/AreaCharts';
import Bar from './charts/Bar';
import Pie from './charts/Pie';
import Financial from './charts/Financial';
import CMapping from './charts/CMapping';
import Pyramid from './charts/Pyramid';
import Stacked from './charts/Stacked';

function App() {
  return (
    <Router>
      <div className="bg-gray-200 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Ecommerce />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/order" element={<Order />} />
          <Route path='/employers' element={<Employers/> }/>
          <Route path='/customers' element={<Customers/>} />
          <Route path='/calendar' element={<Calendar/>} />
          <Route path='/kanban' element={<Kanban/>} />
          <Route path='/editor' element={<Editor/>} />
          <Route path='/color' element={<Color/>} />  
          <Route path='/line' element={<Line/>} />  
          <Route path='/areacharts' element={<AreaCharts/>} />      
          <Route path='/bar' element={<Bar/>} />      
          <Route path='/pie' element={<Pie/>} />      
          <Route path='/financial' element={<Financial/>} />      
          <Route path='/cmapping' element={<CMapping/>} />      
          <Route path='/stacked' element={<Stacked/>} />      
          <Route path='/pyramid' element={<Pyramid/>} />      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
