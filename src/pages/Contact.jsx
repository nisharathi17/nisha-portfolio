export default function Contact() {
  return (
    <div className="contact-wrap">
      <h1 className="contact-title">Contact the Artist</h1>
      <p className="contact-desc">
        For commissions, gallery inquiries, or to acquire a piece from the collection, please get in touch.
      </p>
      
      <form className="c-form" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="c-label">Name</label>
          <input type="text" className="c-input" />
        </div>
        <div>
          <label className="c-label">Email</label>
          <input type="email" className="c-input" />
        </div>
        <div>
          <label className="c-label">Message</label>
          <textarea rows="5" className="c-input"></textarea>
        </div>
        <button className="c-btn">
          Send Inquiry
        </button>
      </form>
    </div>
  );
}