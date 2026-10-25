import './PropertyCard.css'
import DummyImage from "./house.png"
import {LandPlot , Building2,HandCoins} from "lucide-react"
import Button from '../Button/Button';
import { useNavigate } from 'react-router';

function Propertyinfo({ icon, label }) {
  return (
    <div className="property-info">
      {icon}
      <span className="property-info-label">{label}</span>
    </div>
  );
}


function PropertyCard({ id, title, propertyType, size, rent }) {
  let navigate = useNavigate();
  
  return (
    <div className="property-card">
        <img src={DummyImage} alt="Property" className="property-image" />
        <h2 className="property-title">{title}</h2>
        <Propertyinfo icon= {<Building2 />} label= {propertyType} />
        <Propertyinfo icon= {<LandPlot />} label= {size}/>
        <Propertyinfo icon= {<HandCoins />} label= {`₹${rent} / month`} />

       <div className='card-actions'>
        <Button title={"View Details"} onClick={() => {
          navigate(`/property/${id}`);
        }} />
       </div>
    </div>
  );
}

export default PropertyCard;