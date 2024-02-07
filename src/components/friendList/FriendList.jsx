import styles from './friendsList.module.css';

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={styles.friendList}>
        {friends.map(friend => (
          <li key={friend.id} className={styles.item}>
            <span
              className={friend.isOnline ? styles.online : styles.offline}
            ></span>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={styles.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FriendList;
