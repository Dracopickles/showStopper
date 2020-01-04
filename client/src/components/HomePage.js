import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";

const Column = ({ index, style }) => (
  <div style={style}>Column {index}</div>
);

class HomePage extends Component {
  render() {
    return (
      <div>
       <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/kIcJwrQSUmY/hqdefault.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/6F83UKZ4_1E/hqdefault.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://mrvpn.com/wp-content/uploads/2012/10/hbo_go_logo_feature-300x175.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://eldiariony.files.wordpress.com/2018/03/download.png?w=341"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
      <div id="maryussuperboy" style={{minHeight: '150px'}}>
        <AutoSizer>
          {({ width }) => (
          <List
          height={150}
          itemCount={50}
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