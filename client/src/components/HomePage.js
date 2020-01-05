import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";

const Column = ({ index, style }) => (
  <div style={style}>Column {index}</div>

);

class HomePage extends Component {

  netflixData = {}
  componentDidMount() {
    fetch("http://api-public.guidebox.com/v2/shows?api_key=7d4cf0b3e896a3e8cc71cf02afe6169394482044&sources=netflix")
      .then(response => {
        response.json().then(data => {
          this.netflixData = data;
          console.log(this.netflixData);
          
        });
      })
  }
  render() {
    return (
      <div>
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
        <div id="showSlider" style={{ minHeight: '150px' }}>
          <AutoSizer>
          {({ width }) => (
          <List
          height={150}
          itemCount={this.netflixData.total_returned}
          itemSize={100}
          layout="horizontal"
          width={width}
        >
          {Column}
          </List>)}
        </AutoSizer>
        </div>
      </div>
    )
  }
}


export default HomePage;