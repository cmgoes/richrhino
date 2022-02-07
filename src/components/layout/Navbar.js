
import { useEffect, useState } from "react";
import links from "../../utils/links";
import Icon from "../Icon";

export default function Navbar({elements}) {
  const [drawer, setDrawer] = useState(false);
  const [screen, setScreen] = useState(null);
  const [items, setItems] = useState([
    { title: "Project", to: "#project" },
    { title: "Roadmap", to: "#roadmap" },
    { title: "Team", to: "#team" },
    { title: "FAQ", to: "#faq" },
    { title: "Terms", to: "/terms" },
    { title: "Whitepaper", to: "/whitepaper" },
  ]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", updateOnScroll);
    window.addEventListener("resize", onResize);
    onResize();
    if (typeof elements !== "undefined") {
      setItems(elements);
    }
    return () => {
      window.removeEventListener("scroll", updateOnScroll);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onResize = () => {
    if (window.innerWidth > 1200) {
      setScreen('xl');
    } else {
      setScreen('lg');
    }
  }
   
  useEffect(() => {
    if (window.location.pathname !== "/") {
      setItems([{ title: "Home", to: "/" }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname]);

  const updateOnScroll = () => {
    setScrollY(window.scrollY);
  }
  return (
    <div>
      <header className={`nav ${scrollY > 0 ? 'nav--visible' : ''}`} style={{zIndex: drawer ? '100' : ''}}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6">
              <a href="/">
                <img
                  className="nav__logo"
                  src="/images/png/logo.jpg"
                  alt="logo"
                  width="240px" style={{width: '140px'}}
                />
              </a>
            </div>
            <div className="col-6 text-end">
              <button
                onClick={() => setDrawer(!drawer)}
                className={`hamburger hamburger--emphatic ${drawer ? 'is-active' : ''}`}
                type="button"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <nav className={`nav__container ${drawer ? 'nav__container--opened' : ''}`}>
        <ul className="container">
          {items.map(item => (
            <li
              onClick={() => setDrawer(false)}
              v-for="item in items"
              key={item.title}
              className="row justify-content-center nav__item"
            >
              <a
                href={item.to}
                smoot-scroll="true"
                className="nav__link col-8 col-md-8 text-center"
                >{ item.title }
              </a>
            </li>
          ))}
          {screen && <li className="row justify-content-between nav__icons">
            {links.map((page, index) => (
              <div
                key={index}
                className="col-3 text-center"
              >
                <Icon
                  xl={screen === 'xl'}
                  lg={screen === "lg"}
                  src={page.icon}
                  link={page.site}
                ></Icon>
              </div>
            ))}
          </li>}
        </ul>
      </nav>
    </div>
  )
}