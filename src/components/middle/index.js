import MiddleCenter from '../middlecenter'
import OurClients from '../ourclients'
import OurPartners from '../ourpartners'
import './index.css'

const Middle = () => (
  <div>
    <OurClients />
    <MiddleCenter />
    <OurPartners />
    <div className="outlet-container">
      <h1 className="middle-heading">Outlet Types</h1>
      <p className="middle-para">
        Outlet Types TMBill’s Restaurant Management POS is built for all types
        of restaurant sizes and formats from single outlets to 100+ outlet
        chains. Select your format to see how TMBill can help you run better.
      </p>
      <div className="outlet-type">
        <div className="outlet-types">
          <img
            src="https://tmbill.com/img/outlet/tmbill_for_qsr.png"
            alt="outlet"
            className="ions"
          />
          <h5 className="middle-text">QSR</h5>
        </div>
        <div className="outlet-types">
          <img
            src="https://tmbill.com/img/outlet/tmbill_for_dine_in.png"
            alt="outlet"
            className="ions"
          />
          <h5 className="middle-text">Dine-in</h5>
        </div>
        <div className="outlet-types">
          <img
            src="https://tmbill.com/img/outlet/tmbill_for_cafe.png"
            alt="outlet"
            className="ions"
          />
          <h5 className="middle-text">Cafes</h5>
        </div>
        <div className="outlet-types">
          <img
            src="https://tmbill.com/img/outlet/tmbill_for_cloud_kitchen.png"
            alt="outlet"
            className="ions"
          />
          <h5 className="middle-text">Cloud Kitchens</h5>
        </div>
      </div>
      <div className="outlet-type">
        <div className="outlet-types">
          <img
            src="https://tmbill.com/img/outlet/tmbill_for_food_truck.png"
            alt="outlet"
            className="ions"
          />
          <h5 className="middle-text">Food Trucks</h5>
        </div>
        <div className="outlet-types">
          <img
            src="https://tmbill.com/img/outlet/tmbill_for_Bakeries.png"
            alt="outlet"
            className="ions"
          />
          <h5 className="middle-text">Bakeries</h5>
        </div>
        <div className="outlet-types">
          <img
            src="https://tmbill.com/img/outlet/tmbill_for_ice_cream.png"
            alt="outlet"
            className="ions"
          />
          <h5 className="middle-text">Ice Cream</h5>
        </div>

        <div className="outlet-types">
          <img
            src=" https://tmbill.com/img/outlet/tmbill_for_Pubs_bars.png"
            alt="outlet"
            className="ions"
          />
          <h5 className="middle-text">Pubs & bars</h5>
        </div>
      </div>
    </div>
  </div>
)

export default Middle
