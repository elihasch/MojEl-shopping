import { Toaster } from "react-hot-toast";
import Layout from "./layouts/Layout";
import Router from "./router/Router";

function App() {
  return (
    <>
      <Layout>
        <Router />
        <Toaster />
      </Layout>
    </>
  );
}

export default App;
