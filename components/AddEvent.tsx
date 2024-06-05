import React from "react";
import AddButton from "./shared/buttons/AddButton";
import { PickDate } from "./shared/form/PickDate";

const AddEvent = () => {
  return (
    <AddButton btnTitle="Add Event" title="Add Event">
      <div className="w-full h-full flex flex-col">
        <PickDate />
      </div>
    </AddButton>
  );
};

export default AddEvent;
