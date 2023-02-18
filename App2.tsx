import { useState } from 'react';
import * as React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css';

export default function App2() {
  const [name, setName] = useState('');

  return (
    <form>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  );
}
