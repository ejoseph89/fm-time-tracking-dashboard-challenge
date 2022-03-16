import React, { useState } from "react";
import StatsCard from "./components/Stats/StatsCard";
import UserCard from "./components/User/UserCard";

import data from './assets/data/data.json' 

function App() {

  const [ sort, setSort ] = useState({})  


  return (
    <main className="App">
      <section className="dashboard-container">
        <UserCard userName="Jeremy Robson" />
        <section className="user-stats--container">
          {
            data.map((dataItem) => {
              return (
                <StatsCard key={dataItem.title} data={dataItem} />
              )
            })
          }
        </section>
      </section>
    </main>
  );
}

export default App;
