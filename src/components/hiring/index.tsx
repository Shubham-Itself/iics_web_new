
import HeaderOne from '../../layouts/headers/HeaderOne'
import BreadcrumbEvent from '../../common/breadcrumb/BreadcrumbEvent'
import FooterOne from '../../layouts/footers/FooterOne'
import HiringArea from './HiringArea'
import ScrollTop from '../../common/ScrollTop'

const Hiring = () => {
  return (
    <>
     <HeaderOne />
     <BreadcrumbEvent title="Hiring" subtitle="Hiring" />
     <HiringArea/>
     <FooterOne/>
     <ScrollTop />
    </>
  )
}

export default Hiring
