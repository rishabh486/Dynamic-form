import "./App.css";
import React, { useState } from "react";
function App() {
  const [formData, setFormState] = useState([]);

  const changeFormState = (e) => {
    var currentState = {
      elementType: e.target.value,
      elementConfig: {
        type: "text",
        placeholder: "type something",
      },
      value: "",
      validation: {
        required: true,
      },
    };
    setFormState([...formData, currentState]);
  };

  const captureChange = (index, value) => {
    var state = formData[index];
    state.value = value;
    formData[index] = state;

    setFormState(formData);
  };

  const getFormDetails = () => {
    var formDetails = {};
    formData.forEach((item, index) => {
      formDetails[`element${index + 1}`] = item;
    });
    console.log(formDetails);
  };

  return (
    <>
      <select onChange={(e) => changeFormState(e)}>
        <option value="label">label</option>
        <option value="textarea">text area</option>
        <option value="select">select</option>
      </select>
      {formData.map((item, index) => {
        if (item.elementType == "label") {
          return <label key={index}>Label</label>;
        }
        if (item.elementType == "textarea")
          return (
            <textarea
              key={index}
              placeholder={item.elementConfig.placeholder}
              onChange={(e) => captureChange(index, e.target.value)}
            ></textarea>
          );

        if (item.elementType == "select")
          return (
            <select
              onChange={(e) => captureChange(index, e.target.value)}
              key={index}
            >
              <option value="apple">apple</option>
              <option value="mango">mango</option>
            </select>
          );
      })}

      {formData.length > 0 && (
        <button onClick={() => getFormDetails()}>Submit</button>
      )}
    </>
  );
}
export default App;
