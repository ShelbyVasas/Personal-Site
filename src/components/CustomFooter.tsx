import { AiFillLinkedin, AiFillGithub, AiFillFileText, AiOutlineMail} from "react-icons/ai";
import Link from "next/link";

export default function CustomFooter() {
  return (
    <footer className="footer footer-center p-10 bg-[#c5b4a7] text-base-content rounded">

        <nav>
          <div className="grid grid-flow-col gap-4 text-black">
            <Link href="https://www.linkedin.com/in/shelby-vasas/"> <AiFillLinkedin className="text-3xl"/> </Link>
            <Link href="https://github.com/ShelbyVasas"> <AiFillGithub className="text-3xl"/> </Link>
            <Link href="./TechResume.pdf"> <AiFillFileText className="text-3xl"/> </Link>
            <Link href="mailto:shelbyvasas@gmail.com"> <AiOutlineMail className="text-3xl"/> </Link>
          </div>
        </nav> 
    </footer>
  )
}