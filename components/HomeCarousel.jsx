const bannerImages = [
  "/images/banner-01.jpeg",
  "/images/banner-02.jpeg",
  "/images/banner-03.jpeg",
  "/images/banner-04.jpeg",
];

const banners = [
  { imageUrl: "/images/banner-01.jpeg", title: "", description: "" },
  { imageUrl: "/images/banner-02.jpeg", title: "", description: "" },
  { imageUrl: "/images/banner-03.jpeg", title: "", description: "" },
  { imageUrl: "/images/banner-04.jpeg", title: "", description: "" },
];

export const HomeCarousel = () => (
  <div
    id="home-carousel-indicator"
    className="carousel slide"
    data-bs-ride="true"
  >
    <div className="carousel-indicators">
      {banners.map((item, idx) => (
        <button
          key={idx}
          type="button"
          data-bs-target="#home-carousel-indicator"
          data-bs-slide-to={idx}
          className="active"
          aria-current="true"
          aria-label={item.title}
        ></button>
      ))}
    </div>
    <div className="carousel-inner">
      {bannerImages.map((imgUrl, idx) => (
        <div
          key={idx}
          className={idx === 0 ? "carousel-item active" : "carousel-item"}
        >
          <img src={imgUrl} className="d-block w-100" alt="banner" />
        </div>
      ))}
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#home-carousel-indicator"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#home-carousel-indicator"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);
