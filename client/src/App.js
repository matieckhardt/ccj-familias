import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/register/Register";
import { AppContext } from "./context/store";
import { globalReducer } from "./redux/reducers/globalReducer";
import { useReducer } from "react";
import Wrapper from "./Wrapper";
import Registrados from "./components/Registrados/Instrumentos";
import AjedrezReg from "./components/Registrados/Ajedrez";
import InstrumentosAll from "./components/Registrados/InstrumentosAll";

function AppPrincipal() {
  return (
    <div className="App">
      <div>
        {" "}
        <Login />
      </div>
    </div>
  );
}

function AppSecondary() {
  return (
    <div className="App">
      <div>
        {" "}
        <Login />
      </div>
    </div>
  );
}

export default function App() {
  const [globalStore, setGlobalStore] = useReducer(globalReducer, {
    isLoggedIn: false,
  });

  const { isLoggedIn } = globalStore;

  const store = {
    isLoggedIn,
    dispatch: setGlobalStore,
  };
  return (
    <AppContext.Provider value={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppPrincipal />} />
          <Route path="/Home" element={<AppPrincipal />} />
          <Route path="/Login" element={<AppSecondary />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Mis%20Datos" element={<Wrapper></Wrapper>} />
          <Route path="/Mis%20Alumnos" element={<Wrapper></Wrapper>} />
          <Route path="/Instrumentos" element={<Wrapper></Wrapper>} />
          <Route path="/Ajedrez" element={<Wrapper></Wrapper>} />
          <Route path="/Cupos" element={<Wrapper></Wrapper>} />
          <Route path="/Matriculados" element={<Wrapper></Wrapper>} />
          <Route path="/CodeGPT" element={<Wrapper></Wrapper>} />
          <Route
            path="/InstrumentosReg"
            element={<Registrados></Registrados>}
          />
          <Route
            path="/InstrumentosAll"
            element={<InstrumentosAll></InstrumentosAll>}
          />
          <Route path="/AjedrezReg" element={<AjedrezReg></AjedrezReg>} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
