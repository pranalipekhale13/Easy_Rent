import './Properties.css'
import PROPERTIES from '../../data'
import PropertyCard from '../../components/PropertyCard/PropertyCard';

function Properties() {
  return (
    <div>
      <h1>Properties Page</h1>
      <div className="properties-container">
      {PROPERTIES.map((propertyobj) => {
        const { id, title, propertyType, size, rent } = propertyobj;
        return (
        <PropertyCard
          key={id}
          id={id}
          title={title}
          propertyType={propertyType}
          size={size}
          rent={rent}
          
        />
      );
    })}
    </div>
    </div>
  )
}

export default Properties
