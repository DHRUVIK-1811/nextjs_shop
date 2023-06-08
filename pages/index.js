import Image from "next/image";
import { Inter } from "next/font/google";
import BlueText from "./component/BlueText";
import GreenText from "./component/GreenText";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <GreenText/>
      {/* <BlueText/> */}
    </div>
  );
}
