import logo from './logo.svg';
import Map from './Maps';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const campusAmenities = [
  {
    name: "UF Health Staff Parking",
    type: "parking",
    latitude: 29.6455,
    longitude: -82.3487,
    rating: 3,
    lat: 29.638986,
    long: -82.348051,
    comments: [
      "A bit far from main buildings",
      "Sometimes full during peak hours",
      "Well-maintained",
    ],
  },
  {
    name: "Commuter Lot Parking Garage @ Gale Lemerand",
    type: "parking",
    lat: 29.64243517290004,
    long: -82.35036190890271,
    rating: 4,
    comments: [
      "Usually clean and well-stocked",
      "Quiet and spacious",
      "Good hand dryers",
    ],
  },
  {
    name: "Hub",
    type: "bathroom",
    lat: 29.64841319129405,
    long: -82.34606084965702,
    rating: 5,
    comments: [
      "Always cold and refreshing",
      "Easy to access",
      "Great water pressure",
    ],
  },
  // {
  //   name: "Library Bathrooms1",
  //   type: "bathroom",
  //   rating: 3,
  //   comments: [
  //     "Usually clean",
  //     "Sometimes crowded",
  //     "Needs more toilet paper dispensers",
  //   ],
  // },
  // {
  //   name: "Marston Science Library",
  //   type: "water fountain",
  //   lat: 29.648214043747178,
  //   long: -82.34374072566222,
  //   rating: 4,
  //   comments: [
  //     "Always cold and refreshing",
  //     "Easy to access",
  //     "Great water pressure",
  //   ],
  // },
  // {
  //   name: "Parking Garage D",
  //   type: "parking",
  //   lat: 29.648214043747178,
  //   long: -82.34374072566222,
  //   rating: 4,
  //   comments: [
  //     "Convenient location",
  //     "Usually easy to find a spot",
  //     "Well-lit and secure",
  //   ],
  // },
  // {
  //   name: "Student Center Bathrooms",
  //   type: "bathroom",
  //   rating: 3,
  //   comments: [
  //     "Usually clean",
  //     "Sometimes crowded",
  //     "Needs more toilet paper dispensers",
  //   ],
  // },
  // {
  //   name: "Science Building Water Fountain",
  //   type: "water fountain",
  //   rating: 4,
  //   comments: [
  //     "Always cold and refreshing",
  //     "Easy to access",
  //     "Great water pressure",
  //   ],
  // },
  // {
  //   name: "Parking Lot E",
  //   type: "parking",
  //   rating: 3,
  //   comments: [
  //     "A bit far from main buildings",
  //     "Sometimes full during peak hours",
  //     "Well-maintained",
  //   ],
  // },
  // {
  //   name: "Library Bathrooms",
  //   type: "bathroom",
  //   rating: 4,
  //   comments: [
  //     "Usually clean and well-stocked",
  //     "Quiet and spacious",
  //     "Good hand dryers",
  //   ],
  // },
];

//-------------------------------------------------------------------

function Location({ location }) {
  return (
    <div>
      <h2>{location.name}</h2>
      <p>Type: {location.type}</p>
      <p>Rating: {location.rating}</p>
      <p>Comments: {location.comments}</p>
    </div>
  );
}

function LocationList() {
  return (
    <div>
      {campusAmenities.map(location => (
        <Location key={location.name} location={location} />
      ))}
    </div>
  );
}

const useStyles = makeStyles({
  root: {
      minWidth: 275,
  },
});

const LocationCard = (props) => {
  const classes = useStyles();
  const { location } = props;
  return (
      <Card className={classes.root}>
          <CardContent>
              <Typography variant="h5" component="h2">
                  {location.name}
              </Typography>
              <Typography variant="body2" component="p">
                  Type: {location.type}
              </Typography>
              <Typography variant="body2" component="p">
                  Rating: {location.rating}
              </Typography>
              <Typography variant="body2" component="p">
                  Comments: {location.comments}
              </Typography>
          </CardContent>
      </Card>
  );
};

const MyComponent = () => {
  const location = { name: "My Location", type: "Restaurant", rating: 4, comments: "Great food and service!" };
  return (
      <div>
          <LocationCard location={location} />
      </div>
  );
}
//-------------------------------------------------------------------

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
