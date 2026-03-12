import React from 'react';
import { StyleSheet } from 'react-native';

export function Header({ avatarUrl, nameUser}) {
    return (
        <>
        <div style={styles.postHeader} >
        <img src={avatarUrl} alt="Avatar" style={styles.avatar} />
        <div>
            <h2 style={styles.nameUser}>{nameUser}</h2>
        </div>
        </div>
        </>
    );
}

export function Media({ mediaUrl }) {
    return (
        <div style={styles.postMedia}>
            <img src={mediaUrl} alt="Media" />
        </div>
    );
}

export function Icons({ description }) {
    return (
        <div style={styles.postIcons}>
            <button className="icon-button">Like</button>
            <button className="icon-button">Comment</button>
            <button className="icon-button">Share</button>
        </div>
    );
}

export function Publicacao({ postData}) {
    return (
        <div className="post">
            <Header avatarUrl={postData.avatarUrl} nameUser={postData.nameUser} />
            <Media mediaUrl={postData.mediaUrl} />
            <Icons description={postData.description} />
        </div>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    padding: 16,
  },

  postHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'right',
    marginBottom: 8,
  },

  avatar: {
    width: 50,
    height: 50,
  },

  nameUser: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});