

 const DisplayObj=({dataobj,title=""})=> {
    return (
        <div>
  <h2 className="DisplayObject_h2">{title}</h2>
  {Object.keys(dataobj).map(attr =>{
   return(
<div className="DisplayObject_container" key={attr}>
<span className="DisplayObject_span">{attr+"-:"}</span>: &nbsp;
    <span className="DisplayObject_span2">{dataobj[attr]}</span>
</div>
   )
    })}
  </div>
    )
 }
 export default DisplayObj;