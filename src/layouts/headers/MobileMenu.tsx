import React, { useState } from "react";
import menu_data from "../../data/menu_data";
import { Link } from "react-router-dom";

 

const MobileMenu = () => {

  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  const [navTitle2, setNavTitle2] = useState("");
  //openMobileMenu
  const openMobileMenu2 = (menu: string) => {
    if (navTitle2 === menu) {
      setNavTitle2("");
    } else {
      setNavTitle2(menu);
    }
  };
  const getNestedLink = (nested: { title?: string; link?: string }) => {
	const courseTitles = [
	  'Digital Content Creation',
	  'Events And Experiential Media',
	  'Performing Arts and Media Management',
	  'Hair, Makeup & Prosthetics',
	  'Sound Recording and Sound Design',
	  '3D Game Art',
	  'Advance Gaming and Extended Reality (XR) Innovations',
	  'Journalism, PR, Image Strategization & Brand Custodianship Program'
	];
  
	if (courseTitles.includes(nested.title || '')) {
	  return `/courses-details/${encodeURIComponent(nested.title || '')}`;
	}
	return nested.link || '';
  };
	return (
		<>
			<div className="mean-bar">
				<a href="#nav" className="meanmenu-reveal">
					<span>
						<span>
							<span></span>
						</span>
					</span>
				</a>
				<nav className="mean-nav">
					<ul>
            {menu_data.map((item, i) => (
              <li key={i} className={item.has_dropdown ? "has-dropdown" : ""}>								
							<Link to={item.link}>  
								{item.title} 
							</Link>
							<ul className="submenu" style={{ display: navTitle === item.title ? "block" : "none", }}>
                {item?.sub_menus?.map((inner_item, index) => (
                 <React.Fragment key={index}>
									{inner_item.title && 
									<>
									
									<li>
								 <Link to={getNestedLink(inner_item)}>{inner_item.title}</Link>
								 {inner_item.inner_menu ? 
									<a
									className={`mean-expand ${inner_item?.title === navTitle2 ? "mean-clicked" : ""}`}
									href='#'
									onClick={(e) => {
									  // Prevent routing if icon was clicked
									  if ((e.target as HTMLElement).tagName === "I") {
										e.preventDefault();
									  }
									}}
								  >
									<i
									  className="far fa-plus"
									  onClick={() => openMobileMenu2(inner_item?.title ?? "")}
									></i>
								  </a>
									: null              
								}
							 </li>
							 {inner_item.inner_menu && inner_item.inner_menus && (
      <li>
        <ul
          className="submenu"
          style={{ display: navTitle2 === inner_item.title ? "block" : "none" }}
        >
          {inner_item.inner_menus.map((nested, idx) => (
            <li key={idx}>
              <Link to={
				 [
					"Shri Jayant Chaudhary",
					"Shri Atul Kumar Tiwari",
					"Shri Ved Mani Tiwari",
				  ].includes(nested.title ?? '')
					? `/details/${encodeURIComponent(nested.title ?? '')}?from=message`
					: nested.link || "#"



			  }>{nested.title}</Link>
            </li>
          ))}
        </ul>
      </li>
    )}
									
									</>
								
							}
                              
                 </React.Fragment>
                )) } 
							</ul>
              {item.has_dropdown || item.img_dropdown ? 
							<a className={`mean-expand ${item?.title === navTitle ? "mean-clicked" : ""}`} href="#" onClick={() => openMobileMenu(item?.title ?? "")}>
								<i className="far fa-plus"></i>
							</a>
              : null              
            }
						</li>

            ))} 
					</ul>
				</nav>
			</div>
		</>
	);
};

export default MobileMenu;
