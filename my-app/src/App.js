import React from 'react';
import './App.css';
import Header from './components/Header';
import Left_menu from './components/Left_menu';
import Poll from './components/Poll';
import actu1 from './images/notre-dame.png';

function App() {
  const data = [
        {title:"BIG EVENT"},
        {title:"WOUWOUWOUAA"},
        {title:"Mais non"},
        {title:"ouh"}
  ]
  return (
    <div>
        <Header />
        <div className="total">
            <Left_menu />
            <div className="content">
                <Poll />
                <h2>Nos dernières actualités</h2>
                <div className="actualites">
                        {data.map(actu =>
                            <div className="actualite" id={actu.title}>
                                {`${actu.title}`}
                                <img className="actu_image" src={actu1}/>
                            </div>
                        )}
                    </div>
            </div>
        </div>
    </div>
  );
}

export default App;
