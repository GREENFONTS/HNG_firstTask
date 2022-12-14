import { Outlet } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
        <Layout>
          <Outlet />
        </Layout>
    </div>
  );
}

export default App;
