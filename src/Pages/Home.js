import React, {Component} from 'react';
import Header from "../Components/Header";
import Example from "../Components/Example";

import 
//alllows us to pass props in the render body 
// setState and set props
//render components to the page 


//whenever we do pages we nee a render() before the return()
class home extends Component {
render ()
{
    return (
        <>
<Header />
<Example/>
<h1>This is my home page</h1>

        </>
    )
}


}

export default home; 