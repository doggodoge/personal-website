import { Component, createSignal } from 'solid-js';

import styles from './App.module.css';

const Counter: Component = () => {
  const [count, setCount] = createSignal(0);

  const handleCount = () => {
    setCount(count() + 1);
  };

  return (
    <button class={styles.counterButton} onClick={handleCount}>Count: {count()}</button>
  )
}

const App: Component = () => {
  return (
    <div class={styles.app}>
      <h1>Placeholder, stuff to come!</h1>
      <p>I will eventually put something here. I swear!</p>
      <p>For now play with this counter:</p>
      <Counter />
    </div>
  );
};

export default App;
