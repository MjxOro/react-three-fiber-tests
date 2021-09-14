import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber"
import { PointsScroll } from "../Sphere/ObjectInit"
import { Header } from '../Header/Header';

const RenderPointsScroll: React.FC = () => {
  return (
    <>
      <Header />
      <Canvas style={{ height: "100vh", position: "fixed" }}>
        <Suspense fallback={null}>
          <PointsScroll />
        </Suspense>
      </Canvas>
      <h1 className='app__h1'> Scroll to spin! </h1>
    </>
  );
}

export default RenderPointsScroll;