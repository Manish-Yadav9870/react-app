

import DisplayObj from '../../components/Common/KeyValuePair/DisplayObject';
import './Profile.css'

const ProfileData={
    header:" Welcome To My Profile",
    PersonalDetails:

        {
            Name:"Manish Yadav",
            Age:"25",
            Gender:"male",
            Occupation:"Software Engineer"
        } ,
    Education:
        {
            Degree:"B.Tech",
            Collage:"IIT PHQ",
            University:"P.H.Q, Jaipur",
            Year :"2024"
        }  ,
    Contact:
        {
            Mobile:"9829089870",
            Email:"myadav9870@gmail.com",
            Facebook:"Manish Yadav",
            Instagram:"myadav@instagram"
        },
    Interest:["sports","racing","coding"]
}


const Profile =() =>{
    return (
        <div className="Profile">
        <h2 className='h2_all_container'>{ProfileData.header}</h2>
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