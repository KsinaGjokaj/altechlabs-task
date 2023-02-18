import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import "../styles/Home.css";
import Nav from "./Nav";
import Pets from "./Pets";
import "../styles/Home.css";

const Home = () => {
  const [pets, setPets] = useState([]);

  const fetchData = () => {
    return fetch(
      `https://petstore.swagger.io/v2/pet/findByStatus?status=available`,
      {
        headers: {
          accept: "application/json",
        },
      }
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setPets(data);
      });
  };

  useEffect(() => {
    const activeUser = localStorage.getItem("user");
    if (!activeUser) {
      window.location.hash = "#/login";
    }

    fetchData();
  }, []);

  console.log("pets", pets);
  return (
    <>
      <Nav />
      <div className="pets">
        <ul>
          {pets.map((petsObj: PetTypes) => (
            <Pets key={petsObj.id} petsObj={petsObj} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;

// interface PetTypes {
//   id: number;
//   name: string;
//   status: string;
// }
type PetTypes = {
  id: number;
  name: string;
  status: string;
};
