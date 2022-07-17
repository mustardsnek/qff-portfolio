import React from "react";

const Products = () => {
  return (
    <>
      <h4 className="text-center m-3">Subscriptions</h4>
      <div className="row align-items-center justify-content-center">
        <div className="col-2">
          <div className="card mb-4 rounded-3 shadow-sm sidebar">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Website Hosting</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title text-center">
                $20<small className="text-muted fw-light">/mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Hassle free hosting</li>
                <li>25 GB of storage</li>
                <li>Email and chat support</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-outline-primary"
              >
                Sign up now
              </button>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="card mb-4 rounded-3 shadow-sm sidebar">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Site Maintenance</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title text-center">
                $50<small className="text-muted fw-light">/mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Website hosting</li>
                <li>Hourly backups</li>
                <li>Emergency hotline</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-outline-primary"
              >
                Sign up now
              </button>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="card mb-4 rounded-3 shadow-sm sidebar">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Optimization</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $200<small className="text-muted fw-light">/mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Site maintenance</li>
                <li>DevOps integration</li>
                <li>Unsolicited advice</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-outline-primary"
              >
                Sign up now
              </button>
            </div>
          </div>
        </div>
      </div>
      <h4 className="text-center m-3">By Hour</h4>
      <div className="row align-items-center justify-content-center">
        <div className="col-3">
          <div className="card mb-4 rounded-3 shadow-sm sidebar">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Web development</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title text-center">
                $100<small className="text-muted fw-light">/hr</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Requirements drafting</li>
                <li>Modern frameworks like React and Flask</li>
                <li>User acceptance tests and training</li>
                <li>Documentation</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-outline-primary"
              >
                Contact me
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card mb-4 rounded-3 shadow-sm sidebar">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Consulting</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title text-center">
                $125<small className="text-muted fw-light">/hr</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Enterprise suite software implementations</li>
                <li>Business rules to database logic</li>
                <li>Socratic dialogues</li>
                <li>Training</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-outline-primary"
              >
                Contact me
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card mb-4 rounded-3 shadow-sm sidebar">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Life coaching</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $150<small className="text-muted fw-light">/hr</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Optional consulting</li>
                <li>Personal curiosity supplements</li>
                <li>Life and career planning</li>
                <li>Emergency hotline</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-outline-primary"
              >
                Contact me
              </button>
            </div>
          </div>
        </div>
      </div>
      <h4 className="text-center m-3">By Job</h4>
      <div className="row align-items-center justify-content-center">
        <div className="col-2">
          <div className="card mb-4 rounded-3 shadow-sm sidebar">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Query me</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title text-center">
                $20<small className="text-muted fw-light"></small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>All questions valid</li>
                <li>Money back guarantee</li>
                <li>Sometimes funny</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-outline-primary"
              >
                Submit now
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card mb-4 rounded-3 shadow-sm sidebar">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Portfolio website</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title text-center">
                $2000<small className="text-muted fw-light"></small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Custom landing pages</li>
                <li>Domain registration and hosting</li>
                <li>1 year included maintenance</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-outline-primary"
              >
                Contact me
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card mb-4 rounded-3 shadow-sm sidebar">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Web application</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title text-center">
                $10000<small className="text-muted fw-light"></small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Custom design and functionality</li>
                <li>Included optimization</li>
                <li>30 hours of consulting</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-outline-primary"
              >
                Contact me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
