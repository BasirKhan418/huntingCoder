import React from 'react'
const Pricing = () => {
  return (
    <>
    <h2 className='blogh2'>Subscription Plan For Businesses</h2>
      <div className="pricing1 py-5 bg-light">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <h3 className="mt-3 font-weight-medium mb-1">Pricing to make your Work Effective</h3>
        <h6 className="subtitle">We offer 100% satisafaction and Money back Guarantee</h6>
        <div className="switcher-box mt-4 d-flex align-items-center justify-content-center">
          <span className="font-14 font-weight-medium">MONTHLY</span>
        </div>
      </div>
    </div>
    {/* <!-- Row  --> */}
    <div className="row mt-5">
      {/* <!-- Column --> */}
      <div className="col-lg-3 col-md-6">
        <div className="card text-center card-shadow on-hover border-0 mb-4">
          <div className="card-body font-14">
            <h5 className="mt-3 mb-1 font-weight-medium">BASIC</h5>
            <h6 className="subtitle font-weight-normal">For Team of 3-5 Members</h6>
            <div className="pricing my-3">
              <sup>$</sup>
              <span className="monthly display-5">00</span>
              <span className="yearly display-5">240</span>
              <small className="monthly">/mo</small>
              <small className="yearly">/yr</small>
              <span className="d-block">Save <span className="font-weight-medium">$20</span> a Year</span>
            </div>
            <ul className="list-inline">
              <li className="d-block py-2">Perfect of Small Team</li>
              <li className="d-block py-2">Unlimited Invoices</li>
              <li className="d-block py-2">Project Management</li>
              <li className="d-block py-2">&nbsp;</li>
              <li className="d-block py-2">&nbsp;</li>
            </ul>
            <div className="bottom-btn">
              <a className="btn btn-success-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Column --> */}
      <div className="col-lg-3 col-md-6">
        <div className="card text-center card-shadow on-hover border-0 mb-4">
          <div className="card-body font-14">
            <span className="badge badge-inverse p-2 position-absolute price-badge font-weight-normal">Popular</span>
            <h5 className="mt-3 mb-1 font-weight-medium">INTERMEDIATE</h5>
            <h6 className="subtitle font-weight-normal">For Team of 10-15 Members</h6>
            <div className="pricing my-3">
              <sup>$</sup>
              <span className="monthly display-5">19</span>
              <span className="yearly display-5">400</span>
              <small className="monthly">/mo</small>
              <small className="yearly">/yr</small>
              <span className="d-block">Save <span className="font-weight-medium">$30</span> a Year</span>
            </div>
            <ul className="list-inline">
              <li className="d-block py-2">Perfect of Small Team</li>
              <li className="d-block py-2">Unlimited Invoices</li>
              <li className="d-block py-2">Project Management</li>
              <li className="d-block py-2">Team Management</li>
              <li className="d-block py-2">&nbsp;</li>
            </ul>
            <div className="bottom-btn">
              <a className="btn btn-danger-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="card text-center card-shadow on-hover border-0 mb-4">
          <div className="card-body font-14">
            <h5 className="mt-3 mb-1 font-weight-medium">HIGH CLASS</h5>
            <h6 className="subtitle font-weight-normal">For Team of 19-35 Members</h6>
            <div className="pricing my-3">
              <sup>$</sup>
              <span className="monthly display-5">38</span>
              <span className="yearly display-5">600</span>
              <small className="monthly">/mo</small>
              <small className="yearly">/yr</small>
              <span className="d-block">Save <span className="font-weight-medium">$50</span> a Year</span>
            </div>
            <ul className="list-inline">
              <li className="d-block py-2">Perfect of Small Team</li>
              <li className="d-block py-2">Unlimited Invoices</li>
              <li className="d-block py-2">Project Management</li>
              <li className="d-block py-2">Team Management</li>
              <li className="d-block py-2">Time Tracking</li>
            </ul>
            <div className="bottom-btn">
              <a className="btn btn-success-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="card text-center card-shadow on-hover border-0 mb-4">
          <div className="card-body font-14">
            <h5 className="mt-3 mb-1 font-weight-medium">SUPREME</h5>
            <h6 className="subtitle font-weight-normal">For Team of 25-100 Members</h6>
            <div className="pricing my-3">
              <sup>$</sup>
              <span className="monthly display-5">99</span>
              <span className="yearly display-5">1000</span>
              <small className="monthly">/mo</small>
              <small className="yearly">/yr</small>
              <span className="d-block">Save <span className="font-weight-medium">$80</span> a Year</span>
            </div>
            <ul className="list-inline">
              <li className="d-block py-2">Perfect of Small Team</li>
              <li className="d-block py-2">Unlimited Invoices</li>
              <li className="d-block py-2">Project Management</li>
              <li className="d-block py-2">Team Management</li>
              <li className="d-block py-2">Time Tracking</li>
            </ul>
            <div className="bottom-btn">
              <a className="btn btn-success-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Pricing
