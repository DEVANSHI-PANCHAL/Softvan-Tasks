import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Artists = lazy(() => import('./components/Artists'));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <Artists />
      </Suspense>
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById('root'));
export default App;
