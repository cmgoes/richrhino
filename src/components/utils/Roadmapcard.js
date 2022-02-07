import { useState } from "react";

export default function Roadmapcard({data}) {
  const [isReverse] = useState(data.index % 2 === 0);
  return (
    <div
      data-aos="zoom-in"
      className={`rd__card ${isReverse ? 'rd__card--reverse' : ''}`}
    >
      <div className="rd__blank">
        <img
          className={data.image.rotate ? 'img--rotate' : ''}
          src={data.image.src}
          alt="phase images"
        />
      </div>
      <div className="rd__icon">
        <div className="rd__line"></div>
      </div>
      <div className="rd__content container">
        <div className="row">
          <div className="col-12">
            <h2>{ data.title }</h2>
          </div>
        </div>
        <div className="rd__items">
          <div className="row">
            <div className="col-12">
              <p className="text--medium">{ data.text }</p>
            </div>
          </div>
          {data.items.map((item, ix) => (
            <div
              className={`rd__item ${item.open ? 'rd__item--open' : ''}`}
              key={ix}
            >
              <div className="row">
                <div className="col-12">
                  <span className="text--purple">{ item.title }</span>
                </div>
              </div>
              <div className="rd__icontent">
                {!item.isHtml && <p className="text--medium">{ item.text }</p>}
                {item.isHtml && <p dangerouslySetInnerHTML={{
                  __html: item.text
                }}></p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}