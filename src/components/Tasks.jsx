import Task from "./Task"


const Tasks = ({ data, setData }) => {
    console.log(data);
  return (
    <div>
        <Task data={data} setData={setData}/>
        
    </div>
  )
}

export default Tasks