import { Link } from "react-router-dom";
import menu_data from "../../data/menu_data";
import React, { useEffect, useState } from "react";

const NavMenu = () => {

	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

  // const slugify = (text: string) => 
  //   text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop);
		return () => window.removeEventListener("scroll", checkScrollTop);
	}, []);
  return (
    <>
      <ul>
        {menu_data.map((item, i) => (
          <li className="has-dropdown menu-thumb " key={i}>
            <Link to={item.link} className="!text-[14px]">
              {/* <span className="head-icon">
                <i className={item.icon}></i>
              </span> */}
              {item.title}
              {item.img_dropdown || item.has_dropdown ? (
                <i className="fas fa-chevron-down"></i>
              ) : null}
            </Link>
            {item.img_dropdown && (
              <ul className="submenu has-homemenu !w-auto !left-0  border border-white/30 rounded-br-[10px] rounded-bl-[10px]">
                <li>
                  <div className="homemenu-items">
                    <div className="row">
                      {item.sub_menus?.map((sub_item, sub_index) => (
                        <React.Fragment key={sub_index}>
                          {sub_item?.link && !sub_item.inner_menu && (
                            <li >
                              <Link to={sub_item.link} className="!text-[14px]">{sub_item.title}</Link>
                            </li>
                          )}

                          {sub_item?.inner_menu && sub_item?.inner_menus && (
                            <li className="has-dropdown">
                              <Link to="#" className="!text-[14px]">
                                {sub_item.title}
                                <i className="fas fa-angle-right"></i>
                              </Link>
                              <ul className="submenu" style={{insetInlineStart : '111%'}}>
                                {sub_item.inner_menus.map(
                                  (innerMenu, index) => (
                                    <li key={index} >
                                      <Link to={innerMenu.link || "#"} className="!text-[14px]">
                                        {innerMenu.title }
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </li>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            )}
            {item.has_dropdown && (
              <ul className="submenu border border-white/30 rounded-br-[10px] rounded-bl-[10px] capitalize !p-[20px]">
                {item.sub_menus?.map((sub_item, sub_index) => (
                  <React.Fragment key={sub_index}>
                    {sub_item?.link && !sub_item.inner_menu && (
                      <li>
                        <Link to={sub_item.link} className="!text-[14px]">{sub_item.title}</Link>
                      </li>
                    )}

                    {sub_item?.inner_menu && sub_item?.inner_menus && (
                      <li className="has-dropdown">
                        <Link to={sub_item.link || ''} className="!text-[14px]">
                          {sub_item.title}
                          <i className="fas fa-angle-right"></i>
                        </Link>
                        <ul className="submenu" style={{insetInlineStart : '112%'}}>
                          {sub_item.inner_menus.map((innerMenu, index) => (
                            <li key={index} onClick={scrollTop}>
                              <Link to={`/courses-details/${encodeURIComponent(innerMenu.title?.toString() || '')}`} state={{
                                titleCourse: innerMenu.title,
                                mentor: innerMenu.mentorName,
                                duration:innerMenu.duration,
                                courseType:innerMenu.courseType,
                                fees:innerMenu.fees,
                                courseInfo:innerMenu.courseInfo,
                                studentsSeat:innerMenu.studentsSeat,
                                enrollmentDeadLine:innerMenu.enrollmentDeadLine,
                                courseStartDate:innerMenu.courseStartDate,
                                industryMentors: innerMenu.industryMentors
                              }} className="!text-[14px]">
                                {innerMenu.title }
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
