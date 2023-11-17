import Drawer from "./Drawer"

export default function Navbar() {
    return (
        <div className="navbar bg-[#c5b4a7]">
            <div className="flex-none">
                <Drawer/>
            </div>
            <div className="flex-1">
              <a className="btn normal-case text-2xl text-black bg-transparent border-none hover:bg-transparent hover:text-black">Shelby Vasas</a>
            </div>
        </div>
    )
}
