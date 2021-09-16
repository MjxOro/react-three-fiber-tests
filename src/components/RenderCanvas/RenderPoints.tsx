import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber"
import { Points, PointsSpin } from "../Sphere/ObjectInit"
import { Header } from '../Header/Header';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useSpring } from '@react-spring/core';

const RenderPoints: React.FC = () => {
	return (
		<>
			<Header />
			<Parallax pages={2}  >
				<ParallaxLayer offset={0} speed={1.5} style={{ pointerEvents: "none" }}>
					<Canvas style={{ height: "95vh", position: "fixed", pointerEvents: "none" }}>
						<Suspense fallback={null}>
							<Points />
						</Suspense>
					</Canvas>
					<h1 className='app__h1'> TORNADO ALERT! </h1>
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={0.5}>
					<p className="parallax__text">Page 2!</p>
				</ParallaxLayer>
			</Parallax>
		</>
	);
}

export default RenderPoints;

