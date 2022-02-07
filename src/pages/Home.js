import { Fragment } from 'react';
import Loader from '../components/utils/Loader';
import Banner from '../components/index/Banner';
import Project from '../components/index/Project';
import Countdown from '../components/index/Countdown';
import Description from '../components/index/Description';
import Roadmap from '../components/index/Roadmap';
import Faq from '../components/index/Faq';
import Team from '../components/index/Team';
import Seen from '../components/index/Seen';

export default function Home() {
  return (
    <Fragment>
      <Loader />
      <Banner />
      <Project />
      <Countdown />
      <Description />
      {/* <OneOne /> */}
      <Roadmap />
      <Faq />
      <Team />
      <Seen />
    </Fragment>
  )
}