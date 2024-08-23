

import DisplayObj from '../../components/Common/KeyValuePair/DisplayObject';
import './Profile.css'

const ProfileData={
    header:" Welcome To My Profile",
    PersonalDetails:

        {
            name:"Manish Yadav",
            age:"25",
            gender:"male",
            occupation:"Software Engineer"
        } ,
    Education:
        {
            degree:"B.Tech",
            collage:"IIT PHQ",
            university:"P.H.Q, Jaipur",
            year :"2024"
        }  ,
    Contact:
        {
            mobile:"9829089870",
            email:"myadav9870@gmail.com",
            facebook:"Manish Yadav",
            instagram:"myadav@"
        },
    Interest:["sports","racing","coding"]
}


const Profile =() =>{
    return (
        <div className="Profile">
        <h2>{ProfileData.header}</h2>
  <div className='profile_container'>
    <DisplayObj title="Personal Details" dataobj={ProfileData.PersonalDetails}/>
    <DisplayObj title="Education" dataobj={ProfileData.Education}/>
    <DisplayObj title="Contact" dataobj={ProfileData.Contact}/>
    <DisplayObj title="Interest" dataobj={ProfileData.Interest}/>
  </div>
        </div>
    )
}
export default Profile;