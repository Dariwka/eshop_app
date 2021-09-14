import React, { Component } from "react";
import { Carousel } from "3d-react-carousal";

class Home extends Component {
  render() {
    const slides = [
      <img src="https://source.unsplash.com/1800x1100/?menshoes" alt="1" />,
      <img src="https://source.unsplash.com/1800x1100/?nike" alt="2" />,
      <img src="https://source.unsplash.com/1800x1100/?shoes" alt="3" />,
      <img src="https://source.unsplash.com/1800x1100/?sportshoes" alt="4" />,
      <img src="https://source.unsplash.com/1800x1100/?womenshoes" alt="5" />,
    ];
    return (
      <div className="carousel">
        <Carousel slides={slides} />
      </div>
    );
  }
}

export default Home;
