import avatar from "../../public/images/client.png"
import Link from "next/link"
import Image from "next/image";

export default function Component() {
  return (
    <header className="flex items-center h-20 px-4 border-b bg-white w-full shrink-0 dark:bg-orange-500 md:px-6">
      <div className="flex items-center -mx-2">
        <Link className="flex items-center mx-2" href="usuario">
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
      <nav className="ml-auto flex-1">
        <ul className="flex justify-end space-x-4">
          <li>
            <Link
              className="font-medium text-gray-900 dark:text-gray-50 hover:text-gray-900 hover:underline dark:hover:underline"
              href="#"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-gray-900 dark:text-gray-50 hover:text-gray-900 hover:underline dark:hover:underline"
              href="#"
            >
              Acerca
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-gray-900 dark:text-gray-50 hover:text-gray-900 hover:underline dark:hover:underline"
              href="#"
            >
              Solicitudes
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-gray-900 dark:text-gray-50 hover:text-gray-900 hover:underline dark:hover:underline"
              href="#"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

