import React, { useState, useMemo } from "react";
import * as THREE from "three";
import { useGLTFWithKTX2 } from "../../utils/useGLTFWithKTX2";
import { useModalStore } from "../../stores/modalStore";
import About from "../../../components/About/About";
import Project from "../../../components/Project/Project";

export default function Model({ progress = 0, ...props }) {
  const { nodes, materials } = useGLTFWithKTX2("/models/DetailT-v1.glb");
  const [hoveredMesh, setHoveredMesh] = useState(null);
  const { openModal } = useModalStore();

  const projectNames = {
    one: "Thief Detector",
    two: "AGNI URL(Advanced SEO)",
    three: "3d Showcase of Lamborghini",
    four: "Gemini Clone",
  };

  const handleClick = (elementID) => {
    if (elementID === "about" || elementID === "maa" || elementID === "me2" || elementID === "scene") {
      openModal("About me", <About />, elementID);
    } else {
      openModal(
        projectNames[elementID],
        <Project projectID={elementID} />,
        elementID
      );
    }
  };

  const getMaterial = (originalMaterial, isHovered) => {
    const material = useMemo(() => originalMaterial.clone(), [originalMaterial]);

    // Handle emissive effect when hovered
    if (isHovered) {
      material.emissive = new THREE.Color(1, 1, 1).multiplyScalar(0.2); // Glow effect when hovered
    } else {
      material.emissive = new THREE.Color(0, 0, 0); // Reset emissive when hover out
    }

    return material;
  };

  const interactiveMeshes = [
    { node: nodes.Text_5, id: "one", material: materials["Project One"], progressRange: [0.32, 0.43] },
    { node: nodes.Text_6, id: "two", material: materials["Project Two"], progressRange: [0.32, 0.43] },
    { node: nodes.Text_4, id: "three", material: materials["Project Three"], progressRange: [0.32, 0.43] },
    { node: nodes.Text_7, id: "four", material: materials["Project Four"], progressRange: [0.32, 0.43] },
    { node: nodes.Text_8, id: "about", material: materials["Photo of Me"], progressRange: [0.55, 0.65] },
    { node: nodes.Text_9, id: "maa", material: materials.maa, progressRange: [0.55, 0.65] },
    { node: nodes.Text_10, id: "me2", material: materials.Me2, progressRange: [0.55, 0.65] },
    { node: nodes.Text_11, id: "scene", material: materials.Scene, progressRange: [0.55, 0.65] },
  ];

  return (
    <group {...props} dispose={null}>
      <group position={[-2.989, 68.944, 1.806]} rotation={[Math.PI / 2, 0, 0]}>
        {interactiveMeshes.map(({ node, id, material, progressRange }) => {
          const [min, max] = progressRange;
          const isHovered = hoveredMesh === id;

          return (
            <mesh
              key={id}
              castShadow
              receiveShadow
              geometry={node.geometry}
              material={getMaterial(material, isHovered)}
              onPointerOver={() => setHoveredMesh(id)}
              onPointerOut={() => setHoveredMesh(null)}
              onClick={() => handleClick(id)}
            />
          );
        })}

        {/* Static Mesh (non-interactive) */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text_2.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text_3.geometry}
          material={materials.Frame}
        />
      </group>

      {/* Text Labels */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials.Frame}
        position={[-10.689, 69.054, -4.139]}
        rotation={[1.731, 0.031, 0.072]}
        scale={0.058}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials.Frame}
        position={[-9.7, 69.045, -4.099]}
        rotation={[1.382, 0, 0]}
        scale={0.062}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={materials.Frame}
        position={[-8.724, 69.045, -4.099]}
        rotation={[1.382, 0, 0]}
        scale={0.062}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text003.geometry}
        material={materials.Frame}
        position={[-7.736, 69.045, -4.099]}
        rotation={[1.382, 0, 0]}
        scale={0.062}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text004.geometry}
        material={materials.Frame}
        position={[-9.815, 70.296, -4.095]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.165}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text005.geometry}
        material={materials.Frame}
        position={[-8.155, 68.33, 4.65]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.097}
      />
    </group>
  );
}
