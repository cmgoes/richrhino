import { useEffect, useState } from "react";
import Sectiontitle from '../SectionTitle';
import Slider from "react-slick";

export default function Project() {
  const [baseURI] = useState("/images/png/gallery");
  const [settingsGO, setSettingsGO] = useState({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
  });
  const [settingsGT, setSettingsGT] = useState({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    rtl: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
  });

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onResize = () => {
    let width = document.body.clientWidth;
    if (width < 380) {
      setSettingsGT({
        ...settingsGT,
        slidesToShow: 1,
        speed: 6000
      });
      setSettingsGO({
        ...settingsGO,
        slidesToShow: 1,
        speed: 6000
      });
    } else if (width < 700) {
      setSettingsGT({
        ...settingsGT,
        slidesToShow: 3,
        speed: 4000
      });
      setSettingsGO({
        ...settingsGO,
        slidesToShow: 3,
        speed: 4000
      });
    } else {
      setSettingsGT({
        ...settingsGT,
        slidesToShow: 4,
        speed: 4000
      });
      setSettingsGO({
        ...settingsGO,
        slidesToShow: 4,
        speed: 4000
      });
    }
  }

  return (
    <section id="project">
      <div className="container">
        <Sectiontitle
          animate
          titanium
          title="WELCOME TO THE Rich Rhino Ski Club"
        ></Sectiontitle>
      </div>

      <div data-aos="zoom-in">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="text-center">
                A collection of 8,888 wealthy Rhino’s each with their unique status symbol. 
                unique digital collectibles living on the Ethereum blockchain. 
                Their mission is to maintain the hierachy in society while living a lavish lifestyle.
              </p>
              <p className="text-center">
                A Rhino NFT grants access to an exclusive member's only club, the Ski Lounge. 
                Membership has a growing list of perks such as access to an exclusive Rhino-only network, 
                IRL ski vacation meetups, challenges, and more!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Slider {...settingsGO}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => (
                  <img
                    key={index}
                    src={`${baseURI}/${index}.png`}
                    alt=""
                  />
                ))}
              </Slider>
            </div>
            <div className="col-12">
              <Slider {...settingsGT}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => (
                  <img
                    key={index}
                    src={`${baseURI}/${index}.png`}
                    alt=""
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}