import React from "react";
import AddButton from "./shared/buttons/AddButton";

const AddProject = () => {
  return (
    <AddButton
      btnVariant="secondary"
      btnTitle="Add Project"
      title="Add Project"
    >
      <div className="w-full h-full flex flex-col">Add</div>
    </AddButton>
  );
};

export default AddProject;
