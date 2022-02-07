import React from "react";
import Icon from "../Icon";
import links from "../../utils/links";

export default function Footer() {
  return (
    <div className="container footer">
      <div className="hzl"></div>

      <div className="row justify-content-center">
        <div className="col-4 align-self-center">
          <a href="/terms">
            <span className="text--small">Rich Rhino Terms &amp; Conditions</span>
          </a>
        </div>
        <div className="col-4 text-center align-self-center">
          <img className="footer__icon" src="/images/png/logo.jpg" alt="logo" />
        </div>
        <div className="col-4 d-flex justify-content-end">
          {links.map((page, index) => (
            <Icon
              hmargin={true}
              key={index}
              md
              src={page.icon}
              link={page.site}
            ></Icon>
          ))}
        </div>
      </div>
    </div>
  )
}