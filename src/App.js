import React,{Suspense} from 'react';
import { HashRouter as Switch } from "react-router-dom";
import routes, {RouteWithSubRoutes} from './routes.config'



function App() {


  return (
    <div className="App">
 
       <Suspense fallback={<div/>}>
         <Switch>
           {routes.map((route,i) =>{
           console.log( <RouteWithSubRoutes key={i} {...route}/>)
           })}
         </Switch>
       </Suspense>
   
    </div>
  );
}
App.defaultProps={

}
export default App;
