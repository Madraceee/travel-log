import NavBar from "./components/NavBar"
import Card from "./components/Card"
import data from "./data.js"

function App() {
  const card = data.map( x =>
    <Card 
      key={x.id}
      img={x.img}
      name={x.name}
      location = {x.location}
      locationLink= {x.locationLink}
      startDate = {x.startDate}
      endDate = {x.endDate}
      description = {x.description}
    />
  )
  return (
    <div className="App">
        <NavBar />
        {card}
    </div>
  );
}

export default App;
