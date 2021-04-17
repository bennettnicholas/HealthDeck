import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="nav-icons">
          <div className="home_icon">
            <Link to="/" className="home">
              <svg
                width="51"
                height="88"
                viewBox="0 0 87 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <rect x="4" width="79" height="80" rx="10" fill="#FAE6B1" />
                  <path
                    d="M28.125 54.0455V34.5455L43.5 21.25L58.875 34.5455V54.0455H28.125Z"
                    stroke="#050733"
                  />
                  <rect
                    x="38.375"
                    y="40.75"
                    width="10.25"
                    height="13"
                    rx="1"
                    stroke="#050733"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="0"
                    y="0"
                    width="87"
                    height="88"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </Link>
          </div>
          <div className="dashboard-icon">
            <Link to="/Analytics" className="Dashboard">
              <svg
                width="49"
                height="80"
                viewBox="0 0 79 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="79" height="80" rx="10" fill="#ECF4FF" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.3333 39.5L22.3333 53.375H29V39.5H22.3333Z"
                  stroke="#050733"
                  stroke-linecap="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M35.6667 25.625V53.375H42.3334V25.625H35.6667Z"
                  stroke="#050733"
                  stroke-linecap="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M49 31.7916V53.375H55.6667V31.7916H49Z"
                  stroke="#050733"
                  stroke-linecap="round"
                />
              </svg>
            </Link>
          </div>
          <div className="profile_icon">
            <Link to="/profile" className="profile">
              <svg
                width="49"
                height="80"
                viewBox="0 0 79 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="79" height="80" rx="10" fill="#ECF4FF" />
                <path
                  d="M26.7708 53.5625C26.7708 53.5625 33.625 50.75 35.5833 48.875C37.5416 47 31.6666 47 31.6666 37.625C31.6666 28.25 39.5 28.25 39.5 28.25C39.5 28.25 47.3333 28.25 47.3333 37.625C47.3333 47 41.4583 47 43.4166 48.875C45.375 50.75 52.2291 53.5625 52.2291 53.5625"
                  stroke="#050733"
                  stroke-linecap="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M39.5 58.25C50.3156 58.25 59.0834 49.8553 59.0834 39.5C59.0834 29.1447 50.3156 20.75 39.5 20.75C28.6844 20.75 19.9167 29.1447 19.9167 39.5C19.9167 49.8553 28.6844 58.25 39.5 58.25Z"
                  stroke="#050733"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
