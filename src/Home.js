import { Link,useNavigate  } from "react-router-dom";



function  Home(){
    const navigate = useNavigate();
    return(
        <div>Home page
            <ul>
                <li style={{color:'red'}}>Home page</li>
                {/* <li><Link to='about'>Aboutpage</Link></li> */}
                <li onClick={()=> navigate('/about')} style={{cursor:"pointer"}}> Aboutpage</li>

                <li><Link to='contact' style={{color:'green'}}>Contact page</Link></li>
                <li><Link to='detail' style={{color:'darkgrey'}}>Detail page</Link></li>
              
            </ul>
    
        </div>

    );
}
export default Home