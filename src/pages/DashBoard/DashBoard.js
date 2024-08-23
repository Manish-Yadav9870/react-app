
import './DashBoard.css'
import LinkList from '../../components/Common/LinkList';
const obj={
    header:" Welcome To React Course",
    contact:[
       
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

const DashBoard =() =>{
    return (
        <div className='DashBoard'>
            <h2>{obj.header}</h2>
          
                  
            <LinkList linkArr={obj.contact} containerClass={'DashBoard_container'} linkClass={'DashBoard_Link'}/>
        </div>
      
    )
}
export default DashBoard;