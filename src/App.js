import {data} from "./Data/Data"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [datax, setDatax] = useState(data)

  // console.log(data);
  return (
    <>
      <Header data={datax} setData={setDatax}/>
      
      <Tasks data={datax} setData={setDatax} />
    </>
  );
}

export default App;
