function PortfolioImage(props) {
  function handleClick() {
    props.onImageClick(props.portfolioImage);
  }
  return (
    <>
      <li className="portfolio__item">
        <div className="portfolio__overlay">
          <button className="portfolio__viewing-button" onClick={handleClick}>+</button>
        </div>
        <img
          className="portfolio__image"
          src={props.portfolioImage.src}
          alt="Фото"
        ></img>
      </li>
    </>
  );
}

export default PortfolioImage;
