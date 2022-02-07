import SectionTitle from "../SectionTitle";

export default function Seen() {
  const sites = [
    {
      src: "/images/png/nft_calendar-400x400.png",
      alt: "nft-calendar",
      class: "",
      target: {
        href: "https://nftcalendar.io/event/aftp-i-whitelist/",
        title: "",
      },
    },
    {
      src: "/images/png/rarity-sniper-512x512.png",
      alt: "rarity-sniper",
      class: "",
      target: {
        href: "https://raritysniper.com/upcoming-drops?saleDate=1641682800000:",
        title: "",
      },
    },
  ];
  return (
    <section id="faq" className="container">
      <SectionTitle 
        titanium
        animate
        large
        title="AS SEEN ON"
      />
      <div data-aos="zoom-in" className="row justify-content-center">
        {sites.map((site, index) => (
          <div key={index} className="col-6 col-lg-2">
            <a href={site.target.href} className="text-center" target="_blank" rel="noreferrer">
              <img
                className={site.class}
                src={site.src}
                width="100%"
                alt={site.alt}
              />
              <p>{ site.target.title }</p>
            </a>
          </div>  
        ))}
      </div>
    </section>
  )
}