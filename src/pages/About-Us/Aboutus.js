import './AboutUs.css'
 
const AboutUsData={
    heading:"WelCome To AboutUs",
    img:"https://lh3.googleusercontent.com/a/ACg8ocJV0Wixoh2nWZ5X1gKs5agrZtOEErfs1Lc60ylC2FcS5Mti6C6Nag=s288-c-no",
    Description:"Hii EveryOne My Name Is Manish Yadav .i am A Software Dovloper.About Us page is almost like a look book with a minimal amount of copy. The story is told through video, imagery, and sparse text that summons the idea of resilience, exploration, and embracing the essential.Short video clips demonstrate WP standard’s values, showing customers rather than telling. It’s a departure from copy-driven pages, but it works in the favor of WP Standard as a brand of few words, or for brands that want to say a lot by saying very little.The story is told through video, imagery, and sparse text that summons the idea of resilience, exploration, and embracing the essential.Short video clips demonstrate WP standard’s values, showing customers rather than telling. It’s a departure from copy-driven pages, but it works in the favor of WP Standard as a brand of few words, or for brands that want to say a lot by saying very little"
}

   
const AboutUs =() =>{
    return (
        <div className="AboutUs"> 
      <h2>{AboutUsData.heading}</h2>
      <div className='AboutUs_Container'>
       <div className='img_container'> <img src={AboutUsData.img}></img></div>
        <div className='p_container'><p className='p'>{AboutUsData.Description}</p></div>
      </div>
      </div>
    )
}
export default AboutUs;