import { Routes, Route, Navigate } from 'react-router-dom';
import Character from '../pages/Character';
import Home from '../pages/Home';

const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/shinobis' element={<Home />} />
      <Route path='/shinobis/:id' element={<Character />} />
      <Route path='*' element={<Navigate replace to='/shinobis' />} />
    </Routes>
  );
}

export default RoutesMain;
