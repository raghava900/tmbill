import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const OurClients = () => {
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
      <h1>Our Clients</h1>
      <Slider {...settings}>
        <img
          src="https://tmbill.com/img/clients/tmbill_powered_by_swagath.jpg"
          alt="swagath"
          className="picture"
        />
        <img
          src="https://tmbill.com/img/clients/tmbill_powered_by_sagar_ratna.jpg"
          alt="ratna"
          className="picture"
        />
        <img
          src="https://tmbill.com/img/clients/tmbill_powered_by_dfc.jpg"
          alt="dfg"
          className="picture"
        />
        <img
          src="https://tmbill.com/img/clients/tmbill_powered_by_instabite.jpg"
          alt="insta"
          className="picture"
        />

        <img
          src="https://tmbill.com/img/clients/tmbill_powered_by_swadist.jpg"
          alt="swadist"
          className="picture"
        />
        <img
          src="https://tmbill.com/img/clients/tmbill_powered_by_balandosa.jpg"
          alt="balandosa"
          className="picture"
        />
        <img
          src="https://tmbill.com/img/clients/tmbill_powered_by_southindian.jpg"
          alt="southindain"
          className="picture"
        />
        <img
          src="https://tmbill.com/img/clients/tmbill_powered_by_pokketcafe.jpg"
          alt="pokketCafe"
          className="picture"
        />

        <img
          src="https://tmbill.com/img/clients/tmbill_powered_by_burgerlounge.jpg"
          alt="burger"
          className="picture"
        />

        <img
          src="https://tmbill.com/img/clients/tmbill_powered_by_lazzetti.jpg"
          alt="lazz"
          className="picture"
        />
        <img
          src="https://tmbill.com/img/clients/tmbill_powered_by_cheesy_chunks.jpg"
          alt="chunks"
          className="picture"
        />
        <img
          src="https://tmbill.com/img/clients/tmbill_powered_by_bombaykulfi.jpg"
          alt="bombay"
          className="picture"
        />
        <img
          src="https://tmbill.com/img/clients/tmbill_powered_by_jal-ejal.jpg"
          alt="jai-ejal"
          className="picture"
        />
        <img
          src="https://tmbill.com/img/clients/tmbill_powered_by_chanderlok.jpg"
          alt="chanderlok"
          className="picture"
        />
      </Slider>
    </div>
  )
}
export default OurClients
