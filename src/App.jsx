<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import Allgroupsessionpageedited from "./Components/Allgroupsessionpageedited";
import Aboutus from "./Components/Aboutus";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Smallgroupsession />} />
        <Route path="/online-Acd" element={<OnlineAcdSession />} />
        <Route path="/online-tutoring" element={<Onlinetuotoringsinglepage />} />
        <Route path="/home-tutoring" element={<Hometutoringsinglepage />} />
        <Route path="/individual-group" element={<Onlineindividualsession />} />
        <Route path="/cart" element={<CartEdited />} />
        <Route path="/checkout" element={<Checkoutedited />} />
        <Route path="/courses" element={<Onlinecoursespage />} />
        <Route path="/course-detail" element={<Coursedetailfullpage />} />
        <Route path="/group-sessions" element={<Allgroupsessionpageedited />} />
        <Route path="/about-us" element={<Aboutus/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
=======
import TeamsInterface from "./assets/teams-interface"

export default function Page() {
  return <TeamsInterface />
}
>>>>>>> 308d1201679fdf0f6ee2ab08e197ac62754dda92
