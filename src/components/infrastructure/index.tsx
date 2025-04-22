
import HeaderOne from '../../layouts/headers/HeaderOne'
import BreadcrumbEvent from '../../common/breadcrumb/BreadcrumbEvent'
import InfrastructureArea from './InfrastructureArea'

const Infrastructure = () => {
  return (
  <>
   <HeaderOne />
   <BreadcrumbEvent title="Infrastructure" subtitle="Infrastructure" />
   <InfrastructureArea/>
  </>
  )
}

export default Infrastructure
