import React, { Suspense} from 'react';
import logo from './logo.svg';
import './App.scss';
import { Canvas } from "@react-three/fiber"
import { Points } from "./components/Sphere/ObjectInit"


const App: React.FC = () => {
  return (
    <div className="App">
      <Canvas style={{height: "100vh",position: "fixed"}}>
        <Suspense fallback={null}>
          <Points />
        </Suspense>
      </Canvas>
      <h1 className='app__h1'> TORNADO ALERT! </h1>
    </div>
  );
}

export default App;
