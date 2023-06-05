import PropTypes from "prop-types";
import { useState } from "react";

function Searcher({ loadInfo }) {
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
    <>
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
    </>
  );
}

Searcher.propTypes = {
  loadInfo: PropTypes.func.isRequired,
};

export default Searcher;
