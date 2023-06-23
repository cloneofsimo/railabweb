import { useState, useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import URDFLoader from "urdf-loader";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import * as THREE from "three";

const RobotLoader = ({ url }) => {
  const { scene, gl } = useThree();
  const robotRef = useRef(null);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const gaitParams = {
    LF_HAA: { amplitude: 0.1, frequency: 1, phase: 0, offset: 0 },
    LF_HFE: { amplitude: 0.5, frequency: 1, phase: 0, offset: 0.5 },
    LF_KFE: { amplitude: 0.3, frequency: 1, phase: 0, offset: -1.1 },
    LF_S2F: { amplitude: 0.1, frequency: 1, phase: 0, offset: 0.0 },
    LH_HAA: { amplitude: 0.1, frequency: 1, phase: Math.PI, offset: 0 },
    LH_HFE: { amplitude: 0.5, frequency: 1, phase: Math.PI, offset: 0.5 },
    LH_KFE: { amplitude: 0.3, frequency: 1, phase: Math.PI, offset: -1.1 },
    LH_S2F: { amplitude: 0.1, frequency: 1, phase: Math.PI, offset: 0 },
    RF_HAA: { amplitude: 0.1, frequency: 1, phase: Math.PI, offset: 0 },
    RF_HFE: { amplitude: 0.5, frequency: 1, phase: Math.PI, offset: 0.5 },
    RF_KFE: { amplitude: 0.3, frequency: 1, phase: Math.PI, offset: -1.1 },
    RF_S2F: { amplitude: 0.1, frequency: 1, phase: Math.PI, offset: 0 },
    RH_HAA: { amplitude: 0.1, frequency: 1, phase: 0, offset: 0 },
    RH_HFE: { amplitude: 0.5, frequency: 1, phase: 0, offset: 0.5 },
    RH_KFE: { amplitude: 0.3, frequency: 1, phase: 0, offset: -1.1 },
    RH_S2F: { amplitude: 0.1, frequency: 1, phase: 0, offset: 0 },
  };

  const robotMaterial = () => {
    return new THREE.ShaderMaterial({
      vertexShader: `
      varying vec3 vUv;
      void main() {
        vUv = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
      fragmentShader: `
      varying vec3 vUv;
      void main() {
        float intensity = 0.5 * (1.0 - sin(length(vUv)));
        gl_FragColor = vec4(0.1, intensity, intensity, 1.0);
      }
    `,
      side: THREE.DoubleSide,
      transparent: true,
    });
  };

  useEffect(() => {
    const urdfLoader = new URDFLoader();
    urdfLoader.loadMeshCb = (path, manager, onComplete) => {
      const stl = new STLLoader(manager);
      stl.load(
        path,
        (result) => {
          const mesh = new THREE.Mesh(result, robotMaterial());
          onComplete(mesh);
        },
        undefined,
        (err) => {
          onComplete(null, err);
        }
      );
    };
    urdfLoader.load(url, (robot) => {
      scene.add(robot);
      robotRef.current = robot;
      scene.add(robot);
      robot.castShadow = true;

      robot.rotation.x = -Math.PI / 2;
      robot.position.y = 0.5;

      console.log(robot.joints);

      // add ground
      const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(20, 20, 10, 10),
        createGlowingGridMaterial()
      );
      ground.rotation.x = -Math.PI / 2;
      ground.receiveShadow = true;
      scene.add(ground);

      // add stars
      const starsGeometry = new THREE.BufferGeometry();
      const starsMaterial = new THREE.PointsMaterial({ color: 0xbbbbbb });
      const starPositions = [];
      for (let i = 0; i < 10000; i++) {
        const x = THREE.MathUtils.randFloatSpread(2000);
        const y = THREE.MathUtils.randFloatSpread(2000);
        const z = THREE.MathUtils.randFloatSpread(2000);

        starPositions.push(x, Math.abs(z) < 100 ? z + 100 : z, y);
      }
      starsGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(starPositions, 3)
      );
      const starField = new THREE.Points(starsGeometry, starsMaterial);
      scene.add(starField);
    });

    // Clean up on unmount
    return () => {
      scene.remove(...scene.children);
    };
  }, [url, scene, gl]);

  useFrame((state, delta) => {
    // delta is the time since the last frame in seconds
    setTimeElapsed((prevTime) => prevTime + delta);

    if (robotRef.current) {
      const jointValues = {};

      for (const [
        joint,
        { amplitude, frequency, phase, offset },
      ] of Object.entries(gaitParams)) {
        jointValues[joint] =
          amplitude * Math.sin(2 * Math.PI * frequency * timeElapsed + phase) +
          offset;
      }

      robotRef.current.setJointValues(jointValues);
    }
  });

  // Create custom ShaderMaterial for glowing grid effect
  const createGlowingGridMaterial = () => {
    const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

    const fragmentShader = `
    varying vec2 vUv;
    void main() {
      vec2 grid = fract(vUv * 20.0) - 1.0;
      float line = max(grid.x, grid.y);
      line = step(0.02, abs(line)); // line width
      vec4 color = mix(vec4(0.0, 0.3, 0.3, 1.0), vec4(0.0, 0.0, 0.0, 0.0), line); // line color
      gl_FragColor = color;
    }
  `;

    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      side: THREE.DoubleSide,
      transparent: true,
    });
  };

  return null;
};

export default RobotLoader;
