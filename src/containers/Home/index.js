import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getRealTimeUsers } from "../../actions";

/**
* @author Eshwar CVS
* @function Home
**/

const Home = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getRealTimeUsers(auth.uid));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // console.log(user);

  return (
    <Layout>
      <section className="container">
        <div className="listOfUsers">
          {user.users.length > 0
            ? user.users.map((user) => {
              return (
                <div key={user.uid} className="displayName">
                  <div className="displayPic">
                    <img
                      src="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      justifyContent: "space-between",
                      margin: "0 10px",
                    }}
                  >
                    <span style={{ fontWeight: 500 }}>
                      {user.firstName}
                      {user.lastName}
                    </span>
                    <span>{user.isOnline ? "online" : "offline"}</span>
                  </div>
                </div>
              );
            })
            : null}
        </div>
        <div className="chatArea">
          <div className="chatHeader">Pigeon</div>
          <div className="messageSections">
            <div style={{ textAlign: "left" }}>
              <p className="messageStyle">Hello Pigeon</p>
            </div>
          </div>
          <div className="chatControls">
            <textarea />
            <button>Send</button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
