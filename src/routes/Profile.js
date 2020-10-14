import React, { useEffect, useState } from "react";
import { authService, dbService } from "fbase";
import { useHistory } from "react-router-dom";

export default ({ refreshUser, userObj }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  const getMyTweets = async() => {
    const tweets = await dbService
      .collection("tweets")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createdAt")
      .get();
    console.log(tweets.docs.map((doc) => doc.data()))
  } 
  useEffect(() => {
    getMyTweets();
  },[])
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName
      });
      refreshUser();
    } 
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <input
          className="formInput"
          onChange={onChange}
          type="input"
          autoFocus
          placeholder="Display Name"
          value={newDisplayName}
        />
        <input
          className="formBtn"
          type="submit"
          value="Update Profile"
          style={{
            marginTop: 10,
          }}
        />
      </form>
      <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>Log Out</span>
    </div>
  );
};
