import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const OurPartners = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 500,
    cssEase: 'linear',
  }
  return (
    <div className="slider-container1">
      <h1>Our Partners</h1>
      <Slider {...settings}>
        <img
          src="https://tmbill.com/img/Partners/tmbill-deliveroo.jpg"
          alt="swagath"
          className="picture"
        />
        <img
          src="https://tmbill.com/img/Partners/tmbill-careem.jpg"
          alt="ratna"
          className="picture"
        />
        <img
          src="https://tmbill.com/img/Partners/tmbill-dunzo.jpg"
          alt="dfg"
          className="picture"
        />
        <img
          src="https://tmbill.com/img/Partners/tmbill-ubereats.jpg"
          alt="insta"
          className="picture"
        />

        <img
          src="https://tmbill.com/img/Partners/tmbill-zomato.jpg"
          alt="swadist"
          className="picture"
        />
        <img
          src="https://tmbill.com/img/Partners/tmbill-swiggy.jpg"
          alt="balandosa"
          className="picture"
        />
        <img
          src="https://tmbill.com/img/Partners/tmbill-talabat.jpg"
          alt="southindain"
          className="picture"
        />
        <img
          src="https://tmbill.com/img/Partners/tmbill-reelo.jpg"
          alt="pokketCafe"
          className="picture"
        />

        <img
          src="https://tmbill.com/img/Partners/tmbill-razorpay.jpg"
          alt="burger"
          className="picture"
        />

        <img
          src="https://tmbill.com/img/Partners/tmbill-payu.jpg"
          alt="lazz"
          className="picture"
        />
        <img
          src="https://tmbill.com/img/Partners/tmbill-instamojo.jpg"
          alt="chunks"
          className="picture"
        />
        <img
          src="https://tmbill.com/img/Partners/tmbill-upi.jpg"
          alt="bombay"
          className="picture"
        />
        <img
          src="https://tmbill.com/img/Partners/tmbill-upsale.jpg"
          alt="jai-ejal"
          className="picture"
        />
        <img
          src="https://tmbill.com/img/Partners/tmbill-thrive.jpg"
          alt="chanderlok"
          className="picture"
        />
        <img
          src="https://tmbill.com/img/Partners/tmbill-radyes.jpg"
          alt="chanderlok"
          className="picture"
        />
      </Slider>
    </div>
  )
}
export default OurPartners
