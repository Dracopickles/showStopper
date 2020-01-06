import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Landing = () => <div>

<h1>SHOW STOPPER</h1>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/c1.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Pulp Fiction (1994)</h3>
      <p>Quentin Tarantino.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/c2.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Jurassic Park (1993)</h3>
      <p>Steven Spielberg</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/c3.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Robocop (1987)</h3>
      <p>Paul Verhoeven</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/c4.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Saving Private Ryan (1998)</h3>
      <p>Steven Spielberg</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>


</div>

export default Landing;