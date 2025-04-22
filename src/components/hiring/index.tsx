
import HeaderOne from '../../layouts/headers/HeaderOne'
import BreadcrumbEvent from '../../common/breadcrumb/BreadcrumbEvent'
import FooterOne from '../../layouts/footers/FooterOne'
import HiringArea from './HiringArea'

const Hiring = () => {
  return (
    <>
     <HeaderOne />
     <BreadcrumbEvent title="Hiring" subtitle="Hiring" />
     <HiringArea/>
     <FooterOne/>
    </>
  )
}

export default Hiring
