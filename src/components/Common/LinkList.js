import { Link } from "react-router-dom"

 const LinkList=({linkArr=[],containerClass="",linkClass=""})=> {
    return (
        <div className={containerClass}>
                {linkArr.map((el)=>{
                    return <Link key={el.key} to={`/${el.key}`}  className={linkClass}>{el.label}</Link>
                })}
            </div>
    )
 }
 export default LinkList;