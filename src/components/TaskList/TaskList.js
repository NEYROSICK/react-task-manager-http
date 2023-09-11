import { Task } from 'components/Task/Task';
import css from './TaskList.module.css';
import { useSelector } from 'react-redux';
import { filterStatus } from 'redux/constants';
import { getFilterStatus, getTasks } from 'redux/selectors';

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const status = useSelector(getFilterStatus);

  const getTaskList = () => {
    switch (status) {
      case filterStatus.completed:
        return tasks.filter(task => task.completed);
      case filterStatus.active:
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  };

  const taskList = getTaskList();

  return (
    <ul className={css.list}>
      {taskList.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
