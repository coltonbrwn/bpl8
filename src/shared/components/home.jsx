import React from 'react';
import {Link} from 'react-router';

import CenterNav from './center-nav';

import 'Stylesheets/home';

const Home = (props, context) => (
  <div className="rm--home">
    <div className="px">

      {/* First Section */}
      <div className="px__section" style={{zIndex: 5}}>
        <CenterNav />
        <div className="px__layer--4">
          <div className="title">
            <h1>Radical Machines</h1>
            <h1>It's a thing</h1>
          </div>
        </div>
        <div className="px__layer--3" style={{background: 'black'}}/>
      </div>

      <div className="px__section" style={{zIndex: 2}}>
        <CenterNav style={{transform: 'translateY(156px)'}}/>

        <div className="px__layer--5">
          <div className="title">
            Mid
          </div>
        </div>
        <div className="px__layer--2" style={{background: 'green'}}>
          <div className="title">
            Background
          </div>
        </div>
      </div>

      <div className="px__section" style={{zIndex: 4}}>
        <div className="px__layer--fore">
          <div className="title">
            Foreground
          </div>
        </div>
        <div className="px__layer--base" style={{background: 'purple'}}>
          <div className="title">
            Background
          </div>
        </div>
      </div>

      <div className="px__section" style={{zIndex: 3}}>
        <div className="px__layer--fore">
          <div className="title">
            Foreground
          </div>
        </div>
        <div className="px__layer--base">
          <div className="title">
            Mid
          </div>
        </div>
        <div className="px__layer--back" style={{background: 'red'}}>
          <div className="title">
            Background
          </div>
        </div>
      </div>

    </div>
  </div>
);

Home.contextTypes = {
  localContext: React.PropTypes.object
}

export default Home;
