import React from 'react';
import '../styles/Description.scss';

const Description: React.FC = () => (
  <section id="description" className="description-section">
    <h2>Why Choose Us?</h2>

    <div className="card-grid two-columns">
      <div className="description-block">
        <h3>Product Development</h3>
        <p>
          We design and build our own products — from idea to prototype to market.
          Our hands-on approach means we’re always testing, learning, and creating,
          with speed and grit baked into every iteration.
        </p>
      </div>

      <div className="description-block">
        <h3>Engineering Consulting</h3>
        <p>
          We help teams solve tough engineering problems, move faster, and make better design decisions.
          From architecture to delivery, we’re here to plug in where you need us most — no fluff, just results.
        </p>
      </div>
    </div>
  </section>
);

export default Description;
