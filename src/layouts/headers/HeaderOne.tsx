import { useState } from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import Search from "../../common/Search";
import UseSticky from "../../hooks/UseSticky";
import OffCanvas from "../../common/OffCanvas";
import MarqueeOne from "../../common/MarqueeOne";

const HeaderOne = () => {
  const { sticky } = UseSticky();
  const [open, setOpen] = useState(false);
  const [openCanvas, setOpenCanvas] = useState(false);

  return (
    <>
      <MarqueeOne />

      <div>
        <header
          id="header-stick"
          className={`header-1 ${
            sticky
              ? "!top-[15px] fixed  !animate-none !transition-none"
              : "absolute !top-[85px] !animate-none"
          } !left-1/2 -translate-x-1/2  z-[200] !w-[95%] rounded-full !bg-white/50 shadow-[0_4px_12px_-1px_rgba(0,0,0,0.1)] backdrop-blur-[15px] border border-white/30 !animate-none`}
        
        >
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main !p-[0px] !gap-[5px] !justify-between">
                <div className="header-left max-2xl:!max-w-[18%]">
                  <div className="logo">
                    <Link to="/" className="header-logo">
                      <img
                        className="main-logo h-[60px]"
                        src="/assets/iics_image/iics_logo_main.webp"
                        alt="logo-img"
                        height="60"
                      />
                    </Link>
                  </div>
                </div>

                <div className="header-right d-flex justify-content-end align-items-center !gap-[60px]">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <NavMenu />
                      </nav>
                    </div>
                  </div>

                 

                  {/* <div className="header-search relative">
                    <button
                    
                      className="d-flex align-items-center search-toggle"
                    >
                      <i className="fas fa-search"></i>
                    </button>
                    <input type="text" className="bg-[#2f3640] h-[45px] rounded-[40px] p-[10px] absolute w-[250px] right-0 top-[-13px]" />
                  </div> */}

                  <div className="header__hamburger d-xl-none my-auto">
                    <div className="sidebar__toggle">
                      <div
                        className="header-bar"
                        onClick={() => setOpenCanvas(!openCanvas)}
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-button min-l:!hidden">
                    <Link
                      to="/register"
                      className="theme-btn yellow-btn !px-[16px] !py-[12px] "
                    >
                      Register Now
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      <Search open={open} setOpen={setOpen} />
      <OffCanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />
    </>
  );
};

export default HeaderOne;
