
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {FcBullish} from 'react-icons/fc';
import { HiOutlineLogout } from 'react-icons/hi'
import classNames from 'classnames'
import logoImage from "../../public/images/sannavet-logo-brand-removebg-resize.png";

import {
	HiOutlineViewGrid, HiOutlineCube, HiOutlineShoppingCart, HiOutlineUsers,
	HiOutlineDocumentText, HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'


const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'citas',
		label: 'Citas',
		path: '/appoiment',
		icon: <HiOutlineUsers />
	},
	{
		key: 'mascotas',
		label: 'Mascotas',
		path: '/pets',
		icon: <HiOutlineDocumentText />
	},
]

const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]

const linkClass =
'flex items-center gap-2 font-light px-3 py-2 hover:bg-blue-500 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebarr() {
  
    return (
      <>
      <aside className="bg-orange-500 w-60 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">		
				<span className="text-neutral-200 text-lg">
  <Image src={logoImage} width={286}
              height={64}
              alt="Logo"
              className="w-[100-%]" />
</span>
			</div>
			<hr />
			<div className = "flex flex-1 flex-col py-8">
				{DASHBOARD_SIDEBAR_LINKS.map((sidebarItem) => (
					// <SidebarLink key={link.key} link={link} />
                    // eslint-disable-next-line react/jsx-key
					<div className={classNames(linkClass," gap-0.5 text-neutral-200 text-lg hover:text-black")}>
                    <Link classname= "bg-black" href={sidebarItem.path}>{sidebarItem.label} 
					</Link>
					</div>
				))}
			</div>
			<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((menuIten) => (
					// eslint-disable-next-line react/jsx-key
					<ul className="flex flex-col md:flex-row md:items-center md:gap-[4vw] gap-2">
                        <li>
                            <Link href='#'>{menuIten.label} </Link>
                        </li>
                    </ul>
				))}
				<div className={classNames(linkClass, 'cursor-pointer  text-white')}>
					<span className="text-xl">
						
					</span>
					Salir
				</div>
			</div>
      </aside>
      </>
    )
  
}
