import bg from '../assets/bgimage.jpeg'
import logo from '../assets/logo.png'
import '../Network/Network.css'
import {CiLink} from 'react-icons/ci'
import {IoIosPersonAdd} from 'react-icons/io'
import cards from './CardData'
 
const Card =()=>{
    return(
        <div className="card-grid">
            {cards.map((card) => (
                <div className="card">
                <div className="card-bgimage">
                    <img src={bg} alt="" style={{width:"100%",height:"70%",borderRadius:"10px 10px 0px 0px"}} />
                    <img src={logo} alt="" style={{borderRadius:"50%",width:"50px",height:"50px", marginTop:"-50%",marginLeft:"0%"}}/>
                </div>
                <div className="card-details">{card.name}</div>
                    <p className='role'>{card.role}</p>
                    <p className='mutual'><CiLink/>{card.mutuals} mutual connections</p>
                    <div className="button">
                    <button > <IoIosPersonAdd/> Connect</button>
                    </div>
                    
                </div>
    
        
        
      ))}
 
       
        
        </div>
    )
}
 
export default Card