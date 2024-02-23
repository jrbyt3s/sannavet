import Sidebarr from '../../components/Sidebarr'
import Headercms from '../../components/headercms'
export default function CmsLayout({children
}) {
  return (
    
    <>
    <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
			<Sidebarr />
			<div className="flex flex-col flex-1">
				<Headercms />
                <h2>hi</h2>
				<div className="flex-1 p-4 min-h-0 overflow-auto">
					{children}
				</div>
			</div>
		</div>
    </>
  );
}