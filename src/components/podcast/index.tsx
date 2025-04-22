
import HeaderOne from '../../layouts/headers/HeaderOne'
import BreadcrumbEvent from '../../common/breadcrumb/BreadcrumbEvent'
import PodcastArea from './PodcastArea'
import FooterOne from '../../layouts/footers/FooterOne'

const Podcast = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbEvent title="Podcast" subtitle="Podcast" />
      <PodcastArea/>
      <FooterOne/>
    </>
  )
}

export default Podcast
