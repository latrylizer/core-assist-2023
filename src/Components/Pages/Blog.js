import React from "react";

export default function Blog() {
  return (
    <div className="container-fluid bg-dark-transparent text-light">
      <div className="row">
        <div className="col-md-4 bg-dark-transparent">
          <header className="display-5 pt-5">Lorem ipsum dolor</header>
          <hr className="bg-orange" />
          <p className="lead fs-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
            gravida risus at interdum. Sed a pulvinar orci. Donec id interdum
            justo. Donec eleifend faucibus ipsum. Proin et magna blandit, congue
            lorem sed, mattis ex. Vestibulum elementum, erat quis blandit
            finibus, sapien diam commodo nibh, ac aliquam metus elit vel mauris.
            Vivamus ex nisi, tristique vel turpis quis, ultricies fringilla
            velit. Quisque laoreet arcu vitae nibh consequat vehicula. Curabitur
            eget malesuada ante.
          </p>
        </div>
        <div className="col-md px-5">
          <header className="display-5 pt-5">Lorem ipsum dolor</header>
          <hr className="bg-orange" />
          <header className="display-5 fw-normal pb-3">OUR SERVICES</header>
          <div className="container-fluid px-0">
            <div className="row px-0">
              <div className="col-md-6">
                <div className="card bg-dark" style={{ height: "250px" }}></div>
              </div>
              <div className="col-md-6">
                <div className="card bg-dark" style={{ height: "250px" }}></div>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-md-6">
                <div className="card bg-dark" style={{ height: "250px" }}></div>
              </div>
              <div className="col-md-6">
                <div className="card bg-dark" style={{ height: "250px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
