import { FaTrash } from "react-icons/fa";

const Task = ({ data, setData }) => {
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
      }
    
  console.log(data);
  return (
    <div>
      <ul className="list-group">
        {data.map((item) => {
          return (
            <li key={item.id} className="border w-50 p-2 mt-3 style-none">
              <p className="d-flex justify-content-between w-100 px-2">
                <span> {item.text} </span> <FaTrash className="text-danger fs-1"
                    type="button"
                    onClick={() => handleDelete(item.id)}/>
              </p>
              <p className="px-2">{item.time}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Task;
