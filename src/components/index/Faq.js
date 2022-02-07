import { useState } from "react";
import SectionTitle from "../SectionTitle";

const types = { list: 0, text: 2, mixed: 4 };

export default function Faq() {

  const items = [
    {
      index: 0,
      q: "Why APES?",
      a: "Have you ever asked yourself what apes do after the party? We did and decided to show our vision. We just love apes. It’s amazing to see how NFT community created the whole story and each upcoming project brings something new to the ape movement.",
      type: types.text,
    },
    {
      index: 1,
      q: "When will I be able to mint AFTP? And how much?",
      a: "1,500 AFTPs will be available for whitelisted members to mint on presale for .03 ETH+gas and public sale will be available for everyone for .06ETH +gas. Pre-sale starts 12th January 11 AM EST and will end in 24 hours. Public Sale starts 13th January 11 AM EST.",
      type: types.text,
    },
    {
      index: 2,
      q: "Royalties?",
      a: "AFTP gets 10% of secondary market royalties. 20% of all future secondary sales royalties will be added to the Community Wallet.",
      type: types.text,
    },
    {
      index: 3,
      q: "How to avoid scam?",
      a: [
        {
          value:
            "That’s a serious topic that we are going to discuss frequently on our discord channel. Here is a quick one:",
          type: types.text,
        },
        {
          value: [
            "Always follow our official links",
            "Join our After Party as soon as we start, this way you will see our progress. Scammers can buy followers, make bots and etc. But there are certain things they can’t fake. What about our hidden gems that we won’t disclose until certain time?",
            "#DYOR - we want to encourage all people that want to purchase NFTs to start paying attention to the safety of websites they use and only follow official links. Scammers can access any data they want, but again, it’s a matter of time till everybody will find the truth.",
          ],
          type: types.list,
        },
        {
          value:
            "As we already mentioned, we’ll pay a lot of attention to this topic, because we don’t want any of our members to become victims of dirty scammers. We are family and we should stand up for each other, that’s what real ones do.",
          type: types.text,
        },
      ],
      type: types.mixed,
    },
  ];
  const [opened, setOpened] = useState(-1);

  const open = (index) => {
    setOpened(index === opened ? -1 : index);
  }
  return (
    <section id="faq" className="container">
      <SectionTitle 
        titanium
        animate
        large
        title="FAQ"
      />
      <div className="row">
        <div className="col-12">
          <div className="faq">
            {items.map((item, index) => (
              <div
                onClick={open.bind(null, item.index)}
                key={index}
                className={`faq__item ${item.index === opened ? 'faq__item--open' : ''}`}
              >
                <div className="faq__question">
                  <i className="icon icon--lg mdi mdi-chevron-right"></i>
                  <p>{ item.q }</p>
                </div>
                <div className="faq__content">
                  {item.type === 0 && <ul>
                    {item.a.map((listitem, listindex) => (
                      <li key={listindex}>
                      { listitem }
                    </li>
                    ))}
                  </ul>}
                  {item.type === 2 && <p>{ item.a }</p>}
                  {item.type === 4 && item.a.map((inested, inestedindex) => (
                    <div
                      key={inestedindex}
                    >
                      {inested.type === 0 && <ul>
                        {inested.value.map((listitem, i) => (
                          <li key={i}>
                            { listitem }
                          </li>
                        ))}
                      </ul>}
                      {inested.type === 2 && <p>{ inested.value }</p>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}