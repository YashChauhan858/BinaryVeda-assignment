import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Main Page</h1>} />
        <Route path="users" element={<h1>user page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
