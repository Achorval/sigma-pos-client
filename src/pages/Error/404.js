import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import illustration1 from '../../core/assets/images/illustrations/pack4/404.svg';

export default function Error404() {

  return (
    <>
      <div className="app-wrapper bg-white">
        <div className="app-main">
          <div className="app-content p-0">
            <div className="app-inner-content-layout--main">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content">
                  <div className="hero-wrapper bg-composed-wrapper min-vh-100">
                    <div className="flex-grow-1 w-100 d-flex align-items-center">
                      <Col
                        lg="6"
                        md="9"
                        className="px-4 px-lg-0 mx-auto text-center text-black">
                        <img
                          src={illustration1}
                          className="w-50 mx-auto d-block my-5 img-fluid"
                          alt="..."
                        />
                        <h3 className="font-size-xxl line-height-sm font-weight-boldest d-block px-3 mb-3 text-dark-75">
                          Page not found
                        </h3>
                        <p>
                          Sorry we couldn't find what you were looking for!
                        </p>
                        <div className="mt-4 mt-lg-3 px-2">
                          <Link to="/" className="w-100 btn btn-first btn-lg"><span className="btn-wrapper--label">Back to home</span></Link>
                        </div>
                      </Col>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
