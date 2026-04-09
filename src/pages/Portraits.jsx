import { useState } from "react";

export default function Portraits() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!selectedImage) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };
  const portraits = [
    {
      id: 1,
      title: "Trauma",
      image: "/images/trauma.PNG",
      medium: "Mixed Media",
      description: "An exploration of deep emotion set against a vast shadowy background, capturing the fleeting expression of sorrow and resilience."
    },
    {
      id: 2,
      title: "Peace",
      image: "/images/peace.PNG",
      medium: "Digital Painting",
      description: "Focusing on serenity and quiet moments, rendered in soft tones."
    },
    {
      id: 3,
      title: "Blues",
      image: "/images/blues.PNG",
      medium: "Oil on Canvas",
      description: "A cool color study diving into melancholic yet calming depths."
    },
    {
      id: 4,
      title: "Pinks",
      image: "/images/pinks.PNG",
      medium: "Acrylic on Panel",
      description: "Vibrant and intense exploration of warmth and passion."
    },
    {
      id: 5,
      title: "Purples",
      image: "/images/purples.PNG",
      medium: "Digital Mixed Media",
      description: "A dive into mystery and royalty through dynamic violet hues."
    },
    {
      id: 6,
      title: "Sunlit",
      image: "/images/sunlit.PNG",
      medium: "Watercolor & Ink",
      description: "Tracing the harsh yet beautiful angles of natural light."
    },
    {
      id: 7,
      title: "Fairy",
      image: "/images/fairy.PNG",
      medium: "Charcoal & Graphite",
      description: "An ethereal presence captured through light linework and shading."
    },
    {
      id: 8,
      title: "Berry",
      image: "/images/berry.PNG",
      medium: "Digital Painting",
      description: "A vibrant exploration of deep berry undertones."
    }
  ];

  return (
    <div className="page-wrap">
      <div className="page-header">
        <h1 className="portrait-title">The Human Study</h1>
        <p className="portrait-desc">
          A collection focusing on cinematic framing, raw texture, and the intense gaze of the subject. 
        </p>
      </div>

      <div className="portrait-grid">
        {portraits.map(portrait => (
          <div key={portrait.id} className="p-card" onClick={() => setSelectedImage(portrait.image)}>
            <div className="p-img-wrap">
              <img 
                src={portrait.image} 
                alt={portrait.title} 
                className="p-img" 
              />
            </div>
            <div className="p-info">
              <h2 className="p-title">{portrait.title}</h2>
              <p className="p-medium">Medium: {portrait.medium}</p>
              <p className="p-desc">{portrait.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Zoom Modal */}
      {selectedImage && (
        <div 
          className="lb-overlay"
          onClick={() => setSelectedImage(null)}
          onMouseMove={handleMouseMove}
        >
          <div className="lb-wrap">
            <img
              src={selectedImage}
              alt="Expanded view"
              className="lb-img"
              style={{
                transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                transform: 'scale(3)'
              }}
            />
            {/* Close Button */}
            <button 
              className="lb-btn"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="lb-btn-icon"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="lb-text">
              Move cursor to explore • Click anywhere to close
            </div>
          </div>
        </div>
      )}
    </div>
  );
}