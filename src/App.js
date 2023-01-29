import logo from './logo.svg';
import Map from './Maps';
import './App.css';

const campusAmenities = [
  {
    name: "Parking Garage B",
    type: "parking",
    latitude: 29.6455,
    longitude: -82.3487,
    rating: 3,
    comments: [
      "A bit far from main buildings",
      "Sometimes full during peak hours",
      "Well-maintained",
    ],
  },
  {
    name: "Science Building Bathrooms",
    type: "bathroom",
    latitude: 29.646703,
    longitude: -82.347481,
    rating: 4,
    comments: [
      "Usually clean and well-stocked",
      "Quiet and spacious",
      "Good hand dryers",
    ],
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div style={{ width: "70%", height: "100vh", position: 'relative', float: "left" }}>
          <Map places={campusAmenities} />
        </div>
        <div style={{ width: "30%", float: "right", background: 'blue', height: '100%' }}>
          {
            campusAmenities.map((place) => (
              <div style={{ background: 'red', margin: 10, padding: 5 }}>
                Place : {place.name}
                <br></br>
                Type : {place.type}
                
              </div>
            ))
          }
        </div>

      </header >
    </div >
  );
}

export default App;
