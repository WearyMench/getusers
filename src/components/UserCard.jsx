import PropTypes from "prop-types";
function UserCard({ userData }) {
  return (
    <div className="profile">
      <img
        src={userData.avatar_url}
        alt={userData.login}
        className="userImage"
      />
      <div>
        <p>{userData.name}</p>
        <p>{userData.login}</p>
        <h3>{userData.bio}</h3>
        <p>
          Followers: {userData.followers} & Following: {userData.following}{" "}
        </p>
        <p>Public Respositories: {userData.public_repos}</p>
        <a
          href={userData.html_url}
          target="_blank"
          rel="noreferrer"
          className="externalLink"
        >
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
UserCard.propTypes = {
  userData: PropTypes.object.isRequired,
};
export default UserCard;
