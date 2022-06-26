import Arrivals from '../../components/Arrivals/Arrivals'
import Blogs from '../../components/Blogs/Blogs'
import Featured from '../../components/Featured/Featured'
import Infomation from '../../components/Infomation/Infomation'
import Reviews from '../../components/Reviews/Reviews'
import Support from '../../components/UI/Support/Support'

const Home = () => {
  return (
    <>
      <Infomation />
      <Support />
      <Featured />
      <Arrivals />
      <Reviews />
      <Blogs />
    </>
  )
}

export default Home