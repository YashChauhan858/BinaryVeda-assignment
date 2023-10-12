import { Route, Routes } from "react-router-dom";
/** -------- @Pages ----------- */
import { Home } from "@pages";
/** -------- @Components ------ */
import { Footer, Header, Todo } from "@components";

function App() {
  return (
    <main className="h-full bg-backgroundColor">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Todo />
      <Footer />
    </main>
  );
}

export default App;
