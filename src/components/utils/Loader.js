import { useState, useEffect } from "react"

export default function Loader() {
  const [active, setActive] = useState(true);

  const close = () => {
    setActive(false);
  }

  useEffect(() => {
    let body = document.body;
    body.classList.add("body--stop-scroll");
    window.addEventListener("load", () => {
      close();
    })
  }, []);

  useEffect(() => {
    let body = document.body;
    if (active) {
      body.classList.add("body--stop-scroll");
    } else {
      body.classList.remove("body--stop-scroll");
    }
  }, [active]);

  return (
    <div className={`loader ${active ? 'loader--active' : ''}`}>
      <div className="loader__container">
        <img src="/images/png/glasses.png"  width="15%" alt="Logo" />
      </div>
    </div>
  )
}