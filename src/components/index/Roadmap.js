import SectionTitle from "../SectionTitle";
import Roadmapcard from '../utils/Roadmapcard';

export default function Roadmap() {
  const phases = [
    {
      index: 0,
      image: { src: "/images/gif/phase_1.gif", rotate: false },
      title: "PHASE I: Minting",
      items: [
        {
          open: true,
          title: "20%",
          text: "Free nfts will be given away to 5 random Rhino holders.",
          isHtml: false,
        },
        {
          open: true,
          title: "30%",
          text: "Community Wallet established and 5 ETH added. (development and expanding team)",
          isHtml: false,
        },
        {
          open: true,
          title: "50%",
          text: "10 ETH added to the Community Wallet.",
          isHtml: false,
        },
        {
          open: true,
          title: "70%",
          text: "We'll be raffling $5,000 for a week.",
          isHtml: false,
        },
        {
          open: true,
          title: "100%",
          text: 'An additional 10 ETH will be added to the Community Wallet.</br> <span class="text--inherit-size text--purple">Time four our $500,000 GRAND PRIZE GIVEAWAY!!! FIVE LUCKY HOLDERS</span> will be awarded with <span class="text--purple text--inherit-size">$100,000</span> in ETH each when the collection is completely sold out.',
          isHtml: true,
        },
      ],
    },
    {
      index: 1,
      image: { src: "/images/gif/phase_2.gif", rotate: false },
      title: "PHASEII:",
      text: "Once all our cool Rhino’s are minted.",
      items: [],
    },
    {
      index: 2,
      image: { src: "/images/gif/phase_3.gif", rotate: false },
      title: "PHASEIII: CUSTOM Rhinos",
      text: "Holders of 10 or more Rhinos will receive a custom 1 of 1 NFT designed specifically for them. Holders will be able to pick exclusive traits and create a dream Rhinos. Submissions will be available through verifying the ownership and filling out a form.",
      items: [],
    },
    {
      index: 3,
      image: { src: "/images/gif/phase_4.gif", rotate: false },
      title: "PHASE IV: CUSTOM Rhinos",
      text: "Holders of 10 or more Rhinos will receive a custom 1 of 1 NFT designed specifically for them. Holders will be able to pick exclusive traits and create a dream Rhinos. Submissions will be available through verifying the ownership and filling out a form.",
      items: [],
    },
  ]
  return (
    <section id="roadmap" className="container">
      <SectionTitle
        titanium
        animate
        large
        title="ROADMAP"
      />
      <div className="row">
        <div data-aos="zoom-in" className="col-12">
          <p className="text-center">
            We are here for the long run. New projects, charities, features,
            collabs and events are coming.
          </p>
          <p className="text-center">
            Being part of the Rich Rhino Ski Club will give you the right to an
            annual bonus based on the number of NFTs (from our collection) you
            possess (NFT giveaways, ETH, graphic cards, phones, certificates).
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
          {phases.map(phase => (
            <Roadmapcard key={phase.index} data={phase} />
          ))}
        </div>
      </div>
      <br /><br /><br />      
      <div className="row justify-content-center">
        <p className="text-center">
          Follow us and stay tuned. It’s just the beginning!
        </p>
      </div>
    </section>
  )
}