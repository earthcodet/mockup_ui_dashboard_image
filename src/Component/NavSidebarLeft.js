import React, { Component } from "react";
import "../StyleSheet/NavSideLeft.scss";
import $ from "jquery";
class NavSidebarLeft extends Component {
  onClickDropdown = (n) => {
    switch (n) {
      case 0:
        document
          .getElementsByClassName("dropdown-list")
          [n].classList.toggle("visible");
        break;
      case 1:
        document
          .getElementsByClassName("dropdown-list")
          [n].classList.toggle("visible");
        break;
      default:
        document.getElementsByClassName("tree")[0].classList.toggle("visible");
        break;
    }
  };
  componentDidMount() {
    $(".nav-content-left li").on("click", function () {
      $(".nav-content-left li").removeClass("active");
      $(this).toggleClass("active");
    });
    $(".nav-content-left-list li").on("click", function () {
      // $('.nav-content-left-list li').removeClass('active')
      $(this).toggleClass("active");
    });
  }
  render() {
    return (
      <div className="main-nav-left">
        <div className="m-color">
          <ul className="nav-content-left">
            <li>
              <i className="las la-folder"></i>
              <a>Custom Reports</a>
            </li>
            <li className="active">
              <i className="las la-chart-area"></i>
              <a>Dasboard</a>
            </li>
            <li>
              <i className="las la-user-alt"></i>
              <a>User Activity</a>
            </li>
            <li className="notification-box">
              <i className="las la-comment"></i>
              <a>Shares</a>
              <div className="notification">
                <p>27</p>
              </div>
            </li>
            <li>
              <i className="las la-arrow-down"></i>
              <a>Dowloads</a>
            </li>
          </ul>
          <div className="status">
            <div className="status-box">
              <div className="process color-1">
                <p>4k</p>
              </div>
              <p>karma</p>
            </div>
            <div className="status-box">
              <div className="process color-2">
                <p>59</p>
              </div>
              <p>photos</p>
            </div>
          </div>
        </div>
        <div className="h-color">
          <ul className="nav-content-left-list">
            <li>
              <div className="content">
                <p>my account</p>
                <p className="headding-nobile">A</p>
              </div>
            </li>
            <li>
              <div
                className="content"
                onClick={() => {
                  this.onClickDropdown(0);
                }}
              >
                <i className="las la-file-upload">
                  <p>Upload Photos</p>
                </i>
                <i className="fa fa-caret-right"></i>
              </div>
              <ul className="dropdown-list">
                <li>
                  <i className="las la-image"></i>
                  Upload Image
                </li>
                <li>
                  <i className="las la-file-video"></i>
                  Upload Video
                </li>
              </ul>
            </li>
            <li>
              <div className="content">
                <i className="las la-icons">
                  <p>Collections</p>
                </i>
                <i className="fa fa-plus"></i>
              </div>
            </li>
            <li className="">
              <div
                className="content"
                onClick={() => {
                  this.onClickDropdown(2);
                }}
              >
                <i className="las la-folder-open">
                  <p>Directory</p>
                </i>
                <i className="fa fa-caret-right"></i>
              </div>
              <ul class="tree">
                <li>
                  <input type="checkbox" id="c1" />
                  <label class="tree_label hg" for="c1">
                    <i className="las la-hdd"></i>
                    Hard Drive
                  </label>
                  <ul>
                    <li>
                      <input type="checkbox" id="c2" />
                      <label for="c2" class="tree_label">
                        <i className="las la-folder"></i>Misc
                      </label>
                      <ul>
                        <li>
                            <span class="tree_label las la-file-alt ">misc.mp4</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input type="checkbox" id="c3" />
                      <label for="c3" class="tree_label">
                        <i className="las la-folder"></i>Sketch
                      </label>
                      <ul>
                        <li>
                          <span class="tree_label las la-file-alt">
                            image.png
                          </span>
                        </li>
                        <li>
                          <span class="tree_label las la-file-alt">
                            image_2.png
                          </span>
                        </li>
                        <li>
                          <span class="tree_label las la-file-alt">
                            image.png
                          </span>
                        </li>
                        <li>
                          <span class="tree_label las la-file-alt">
                            image_2.png
                          </span>
                        </li>
                        <li>
                          <span class="tree_label las la-file-alt">
                            image.png
                          </span>
                        </li>
                        <li>
                          <span class="tree_label las la-file-alt">
                            image_2.png
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input type="checkbox" id="c4" />
                      <label for="c4" class="tree_label">
                        <i className="las la-folder"></i>Photoshop
                      </label>
                      <ul>
                        <li>
                          <span class="tree_label las la-file-alt">
                            Unititled.psd
                          </span>
                        </li>
                        <li>
                          <span class="tree_label las la-file-alt">
                            v_1.psd
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input type="checkbox" id="c5" />
                      <label for="c5" class="tree_label">
                        <i className="las la-folder"></i>New
                      </label>
                      <ul>
                        <li>
                          <span class="tree_label las la-file-alt">
                            tree.png
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input type="checkbox" id="c6" />
                      <label for="c6" class="tree_label">
                        <i className="las la-folder"></i>Dribbble
                      </label>
                      <ul>
                        <li>
                          <span class="tree_label las la-file-alt">
                            tree_2.png
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <input type="checkbox" id="c7" />
                  <label class="tree_label hg" for="c7">
                    Hard Drive
                  </label>
                  <ul>
                    <li>
                      <input type="checkbox" id="c8" />
                      <label for="c8" class="tree_label">
                        <i className="las la-folder"></i>Misc
                      </label>
                      <ul>
                        <li>
                          <span class="tree_label las la-file-alt">
                            misc.mp4
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input type="checkbox" id="c9" />
                      <label for="c9" class="tree_label">
                        <i className="las la-folder"></i>Sketch
                      </label>
                      <ul>
                        <li>
                          <span class="tree_label las la-file-alt">
                            image.png
                          </span>
                        </li>
                        <li>
                          <span class="tree_label las la-file-alt">
                            image_2.png
                          </span>
                        </li>
                        <li>
                          <span class="tree_label las la-file-alt">
                            image.png
                          </span>
                        </li>
                        <li>
                          <span class="tree_label las la-file-alt">
                            image_2.png
                          </span>
                        </li>
                        <li>
                          <span class="tree_label las la-file-alt">
                            image.png
                          </span>
                        </li>
                        <li>
                          <span class="tree_label las la-file-alt">
                            image_2.png
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input type="checkbox" id="c10" />
                      <label for="c10" class="tree_label">
                        <i className="las la-folder"></i>Photoshop
                      </label>
                      <ul>
                        <li>
                          <span class="tree_label las la-file-alt">
                            Unititled.psd
                          </span>
                        </li>
                        <li>
                          <span class="tree_label las la-file-alt">
                            v_1.psd
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input type="checkbox" id="c11" />
                      <label for="c11" class="tree_label">
                        <i className="las la-folder"></i>New
                      </label>
                      <ul>
                        <li>
                          <span class="tree_label las la-file-alt">
                            tree.png
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input type="checkbox" id="c12" />
                      <label for="c12" class="tree_label">
                        <i className="las la-folder"></i>Dribbble
                      </label>
                      <ul>
                        <li>
                          <span class="tree_label las la-file-alt">
                            tree_2.png
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                {/* <li></li> */}
              </ul>
            </li>
            <li>
              <div
                className="content"
                onClick={() => {
                  this.onClickDropdown(1);
                }}
              >
                <i className="lab la-buffer">
                  <p>Catalog</p>
                </i>
                <i className="fa fa-caret-right"></i>
              </div>
              <ul className="dropdown-list">
                <li>
                  <i className="las la-image"></i>
                  Upload Image
                </li>
                <li>
                  <i className="las la-file-video"></i>
                  Upload Video
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default NavSidebarLeft;
