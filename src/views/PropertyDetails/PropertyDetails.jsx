
import './PropertyDetails.css'
import { useParams } from 'react-router';
import DummyImg from "./house.png";
import PROPERTIES from "./../../data";
function PropertyDetails() {

  const { id } = useParams();
  const propertyDetails = PROPERTIES.find((property) => property.id === id);

  if (!propertyDetails) {
    return <h1>Property not found</h1>;
  }

  const { owner, nearby, amenities } = propertyDetails;

  return (
    <div>
      <img src={DummyImg} alt="Property" className="property-image" />
      <h1>{propertyDetails.title}</h1>
      <p>Type: {propertyDetails.propertyType}</p>
      <p>Size: {propertyDetails.size}</p>
      <p>Rent: ₹{propertyDetails.rent} / month</p>
      <p>Rating: {propertyDetails.rating}</p>
      <p>Description: {propertyDetails.description}</p>
      <p>Location: {propertyDetails.area}, {propertyDetails.city}</p>
      <p>Amenities: {amenities.join(', ')}</p>
      <p>Owner: {owner.name}</p>
      <p>Phone: {owner.phone}</p>
      <p>Email: {owner.email}</p>
      <p>Nearby hospitals: {nearby.hospitals.join(', ')}</p>
      <p>Nearby schools: {nearby.schools.join(', ')}</p>
      <p>Nearby airport: {nearby.airport}</p>
      <p>Nearby malls: {nearby.malls.join(', ')}</p>
      <p>Railway station: {nearby.railwayStation}</p>
      <p>Metro station: {nearby.metroStation}</p>
      <div>{propertyDetails.reviewDetails?.map((review, index) =>{
        return <div key={index} className="review-card">
          <div className="review-card-avatar">
            {review.reviewerName.substring(0, 1).toUpperCase()}
          </div>
          <div>
           <p>{review.comment} - {review.reviewerName}</p>
           <p>{review.rating}</p>
          </div>
      </div>
    })
  }</div>
  </div>
 ) };

export default PropertyDetails;
