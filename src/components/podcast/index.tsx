
import HeaderOne from '../../layouts/headers/HeaderOne'
import BreadcrumbEvent from '../../common/breadcrumb/BreadcrumbEvent'
import PodcastArea from './PodcastArea'
import FooterOne from '../../layouts/footers/FooterOne'
import ScrollTop from '../../common/ScrollTop'

const Podcast = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbEvent title="Podcast" subtitle="Podcast" />
      <PodcastArea/>
      <FooterOne/>
      <ScrollTop />
    </>
  )
}

export default Podcast
