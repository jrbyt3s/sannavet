
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {FcBullish} from 'react-icons/fc';
import { HiOutlineLogout } from 'react-icons/hi'
import classNames from 'classnames'

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
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebarr() {
  
    return (
      <>
      <aside className="bg-blue-950 w-60 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
				<FcBullish fontSize={24} />
				<span className="text-neutral-200 text-lg">Sanavet</span>
			</div>
			<div className="py-8 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((sidebarItem) => (
					// <SidebarLink key={link.key} link={link} />
                    <Link href={sidebarItem.path}>{sidebarItem.label}</Link>
				))}
			</div>
			<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((menuIten) => (
					<ul className="flex flex-col md:flex-row md:items-center md:gap-[4vw] gap-2">
                        <li>
                            <Link href='#'>{menuIten.label} </Link>
                        </li>
                    </ul>
				))}
				<div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<span>span</span>
					</span>
					Logout
				</div>
			</div>
      </aside>
      </>
    )
  
}
