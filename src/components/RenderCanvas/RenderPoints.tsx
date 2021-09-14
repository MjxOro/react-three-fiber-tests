import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber"
import { Points, PointsSpin } from "../Sphere/ObjectInit"
import { Header } from '../Header/Header';

const RenderPoints: React.FC = () => {
	return (
		<>
			<Header />
			<Canvas style={{ height: "100vh", position: "fixed" }}>
				<Suspense fallback={null}>
					<Points />
				</Suspense>
			</Canvas>
			<h1 className='app__h1'> TORNADO ALERT! </h1>
		</>
	);
}

export default RenderPoints;

