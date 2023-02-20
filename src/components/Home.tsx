import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import "../styles/Home.css";
import Nav from "./Nav";
import Pets from "./Pets";
import "../styles/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { stateTypes } from "../redux/store";

const Home = () => {
  const pets = useSelector((state: stateTypes) => state.pets);
  const loading = useSelector((state: stateTypes) => state.loading);
  const dispatch = useDispatch();

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
        dispatch({
          type: "SET_PETS",
          payload: data,
        });
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
          {loading ? (
            <div className="loading">loading...</div>
          ) : (
            pets
              .slice(0, 30)
              .map((petsObj: PetTypes, key) => (
                <Pets key={key} petsObj={petsObj} />
              ))
          )}
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
export type PetTypes = {
  id: number;
  name: string;
  status: string;
};
