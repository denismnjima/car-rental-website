import CarCollection from '../CarCollection/CarCollection'
import './CarCollectionContainer.css'
export default function CarCollectionContainer() {
  return (
    <div className='carCollection'>
        <div className='sectionHeader'>
            <h3>Collection</h3>
            <h2>Explore our collection cars.</h2>
        </div>
        <div className="cars-collection-list">
          <CarCollection/>
          <CarCollection/>
          <CarCollection/>
        </div>
    </div>
  )
}
