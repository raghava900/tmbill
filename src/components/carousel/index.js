import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const ReactSlick = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <h2 className="client-heading">Happy Clients</h2>
      <Slider {...settings}>
        <div className="happy-clients">
          <div className="slide">
            <div>
              <img
                src="https://tmbill.com/img/happy-client/tmbill_one_bite.jpg"
                alt="tasteOFIndia"
                className="clients-img"
              />
              <p className="happy-para">
                I would definitely recommend this software to all the store
                <br />
                outlets / restaurants as we are already using it in 100+
                outlets. TMBill team <br />
                is so co-operative provides extremely satisfying services.
              </p>
              <p className="para">
                <strong>MR. Abhishek</strong>
              </p>
              <p className="para">
                <strong>Co-Founder</strong>
              </p>
              <p className="para">
                <strong>OneBite</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="happy-clients">
          <div className="slide">
            <div>
              <img
                src="https://tmbill.com/img/happy-client/tmbill_doha_qatar.jpg"
                alt="tasteOFIndia"
                className="clients-img"
              />
              <p className="happy-para">
                Different suites of apps which makes operation of every FB
                outlets easy. Efficient support team making integrations
                possible. Economical and convenient solution found by our team
                after a good research among POS apps.
              </p>
              <p className="para">
                <strong>Ahamed Ihjas</strong>
              </p>
              <p className="para">Founder of</p>
              <p className="para">
                <strong>Maraheb Mandi (Doha Qatar)</strong>
              </p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <img
              src="https://tmbill.com/img/happy-client/tmbill_south_indian.jpg"
              alt="tasteOFIndia"
              className="clients-img"
            />
            <p className="happy-para">
              We use TMBill as our POS partner, Its flexible to use. We are
              happy to work with TMBill because they work enormously and are
              available 24x7 whenever we need support even if we are in Europe
              and they are operating from India.
            </p>
            <p className="para">
              <strong>Kannathasan Pandian</strong>
            </p>
            <p className="para">Director & Founder </p>
            <p className="para">
              <strong>South Indian (Denmark)</strong>
            </p>
          </div>
        </div>

        <div>
          <img
            src="https://tmbill.com/img/happy-client/tmbill_funky_buddha.jpg"
            alt="tasteOFIndia"
            className="clients-img"
          />
          <p className="happy-para">
            Best and easy software to work with and the support team are also
            very helpful and they give support everyone you can call them If it
            had option for 10 star I would give 10 stars for TMBill billing
            software.
          </p>
          <p className="para">
            <strong>Tushar Shrestha</strong>
          </p>
          <p className="para">Funky Buddha (Founder),</p>
          <p className="para"> Dimapur, Nagaland - 797112.</p>
        </div>

        <div>
          <div>
            <img
              src="https://tmbill.com/img/happy-client/tmbill_the_taste_of_india.jpg"
              alt="tasteOFIndia"
              className="clients-img"
            />
            <p className="happy-para">
              Thank you Rahil and team. Your software is very useful to us
              moreover your 24 hours team support. I am really recommend this
              software to others to use and good price. Keep going on guys good
              luck.
            </p>
            <p className="para">
              <strong>Rejoice Thomas</strong>
            </p>
            <p className="para">The Taste of India (M.D.),</p>
            <p className="para">Auckland, New Zealand - 1042.</p>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default ReactSlick
