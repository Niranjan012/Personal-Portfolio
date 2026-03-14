import Link from "next/link";

const ViewWorkButton = () => {
  return (
    <Link
      className="app__filled_btn min-w-[10rem] min-h-[44px] flex items-center justify-center"
      href="#projects"
    >
      View My Work
    </Link>
  );
};

export default ViewWorkButton;