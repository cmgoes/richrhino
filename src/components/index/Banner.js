export default function Banner() {
  return (
    <div id="banner">
      <img className="banner" src="/images/jpg/banner.png" alt="Banner" />
      <button className="btn btn--purple text--medium btn--active" onClick={() => window.location.href = '/mint'}>mint</button>
    </div>
  )
}