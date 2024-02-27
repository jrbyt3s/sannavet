import Sidebarr from '../../components/Sidebarr'
import Headercms from '../../components/headercms'
export default function CmsLayout({children
}) {
  return (
    
    <>
    <div className="flex flex-row w-screen h-screen overflow-hidden bg-neutral-100">
			<Sidebarr />
			<div className="flex flex-col flex-1">
				<Headercms />
                
				<div className="flex-1 min-h-0 p-4 overflow-auto">
					{children}
				</div>
			</div>
		</div>
    </>
  );
}