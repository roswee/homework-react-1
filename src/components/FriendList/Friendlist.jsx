import PropTypes from 'prop-types';
import styles from "./Friendlist.module.css";

const {friendlist, online, offline, item, item__avatar, item__name} = styles

const FriendList = ({friends}) =>
{
    return (
        <ul className = {friendlist}>
            {friends.map(friend =>
            <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}/>)}
        </ul>
    )
}

const FriendListItem = ({avatar, name, isOnline}) =>{
return (
        <li className={item}>
            <span className={isOnline? online : offline}></span>
            <img className={item__avatar}  src={avatar} alt="User avatar" width="48" />
            <p className={item__name}>{name}</p>
        </li>
)}

FriendList.propTypes = {
    id: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  };

  export default FriendList