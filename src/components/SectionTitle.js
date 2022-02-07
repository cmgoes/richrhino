import { useState } from "react"

export default function SectionTitle({imagelarge, large, image, title, titanium, animate, verticalmargin}) {
  const [style] = useState({margin: `${verticalmargin}em 0 3em 0`});
  return (
    <div className="section" style={style}>
      <div className="section__container">
        <h1
          className={`text-center title--purple-glow ${large ? 'text--large' : ''} ${animate ? 'title--animate' : ''} ${titanium ? 'title--background' : ''}`}
        >
          { title }
        </h1>
      </div>
    </div>
  )
}