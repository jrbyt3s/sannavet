'use client'
import React from 'react'
import Sidebarr from '../sidebar/sidebarr'
import Headercms from '../header/headercms'

export default function Layoutcms() {
    return (
		<div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
			<Sidebarr />
			<div className="flex flex-col flex-1">
				<Headercms />
				<div className="flex-1 p-4 min-h-0 overflow-auto">
					<h1>hola</h1>
				</div>
			</div>
		</div>
	)
}
