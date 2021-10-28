import { connect } from 'react-redux';
import * as actions from '../../redux/counter/counter-actions';
import s from './Counter.module.css';

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div className={s.CounterContainer}>
      <button type="button" onClick={() => onDecrement(step)}>
        Decrement
      </button>
      <span className={s.CounterValue}>{value}</span>
      <button type="button" onClick={() => onIncrement(step)}>
        Increment
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
