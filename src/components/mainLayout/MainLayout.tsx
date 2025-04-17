import { Outlet } from 'react-router-dom';
import FixedItemOnWeb from '../fixedItemOnWeb/FixedItemOnWeb';


export default function MainLayout() {
  return (
    <>
      <FixedItemOnWeb /> 
      <Outlet /> 
    </>
  );
}