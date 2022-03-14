import React, {useState} from 'react';


function ConnectionDetailsComponent(){

    const [flights, setFlights] = useState([])
    const [start, setStart] = useState('')
    const [destination, setDestination] = useState('')

    function handleStartChange(event){
        setStart(event.target.value);
    }
    function handleDestinationChange(event){
        setDestination(event.target.value);
    }

    function handleSubmit(event){
            event.preventDefault();
            console.log(start,destination)

            fetch(`http://localhost:8080/api/flight/${start}/${destination}`, {
                method: "GET",
                dataType: "JSON",
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                }
              })
            .then(res => { 
                return res.json()
            })
            .then(json => {
                setFlights(json)
            });

        }

    return (
        <div>
  
            <form onSubmit={handleSubmit}>
                <label htmlFor="start">Miejsce wylotu: </label>
                <input id="start" type="text" value={start} autoComplete="off"
                    onChange={handleStartChange}/>
  
        
                <label htmlFor="destination">Miejsce przylotu: </label>
                <input id="destination" type="text" value={destination} autoComplete="off"
                    onChange={handleDestinationChange}/>
        
                <button>Search Connections</button>
              </form>

            <ItemLister flights={flights}/>

        </div>

    )

}

const ItemLister = props =>  <div>
    { props.flights.map(flight => (
                <div id="flights-list" key={flight.id}>
                <div className="title0">ID:  { flight.id }</div>
                    <div className="title1">Start: { flight.start }</div>       
                    <div className = "title2">Destination: { flight.destination } </div>
                  <div className = "title3">Departure Time:  { flight.startTime }</div>
              </div>
    ))}
    </div> 

export default ConnectionDetailsComponent;