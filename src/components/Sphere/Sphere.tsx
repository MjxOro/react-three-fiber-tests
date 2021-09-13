import React, { useMemo, useRef } from "react"
import { useSpring,  a } from "@react-spring/three"
import { PointsProps, useFrame } from "@react-three/fiber"
import { Ref } from "react"

export const SphereObj: React.FC = () => {



    return(
        <>
            <ambientLight intesnsity={0.5} />
            <mesh>
                <sphereGeometry
                args={[0.01, 32, 32]}
                />
                <meshPhongMaterial color='pink'/>

            </mesh>
        </>
    )
} 


export const Points: React.FC = () =>{
    const points = useRef<any>()
    useFrame(() =>{
        points.current.rotation.y += 0.01

    })
    const count: number = 500

    let positions = useMemo(() =>{
        let pos: Array<number>= []
        for(let i:number = 0; i < count * 3; i++){
            pos.push((Math.random() - 0.5) * 10)
        }
        return new Float32Array(pos)
    },[count])

    


    return(
        
        <>
            <ambientLight intensity={0.5}/>
            <points ref={points}>
                <bufferGeometry attach="geometry">
                    <bufferAttribute
                    attachObject={['attributes','position']}
                    array={positions}
                    count={count}
                    itemSize={3}

                    />
                </bufferGeometry>
                <pointsMaterial 
                size={0.1}
                color="pink"
                attach="material"
                />
            </points>
        </>


    )
}