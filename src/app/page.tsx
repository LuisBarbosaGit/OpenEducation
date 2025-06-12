"use client";
import { Sidebar } from "./components/Sidebar/sidebar";
import { FrameRight } from "./components/FrameRight/frame-right";
import { useSidebar } from "./contexts/sidebar.context";

export default function Home() {
  const { isSidebarOpen } = useSidebar();

  return (
    <main className="w-full h-dvh overflow-hidden flex">
      <Sidebar show={isSidebarOpen} />
      <FrameRight />
    </main>
  );
}
