import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AIAssistant from "./pages/AIAssistant";

function App() {
  return (
    <div className="App grain relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50 text-slate-900">
      {/* Decorative gradient blobs */}
      <div
        aria-hidden="true"
        className="anim-blob pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-indigo-300/40 to-blue-300/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="anim-blob pointer-events-none absolute top-1/3 -right-24 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-violet-200/40 to-sky-200/30 blur-3xl"
        style={{ animationDelay: "4s" }}
      />

      <BrowserRouter>
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
  path="/about"
  element={
    <ProtectedRoute>
      <About />
    </ProtectedRoute>
  }
/>

<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
<Route
  path="/ai-assistant"
  element={
    <ProtectedRoute>
      <AIAssistant />
    </ProtectedRoute>
  }
/>
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;