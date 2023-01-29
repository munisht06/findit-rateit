import logo from './logo.svg';
import Map from './Maps';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const campusAmenities = [
  {
    name: "Parking Garage B",
    type: "parking",
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
    rating: 4,
    comments: [
      "Usually clean and well-stocked",
      "Quiet and spacious",
      "Good hand dryers",
    ],
  },
  {
    name: "Student Center Water Fountain",
    type: "water fountain",
    rating: 5,
    comments: [
      "Always cold and refreshing",
      "Easy to access",
      "Great water pressure",
    ],
  },
  {
    name: "Parking Lot C",
    type: "parking",
    rating: 4,
    comments: [
      "Close to athletic facilities",
      "Usually easy to find a spot",
      "Well-lit and secure",
    ],
  },
  {
    name: "Library Bathrooms1",
    type: "bathroom",
    rating: 3,
    comments: [
      "Usually clean",
      "Sometimes crowded",
      "Needs more toilet paper dispensers",
    ],
  },
  {
    name: "Student Union Water Fountain",
    type: "water fountain",
    rating: 4,
    comments: [
      "Always cold and refreshing",
      "Easy to access",
      "Great water pressure",
    ],
  },
  {
    name: "Parking Garage D",
    type: "parking",
    rating: 4,
    comments: [
      "Convenient location",
      "Usually easy to find a spot",
      "Well-lit and secure",
    ],
  },
  {
    name: "Student Center Bathrooms",
    type: "bathroom",
    rating: 3,
    comments: [
      "Usually clean",
      "Sometimes crowded",
      "Needs more toilet paper dispensers",
    ],
  },
  {
    name: "Science Building Water Fountain",
    type: "water fountain",
    rating: 4,
    comments: [
      "Always cold and refreshing",
      "Easy to access",
      "Great water pressure",
    ],
  },
  {
    name: "Parking Lot E",
    type: "parking",
    rating: 3,
    comments: [
      "A bit far from main buildings",
      "Sometimes full during peak hours",
      "Well-maintained",
    ],
  },
  {
    name: "Library Bathrooms",
    type: "bathroom",
    rating: 4,
    comments: [
      "Usually clean and well-stocked",
      "Quiet and spacious",
      "Good hand dryers",
    ],
  },
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
        <Map places={campusAmenities} /> 
      </header>
    </div>
  );
}

export default App;
