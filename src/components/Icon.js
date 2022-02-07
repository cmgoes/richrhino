import openSeaIcon from '../assets/icon-opensea.svg';
export default function Icon({xs, sm, md, lg, xl, xxl, src, link, hmargin}) {
	const style = () => {
		let styles = "";
		if (xs) styles = styles + " icon--xs";
		if (lg) styles = styles + " icon--lg";
		if (md) styles = styles + " icon--md";
		if (sm) styles = styles + " icon--sm";
		if (xl) styles = styles + " icon--xl";
		if (xxl) styles = styles + " icon--xxl";
		if (hmargin) styles = styles + " icon--horizontalmargin";
		return styles;
	}

	const imageStyle = () => {
		let imageStyles = "";
		if (xs) imageStyles = imageStyles + " opensea--xs";
		if (lg) imageStyles = imageStyles + " opensea--lg";
		if (md) imageStyles = imageStyles + " opensea--md";
		if (sm) imageStyles = imageStyles + " opensea--sm";
		if (xl) imageStyles = imageStyles + " opensea--xl";
		if (xxl) imageStyles = imageStyles + " opensea--xxl";
		if (hmargin) imageStyles = imageStyles + " icon--horizontalmargin";
		return imageStyles;
	}
	const icon = () => {
		return src ? `mdi ${src}` : "";
	}
	return (
		<a className="icon" href={link} target="_blank" rel="noreferrer">
			{src !== "opensea" && <i className={`icon--glow${style()} ${icon()}`}></i>}
			{src === "opensea" && <img className={`opensea ${imageStyle()}`} src={openSeaIcon} alt="" />}
		</a>
	)
}