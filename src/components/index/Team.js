import SectionTitle from "../SectionTitle";

export default function Team() {
  const team = [
    {
      image: "/images/png/team/JANE.png",
      alt: "AFTP Yolo",
      text: "JANE",
      subtext: "Legendary AFTP Founder. Artist.",
    },
    {
      image: "/images/png/team/Thomas.png",
      alt: "AFTP Bag",
      text: "THOMAS",
      subtext: "Advisor. Crypto Investor.",
    },
    {
      image: "/images/png/team/nharpa.png",
      alt: "AFTP Community.",
      text: "NHARPA",
      subtext: "AFTP Hero, Project Manager.",
    },
    {
      image: "/images/png/team/whitewolf.png",
      alt: "AFTP Dev",
      text: "WhiteWolf",
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
              <p className="text-center">{ tm.text }</p>
              <p className="text--small text-center text--overflow-hide">
                { tm.subtext }
              </p>
            </div>
          ))}
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <br /><br />
            <p className="text--small text-center">
              *We are not affiliated with the Bored Ape Yacht Club.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}