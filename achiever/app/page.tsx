import Image from "next/image";
import Link from "next/link";
import SelectSteamId from "./selectSteamId";

let steamId;

export default function Home() {
  return (
    <main>
      <SelectSteamId />
    </main>
  );
}
