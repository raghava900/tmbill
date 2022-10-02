import './index.css'

const Register = () => (
  <div>
    <h2 className="demo-heading">Take a Free Demo</h2>
    <div className="register">
      <div className="register1">
        <input type="text" placeholder="Restaurant Name" className="input" />
        <input type="text" placeholder="Owner Name" className="input" />
        <input type="text" placeholder="Owner Email" className="input" />
        <div>
          <input type="text" placeholder="INDIA(+91)" className="input1" />
          <input type="text" placeholder="Owner Mobile" className="input1" />
        </div>
        <input type="text" placeholder="Enter City" className="input" />
        <input type="text" placeholder="Enter Address" className="input" />
        <button type="button" className="button1">
          Submit
        </button>
      </div>
      <img
        src="https://tmbill.com/img/tmbill_request_for_demo.png"
        alt="request-demo"
        className="request-name"
      />
    </div>
    <div className="request-call">
      <img
        src="https://tmbill.com/img/tmbill_request_for_call_back.png"
        alt="request-call"
      />
      <div className="request">
        <h1 className="color">Get On-TMBill - Request for call!</h1>
        <div className="request-call1">
          <input type="text" placeholder="INDIA(+91)" className="input2" />
          <input type="text" placeholder="Phone Number" className="input2" />
          <button type="button" className="button1">
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Register
