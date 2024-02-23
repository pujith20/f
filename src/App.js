import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Admin />} />
        <Route exact path="/admin" element={<AdminOne />} />
        <Route exact path="/vustomer" element={<Customer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
