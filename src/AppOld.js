function App() {
  return (
    <div>
      <header>
        <div className="pos-center-row">
          <img
            className="w-100 vh-img head-img"
            src="./filler-bar-image.jpg"
            alt=""
          />
        </div>
      </header>

      <div className="main-div">
        <div className="container">
          <div className="pt-3 text-div">
            <h2>OddMenu Demo</h2>
            <div className="disp-row">
              <i className="fa fa-map-marker me-1" aria-hidden="true"></i>
              <p>Blvd. Partizanski Odredi, Bunjakovec trgovski</p>
            </div>
            <div className="disp-row">
              <div className="disp-row">
                <i className="fa fa-phone me-1" aria-hidden="true"></i>
                <p>+389 111 111</p>
              </div>
              <div className="disp-row">
                <i className="fa fa-wifi ms-3 me-1" aria-hidden="true"></i>
                <p>Wifi_Password123</p>
              </div>
            </div>
          </div>

          <div
            className="pos-row pt-2 nav nav-tabs"
            id="nav-tab"
            role="tablist"
          >
            <button
              className="btn-menu me-2 px-3 nav-link active"
              id="nav-food-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-food"
              type="button"
              role="tab"
              aria-controls="nav-food"
              aria-selected="true"
            >
              Main menu
            </button>
            <button
              className="btn-bar px-3 nav-link"
              id="nav-drink-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-drink"
              type="button"
              role="tab"
              aria-controls="nav-drink"
              aria-selected="false"
            >
              Bar
            </button>
          </div>

          {/* Search */}
          {/* <div class="search-div">
            <div class="d-flex border-0 mt-4">
              <input
                type="text"
                placeholder="Search"
                class="search px-3 py-2"
              />
              <div class="make-left px-1">
                <a href="#" class="src-btn p-2">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div> */}

          <div class="menu-main-div mt-4 tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-food"
              role="tabpanel"
              aria-labelledby="nav-food-tab"
            >
              <div class="row">
                <button
                  href="#"
                  class="mb-3 col-lg-4 col-md-6"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <div class="menu-div menu-div-1">
                    <h2 class="menu-h">Hot Meals</h2>
                  </div>
                </button>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-scrollable modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5
                          class="modal-title text-uppercase"
                          id="exampleModalLabel"
                        >
                          Hot Meals
                        </h5>
                        <button
                          type="button"
                          class="btn-no-bs"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <i class="fa fa-times fa-lg" aria-hidden="true"></i>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="d-flex flex-column col-lg-6 mb-5">
                              <img
                                class="img-m-menu"
                                src="https://www.chilihousesf.com/wp-content/uploads/2020/07/soup-dumplings.jpg"
                                alt=""
                              />
                              <div class="d-block mt-2">
                                <div class="d-flex">
                                  <h6>"Homemade" dumplings</h6>
                                  <div class="make-left">
                                    <p>250 g</p>
                                  </div>
                                </div>
                              </div>
                              <p class="menu-item-t">
                                Vareniki with mashed potatoes and fried
                                chanterelles
                              </p>
                              <div class="d-flex">
                                <p class="menu-item-p">4.5</p>
                                <p class="dolar-sign">$</p>
                              </div>
                            </div>

                            <div class="d-flex flex-column col-lg-6 mb-5">
                              <img
                                class="img-m-menu"
                                src="https://cdn.hourdetroit.com/wp-content/uploads/sites/20/2017/01/161105_HR1cx_DSC5802.cx_.jpg"
                                alt=""
                              />
                              <div class="d-block mt-2">
                                <div class="d-flex">
                                  <h6>"Homemade" dumplings</h6>
                                  <div class="make-left">
                                    <p>250 g</p>
                                  </div>
                                </div>
                              </div>
                              <p class="menu-item-t">
                                Vareniki with mashed potatoes and fried
                                chanterelles
                              </p>
                              <div class="d-flex">
                                <p class="menu-item-p">4.5</p>
                                <p class="dolar-sign">$</p>
                              </div>
                            </div>

                            <div class="d-flex flex-column col-lg-6 mb-5">
                              <img
                                class="img-m-menu"
                                src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/04/epic-burger-cheeseburger.jpg?quality=82&strip=1"
                                alt=""
                              />
                              <div class="d-block mt-2">
                                <div class="d-flex">
                                  <h6>"Homemade" dumplings</h6>
                                  <div class="make-left">
                                    <p>250 g</p>
                                  </div>
                                </div>
                              </div>
                              <p class="menu-item-t">
                                Vareniki with mashed potatoes and fried
                                chanterelles
                              </p>
                              <div class="d-flex">
                                <p class="menu-item-p">4.5</p>
                                <p class="dolar-sign">$</p>
                              </div>
                            </div>

                            <div class="d-flex flex-column col-lg-6 mb-5">
                              <img
                                class="img-m-menu"
                                src="https://www.mashed.com/img/gallery/you-should-start-eating-more-borscht-heres-why/l-intro-1609952226.jpg"
                                alt=""
                              />
                              <div class="d-block mt-2">
                                <div class="d-flex">
                                  <h6>"Homemade" dumplings</h6>
                                  <div class="make-left">
                                    <p>250 g</p>
                                  </div>
                                </div>
                              </div>
                              <p class="menu-item-t">
                                Vareniki with mashed potatoes and fried
                                chanterelles
                              </p>
                              <div class="d-flex">
                                <p class="menu-item-p">4.5</p>
                                <p class="dolar-sign">$</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                            </div> */}
                    </div>
                  </div>
                </div>

                <button href="#" class="mb-3 col-lg-4 col-md-6">
                  <div class="menu-div menu-div-2">
                    <h2 class="menu-h">Salads</h2>
                  </div>
                </button>

                <button href="#" class="mb-3 col-lg-4 col-md-6">
                  <div class="menu-div menu-div-3">
                    <h2 class="menu-h">Desserts</h2>
                  </div>
                </button>

                <button href="#" class="mb-3 col-lg-4 col-md-6">
                  <div class="menu-div menu-div-4">
                    <h2 class="menu-h">Breakfasts</h2>
                  </div>
                </button>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="nav-drink"
              role="tabpanel"
              aria-labelledby="nav-drink-tab"
            >
              <div class="row">
                <button href="#" class="mb-3 col-lg-4 col-md-6">
                  <div class="menu-div menu-div-1">
                    <h2 class="menu-h">Hot Meals</h2>
                  </div>
                </button>

                <button href="#" class="mb-3 col-lg-4 col-md-6">
                  <div class="menu-div menu-div-2">
                    <h2 class="menu-h">Salads</h2>
                  </div>
                </button>

                <button href="#" class="mb-3 col-lg-4 col-md-6">
                  <div class="menu-div menu-div-3">
                    <h2 class="menu-h">Desserts</h2>
                  </div>
                </button>

                <button href="#" class="mb-3 col-lg-4 col-md-6">
                  <div class="menu-div menu-div-4">
                    <h2 class="menu-h">Breakfasts</h2>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Above this */}
        </div>
      </div>
    </div>
  );
}

export default App;
