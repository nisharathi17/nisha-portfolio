export default function Murals() {
  const murals = [
    {
      id: 1,
      title: "Mural 1",
      image: "/images/mural1.jpeg",
      location: "Public Community",
      duration: "3 Days",
      materials: "Exterior Latex & Spray Paint",
      description: "Monochrome Nature."
    },
    {
      id: 2,
      title: "Mural 2",
      image: "/images/mural2.jpeg",
      location: "Custom Wall Design",
      duration: "5 Days",
      materials: "Acrylic and Gold Flake",
      description: "An exploration of leave set against a vast shadowy background."
    },
    {
      id: 3,
      title: "Mural 3",
      image: "/images/mural3.jpeg",
      location: "Bedroom Wall",
      duration: "2 Days",
      materials: "Mixed Media",
      description: "A dynamic piece exploring the raw power of sea and hues."
    }
  ];

  return (
    <div className="mural-page">
      <div className="mural-header">
        <h1 className="page-title">Murals & Public Art</h1>
        <p className="page-subtitle">
          Large Scale Masterpieces
        </p>
      </div>

      <div className="mural-list">
        {murals.map(mural => (
          <div key={mural.id} className="m-card">
            {/* Full Bleed Image */}
            <div className="m-img-bg">
              <img
                src={mural.image}
                alt={mural.title}
                className="m-img"
              />
              {/* Fade out gradient at bottom to blend into text */}
              <div className="m-fade"></div>
            </div>

            {/* Description Overlay or Below */}
            <div className="m-info-wrap">
              <div className="m-info-box">
                <h2 className="m-title">{mural.title}</h2>
                <p className="m-desc">
                  {mural.description}
                </p>

                <div className="m-grid">
                  <div>
                    <p className="m-label">Location</p>
                    <p className="m-val">{mural.location}</p>
                  </div>
                  <div>
                    <p className="m-label">Duration</p>
                    <p className="m-val">{mural.duration}</p>
                  </div>
                  <div>
                    <p className="m-label">Materials Used</p>
                    <p className="m-val">{mural.materials}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}