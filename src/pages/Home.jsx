import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero-page">
      { }
      <div className="hero-bg"></div>

      <div className="hero-content">

        { }
        <div className="hero-img-col">
          <div className="hero-img-wrap">
            <img
              src="/images/nisha.jpeg"
              alt="Nisha - Artist Portrait"
              className="hero-img"
            />
            <div className="hero-img-overlay"></div>
          </div>
        </div>

        { }
        <div className="hero-text-col">
          <h1 className="hero-title">
            About the Artist
          </h1>
          <p className="hero-desc">
            Immersed in the evocative interplay of shadow and radiance, Nisha channels the raw emotional undertones of the human experience onto canvas and brick. Drawing inspiration from classical techniques fused with contemporary abstraction, her work serves as a window into the surreal.
          </p>
          <div className="hero-btn-wrap">
            <Link
              to="/portraits"
              className="hero-btn"
            >
              Explore Collection
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}