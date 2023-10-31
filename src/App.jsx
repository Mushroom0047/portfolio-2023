import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { PrivacyPolicyUpperLower } from "./Pages/PrivacyPolicyUpperLower";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="privacy-policy-upper-lower" element={<PrivacyPolicyUpperLower />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
