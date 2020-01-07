import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
<<<<<<< HEAD
import { FixedSizeList as List } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";

const Column = ({ index, style }) => (
  <div style={style}>Column {index}</div>

);
=======
import { Row, Container, Col } from "react-bootstrap";
// import { FixedSizeList as List } from 'react-window';
// import AutoSizer from "react-virtualized-auto-sizer";


class ShowRepeater extends Component {
>>>>>>> 5da8b53a3f48df71e5b7f66bbae0e91234851ee4

  render() {
<<<<<<< HEAD
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
      <div id="maryussuperboy" style={{minHeight: '150px'}}>
        <AutoSizer>
          {({ width }) => (
          <List
          height={150}
          itemCount={12}
          itemSize={100}
          layout="horizontal"
          width={width}
        >
          {Column}
          </List>)}
        </AutoSizer>
      </div>
=======
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

              {/* <h3>{data.title}</h3> */}
              <p><a href={'https://www.imdb.com/title/' + data.imdb_id}><img src="/imdb.png" /></a></p>
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
  amazonData = {}
  disneyData ={}
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
    fetch(`${this.API_URL}?api_key=${this.API_Key}&sources=amazon_prime`)
      .then(response => {
        response.json().then(data => {
          this.amazonData = data;
          console.log(this.amazonData);
        });
      })
    fetch(`${this.API_URL}?api_key=${this.API_Key}&sources=disney_plus`)
      .then(response => {
        response.json().then(data => {
          this.disneyData = data;
          console.log(this.disneyData);
        });
      })
  }
  render() {
    return (
      <div className="app-container" div className="App container">

        <h1><a href="https://www.netflix.com/">NETFLIX</a></h1>
        <ShowRepeater showData={this.netflixData.results} />
        <h1><a href="https://www.hulu.com/tv">HULU</a></h1>
        <ShowRepeater showData={this.huluData.results} />
        <h1><a href="https://www.amazon.com/Amazon-Video/b?node=2858778011">AMAZON VIDEO</a></h1>
        <ShowRepeater showData={this.amazonData.results} />
        <h1><a href="https://www.disneyplus.com/">DISNEY+</a></h1>
        <ShowRepeater showData={this.disneyData.results} />

>>>>>>> 5da8b53a3f48df71e5b7f66bbae0e91234851ee4
      </div>
    )
  }
}


export default HomePage;