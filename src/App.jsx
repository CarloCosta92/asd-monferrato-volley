import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Contact from "./pages/Contact";
import News from "./pages/News";

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/squadre" element={<Teams />} />
          <Route path="/contatti" element={<Contact />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
