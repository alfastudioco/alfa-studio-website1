export default function AlfaStudioWebsite() {

  const services = [
    "Custom Cabinetry",
    "Closets & Wardrobes",
    "Bathroom Vanities",
    "Built-In Wall Units",
    "Mudrooms & Entry Storage",
    "Millwork for Residential & Commercial Spaces"
  ];

  return (
    <div className="page">

      <header className="header">
        <div className="header-inner">
          <a className="brand" href="#">Alfa Studio</a>

          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#projects">Portfolio</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="cta-top" href="#contact">Start a Project</a>
        </div>
      </header>

      <section className="hero">

        <div className="hero-inner">

          <img
            src="/alfa-logo.jpg"
            alt="Alfa Studio"
            className="hero-logo"
          />

          <p className="hero-copy">
            Custom cabinetry, closets, vanities, built-ins, and refined
            millwork for modern interiors.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button-light">
              View Portfolio
            </a>

            <a href="#contact" className="button-dark">
              Request Consultation
            </a>
          </div>

        </div>
      </section>

      <section id="services" className="section">

        <h2>Services</h2>

        <div className="grid">

          {services.map((service) => (
            <div key={service} className="card">
              {service}
            </div>
          ))}

        </div>

      </section>

      <section id="contact" className="section">

        <h2>Contact</h2>

        <p>Tell us about your project.</p>

        <input placeholder="Name" />
        <input placeholder="Email" />
        <textarea placeholder="Project details" />

        <button>Send Inquiry</button>

      </section>

    </div>
  );
}
