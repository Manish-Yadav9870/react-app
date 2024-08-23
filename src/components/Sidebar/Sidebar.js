import { Link } from 'react-router-dom';
import './Sidebar.css'

const sidebardata={
    header:" Welcome To Dashboard",
    contact:[
        {
            key:"dashboard",
            label:"Dashboard"
        },
        {
            key:"profile",
            label:"Profile"
        },
        {
            key:"aboutus",
            label:"About Us"
        },
        {
            key:"contactus",
            label:"Contact Us"
        },
        {
            key:"help",
            label:"Help"
        },
    ],

};      

const Sidebar=()=>{


    return(
        <aside id="sidebar" className="sidebar">
            
            <h2 className="h2">{sidebardata.header}</h2>
            <div className="btn_container">
                {sidebardata.contact.map((hd)=>{
return <Link to={hd.key} className="Link" key={hd.key} >{hd.label}</Link>

                })}
            </div>
            <div className="Image_container"></div>
        </aside>
    )
}
export default Sidebar;    