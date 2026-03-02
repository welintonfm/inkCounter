import Image from "next/image";
import styles from "./page.module.css";
import PlayerCard from "@/components/PlayerCard";

export default function Home() {
  return (
    <div style={{backgroundColor: "white", height: "100vh", minWidth: "100%", display: "flex", flexDirection: "column"}}>
     <PlayerCard number="2" startLife={20} invert/>
     <div style={{backgroundColor: "#000", width: "100%", height: "16px"}} />
     <PlayerCard number="1" startLife={20}/>
    </div>
  );
}
