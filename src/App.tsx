import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { BufferGeometry, Material, Mesh } from 'three'

const Box = () => {
	const ref = useRef<any>()
	// const ref = useRef<Mesh<BufferGeometry, Material | Material[]>>()

	const [clicked, setClicked] = useState(false)
	useFrame(state => {
		// ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 2
		// ref.current.rotation.y = Math.sin(state.clock.elapsedTime)
		ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, clicked ? 1 : 0, 0.1)
	})

	return (
		<mesh position={[0, 0, 2]} rotation={[1.5, 0, 0.5]} ref={ref} onClick={() => setClicked(!clicked)}>
			<boxGeometry />
			<meshBasicMaterial color='green' />
		</mesh>
	)
}

function App() {
	return (
		<>
			<Canvas>
				<Box />
			</Canvas>
		</>
	)
}

export default App
