import "./App.css";
import Footer from "./components/Footer/Footer";
import Impact from "./components/Impact/Impact";
import Industries from "./components/Industries/Industries";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import Serve from "./components/Serve/Serve";
import Services from "./components/Services/Services";
import Sol from "./components/Solutions/Sol";

import Choose from "./components/chooseUs/Choose";

function App() {
  return (
    <>
      <Navbar /> 
      <Main /> 
      <Sol /> 
       <Serve />
      <Services /> 
      <Choose /> 
      <Industries/>      
      <Impact /> 
      <Newsletter />
      {/* <Footer/> */}
    </>
  );
}

export default App;
