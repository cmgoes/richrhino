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
          text: "1 ETH each will be given away to 5 random AFTP holders.",
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
          title: "60%",
          text: "10 ETH added to the Community Wallet.",
          isHtml: false,
        },
        {
          open: true,
          title: "80%",
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
      image: { src: "/images/png/phase_2.png", rotate: true },
      title: "PHASEII: $BOOZE",
      text: "Once all our cool AFTP’s are minted, we’ll start working on the smart contract that will give each holder an opportunity to earn passive income through staking. 1 AFTP will generate 1$BOOZE a day with real world use. Join our Discord community so you don’t miss all of our updates and announcements.",
      items: [],
    },
    {
      index: 2,
      image: { src: "/images/gif/phase_3.gif", rotate: false },
      title: "PHASEIII: CUSTOM AFTP",
      text: "Holders of 10 or more AFTP will receive a custom 1 of 1 NFT designed specifically for them. Holders will be able to pick exclusive traits and create a dream AFTP. Submissions will be available through verifying the ownership and filling out a form.",
      items: [],
    },
    {
      index: 3,
      image: { src: "/images/gif/phase_4.gif", rotate: false },
      title: "PHASE IV: COMMUNITY VAULT. DAO ",
      text: "DAO will be established to govern the community wallet. 1 AFTP=1 VOTE. DAO will decide on any future investments, charities, fractionalized ownership of Blue Chip NFT purchases and distribution among holders. We will set up partnerships with other projects, prioritizing new projects and new artists. DAO will be in charge of the creative  process behind these future collaborations.",
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
            Being part of the After Party Ape Club will give you the right to an
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
      {/* <div className="row justify-content-center">
        <div className="col-12 col-md-6 text-center">
          <a className="btn btn--purple text--medium btn--active" href="/whitepaper">
            Open Whitepaper</a
          >
        </div>
      </div>
      <br /> */}
      <div className="row justify-content-center">
        <p className="text-center">
          Follow us and stay tuned. It’s just the beginning!
        </p>
      </div>
    </section>
  )
}