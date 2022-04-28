import React from "react";
import FormContact from "../components/FormContact";

const NewClient = () => {
  return (
    <>
      <h1 className="font-black text-2xl text-blue-900">Create new Contact</h1>
      <p className="mt-1">Fill out the information.</p>
      <FormContact/>
    </>
  )
};

export default NewClient;
