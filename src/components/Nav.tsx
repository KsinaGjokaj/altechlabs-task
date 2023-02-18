import { NotificationManager } from "react-notifications";

export default () => {
  const logOutHandler = () => {
    fetch(`https://petstore.swagger.io/v2/user/logout`, {
      headers: {
        accept: "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        // console.log('login response', data);
        if (data.code == 200) {
          localStorage.removeItem("user");
          window.location.hash = "#/login";
          NotificationManager.error(
            "You Loged Out",
            data.message,
            10000,
            () => {}
          );
        }
        return;
      });
  };
  const activeUser = localStorage.getItem("user");
  return (
    <header>
      <nav>
        <h1>Home page - Hello {activeUser}</h1>
        <button onClick={logOutHandler}>LogOut</button>
      </nav>
    </header>
  );
};
