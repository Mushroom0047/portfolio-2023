import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { PrivacyPolicyUpperLower } from "./Pages/PrivacyPolicyUpperLower";
import { NoPage } from "./Pages/NoPage";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="privacy-policy-upper-lower" element={<PrivacyPolicyUpperLower />}/>
        <Route path="*" element={<NoPage />}/>              
      </Routes>
    </BrowserRouter>
  )
}

export default App
