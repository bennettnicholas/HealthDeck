import React from "react";
import "./Profile.css";
const Profile = () => {
  return (
    <>
      <div
        className="profile-cotainer"
        style={{ marginLeft: "80px", fontSize: "18px" }}
      >
        <div className="row profile_info">

       
        <div
          className="col-6 profile-image"
          style={{ marginLeft: "10%", marginTop: "20px" }}
        >
          <svg
            width="190"
            height="278"
            viewBox="0 0 275 278"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="137.5" cy="139" rx="137.5" ry="139" fill="#ECF4FF" />
            <path
              d="M67.375 110.727C67.375 109.977 67.5938 109.352 68.0312 108.852C68.4844 108.352 69.1562 108.102 70.0469 108.102C70.9375 108.102 71.6094 108.352 72.0625 108.852C72.5312 109.352 72.7656 109.977 72.7656 110.727C72.7656 111.445 72.5312 112.047 72.0625 112.531C71.6094 113.016 70.9375 113.258 70.0469 113.258C69.1562 113.258 68.4844 113.016 68.0312 112.531C67.5938 112.047 67.375 111.445 67.375 110.727ZM187.188 110.727C187.188 109.977 187.406 109.352 187.844 108.852C188.297 108.352 188.969 108.102 189.859 108.102C190.75 108.102 191.422 108.352 191.875 108.852C192.344 109.352 192.578 109.977 192.578 110.727C192.578 111.445 192.344 112.047 191.875 112.531C191.422 113.016 190.75 113.258 189.859 113.258C188.969 113.258 188.297 113.016 187.844 112.531C187.406 112.047 187.188 111.445 187.188 110.727ZM112.023 156.273H100.586V152.734H112.023V156.273ZM125.289 156.273H113.852V152.734H125.289V156.273ZM138.555 156.273H127.117V152.734H138.555V156.273ZM151.82 156.273H140.383V152.734H151.82V156.273ZM165.086 156.273H153.648V152.734H165.086V156.273ZM178.352 156.273H166.914V152.734H178.352V156.273Z"
              fill="black"
            />
          </svg>
        </div>
        </div>

        <div className="col-6 info" style={{ fontSize: "2px",marginLeft:"10%"}}>
          <h5>
            <span>Name:</span>
            {}
          </h5>
          <h5>
            <span>Email:</span>
            {}
          </h5>
          <h5>
            <span>Phone Number:</span>
            {}
          </h5>
        </div>

        <div className="row">
          <div
            className="col-6 noti-prefernce"
            style={{
              marginLeft: "20%",
              background: "grey",
              width: "450px",
              height: "500px",
             
            }}
          >
            <h4>Notification Prefrences</h4>
            <p>{}</p>
          </div>
          <div
            className="col-6 emergencyconatct"
            style={{
              marginLeft: "20%",
              background: "grey",
              width: "450px",
              height: "500px",
            }}
          >
            <h4>Your Emergency Contact</h4>
            <p>{}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
