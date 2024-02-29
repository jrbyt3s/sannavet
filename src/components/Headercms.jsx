import avatar from "../../public/images/client.png"
import Link from "next/link"
import Image from "next/image";

export default function Component() {

  //const userProfile = localStorage.getItem('userProfile');

  return (
    <header className="flex items-center h-20 px-4 border-b bg-white w-full shrink-0 dark:bg-orange-500 md:px-6">
      <div className="flex items-center mx-2">

      </div>
      <nav className="ml-auto flex-1">
        <div className="flex justify-end space-x-4">
          
          <Link className="flex items-center mx-2" href="/dashboard">
          <span className="mx-4">Juan Amores</span>
            <div>
              <Image
                src={avatar}
                width={48}
                height={48}
                alt="Logo"
                className=" rounded-full border border-black"
              />
            </div>
            <span className="sr-only">Go to Package</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

