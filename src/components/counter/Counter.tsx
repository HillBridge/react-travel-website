import { useDispatch, useSelector } from '../../store/hooks';
import { decrement, increment, incrementByAmount } from '../../store/storeSlice/counterSlice'; // 导入 actions
function Counter() {
  // 使用 useSelector 获取 state，并提供 RootState 类型
  const count = useSelector((state) => state.counter.value);
  // 使用 useDispatch 获取 dispatch 函数，并提供 AppDispatch 类型
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
}

export default Counter;
