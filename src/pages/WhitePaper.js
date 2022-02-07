import Slider from "react-slick";
import SectionTitle from "../components/SectionTitle";
import Loader from "../components/utils/Loader";

export default function WhitePaper() {
  const images = [
    {
      src: "/images/png/whitepaper/1.png",
      text: "Manage your layers",
    },
    {
      src: "/images/png/whitepaper/2.png",
      text: "Create individual groups for your collection",
    },
    {
      src: "/images/png/whitepaper/3.png",
      text: "Create individual groups for your collection",
    },
    {
      src: "/images/png/whitepaper/4.png",
      text: "Exclude conflicting traits from each other",
    },
    {
      src: "/images/png/whitepaper/5.png",
      text: "Generate your collection",
    },
    {
      src: "/images/png/whitepaper/6.png",
      text: "Preview all images and metadata",
    },
    {
      src: "/images/png/whitepaper/7.png",
      text: "Inspect image in full size",
    },
    {
      src: "/images/png/whitepaper/8.png",
      text: "Inspect statistics for each used trait",
    },
  ];
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 8000,
    autoplay: true,
    rtl: false,
  }
  return (
    <div id="terms" className="container">
      <Loader></Loader>
      <div className="row justify-content-center">
        <div className="col-12">
          <SectionTitle titanium animate title="THE EVOLUTION"></SectionTitle>
          <div className="row">
            <div className="col-12 col-lg-6 order-2 oder-lg-1">
              <p>
                The After Party Ape Club (AFTP) is a collection of 8,420 randomly
                generated Apes that made it to the After Party, and are chilling
                in the ERC-721 lounge on the Ethereum Blockchain. Each AFTP has
                unique and rare features, including hair, eyes, mouth,
                accessories, clothes, and some special rarities. And yes, we
                invited the ladies to boys!
              </p>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 align-self-center">
              <img src="/images/jpg/whitepaper/2.jpg" width="100%" alt="" />
            </div>
          </div>
          <br />
          <p>
            We are hardworking, passionate and dedicated to our work. We are also
            a group of audiophiles and music geeks who love to attend jam parties
            - some of our fellas even play in bands. We all love to party and
            enjoy ourselves when we aren’t working, and it sucks when the evening
            ends, so this is where we came up with the idea - AFTER PARTY!!!
          </p>
        </div>
        <div className="col-12">
          <SectionTitle titanium animate title="Introduction"></SectionTitle>
          <p>
            At AFTP, we understand that the single most important part of a
            successful NFT collection or project is the force behind it. We have
            assembled a team of Developers and other top-tier professionals and
            assigned each of them a specific role. Rest assured, we are a multi
            disciplined cross-functional team with backgrounds in finance,
            technology and the gaming industry. We have brought together an
            amazing Team from all corners of the world. From Canada to Moldova,
            Germany, Belarus, and Russia we have spent the time and resources to
            find the best people, with the best skills, to make this project a
            success. Most importantly, every member of our Team understands our
            goals and our mission and has the passion and dedication it requires
            to turn our Vision into reality.
          </p>
        </div>
        <div className="col-12">
          <SectionTitle titanium animate title="CORE VALUES"></SectionTitle>
          <p className="text--purple">Creativity</p>
          <p>
            You won’t see any repetitive traits in the AFTP collection. Each trait
            is designed in order to create a truly unique After Party vibe. Jane
            has spent over 700 hours drawing, making sure that each and every
            trait is unique and that no two AFTP’s are alike.
          </p>

          <p className="text--purple">Transparency</p>
          <p>
            For our team, building a strong community is the most exciting and
            rewarding part of this process. We are excited about connecting with
            new people in the NFT community and creating something awesome
            together. We will keep you updated on our progress every step of the
            way, and we’ll let you know about any future collaborations or
            partnerships as they evolve.
          </p>

          <p className="text--purple">Professionalism</p>
          <p>
            We have assembled a team of professionals that take pride in
            everything they do. We do not like to pat ourselves on the back and
            give empty promises. We understand that investors want to make money,
            and we hold ourselves responsible and accountable for making sure that
            we are doing what’s best for the community. We are not just talkers,
            we say what we do, and do what we say.
          </p>

          <p className="text--purple">Dedication</p>
          <p>
            We are addicted to our course and the words “I can’t” do not exist in
            our vocabulary. Each member of our Team understands the time, energy
            and commitment to take AFTP to the top. We work long hard hours, day
            in and day out behind the scenes to make sure that your expectations
            are being met and we are fulfilling our obligations. We are here to
            reassure you that your decision to join AFTP was the right one!
          </p>
        </div>
        <div className="col-12">
          <SectionTitle titanium animate title="TECHNOLOGY"></SectionTitle>
          <br />
          <p>
            The foundation of every NFT collection is its technology and security.
            We have utilized our team of 4 Developers to construct the entire
            ERC-721 layout, web development, and security. Our Devs are more than
            capable of taking care of all our needs, and our long-standing
            relationship built on trust and accuracy will ensure the safe, secure
            and flawless deployment of our Smart Contract. <br />
            The AFTP collection is an ERC721 Standard NFT collection issued on the
            Ethereum blockchain network with Metamask &amp; Wallet connect
            protocol support.
          </p>
        </div>
        <div className="col-12">
          <p className="text--purple text-center">Website</p>
          <p>
            Our Website employs the latest web3 technologies: Runs on a CDN (Aws)
            with DDoS attack protection Vue.js as front-end framework, light,
            fast, and resilient, Web3.js + Truffle.js
          </p>

          <p>
            The minting process will work by using your web browser directly on
            our website with Metamask wallet or through any other wallet that
            implements the wallet connect protocol.
          </p>

          <p>
            Surprise Reveal - We have also developed our own fully function
            customizable minting application and we will be releasing it for sale
            under licensed agreement with proceeds going directly to the community
            wallet) forward, improving our website and social media presence, and
            we will update the community every step of the way.
          </p>
        </div>
        <div className="col-12">
          <SectionTitle titanium animate title="DATA PROVENANCE"></SectionTitle>
          <p>
            DEFINITION - Data Provenance is the field of recording the history of
            data, from its inceptions to various stages of the data life cycle.
            Thus, data provenance helps provide a detailed picture of how the data
            was collected, where it was stored and how it was used. This record
            essentially forms an audit trail for the data itself. For each AFTP
            image, the content is hashed using Keccak algorithm. A combined
            string is obtained by concatenating Keccak of each one in a specific
            order. The final proof is obtained by Keccak hashing this combined
            string, finally, this is the provenance record stored on the smart
            contract.
          </p>
          <br />
          <p className="text-center">
            Every AFTP Token ID is assigned to an artwork image from the initial
            sequence with this formula:
          </p>
          <p className="text-center ">(tokenId + startingIndex) % 8420 → Initial Sequence Index</p>
          <p className="text--purple text-center">IPFS for metadata storage</p>
          <p>
            IPFS stands for Interplanetary File System, a decentralized File
            Storage solution. It should be noted that once a file is stored in the
            IPFS cannot be altered or destroyed, by anyone, not even the creator.
          </p>
          <div className="col-12">
            <SectionTitle
              titanium
              animate
              small
              title="Media, Content Creation and Web Design"
            ></SectionTitle>

            <p>
              Social media is very important in the NFT community, and the
              importance of marketing, and the influence it has, can never be
              underestimated. Our web design and concept is the vision of our
              Artist, Jane, and was constructed by our team of Developers. We
              realize our shortcomings and understand that it’s time to hand over
              the reins to an agency that can present us in a professional manner.
              We wanted to give our community the best online representation
              possible so we began our search months ago. Unfortunately finding
              the right agency with experience in the cryptocurrency, and NFT
              space, proved to be a difficult task. However, we are pleased to
              announce that we put in the hard work to find the right people, and
              we are in final negotiations with a major Canadian-based firm to
              handle all of our content creation, media and marketing material. We
              are expecting a clear and detailed marketing strategy for our review
              in the coming weeks and look forward to making the onboarding
              announcement to the community once the details have been finalized.
              They will be part of the AFTP team long-term as we keep moving
              forward, improving our website and social media presence, and we
              will update the community every step of the way.
            </p>
          </div>
          <div className="col-12">
            <p className="text--purple text-center">Rewards and Benefits</p>
            <p>
              Wondering why you should choose to become a member of the AFTP?
              Simple, from the moment you joined us on Twitter or Discord you
              became part of the AFTP Family, and you should feel special. It is
              important for us to build a strong, organic foundation for this
              amazing project. We aim to build a community that is fun,
              supportive, and progressive. One where everyone is welcome and
              everyone benefits.
            </p>
            <p>
              As a member of the AFTP community, you are eligible to participate
              in all of the weekly events, contests, and giveaways. It is
              important for us to build a strong, organic foundation for this
              amazing project, as we are not just another NFT collection. We want
              to create both an amazing community and a project that we can all
              enjoy and benefit from, and giving back to the community is the best
              place to start! To let our community know we appreciate them we are
              giving back over $500,000 in contests and giveaways as we progress
              through our Roadmap.
            </p>
            <p className="text--purple text-center">ROYALTIES</p>
            <div className="row">
              <div className="col-12 col-lg-6 align-self-center">
                <img src="/images/jpg/whitepaper/1.jpg" width="100%" alt="" />
              </div>
              <div className="col-12 col-lg-6">
                <p>
                  One of the most interesting features of NFT’s is the ability to
                  program the rights to royalties right into the smart contract.
                  This means that Artists and Creators will receive a certain
                  percentage of future sales of their NFT on the secondary market.
                  AFTP royalties are set at 10% for secondary market sales, with
                  20% of those royalties being added to the community wallet on an
                  ongoing basis.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <SectionTitle
              titanium
              animate
              small
              title="ACCOMPLISHED MILESTONES UP TO DATE"
            ></SectionTitle>
            <p className="text--purple text-center">December 2021</p>
            <ul>
              <li>Artwork is complete</li>
              <li>Website completed and all security features tested</li>
              <li>
                Twitter and Instagram pages complete and profiles active Discord
                Community Server goes Live
              </li>
              <li>Discord, Twitter and Instagram Sales bot promotions start.</li>
            </ul>
          </div>

          <div className="col-12">
            <SectionTitle titanium animate small title="ROADMAP"></SectionTitle>
            <p className="text--purple text-center">PHASE I: MINTING</p>
            <ul style={{listStyleType: 'none', padding: 0, margin: 0}}>
              <li>
                20% - 1 ETH each will be given away to 5 random AFTP holders.
              </li>
              <li>
                30% - Community Wallet established and 5 ETH added. (development and expanding team)
              </li>
              <li>60% - 10 ETH added to the Community Wallet.</li>
              <li>80% - We'll be raffling $5,000 for a week.</li>
              <li>
                100% - An additional 10 ETH will be added to the Community Wallet.
                 Time four our $500,000 GRAND PRIZE GIVEAWAY!!! FIVE LUCKY HOLDERS will
                be awarded $100,000 in ETH each when the collection is completely
                sold out.
              </li>
            </ul>
            <p className="text--purple text-center">PHASE II: $BOOZE</p>
            <p>
              Once all our cool AFTP’s are minted, we’ll start working on the
              smart contract that will give each holder an opportunity to earn
              passive income through staking our $BOOZE.
            </p>
            <p className="text--purple text-center">
              PHASE III: COMMUNITY VAULT. DAO
            </p>
            <p>
              We believe that forming a DAO is one of the most beneficial
              utilities in the NFT game.
            </p>
            <p>Why?</p>
            <ul>
              <li>
                You’ll have a right to vote, based on the value of your assets.
                Meaning 1AFTP=1VOTE.
              </li>
              <li>
                Community Wallet assets are distributed and any DAO purchases or
                investments are made.
              </li>
              <li>
                Being a member of DAO will give you a right to decide on what’s
                best for the community
              </li>
            </ul>
            <p>
              DAO will be established to govern the community wallet. 1 AFTP=1
              VOTE. DAO will decide on any future investments, charities,
              fractionalized ownership of Blue Chip NFT purchases and distribution
              among holders. We will set up partnerships with other projects,
              prioritizing new projects and new artists. DAO will be in charge of
              the creative process behind these future collaborations.
            </p>
            <p>
              We are planning on creating a special server for DAO members who
              will gain access through verified ownership.
            </p>
            <p className="text--purple text-center">
              PHASE IV: WEB APPLICATION. PLATFORM
            </p>
            <p>
              We will be launching our Web App for minting and generating
              collections.We designed this App with the intention to help artists
              from around the world to create more amazing NFT collections. We
              want to support and help all new artists by allowing them to
              concentrate on the actual art and not worrying about the coding.
            </p>
            <p>Some of the features:</p>
            <ul>
              <li>Generates NFT images and metadata</li>
              <li>Has groups, supports exclusion of traits, exclusive groups</li>
              <li>
                Preview of images and metadata. (built in filter like on OpenSea)
              </li>
              <li>Made as SPA</li>
              <li>Can be delivered as a Docker-solution</li>
              <li>Shuffle function for reordering images</li>
              <li>Rarity control</li>
            </ul>
            <p>
              Our team is working on adding more features and making the app,
              which is a must have for any artist that wants to create another
              amazing collection. Our goal is to make it easy to use and make it
              possible to create more complex combinations, by adding a variety of
              customizable features. We’d like to note that our own AFTP
              collection is created with the help of our Minter app.
            </p>
            <p>
              Holders would be getting % of the monthly subscription for using the
              app.
            </p>
            <Slider {...settings}>
              {images.map((img, index) => (
                <div key={index}>
                  <img src={img.src} alt="" width="100%" />
                  <p className="text-center text--purple">{ img.text }</p>
                </div>  
              ))}
            </Slider>
          </div>
          <div className="col-12">
            <SectionTitle titanium animate small title="Summary"></SectionTitle>
            <p>
              By participating and purchasing AFTP you will open access to several
              options on how you can use your assets. You become an owner, a
              member and a contributor of After Party Ape Club. Also you get a
              cool pfp.
            </p>
            <p>
              It was important for us to create an NFT project that would grow
              into something bigger - a strong, progressive community of people
              that love to progress, have passion to learn and invest.
            </p>
            <ul>
              <li>Get a chance to win our giveaways</li>
              <li>
                You become an owner of AFTP artwork. That grants you the right to
                use it in your favor
              </li>
              <li>You join an active and progressive AFTP community</li>
              <li>Earn passive income</li>
              <li>Become a DAO member</li>
              <li>
                Support NFT Community and be a part of our WEB minter platform
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}