
import './Sidebar.css'
import LinkList from '../../Common/LinkList';

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
        <aside className="sidebar">
            
            <h1 className="h2">{sidebardata.header}</h1>
           
        <LinkList linkArr={sidebardata.contact} containerClass={'btn_container'} linkClass={'Link'}/>
        </aside>
    )
}
export default Sidebar;    