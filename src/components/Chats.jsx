import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";

export const Chats = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/", { replace: true });
  };

  // const getFile = async (url) => {
  //   const res = await fetch(url);
  //   const data = await res.blob();

  //   return new File([data], "userPhoto.jpg", { type: "image / jpeg" });
  // };

  // console.log(user);

  // getFile(user.photoURL).then((avatar) => {
  //   console.log("avatar", avatar, avatar.name);
  // });

  useEffect(() => {
    axios
      .get("https://api.chatengine.io/users/", {
        headers: { "PRIVATE-KEY": import.meta.env.VITE_PRIVATE_KEY },
      })
      .then((response) => {
        setLoading(false);
        setUsers(response.data);
        const result = response.data.find((el) => el.email === user.email);
        if (result) {
          axios.get("https://api.chatengine.io/users/me/", {
            headers: {
              "Project-ID": import.meta.env.VITE_PROJECT_ID,
              "User-Name": user.displayName,
              "User-Secret": user.uid,
            },
          });
        } else
          axios
            .post(
              "https://api.chatengine.io/users/",
              {
                username: user.displayName,
                email: user.email,
                secret: user.uid,
              },
              {
                headers: {
                  "PRIVATE-KEY": import.meta.env.VITE_PRIVATE_KEY,
                },
              }
            )
            .then(() => setLoading(false))
            .catch((error) => console.log(error.response));
      })
      .catch((e) => console.log(e));
  }, [navigate, user]);

  if (!user || loading) return "Loading...";

  return (
    <div>
      <div className="flex justify-between">
        <h3>Hello {user.displayName}</h3>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <ChatEngine
        height="calc(100vh - 66px)"
        projectID={import.meta.env.VITE_PROJECT_ID}
        userName={user.displayName}
        userSecret={user.uid}
      />
    </div>
  );
};
