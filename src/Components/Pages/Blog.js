import React from "react";

export default function Blog() {
  return (
    <div className="container-fluid px-0">
      <div className="container-fluid bg-dark-transparent text-light">
        <div className="row">
          <div className="col-md-4 bg-dark-transparent">
            <header className="display-5 pt-5">Lorem ipsum dolor</header>
            <hr className="bg-orange" />
            <p className="lead fs-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              posuere gravida risus at interdum. Sed a pulvinar orci. Donec id
              interdum justo. Donec eleifend faucibus ipsum. Proin et magna
              blandit, congue lorem sed, mattis ex. Vestibulum elementum, erat
              quis blandit finibus, sapien diam commodo nibh, ac aliquam metus
              elit vel mauris. Vivamus ex nisi, tristique vel turpis quis,
              ultricies fringilla velit. Quisque laoreet arcu vitae nibh
              consequat vehicula. Curabitur eget malesuada ante.
            </p>
            <button className="btn btn-orange text-uppercase lead py-2">
              get started
            </button>
          </div>
          <div className="col-md px-5">
            <header className="display-5 pt-5">Lorem ipsum dolor</header>
            <hr className="bg-orange" />
            <header className="display-5 fw-normal pb-3">OUR SERVICES</header>
            <div className="container-fluid px-0">
              <div className="row px-0">
                <div className="col-md-6">
                  <div
                    className="card bg-dark"
                    style={{ height: "250px" }}
                  ></div>
                </div>
                <div className="col-md-6">
                  <div
                    className="card bg-dark"
                    style={{ height: "250px" }}
                  ></div>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-md-6">
                  <div
                    className="card bg-dark"
                    style={{ height: "250px" }}
                  ></div>
                </div>
                <div className="col-md-6">
                  <div
                    className="card bg-dark"
                    style={{ height: "250px" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light">
        <header className="display-5 text-uppercase text-center py-4">
          our clients
        </header>
        <div className="row justify-content-around">
          <div className="col-md-3 py-3">
            <div className="card bg-dark" style={{ height: "300px" }}></div>
          </div>
          <div className="col-md-3 py-3">
            <div className="card bg-dark" style={{ height: "300px" }}></div>
          </div>
          <div className="col-md-3 py-3">
            <div className="card bg-dark" style={{ height: "300px" }}></div>
          </div>
        </div>
        <div className="container d-flex justify-content-center py-3">
          <button className="btn btn-orange text-uppercase py-2">
            get started
          </button>
        </div>
      </div>
      <div className="container-fluid bg-dark text-light">
        <header className="display-5 text-center text-uppercase py-4">
          what our clients say about our work
        </header>
        <div className="row justify-content-around">
          <div className="col-md-4 py-3">
            <div className="card bg-secondary">
              <div className="card-body lead">
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                lobortis ante eu neque ultricies, a fringilla leo maximus.
                Vivamus auctor tempus lacus sed bibendum. Etiam et dui sed nisi
                dignissim sagittis sit amet id neque. Etiam aliquam mauris in
                augue sollicitudin, sed vulputate metus gravida. Curabitur
                pharetra, lectus non vestibulum fringilla, augue orci
                scelerisque elit, ac ultricies augue elit ac est. Duis at
                accumsan justo, in accumsan enim. Nulla et dolor tellus. Sed
                convallis mauris at neque commodo iaculis. Nulla quis dignissim
                enim. Praesent luctus elementum magna, et semper enim finibus
                quis. Nam nec urna non magna venenatis interdum eu ac tellus.
                Quisque mauris neque, auctor quis placerat et, molestie vitae
                sapien."
              </div>
            </div>
          </div>
          <div className="col-md-4 py-3">
            <div className="card bg-secondary">
              <div className="card-body lead">
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                lobortis ante eu neque ultricies, a fringilla leo maximus.
                Vivamus auctor tempus lacus sed bibendum. Etiam et dui sed nisi
                dignissim sagittis sit amet id neque. Etiam aliquam mauris in
                augue sollicitudin, sed vulputate metus gravida. Curabitur
                pharetra, lectus non vestibulum fringilla, augue orci
                scelerisque elit, ac ultricies augue elit ac est. Duis at
                accumsan justo, in accumsan enim. Nulla et dolor tellus. Sed
                convallis mauris at neque commodo iaculis. Nulla quis dignissim
                enim. Praesent luctus elementum magna, et semper enim finibus
                quis. Nam nec urna non magna venenatis interdum eu ac tellus.
                Quisque mauris neque, auctor quis placerat et, molestie vitae
                sapien."
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light">
        <header className="display-5 text-center text-uppercase py-3 text-orange">
          who we are
        </header>
        <div className="container">
          <p className="lead text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            lobortis ante eu neque ultricies, a fringilla leo maximus. Vivamus
            auctor tempus lacus sed bibendum. Etiam et dui sed nisi dignissim
            sagittis sit amet id neque.
          </p>
        </div>
        <div className="row justify-content-around">
          <div className="col-md-3">
            <div className="card">
              <img src="./img/staff/rosemay.webp"></img>
              <div className="card-body">
                <p className="lead text-center text-uppercase text-orange fw-normal">
                  Lorem ipsum dolor
                </p>
                <p className="lead text-center">Lorem ipsum dolor</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="./img/staff/rosemay.webp"></img>
              <div className="card-body">
                <p className="lead text-center text-uppercase text-orange fw-normal">
                  Lorem ipsum dolor
                </p>
                <p className="lead text-center">Lorem ipsum dolor</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="./img/staff/rosemay.webp"></img>
              <div className="card-body">
                <p className="lead text-center text-uppercase text-orange fw-normal">
                  Lorem ipsum dolor
                </p>
                <p className="lead text-center">Lorem ipsum dolor</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center py-3">
          <button className="btn btn-orange text-uppercase lead py-2">
            get started
          </button>
        </div>
      </div>
      <div className="container-fluid bg-dark text-light">
        <div className="row">
          <div className="col-md-6 px-4">
            <header className="display-5 text-uppercase text-orange py-4">
              contact us
            </header>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              lobortis ante eu neque ultricies, a fringilla leo maximus. Vivamus
              auctor tempus lacus sed bibendum.
            </p>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              lobortis ante eu neque ultricies, a fringilla leo maximus. Vivamus
              auctor tempus lacus sed bibendum. Etiam et dui sed nisi dignissim
              sagittis sit amet id neque. Etiam aliquam mauris in augue
              sollicitudin, sed vulputate metus gravida. Curabitur pharetra,
              lectus non vestibulum fringilla, augue orci scelerisque elit, ac
              ultricies augue elit ac est. Duis at accumsan justo, in accumsan
              enim. Nulla et dolor tellus. Sed convallis mauris at neque commodo
              iaculis. Nulla quis dignissim enim. Praesent luctus elementum
              magna, et semper enim finibus quis. Nam nec urna non magna
              venenatis interdum eu ac tellus. Quisque mauris neque, auctor quis
              placerat et, molestie vitae sapien.
            </p>
          </div>
          <div className="col-md-6 py-3">
            <div className="col-md-8 py-4">
              <div className="card bg-secondary px-3">
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Full Name:</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email:</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <textarea className="form-control" rows={3}></textarea>
                    </div>
                    <div className="d-grid gap-2">
                      <button
                        type="button"
                        className="btn btn-orange text-uppercase"
                      >
                        submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
