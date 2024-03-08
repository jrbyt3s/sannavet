import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { FcBullish } from 'react-icons/fc';
import { HiOutlineLogout } from 'react-icons/hi'
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import classNames from 'classnames'
import logoImage from "../../public/images/sannavet-logo-brand-removebg-resize.png";

import {
	HiOutlineViewGrid, HiOutlineCube, HiOutlineShoppingCart, HiOutlineUsers,
	HiOutlineDocumentText, HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
} from 'react-icons/hi'
import { MdOutlinePets } from "react-icons/md";
import { RiStethoscopeFill } from "react-icons/ri";


const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'appoiment',
		label: 'Citas',
		path: '/appoiment',
		icon: <HiOutlineDocumentText />
	},{
		key: 'newAppoiment',
		label: 'Nueva Cita',
		path: '/newAppoiment',
		icon: <HiOutlineDocumentPlus />
	},
	{
		key: 'mascotas',
		label: 'Mascotas',
		path: '/pets',
		icon: <MdOutlinePets />
	},	
	{
		key: 'appoiment',
		label: 'Citas',
		path: '/appoiment',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'veterinarios',
		label: 'Veterinarios',
		path: '/veterinario',
		icon: <RiStethoscopeFill />
	},

]

const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Configuracion',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Ayuda y Soporte',
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
				<div className="flex flex-1 flex-col py-8">
					{DASHBOARD_SIDEBAR_LINKS.map((sidebarItem) => (
						// <SidebarLink key={link.key} link={link} />
						// eslint-disable-next-line react/jsx-key
						<Link classname="bg-black" href={sidebarItem.path}>
							<div className={classNames(linkClass, " gap-0.5 text-neutral-200 text-lg hover:text-black")}>
								<span>{sidebarItem.icon}</span>
								{sidebarItem.label}
							</div>
						</Link>
					))}
				</div>
				<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
					{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((menuIten) => (
						// eslint-disable-next-line react/jsx-key
						<Link classname="bg-black" href='#'>
						<div className={classNames(linkClass, " gap-0.5 text-neutral-200 text-lg hover:text-black")}>
							<span>{menuIten.icon}</span>
							{menuIten.label}
						</div>
					</Link>
					))}
					<div className={classNames(linkClass, 'cursor-pointer  text-white')}>
						<Link href='/signout'>Salir</Link>
					</div>
				</div>
			</aside>
		</>
	)

}
