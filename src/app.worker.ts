import { User } from "./types/utilities";

export default () => {
  self.addEventListener("message", (e) => {
    if (!e) return;
    let { users, callback } = e.data;
    console.log("got message worker");
    // if (type === "asc") {
    //   users = users.sort((a: User, b: User) => a.commentCount - b.commentCount);
    // } else {
    //   users = users.sort((a: User, b: User) => b.commentCount - a.commentCount);
    // }

    postMessage(users);
  });
};
