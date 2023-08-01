import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Html, useGLTF, OrbitControls } from '@react-three/drei';
import DefaultScene from './utils/DefaultScene';

function Home() {
  const { scene } = useGLTF('./default_torus-transformed.glb');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const model = scene.children[0].geometry;

  return (
    <div className="portal-container">
      <Link to={`wee`}>
        <div className="portal hvr-pulse">
          <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 30 }}>
            {model && (
              <>
                <mesh
                  castShadow
                  geometry={model}
                  scale={1.05}
                  position={[0, 0.7, 0]}
                  rotation={[0.25, 0, 0]}
                >
                  <meshStandardMaterial color={'rgb(30, 220, 30))'} />
                </mesh>
                <DefaultScene />
                <HtmlContent />
                <OrbitControls autoRotate />
              </>
            )}
          </Canvas>
        </div>
      </Link>
    </div>
  );
}

function HtmlContent() {
  return (
    <Html className="html-three" center>
      <div className="home">
        <section>
          <h1>wee three</h1>
          <div className="models">
            <p>click to enter</p>
          </div>
        </section>
      </div>
    </Html>
  );
}

export default Home;
