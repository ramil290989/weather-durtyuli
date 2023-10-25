import ReactDOM from 'react-dom/client';
import Init from './Init.jsx';

Init()
  .then((vdom) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(vdom);
  });
