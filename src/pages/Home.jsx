import React, { useState, useEffect } from "react";
import { getData } from "../Api";
import { GenerateUsernames } from "../GenerateUsername";

import Searcher from "../components/Searcher";
import Loader from "../components/Loader";
import UserCard from "../components/UserCard";

import "../styles/home.css";

function Home() {
  const [userData, setUserData] = useState(null);
  const [randomData, setRandomData] = useState(null);
  useEffect(() => {
    loadInfo();
    randomInfo();
  }, []);

  const loadInfo = async (user) => {
    const data = await getData(user);
    setUserData(data);
  };

  const randomInfo = async () => {
    const usernames = GenerateUsernames();
    const dataPromises = usernames.map(async (username) => {
      return await getData(username);
    });
    const data = await Promise.all(dataPromises);
    setRandomData(data);
  };
  console.log(randomData);
  return (
    <div>
      <h1>Enter any GitHub username</h1>
      <Searcher loadInfo={loadInfo} />
      <hr />
      {userData ? <UserCard userData={userData} /> : <Loader />}
      <hr />
      <h1>Some Examples</h1>
      <div className="examples">
        {randomData ? (
          randomData.map((data, index) => (
            <React.Fragment key={index}>
              {data ? <UserCard userData={data} /> : <Loader />}
            </React.Fragment>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default Home;
