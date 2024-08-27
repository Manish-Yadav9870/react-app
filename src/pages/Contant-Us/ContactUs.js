import './ContactUs.css'
const ContactUsData={
    heading:" Contact Us",
    form:[
    {
        id:"Name",
        type:"input",
        subType:"text",
        label:"Name:-",
        placeholder:"---Enter Your Name---",
        name:"name"
    },
    {
        id:"Email",
        type:"input",
        subType:"email",
        label:"Email:-",
        placeholder:"---Enter Your Email---",
         name:"email"
    },
    {
        id:"Mobile",
        type:"input",
        subType:"tel",
        label:"Mobile:-",
        placeholder:"---Enter Your Mobile---",
         name:"mobile"
    },
    {
        id:"Message",
        type:"TextArea",
        label:"Descraption:-",
        placeholder:"---Enter Your Message---",
        name:"message"
    },
]
}
const ContantUs =() =>{
    return (
        <div className="ContactUs">
            <h2>{ContactUsData.heading}</h2>
                <form className='form'>
                    {ContactUsData.form.map(ele=>{
                        return <div className='form_container' key={ele.id}>
    <label className='form_label'>{ele.label}</label>
    <input className='input' type={ele.type} name={ele.name} placeholder={ele.placeholder}required />

                        </div>
                    })}
                   <div className='btn_container'><button className='button'>Submit</button></div> 
                </form>
        </div>
    )
}
export default ContantUs;