import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { BufferGeometry, Material, Mesh } from 'three'

const Box = ({ z }) => {
	const ref = useRef<any>()
	// const ref = useRef<Mesh<BufferGeometry, Material | Material[]>>()
	const { viewport } = useThree()

	const [data] = useState({
		x: THREE.MathUtils.randFloatSpread(2), // -1 to 1
		y: THREE.MathUtils.randFloatSpread(viewport.height),
	})

	const [clicked, setClicked] = useState(false)
	useFrame(state => {
		// ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 2
		// ref.current.rotation.y = Math.sin(state.clock.elapsedTime)
		// ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, clicked ? 1 : 0, 0.1)
		ref.current.position.set(data.x * viewport.width, (data.y += 0.06), z)
		if (data.y > viewport.height / 1.5) {
			data.y = -viewport.height / 1.5
		}
	})

	return (
		<mesh position={[0, 0, 2]} rotation={[1.5, 0, 0.5]} ref={ref} onClick={() => setClicked(!clicked)}>
			<boxGeometry />
			<meshBasicMaterial color='#a12345' />
		</mesh>
	)
}

function App() {
	return (
		<>
			<Canvas>
				{Array(67)
					.fill(0)
					.map((_, i) => (
						<Box key={i} z={-i} />
					))}
			</Canvas>
		</>
	)
}

export default App
