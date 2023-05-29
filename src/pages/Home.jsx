import PropTypes from "prop-types";
import { useState } from "react";

import "../styles/home.css";

function Home({ userData, loadInfo }) {
  const [user, setUser] = useState("");

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user || user === "") {
      return;
    }
    loadInfo(user);
  };
  return (
    <div>
      <h1>Enter any GitHub username</h1>
      <form onSubmit={handleSubmit} className="formContainer">
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
          placeholder="Any username"
        />
        <input type="submit" value="Search" />
      </form>
      <hr />
      <div className="profile">
        <div className="mainInfo">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="userImage"
          />
          <div>
            <p>{userData.name}</p>
            <p>{userData.login}</p>
          </div>
        </div>
        <h3>{userData.bio}</h3>
        <p>
          Followers: {userData.followers} & Following: {userData.following}{" "}
        </p>
        <p>Public Respositories: {userData.public_repos}</p>
        <a href={userData.html_url} className="externalLink">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25284.png"
            alt="external link"
          />
          <p>Go to GitHub</p>
        </a>
      </div>
    </div>
  );
}

Home.propTypes = {
  userData: PropTypes.object.isRequired,
  loadInfo: PropTypes.func.isRequired,
};

export default Home;
