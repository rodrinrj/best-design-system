import { useState } from 'react';
import { Heading, Text } from '@rodrinrj/design-system';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Heading
        color="accent"
        size="large"
      >
        Vite + React
      </Heading>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <br />
        <br />
        <Text>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Text>
      </div>
      <Text
        color="secondary"
        size="small"
      >
        Click on the Vite and React logos to learn more
      </Text>
    </>
  );
}

export default App;
