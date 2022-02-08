import { useState } from "react";
import SectionTitle from "../SectionTitle";

const types = { list: 0, text: 2, mixed: 4 };

export default function Faq() {

  const items = [
    {
      index: 0,
      q: "Why Rich Rhino?",
      a: "It’s amazing to see how Rich Rhino community created the whole story.",
      type: types.text,
    },
    {
      index: 1,
      q: "When will I be able to mint AFTP? And how much?",
      a: "1,111 Rhinos will be available for whitelisted members to mint on presale for .06 ETH+gas and public sale will be available for everyone for .08ETH +gas. Pre-sale starts 12th Februray 12 AM EST and will end in 24 hours. Public Sale starts 13th Feburary 12 AM EST.",
      type: types.text,
    },
    {
      index: 2,
      q: "Royalties?",
      a: "Rhinos gets 10% of secondary market royalties. 20% of all future secondary sales royalties will be added to the Community Wallet.",
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
          ],
          type: types.list,
        },
        {
          value:
            "As we already mentioned, we’ll pay a lot of attention to this topic, because we don’t want any of our members to become victims of dirty scammers. We are family and we should stand up for each other.",
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