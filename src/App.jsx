import React from "react";
import Navbar from "./Pages/Navbar";
import Navbar2 from "./Pages/Navbar2";
import Footer from "./Pages/Footer";
import Smallgroupsession from "./Components/Smallgroupsession";
import OnlineAcdSession from "./Components/OnlineAcdSession";
import Onlinetuotoringsinglepage from "./Components/Onlinetuotoringsinglepage";
import Hometutoringsinglepage from "./Components/Hometutoringsinglepage";
import Onlineindividualsession from "./Components/Onlineindividualsession";
import CartEdited from "./Components/CartEdited";
import Checkoutedited from "./Components/Checkoutedited";
import Onlinecoursespage from "./Components/Onlinecoursespage";
import Coursedetailfullpage from "./Components/Coursedetailfullpage";
import Studentdashboard from "./Components/Studentdashboard";
import Signinpage from "./Components/Signinpage";
import HomePageModel from "./Components/HomePageModel";
import Countdownpage from "./Components/Countdownpage";

const App = () => {
  return (
    <>
      <Navbar />
      <Smallgroupsession />
      <Navbar />
      <OnlineAcdSession />
      <Navbar />
      <Onlinetuotoringsinglepage />
      <Navbar />
      <Hometutoringsinglepage />
      <Navbar />
      <Onlineindividualsession />
      <Navbar2 />
      <CartEdited />
      <Checkoutedited />
      <Onlinecoursespage />
      <Coursedetailfullpage/>
      <Studentdashboard />
      <Signinpage/>
      <HomePageModel/>
      <Countdownpage/>
      <Footer />
    </>
  );
};

export default App;
