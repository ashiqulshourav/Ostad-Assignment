import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Expense from "./components/pages/Expense";
import HomePage from "./components/pages/HomePage";
import Income from "./components/pages/Income";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<Expense />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
