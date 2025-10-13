import React from "react";
import "../style/silo.css";

const NoMoreSilos = () => {
  return (
    <div className="no-more-silos-container">
      
      <div className="floating-image">
        <img src="/assets/vector_3.png" alt="Floating Cube" />
      </div>

      <section className="silos-section">
        <div className="silos-content">
          <h2 className="silo-heading">No More Siloed Systems!</h2>
          <p className="silo-paragraph">
            Join dozens of businesses working with our software development
            company to build smarter systems, faster workflows, and cleaner user
            experiences.
          </p>
          <button className="silo-button">Start your project</button>
        </div>
      </section>

    </div>
  );
};

export default NoMoreSilos;
