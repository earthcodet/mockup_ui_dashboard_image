import React, { Component } from "react";
import "../StyleSheet/Main.scss";
import "../StyleSheet/Navber.scss";
import NavSidebarLeft from "./NavSidebarLeft";
import NavSidebarRight from "./NavSidebarRight";
import $ from "jquery";
class Navbar extends Component {
  constructor() {
    super();
    window.addEventListener("resize", this.resizeCheck);
  }
  componentDidMount() {
    //
    this.resizeCheck();
    document.addEventListener("mousedown", this.handCheck, false);
  }
  componentDidUnmount() {
    document.removeEventListener("mousedown", this.handCheck, false);
  }
  handCheck = (e) => {
    if (
      ($(".navbar-mobile").hasClass("show") &&
        !this.node_body.contains(e.target)) ||
      this.node.contains(e.target)
    ) {
      $(".navbar-mobile").toggleClass("show");
    }
  };
  resizeCheck = () => {
    if (window.innerWidth <= 1500) {
      this.onClickControlNavRight("open");
    } else {
      if (
        !$(".main-content").hasClass("hide-menu") &&
        $(".main-navbar-right").hasClass("hide")
      ) {
        $(".main-navbar-right").removeClass("hide");
      }
    }
  };
  onClickControlNavRight = (kw) => {
    if (window.innerWidth > 1024) {
      if (kw === undefined) {
        if (
          $(".main-content").hasClass("hide-menu") &&
          !$(".main-navbar-right").hasClass("hide")
        ) {
          $(".main-navbar-right").toggleClass("hide");
        } else {
          $(".main-navbar-right").toggleClass("hide");
          $(".main-content").toggleClass("hide-menu");
          $(".control").toggleClass("hide-menu");
        }
      } else {
        if (!$(".main-navbar-right").hasClass("hide")) {
          $(".main-navbar-right").toggleClass("hide");
          $(".main-content").toggleClass("hide-menu");
          $(".control").toggleClass("hide-menu");
        } else {
          $(".main-navbar-right").toggleClass("hide");
          if ($(".main-content").hasClass("hide-menu")) {
            $(".main-content").toggleClass("hide-menu");
            $(".control").toggleClass("hide-menu");
          }
        }
      }
    } else {
      if (kw === undefined) {
      } else {
        if (!$(".main-navbar-right").hasClass("hide")) {
          $(".main-navbar-right").toggleClass("hide");
        }
      }
    }
  };

  render() {
    return (
      <div>
        <div className="navbar">
          <div className="heading-mobile"></div>
          <div className="nav-logo">
            <p>photolytics</p>
          </div>
          <p>
            <i
              class="las la-bars"
              onClick={() => this.onClickControlNavRight()}
              ref={(node) => (this.node = node)}
            ></i>
          </p>
        </div>
        <div
          className="navbar-mobile"
          ref={(node_body) => (this.node_body = node_body)}
        >
          <div className="heading-menu-mobile-bar">
            <p className="las la-search">Menu</p>
            <div>
              <i className="las la-search"></i>
              <input type="text"></input>
            </div>
          </div>
          <div className="profile-menu-mobile-bar">
            <div className="profile">
              <img src="https://static.jobscan.co/blog/uploads/linkedin-profile-picture-1280x720.jpg"></img>
            </div>
            <p>
              <span>Isabella D.</span>
              <spn>View your profile</spn>
            </p>
          </div>
          <NavSidebarLeft />
          <NavSidebarRight />
        </div>
      </div>
    );
  }
}
export default Navbar;
