import React, { Suspense} from 'react';
import logo from './logo.svg';
import './App.scss';
import { Canvas } from "@react-three/fiber"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import RenderPoints from "./components/RenderCanvas/RenderPoints"
import RenderPointsSpin from "./components/RenderCanvas/RnderPointsSpin"

const App: React.FC = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path='/spin' component={RenderPointsSpin} />
        <Route path='/' component={RenderPoints} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
