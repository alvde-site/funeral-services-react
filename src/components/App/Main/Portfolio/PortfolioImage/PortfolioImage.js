function PortfolioImage({portfolioImage}) {
  return (
    <>
      <li className="portfolio__item">
        <img
          className="portfolio__image"
          src={portfolioImage}
          alt="Фото"
        ></img>
      </li>
    </>
  );
}

export default PortfolioImage;
