import { FaXmark } from "react-icons/fa6";

const Content = ({input,handleChange,handleDelete,changing}) => {

    return (
     
        <>
             {input.length?(
            <ul className="ul" style={{boxShadow:`1px 1px 100px ${changing}` }}>
                {input.map((item)=>{
                  return  <li key={item.id} 
                              className="list" 
                              style={{boxShadow:`inset 1px 1px 40px ${changing}`}}>

                             <input type="checkbox" 
                                    checked =  {item.checked}
                                    className="checkbox"
                                    onChange={()=>handleChange(item.id)}                         
                          />
                             <label onClick={()=>handleChange(item.id)} 
                                    className="inputText"> 
                                   {item.productName}</label>
                         
                    <FaXmark 
                           
                            onClick={()=>handleDelete(item.id)}
                            className="svg_button"
                        /> 
                         
                
                              
                          
                    </li>
                })}
              </ul> ): <p style={{fontFamily:"monospace",opacity :"50%",textAlign:"center",padding :"50px" }}>your list are empty</p> }
        </>
   
    )
  }
  
  export default Content