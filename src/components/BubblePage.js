import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
// import fetchColorService from "../services/fetchColorService";

import axiosWithAuth from "../helpers/axiosWithAuth";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    axiosWithAuth()
      .get("/colors")
      .then((res) => {
        setColors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    console.log("this is the log button");
  };

  const deleteColor = (colorToDelete) => {
    console.log(colorToDelete);
    axiosWithAuth()
      .delete(`/colors/${colorToDelete.id}`)
      .then((res) => {
        console.log(res);
        const updatedColors = colors.filter(
          (color) => color.id !== colorToDelete.id
        );
        setColors(updatedColors);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <ColorList
        colors={colors}
        editing={editing}
        toggleEdit={toggleEdit}
        saveEdit={saveEdit}
        deleteColor={deleteColor}
      />
      <Bubbles colors={colors} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
