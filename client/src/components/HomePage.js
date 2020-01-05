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
              alt="show slides"
            />
            <Carousel.Caption>
              <h3>{data.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })
    }
    return (
      <div>
      <Carousel>{showData}</Carousel>
      </div>
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
    fetch(`${this.API_URL}?api_key=${this.API_Key}&sources=hulu_plus`)
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

        <h1><a href="https://www.netflix.com/">NETFLIX</a></h1>
        <ShowRepeater showData={this.netflixData.results} />
        <h2><a href="https://www.hulu.com/tv">HULU</a></h2>
        <ShowRepeater showData={this.huluData.results} />


      </div>
    )
  }
}


export default HomePage;