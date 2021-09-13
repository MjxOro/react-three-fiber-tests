import React, { Suspense} from 'react';
import logo from './logo.svg';
import './App.scss';
import { Canvas } from "@react-three/fiber"
import { Points } from "./components/Sphere/Sphere"


const App: React.FC = () => {
  return (
    <div className="App">
      <Canvas style={{height: "100vh",position: "fixed"}} camera={[3,3,3]}  >
        <Suspense fallback={null}>
          <Points />
        </Suspense>
      </Canvas>
      <h1 className='app__h1'> BOZO ALERT! </h1>
    </div>
  );
}

export default App;
