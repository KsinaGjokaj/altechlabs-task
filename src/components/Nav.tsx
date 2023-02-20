import { NotificationManager } from "react-notifications";
import logo from "../images/dog.png";

export default () => {
  const logOutHandler = () => {
    fetch(`https://petstore.swagger.io/v2/user/logout`, {
      headers: {
        accept: "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
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
        <img src={logo} width="100px" height="70px" />
        <h1>Pets Store</h1>

        <p>Hello {activeUser}</p>
        <button onClick={logOutHandler}>LogOut</button>
      </nav>
    </header>
  );
};
