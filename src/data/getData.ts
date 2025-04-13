import { useParams } from 'react-router-dom';
import menu_data from './menu_data'; // adjust path


export const getCoursesBySubMenuTitle = () => {
    const { title } = useParams(); 
  // Find the "SCHOOL" section first
  const schoolMenu = menu_data.find((menu) => menu.title === title);

  if (!schoolMenu?.sub_menus) return [];

  // Now find the submenu under SCHOOL by its title
  const matchedSubMenu = schoolMenu.sub_menus.find(
    (sub) => sub.title === title && sub.inner_menu
  );

  // Return inner menus if available
  return matchedSubMenu?.inner_menus ?? [];
};