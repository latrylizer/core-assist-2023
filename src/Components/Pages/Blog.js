import React from "react";
import vaImg from "../../img/va_image.jpg";
import benefit from "../../img/benefits.webp";
import Footer from "../Footer/Footer";
export default function Blog() {
  return (
    <div className="container-fluid px-0">
      <div
        style={{ height: "650px" }}
        className="container-fluid bg-dark-transparent d-flex justify-content-center align-items-center"
      >
        <div className="col-md-3">
          <img
            className="coreAssist-big-logo"
            src="./img/Core Assist svg.svg"
            alt="coreassist"
            height="200"
          />
        </div>
      </div>
      <div className="Container-fluid bg-light">
        <header className="display-5 text-center text-uppercase text-orange py-4">
          Tips on hiring virtual assistant
        </header>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src={vaImg}></img>
                <div className="card-body">
                  <header className="lead fw-normal fs-4 text-center">
                    What a Virtual Assistant can do?
                  </header>
                  <p className="lead fs-6 text-center">By CoreAssist</p>
                  <p className="lead fs-6">
                    A Virtual Assistant or remote team member A virtual
                    assistant or remote team member is an individual who works
                    remotely and provides various administrative, technical, or
                    creative support to individuals or businesses...
                  </p>

                  <div className="d-grid gap-2">
                    <a
                      target="_blank"
                      href="/what_a_virtual_assistant_can_do"
                      className="btn btn-orange"
                    >
                      See Full Post
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={vaImg}></img>
                <div className="card-body">
                  <header className="lead fw-normal fs-4 text-center">
                    What a Virtual Assistant can do?
                  </header>
                  <p className="lead fs-6 text-center">By CoreAssist</p>

                  <p className="lead fs-6">
                    A Virtual Assistant or remote team member A virtual
                    assistant or remote team member is an individual who works
                    remotely and provides various administrative, technical, or
                    creative support to individuals or businesses...
                  </p>

                  <div className="d-grid gap-2">
                    <a
                      target="_blank"
                      href="/what_a_virtual_assistant_can_do"
                      className="btn btn-orange"
                    >
                      See Full Post
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={vaImg}></img>
                <div className="card-body">
                  <header className="lead fw-normal fs-4 text-center">
                    What a Virtual Assistant can do?
                  </header>
                  <p className="lead fs-6 text-center">By CoreAssist</p>

                  <p className="lead fs-6">
                    A Virtual Assistant or remote team member A virtual
                    assistant or remote team member is an individual who works
                    remotely and provides various administrative, technical, or
                    creative support to individuals or businesses...
                  </p>

                  <div className="d-grid gap-2">
                    <a
                      target="_blank"
                      href="/what_a_virtual_assistant_can_do"
                      className="btn btn-orange"
                    >
                      See Full Post
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* <div className="container-fluid bg-light">
        <header className="display-6 text-uppercase text-center py-4">
          Some common tasks performed by virtual assistants include:
        </header>
        <div className="row justify-content-evenly">
          <div className="col-md-2 py-3">
            <div className="card">
              <Person style={{ width: "100%" }} sx={{ fontSize: 150 }} />
              <p className="lead text-center">Administrative Support</p>
            </div>
          </div>
          <div className="col-md-2 py-3">
            <div className="card">
              <Share style={{ width: "100%" }} sx={{ fontSize: 150 }} />
              <p className="lead text-center">Social Media Management</p>
            </div>
          </div>
          <div className="col-md-2 py-3">
            <div className="card">
              <Analytics style={{ width: "100%" }} sx={{ fontSize: 150 }} />
              <p className="lead text-center">Research and Analysis</p>
            </div>
          </div>
          <div className="col-md-2 py-3">
            <div className="card">
              <SupportAgent style={{ width: "100%" }} sx={{ fontSize: 150 }} />
              <p className="lead text-center">Customer Support</p>
            </div>
          </div>
          <div className="col-md-2 py-3">
            <div className="card">
              <BorderAll style={{ width: "100%" }} sx={{ fontSize: 150 }} />
              <p className="lead text-center">Bookkeeping and Accounting</p>
            </div>
          </div>
          <div className="col-md-2 py-3">
            <div className="card">
              <Hub style={{ width: "100%" }} sx={{ fontSize: 150 }} />
              <p className="lead text-center">Technical Support</p>
            </div>
          </div>
          <div className="col-md-2 py-3">
            <div className="card">
              <House style={{ width: "100%" }} sx={{ fontSize: 150 }} />
              <p className="lead text-center">Property Management</p>
            </div>
          </div>
          <div className="col-md-2 py-3">
            <div className="card">
              <Assistant style={{ width: "100%" }} sx={{ fontSize: 150 }} />
              <p className="lead text-center">Executive Assistant</p>
            </div>
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
                “I recently had to replace 2 of my RTMs and CoreAssist did a
                wonderful job sending me qualified candidates. The 2 that have
                joined the team are GREAT! Furthermore, the team members that
                have been with us for years, are also GREAT!”
              </div>
            </div>
          </div>
          <div className="col-md-4 py-3">
            <div className="card bg-secondary">
              <div className="card-body lead">
                “The communication and professionalism that I get from the team
                at CoreAssist is great! They provide quality applicants and
                assist us through the hiring process. “
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
      </div> */}
    </div>
  );
}
