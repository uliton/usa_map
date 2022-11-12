import React, { useState } from "react";
import states from "../../framework/states.json";
import { MapUSA } from "../MapUSA";

import './Test.scss';

export const Test: React.FC = () => {
  const [countyAbbreviation, setCountyAbbreviation] = useState('');

  const stateInfo = states.find(state => state.abbreviation === countyAbbreviation) || '';
  // console.log(stateInfo);

  // #223C2B green
  // #C4C4C4 grey
  return (
    <div className="test">
      <div className="test__map">
        <MapUSA
          countyId={countyAbbreviation}
          setCountyId={setCountyAbbreviation}
        />
      </div>

      <div className="test__info">
        {stateInfo 
          ? (
            <div className="info">
              <span className="info--state">
                {stateInfo.state}
              </span>

              <span className="info--capital">
                {stateInfo.capital.name}
              </span>

              <span className="info">
                coordinate: {stateInfo.capital.lat}, {stateInfo.capital.long}
              </span>

              <span className="info--fun">
                {stateInfo.fun}
              </span>
            </div>
          )
          : (
            <div className="info">
              Choose state to see info
            </div>
          )}
      </div>
    </div>
  );
};
