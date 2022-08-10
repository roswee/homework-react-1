import PropTypes from 'prop-types'

export const FriendList = ({friends}) =>
{
    return (
        <ul class="friend-list">
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
    <FriendListItem>
        <li class="item">
            <span class={isOnline? 'is-online' : 'is-offline'}></span>
            <img class="avatar"  src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    </FriendListItem>
)}

FriendList.propTypes = {
    id: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  };