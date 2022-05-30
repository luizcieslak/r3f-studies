import { Canvas } from '@react-three/fiber'

function App() {
	return (
		<>
			<Canvas>
				<mesh>
					<boxGeometry />
					<meshBasicMaterial color='green' />
				</mesh>
			</Canvas>
		</>
	)
}

export default App
