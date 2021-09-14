import React, { useMemo, useRef, useState, useEffect } from "react"
import * as THREE from 'three'
import { a } from "@react-spring/three"
import { useSpring } from "@react-spring/core"
import { PointsProps, useFrame } from "@react-three/fiber"
import { Ref } from "react"
import { off } from "process"


export const SphereObj: React.FC = () => {



    return (
        <>
            <ambientLight intensity={0.5} />
            <mesh>
                <sphereGeometry
                    args={[0.01, 32, 32]}
                />
                <meshPhongMaterial color='pink' />

            </mesh>
        </>
    )
}



export const Points: React.FC = () => {
    const points = useRef<any>()
    useFrame(() => {
        points.current.rotation.y += 0.01

    })
    const count: number = 3000

    const [positions, colors] = useMemo(() => {
        let pos: Array<number> = []
        let color: Array<number> = []
        for (let i: number = 0; i < count * 3; i++) {
            pos.push((Math.random() - 0.5) * 10)
            color.push(Math.random())

        }
        return [new Float32Array(pos), new Float32Array(color)]
    }, [count])




    return (

        <>
            <ambientLight intensity={0.5} />
            <points ref={points}>
                <bufferGeometry attach="geometry">
                    <bufferAttribute
                        attachObject={['attributes', 'position']}
                        array={positions}
                        count={count}
                        itemSize={3}

                    />
                    <bufferAttribute
                        attachObject={['attributes', 'color']}
                        array={colors}
                        count={count}
                        itemSize={3}

                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.02}
                    attach="material"
                    vertexColors
                    transparent
                    sizeAttenuation
                />
            </points>
        </>


    )
}


export const PointsSpin: React.FC = () => {
    const [spin, setSpin] = useState<boolean>(false)
    const points = useRef<any>()
    const count: number = 3000
    const rotation = useSpring({
        spinAnimation: spin ? Math.PI : 0,
        config: { mass: 5, tension: 400, friction: 60, precision: 0.0001 }

    });



    const [positions, colors] = useMemo(() => {
        let pos: Array<number> = []
        let color: Array<number> = []
        for (let i: number = 0; i < count * 3; i++) {
            pos.push((Math.random() - 0.5) * 10)
            color.push(Math.random())

        }
        return [new Float32Array(pos), new Float32Array(color)]
    }, [count])




    return (

        <>
            <ambientLight intensity={0.5} />
            <a.points rotation-y={rotation.spinAnimation} ref={points} onClick={() => setSpin(!spin)}>
                <bufferGeometry attach="geometry">
                    <bufferAttribute
                        attachObject={['attributes', 'position']}
                        array={positions}
                        count={count}
                        itemSize={3}

                    />
                    <bufferAttribute
                        attachObject={['attributes', 'color']}
                        array={colors}
                        count={count}
                        itemSize={3}

                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.02}
                    attach="material"
                    vertexColors
                    transparent
                    sizeAttenuation
                />
            </a.points>
        </>


    )
}

export const PointsScroll: React.FC = () => {
    const points = useRef<any>()
    // useFrame(() => {
    //     points.current.rotation.y += 0.01

    // })
    const [offsetY, setOffsetY] = useState<number>(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        points.current.rotation.y += offsetY * 0.001
        return () => window.removeEventListener("scroll", handleScroll)
    })
    console.log(offsetY * 0.05)

    const count: number = 3000

    const [positions, colors] = useMemo(() => {
        let pos: Array<number> = []
        let color: Array<number> = []
        for (let i: number = 0; i < count * 3; i++) {
            pos.push((Math.random() - 0.5) * 10)
            color.push(Math.random())

        }
        return [new Float32Array(pos), new Float32Array(color)]
    }, [count])




    return (

        <>
            <ambientLight intensity={0.5} />
            <points ref={points}>
                <bufferGeometry attach="geometry">
                    <bufferAttribute
                        attachObject={['attributes', 'position']}
                        array={positions}
                        count={count}
                        itemSize={3}

                    />
                    <bufferAttribute
                        attachObject={['attributes', 'color']}
                        array={colors}
                        count={count}
                        itemSize={3}

                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.02}
                    attach="material"
                    vertexColors
                    transparent
                    sizeAttenuation
                />
            </points>
        </>


    )
}