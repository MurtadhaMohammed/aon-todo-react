import "./taskCard.css";

const TaskCard = ({ text, handleDelete }) => {
  return (
    <div className="todo-item">
      <p>{text}</p>
      <button onClick={handleDelete}>X</button>
    </div>
  );
};

export default TaskCard;
