import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { useDispatch } from 'react-redux';
import { checkTask, removeTask } from 'redux/tasksSlice';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeTask(task.id));
  };

  const handleChange = () => {
    dispatch(checkTask(task.id));
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleChange}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleClick}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
