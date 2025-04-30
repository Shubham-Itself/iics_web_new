
import HeaderOne from '../../layouts/headers/HeaderOne'
import BreadcrumbEvent from '../../common/breadcrumb/BreadcrumbEvent'
import InfrastructureArea from './InfrastructureArea'

import ScrollTop from '../../common/ScrollTop'

const Infrastructure = () => {
  return (
  <>
   <HeaderOne />
   <BreadcrumbEvent title="Infrastructure" subtitle="Infrastructure" />
   <InfrastructureArea/>
   <ScrollTop />
  </>
  )
}

export default Infrastructure
