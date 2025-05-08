import { useState } from "react";
import BreadcrumbCourses from "../../common/breadcrumb/BreadcrumbCourses";
// import MarqueeOne from "../../common/MarqueeOne";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import RegisterForm from "./RegisterForm";

const Register = () => {
  const [activeScreen, setActiveScreen] = useState(1);
  return (
    <>
      {/* <Preloader /> */}
      <HeaderOne />
      <BreadcrumbCourses title="Register" subtitle="Register" />
      {activeScreen === 1 && <RegisterForm setActiveScreen={setActiveScreen} />}
      {activeScreen === 2 && (
        <div className="flex flex-col items-center py-[100px]">
          <p className="text-[24px] mb-[20px]">
            Please scan & pay 2000 registration fees
          </p>
          <img
            src="/assets/iics_image/paymentQr.png"
            className="w-[500px] "
            alt="payment qr"
          />
        </div>
      )}

      {/* <MarqueeOne style_2={true} /> */}
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default Register;
