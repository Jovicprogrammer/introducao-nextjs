import Image from "next/image"

type Links = {
  link1_titulo: string;
  link2_titulo: string;
  link3_titulo: string; // ? significa que é opcional

  link1_link: string;
  link2_link: string;
  link3_link: string; 
};


export default function Navbar({link1_titulo, link1_link, link2_titulo, link2_link, link3_titulo, link3_link}:Links) {


    return (

      <nav className="bg-indigo-500 shadow-sm ">
        <div className="px-4 py-3">
          <div className="flex justify-between h-14 items-center ">
        
        <div className="flex items-center"> 
        <Image
        src="/nextjslogo.png"
        alt="nextjs logo "
        height={70}
        width={70}
        className=" "
        />
        <span className="ml-2">NextJs</span>
        </div>

        <div className="flex space-x-4">
          <a href={link1_link} className="px-3 text-lg font-medium hover:text-amber-200 transition ">{link1_titulo}</a>
          <a href={link2_link} className="px-3 text-lg font-medium  hover:text-amber-200 transition">{link2_titulo}</a>
          <a href={link3_link} className="px-3 text-lg font-medium  hover:text-amber-200 transition">{link3_titulo}</a>
        </div>
          </div>
        </div>
      </nav>

    )

}