import React from 'react';
import { useRoutes, BrowserRouter as Router } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import Header from './components/Header';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <ShowCreators /> },
    { path: '/creators/:Name', element: <ViewCreator /> },
    { path: '/add', element: <AddCreator /> },
    { path: '/edit/:Name', element: <EditCreator /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <div>
      
    <Router>
      <Header/>
      <AppRoutes />
    </Router>
    </div>
    
  );
};

export default App;













// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
