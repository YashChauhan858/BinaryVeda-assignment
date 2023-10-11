import { Route, Routes } from "react-router-dom";
/** -------- @Pages ----------- */
import { Home } from "@pages";
/** -------- @Components ------ */
import { Footer, Header } from "@components";

function App() {
  return (
    <main className="h-full bg-backgroundColor">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
