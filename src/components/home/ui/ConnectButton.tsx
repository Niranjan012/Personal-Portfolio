import Link from "next/link";

const ConnectButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[10rem] min-h-[44px] flex items-center justify-center"
      href="#contact"
    >
      Let&apos;s Connect
    </Link>
  );
};

export default ConnectButton;