import { useContext } from 'react';
import { SomeContext } from '../App';

 const Button = () => {
  const ctx = useContext(SomeContext);
  return (
    <button onClick={() => ctx.setCount(count => count + 1)}>
      count is {ctx.count}
    </button>
  );
};

export default Button
