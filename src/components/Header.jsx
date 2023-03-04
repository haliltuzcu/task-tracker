import { useState } from "react";
import AddTask from "./AddTask";
import Button, { Buton } from "./Button";

const Header = ({ data,setData}) => {
    // console.log(data);
  const [butonClik, setButonClik] = useState(true);

  const ClickButon = () => {
    setButonClik(!butonClik);
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      {butonClik ? (
        <Buton primary onClick={ClickButon}>
          Shaow Add Task Bar
        </Buton>
      ) : (
        <Buton onClick={ClickButon}>Hide Add Task Bar</Buton>
      )}
      { <AddTask data={data} setData={setData} />}
    </div>
  );
};

export default Header;
