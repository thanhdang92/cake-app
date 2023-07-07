import React, { Component } from 'react'
import Slider from 'react-slick'
import { SlideShowWrapper } from './styles'

export default class SlideShow extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      fade: true,
      infinite: true,
    }
    return (
      <SlideShowWrapper>
        <Slider {...settings}>
          <div>
            <img
              src="https://hinhanh.webvua.com/images/slider/4807/resize/2101020623102.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://hinhanh.webvua.com/images/slider/4807/resize/0262030032208.jpg"
              alt=""
            />
          </div>
        </Slider>
      </SlideShowWrapper>
    )
  }
}
