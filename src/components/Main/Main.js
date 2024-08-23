import { Route, Routes } from "react-router-dom";
import DashBoard  from "../../pages/DashBoard/DashBoard";
import AboutUs from "../../pages/About-Us/Aboutus";
import ContantUs from "../../pages/Contant-Us/ContactUs";
import Profile from "../../pages/Profile/Profile";
import Help from "../../pages/Help/Help";


const MainContant=()=>{
    return(
        <main className="main">
            <Routes>
                <Route path="/" element={<DashBoard/>}/>
                <Route path="/dashboard" element={<DashBoard/>}/>
                <Route path="/aboutus" element={<AboutUs/>}/>
                <Route path="/contactus" element={<ContantUs/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/help" element={<Help/>}/>
            </Routes>
        </main>
    )
}
export default  MainContant;