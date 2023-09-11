import { useSelector } from 'react-redux';
import css from './TaskCounter.module.css';
import { getTasks } from 'redux/selectors';

export const TaskCounter = () => {
  const tasks = useSelector(getTasks);

  const count = tasks.reduce(
    (counter, task) => {
      if (task.completed) {
        return { ...counter, completed: counter.completed + 1 };
      }
      return { ...counter, active: counter.active + 1 };
    },
    {
      active: 0,
      completed: 0,
    }
  );

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
