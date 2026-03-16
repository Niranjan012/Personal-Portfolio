import Link from "next/link";
import Strings from "@/constants/strings";

const TalkButton = () => {
  return (
    <Link
      className="app__filled_btn min-w-[10rem]"
      href={Strings.resumeLink}
      target="_blank"
    >
      Download Resume
    </Link>
  );
};

export default TalkButton;
