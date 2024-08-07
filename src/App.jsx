// src/App.jsx

import { useState } from "react";

const App = () => {

  const [team, setTeam] = useState([]);

  const [money, setMoney] = useState(100);

  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);

  const handleAddFighter = (fighter) => {
    console.log('fighter handled', fighter);
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
    } else {
      alert('Not enough cash!');
    }
  };
  const zombieFighterData = zombieFighters.map(zombieFighter => (
    <ul key={zombieFighter.name}>
      <li><img src={zombieFighter.img} alt={zombieFighter.name} /></li>
      <li>Name: {zombieFighter.name}</li>
      <li>Price: {zombieFighter.price}</li>
      <li>Strength: {zombieFighter.strength}</li>
      <li>Agility: {zombieFighter.agility}</li>
      <li>
        <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
      </li>
    </ul>
  ));

  return (

    <>

    <h3>Current Funds: ${money}</h3>

    <div>
      {zombieFighterData}
    </div>

    <h1>Hello world!</h1>

    </>
  );
}

export default App
