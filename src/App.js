import React from 'react';
import {Image} from 'semantic-ui-react'

import Comments from "./comments.js"

import jj from "./jj.jpg"

function App() {
  return (
    <div>
    <Image src = {jj} centered />
    <Comments/>
    </div>
  );
}

export default App;
