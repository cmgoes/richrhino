
import { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle';
import Flipcard from '../utils/Flipcard';
import Icon from '../Icon';
import links from '../../utils/links';

export default function Description() {
  const [screen, setScreen] = useState();

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, []);

  const onResize = () => {
    if (window.innerWidth > 1200) {
      setScreen('xl');
    } else {
      setScreen('lg');
    }
  }

  return (
    <section id="description" className="container">
      <SectionTitle
        titanium
        animate
        large
        title="ABOUT US"
      ></SectionTitle>
      <div data-aos="zoom-in" className="row justify-content-center">
        <div className="col-12">
          <p className="text-center">
            Rhino is a fun project that is aimed at creating a supportive, kind and
            progressive community. We all love Rhino's Ski and we think it’s amazing that
            there are so many creators that participate in this movement. 
            Everyone on our team is a fan of Ski and thankful
            that we are able to create something fun and cool inspired by these
            legends.
          </p>
        </div>
      </div>
      <br /><br /><br />
      <div className="row justify-content-center">
        <div className="col-11 col-sm-12 border border--teal">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className="text--purple">JOIN Rhino</h1>
              <p>
                Become a member of our community and don’t miss our latest news
                and giveaways.
              </p>
            </div>
            <div className="col-12 col-md-6 align-self-center">
              <div v-if="screen" className="row">
                {links.map((page, index) => (
                  <div
                    key={index}
                    className="col-3 text-center"
                  >
                    <Icon
                      hmargin={true}
                      lg={screen === 'lg'}
                      xxl={screen === 'xl'}
                      src={page.icon}
                      link={page.site}
                    ></Icon>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <div className="row">
        <div className="col-12">
          <p>
            Let’s get this club started! Our early supporters will be
            automatically added to the WL. There are 500 WL spots available and
            all of them will be equally distributed exclusively among our Twitter
            followers and Discord members.
          </p>
        </div>
      </div>
      <br /><br /><br />
      <div className="row justify-content-center">
        <div className="col-11 col-sm-12 description__important">
          <h1 className="text-center">IMPORTANT!</h1>
          <p className="text-center">
            Please, protect yourself and pay attention to scam websites and people
            who try to impersonate us! Help the community and report any
            suspicious accounts and websites! Unfortunately, there are a lot of
            people that have no heart. In order to avoid this and protect our
            community, our team has prepared a load of proof from day 1 of
            creation. Please, DYOR and only follow official links.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 order-md-2 order-2">
          <Flipcard animate={true} interval={3000}>
          </Flipcard>
        </div>
        <div className="col-12 col-md-6 order-md-1 order-1 align-self-center">
          <p>
            Whitelisted members will have an access to presale and will be able to
            mint Rhino for .06ETH+gas. 1,111 Rich Rhino Ski Club will be available to
            mint. 
          </p>
        </div>
      </div>
      <br />
    </section>
  )
}