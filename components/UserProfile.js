import { useContext } from "react";
import { UserContext } from "../lib/context";

// UI component for user profile
export default function UserProfile({ user }) {
  const { username } = useContext(UserContext);
  return (
    <div className="box-center">
      <img src={user.photoURL || "/hacker.png"} className="card-img-center" />
      <p>
        <i>@{user.username}</i>
        {user.username === username && (
          <p className="text-small">
            Do you want to change your username? Haha, it is imposible right
            now! Maybe later...
          </p>
        )}
      </p>
      <h2>
        Ok, {user.displayName || "Anonymous User"}, here are your all posts:
      </h2>
    </div>
  );
}
