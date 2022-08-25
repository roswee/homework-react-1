import PropTypes from 'prop-types';
import styles from "./Friendlist.module.css";

const {friendList} = styles

const FriendList = ({friends}) =>
{
    return (
        <ul className = {friendList}>
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
        <li class="item">
            <span class={isOnline? 'is-online' : 'is-offline'}></span>
            <img class="avatar"  src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
)}

FriendList.propTypes = {
    id: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  };

  export default FriendList