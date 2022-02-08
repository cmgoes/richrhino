import SectionTitle from "../SectionTitle";

export default function Team() {
  const team = [
    {
      image: "/images/png/team/1.png",
      alt: "Rich Rhino Founder",
      text: "RichRhino",
      subtext: "Founder. Artist.",
    },
    {
      image: "/images/png/team/2.png",
      alt: "Rich Rhino Founder",
      text: "RichRhino",
      subtext: "Advisor. Crypto Investor.",
    },
    {
      image: "/images/png/team/3.png",
      alt: "RichRhino Community.",
      text: "RichRhino",
      subtext: "Project Manager.",
    },
    {
      image: "/images/png/team/4.png",
      alt: "RichRhino Dev",
      text: "RichRhino",
      subtext: "Blockchain, Core developer.",
    },
  ];
  return (
    <section id="team">
      <div data-aos="zoom-in" className="container">
        <div className="row justify-content-center">
          <SectionTitle
            titanium
            animate
            large
            title="Team"
          />
        </div>
        <div className="row team justify-content-center align-items-center">
          {team.map((tm, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-3 text-center"
            >
              <img src={tm.image} width="65%" alt={tm.alt} />
              <p className="text-center pt-3">{ tm.text }</p>
              <p className="text--small text-center text--overflow-hide">
                { tm.subtext }
              </p>
            </div>
          ))}
        </div>        
      </div>
    </section>
  )
}