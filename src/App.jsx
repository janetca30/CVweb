import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from './layouts/Layout'
import Home from "./pages/home/Home";
import './App.css'


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
