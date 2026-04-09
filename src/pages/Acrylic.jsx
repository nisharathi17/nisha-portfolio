export default function Acrylic() {
  const canvases = [
    {
      id: 1,
      title: "Crimson Horizon",
      image: "/images/car.PNG",
      medium: "Acrylic & Gold Leaf on Canvas",
      dimensions: "24\" x 36\"",
      price: "Rs 10,100",
      forSale: true
    },
    {
      id: 2,
      title: "Midnight Flow",
      image: "/images/jellysfish.PNG",
      medium: "Oil & Ink on Linen",
      dimensions: "18\" x 24\"",
      price: "Rs 15,000",
      forSale: true
    },
    {
      id: 3,
      title: "Golden Hour",
      image: "/images/high.PNG",
      medium: "Mixed Media",
      dimensions: "30\" x 40\"",
      price: "Rs 18,000",
      forSale: true
    },
    {
      id: 4,
      title: "Ember Ascent",
      image: "/images/ember.PNG",
      medium: "Acrylic on Wood Panel",
      dimensions: "12\" x 12\"",
      price: "Rs 20,000",
      forSale: true
    },
    {
      id: 5,
      title: "Shadows",
      image: "/images/shadows.PNG",
      medium: "Acrylic on Canvas",
      dimensions: "24\" x 36\"",
      price: "Rs 22,000",
      forSale: true
    },
    {
      id: 6,
      title: "Contrast",
      image: "/images/contrast.PNG",
      medium: "Mixed Media",
      dimensions: "18\" x 24\"",
      price: "Rs 16,000",
      forSale: true
    },
    {
      id: 7,
      title: "Drowning",
      image: "/images/drowning.PNG",
      medium: "Oil on Linen",
      dimensions: "36\" x 48\"",
      price: "Rs 30,000",
      forSale: true
    },
    {
      id: 8,
      title: "Faceless",
      image: "/images/faceless.PNG",
      medium: "Acrylic on Panel",
      dimensions: "12\" x 16\"",
      price: "Rs 12,000",
      forSale: true
    }
  ];

  return (
    <div className="page-wrap">
      <div className="page-header">
        <h1 className="page-title">Canvas Collection</h1>
        <p className="page-subtitle">
          Original Abstract Works & Storefront
        </p>
      </div>

      <div className="art-grid">
        {canvases.map(canvas => (
          <div key={canvas.id} className="art-card">
            <div className="art-img-wrap">
              {canvas.forSale && (
                <div className="art-badge">
                  For Sale
                </div>
              )}
              <img
                src={canvas.image}
                alt={canvas.title}
                className="art-img"
              />
            </div>
            <div className="art-info">
              <h2 className="art-title">{canvas.title}</h2>
              <p className="art-medium">{canvas.medium}</p>
              <p className="art-dims">{canvas.dimensions}</p>
              <p className="art-price">{canvas.price}</p>

              <button 
                className="buy-btn"
                onClick={() => window.location.href = `mailto:17nisharathi@gmail.com?subject=Inquiry:%20${encodeURIComponent(canvas.title)}`}
              >
                Inquire to Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}