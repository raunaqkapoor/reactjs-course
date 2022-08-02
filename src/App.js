import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';

import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<AllMeetups />} />
          <Route path='/fav' element={<Favorites />} />
          <Route path='/new' element={<NewMeetup />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
