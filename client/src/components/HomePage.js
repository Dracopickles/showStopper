import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Row, Container, Col } from "react-bootstrap";
// import { FixedSizeList as List } from 'react-window';
// import AutoSizer from "react-virtualized-auto-sizer";

class ShowRepeater extends Component {


  render() {
    let showData = () => {
      return (
      <Carousel.Item key={0}>
        <Carousel.Caption>
          <h3>No Results</h3>
        </Carousel.Caption>
      </Carousel.Item>
      )
    }
    if (this.props.showData !== undefined) {
      console.log(this.props);
      showData = this.props.showData.map(data => {
        return (
          <Carousel.Item key={data.id}>
            <img
              className="d-block w-100"
              src={data.artwork_608x342}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{data.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })
    }
    return (

      <Carousel>{showData}</Carousel>
    )
  }

}

class HomePage extends Component {
  API_Key = "7d4cf0b3e896a3e8cc71cf02afe6169394482044";
  API_URL = "http://api-public.guidebox.com/v2/shows";
  huluData = {}
  netflixData = {}
  componentDidMount() {
    fetch(`${this.API_URL}?api_key=${this.API_Key}&sources=netflix`)
      .then(response => {
        response.json().then(data => {
          this.netflixData = data;
          console.log(this.netflixData);
        });
      })
    fetch(`${this.API_URL}?api_key=${this.API_Key}&sources=hulu`)
      .then(response => {
        response.json().then(data => {
          this.huluData = data;
          console.log(this.huluData);
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

        <ShowRepeater showData={this.netflixData.results} />
        <ShowRepeater showData={this.huluData.results} />


      </div>
    )
  }
}


export default HomePage;