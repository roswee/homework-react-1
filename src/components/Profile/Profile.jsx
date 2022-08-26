import PropTypes from "prop-types";
import styles from './Profile.module.css';

const {profil__label, profile__quantity, profile__li, profile, description, avatar__jpg, profile__name, profile__stats} = styles;

const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <div className={profile}>
            <div className={description}>
                <img 
                src={avatar}
                alt="User avatar"
                className={avatar__jpg}
                />
                <p className={profile__name}>{username}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>
            <ul className={profile__stats}>
                <li className={profile__li}>
                <span className={profil__label}>Followers</span>
                <span className={profile__quantity}>{stats.followers}</span>
                </li>
                <li className={profile__li}>
                <span className={profil__label}>Views</span>
                <span className={profile__quantity}>{stats.views}</span>
                </li>
                <li className={profile__li}>
                <span className={profil__label}>Likes</span>
                <span className={profile__quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )}
    
    Profile.propTypes = {
        username: PropTypes.string,
        tag: PropTypes.string,
        location: PropTypes.string,
        avatar: PropTypes.string,
        stats: PropTypes.objectOf(PropTypes.number),
      };

    export default Profile