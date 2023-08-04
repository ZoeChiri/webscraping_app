import {useState, useEffect} from "react";
import Card from "./components/Card"
import Header from "./components/Header"

const App = () =>{
  const [deals, setDeals] = useState(null)
  const getDeals = async() =>{
    try{
      const response = await fetch("http://localhost:8000/deals", {method: "GET"})
      const data = await response.json()
      setDeals(data)
    }catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
    getDeals()
  }, []);

  const getZaraDeals = async () => {
    try {
      const response = await fetch("http://localhost:8000/deals/zara", {
        method: "GET",
      });
      const data = await response.json();
      setDeals(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getZaraDeals();
  }, []);

  const getEtsyDeals = async() =>{
    try{
      const response = await fetch("http://localhost:8000/deals/etsy", {method: "GET"})
      const data = await response.json()
      setDeals(data)
    }catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
    getEtsyDeals()
  }, []);


  return (
    <div className="app">
      <Header />
      <nav>
        <button className = "primary">Amazon</button>
        <button className = "primary" onClick={getEtsyDeals}>Etsy</button>
        <button className = "primary" onClick={getZaraDeals}>Zara</button>
        <button className = "primary" disabled>Sephora</button>
      </nav>
      <div>
        <h2>Best Deals</h2>
        <div className = "feed">
          {deals?.map(deal => <Card key={deal.pos} item={deal}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
