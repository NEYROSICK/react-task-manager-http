import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';
import { useSelector } from 'react-redux';
import { filterStatus } from 'redux/constants';
import { getFilterStatus } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filtersSlice';

export const StatusFilter = () => {
  const status = useSelector(getFilterStatus);
  const dispatch = useDispatch();

  const handleClick = status => {
    dispatch(changeFilter(status));
  };

  return (
    <div className={css.wrapper}>
      <Button
        selected={status === filterStatus.all}
        onClick={() => {
          handleClick(filterStatus.all);
        }}
      >
        All
      </Button>
      <Button
        selected={status === filterStatus.active}
        onClick={() => {
          handleClick(filterStatus.active);
        }}
      >
        Active
      </Button>
      <Button
        selected={status === filterStatus.completed}
        onClick={() => {
          handleClick(filterStatus.completed);
        }}
      >
        Completed
      </Button>
    </div>
  );
};
