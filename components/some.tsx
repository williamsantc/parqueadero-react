import { useState } from "react";

const some: React.FC = () => {

  const [foo, updateFoo] = useState('something');
  const [bar] = useState('in');
  const [baz] = useState('the world');

  const todos = [foo, bar, baz];
  return (
    <div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Repudiandae quae tenetur {foo} aliquid itaque, ducimus esse,
        eius laudantium neque consequatur sit vitae! {bar} modi
        obcaecati consectetur {baz} culpa fugiat {todos.length}.
    </p>
      <button onClick={() => updateFoo('yazz!')}>click me!</button>
    </div>
  );
};

export default some;

