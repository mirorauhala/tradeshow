import Image from "next/image";
import logo from "../images/logo.png";

export function AppBar() {
  return (
    <div className="bg-[#0D3D61] align-middle">
      <Image
        className="mx-auto px-3 py-3"
        src={logo}
        alt="Logo"
        width={175}
        height={80}
      />
    </div>
  );
}
