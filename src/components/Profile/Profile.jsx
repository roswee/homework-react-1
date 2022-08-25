import PropTypes from "prop-types";
import styles from './Profile.module.css';

const {profile, description, avatar__jpg, profile__name} = styles;

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
                <p class="tag">{tag}</p>
                <p class="location">{location}</p>
            </div>
            <ul class="stats">
                <li>
                <span class="label">Followers</span>
                <span class="quantity">{stats.followers}</span>
                </li>
                <li>
                <span class="label">Views</span>
                <span class="quantity">{stats.views}</span>
                </li>
                <li>
                <span class="label">Likes</span>
                <span class="quantity">{stats.likes}</span>
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