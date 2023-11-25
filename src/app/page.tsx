"use client";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { degToRad } from "../utils";
import Navbar from "../components/Navbar";
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="bg-stone-800 h-screen w-full flex justify-center">
        <div className="pt-6 flex flex-wrap h-min justify-center z-50">
          <span className="text-orange-600 text-sm">New</span>
          <h1 className="text-4xl w-full text-center">iPhone 15 Pro</h1>
          <p className="text-center w-full text-sm">
            The most powerful iPhone ever.
          </p>
          <p className="pt-4 text-xl text-center">
            Starting at only $5399 or $41.62/mo. for 48 mo.
          </p>
          <div className="w-full grid place-items-center p-4">
            <Link
              href="https://jedborseth.com"
              className="rounded-2xl bg-blue-700 p-2 px-4"
            >
              Buy
            </Link>
          </div>
        </div>
        <div className="fixed w-full h-screen">
          <Canvas>
            <ambientLight castShadow />
            <pointLight position={[10, 10, 10]} />
            <pointLight position={[0, -2, 5]} intensity={50} />

            <IPhoneLoader />
          </Canvas>
        </div>
      </section>
      <section className="bg-neutral-400 h-screen w-full"></section>
      <section className="bg-neutral-700 h-screen w-full"></section>
    </main>
  );
}

const IPhoneLoader = () => {
  const gltf = useLoader(GLTFLoader, "./assets/iphone/scene.gltf");
  useFrame(() => {
    gltf.scene.rotation.y += 0.01;
  });
  gltf.scene.scale.set(15, 15, 15);
  gltf.scene.rotation.y = degToRad(360);
  gltf.scene.rotation.x = degToRad(30);

  return <primitive object={gltf.scene} />;
};
