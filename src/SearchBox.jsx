import React from 'react';
import './SearchBox.css';
import flecheVersBas from './fleche-vers-le-bas.png';

function App(props) {
  return (
    <div className="searchbox">
      <div className="row">
        {
          <>
            {/* Sens Aller */}
            <div
              className={`sens-option ${
                props.selectedLine !== null && props.sensVal !== 1
                  ? 'active'
                  : ''
              }`}
              onClick={() => {}}
            >
              <label>Station de départ</label>
              <img src={flecheVersBas} alt="Icon" className="arrow-icon" />
              <label>Station d'arrivée</label>
            </div>
            {/* Sens Retour */}
            <div
              className={`sens-option ${
                props.selectedLine !== null && props.sensVal !== 0
                  ? 'active'
                  : ''
              }`}
              onClick={() => {}}
            >
              <label>Station de départ</label>
              <img src={flecheVersBas} alt="Icon" className="arrow-icon" />
              <label>Station d'arrivée</label>
            </div>
          </>
        }

        <div className="bus-selector">
          <select onChange={props.handleLineSelect}>
            <option value="">Choisir un Bus</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
