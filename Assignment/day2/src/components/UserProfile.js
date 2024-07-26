import React from 'react'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile = ({ name, age, profilePicture }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={profilePicture} className="card-img-top" alt={`${name}'s profile`} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Age: {age}</p>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  profilePicture: PropTypes.string.isRequired,
};

export default UserProfile;