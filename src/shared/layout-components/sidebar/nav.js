import React from "react";

const DashboardIcon = <i className="bx bx-home side-menu__icon"></i>

const PagesIcon = <i className="bx bx-file-blank side-menu__icon"></i>

const TaskIcon = <i className="bx bx-task side-menu__icon"></i>

const AuthenticationIcon = <i className="bx bx-fingerprint side-menu__icon"></i>

const ErrorIcon = <i className="bx bx-error side-menu__icon"></i>

const UiElementsIcon = <i className="bx bx-box side-menu__icon"></i>

const Utilities = <i className="bx bx-medal side-menu__icon"></i>

const FormsIcon = <i className="bx bx-file  side-menu__icon"></i>

const AdvancedUiIcon = <i className="bx bx-party side-menu__icon"></i>

const WidgetsIcon = <i className="bx bx-gift side-menu__icon"></i>

const AppsIcon = <i className="bx bx-grid-alt side-menu__icon"></i>

const NestedmenuIcon = <i className="bx bx-layer side-menu__icon"></i>

const TablesIcon = <i className="bx bx-table side-menu__icon"></i>

const ChartsIcon = <i className="bx bx-bar-chart-square side-menu__icon"></i>

const MapsIcon = <i className="bx bx-map side-menu__icon"></i>

const Icons = <i className="bx bx-store-alt side-menu__icon"></i>

const badge = <span className="badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2">12</span>
const badge1 = <span className="text-secondary text-[0.75em] rounded-sm !py-[0.25rem] !px-[0.45rem] badge !bg-secondary/10 ms-2">New</span>
const badge2=<span className="text-danger text-[0.75em] rounded-sm badge !py-[0.25rem] !px-[0.45rem] !bg-danger/10 ms-2">Hot</span>
const badge4 = <span className="text-success text-[0.75em] badge !py-[0.25rem] !px-[0.45rem] rounded-sm bg-success/10 ms-2">3</span>

export const MenuItems = [
    {menutitle: "MAIN", Items: [

            {icon: DashboardIcon, badgetxt: badge, title: 'Dashboards', type: "sub", active: false, children: [
                    {path: "/components/dashboards/crm", type: "link", active: false, selected: false, title: "CRM" },
                    {path: "/components/dashboards/ecommerce", type: "link", active: false, selected: false, title: "Ecommerce" },
                    {path: "/components/dashboards/crypto", type: "link", active: false, selected: false, title: "Crypto" },
                    {path: "/components/dashboards/jobs", type: "link", active: false, selected: false, title: "Jobs" },
                    {path: "/components/dashboards/nft", type: "link", active: false, selected: false, title: "NFT" },
                    {path: "/components/dashboards/sales", type: "link", active: false, selected: false, title: "Sales" },
                    {path: "/components/dashboards/analytics", type: "link", active: false, selected: false, title: "Analytics" },
                    {path: "/components/dashboards/projects", type: "link", active: false, selected: false, title: "Projects" },
                    {path: "/components/dashboards/hrm", type: "link", active: false, selected: false, title: "HRM" },
                    {path: "/components/dashboards/stocks", type: "link", active: false, selected: false, title: "Stocks" },
                    {path: "/components/dashboards/courses", type: "link", active: false, selected: false, title: "Courses" },
                    {path: "/components/dashboards/personal", type: "link", active: false, selected: false, title: "Personal" },

                ]
            },
        ]
    },
    {
        menutitle: "PAGES", Items: [

            { icon: PagesIcon, badgetxt: badge1, title: "Pages", type: "sub", active: false, children: [
                    {path: "/components/pages/about-us", type: "link", active: false, selected: false, title: "About Us" },
                    { title: "Blog", type: "sub", active: false, children: [
                            {path: "/components/pages/blog/blog", type: "link", active: false, selected: false, title: "Blog" },
                            {path: "/components/pages/blog/blog-details", type: "link", active: false, selected: false, title: "Blog-Details" },
                            {path: "/components/pages/blog/create-blog", type: "link", active: false, selected: false, title: "Create-Blog" },
                        ]
                    },
                    {path: "/components/pages/chat", type: "link", active: false, selected: false, title: "Chat" },
                    {path: "/components/pages/contacts", type: "link", active: false, selected: false, title: "Contacts" },
                    {path: "/components/pages/contact-us", type: "link", active: false, selected: false, title: "Contact-Us" },
                    { title: "Ecommerce", type: "sub", active: false, children: [
                            {path: "/components/pages/ecommerce/add-products", type: "link", active: false, selected: false, title: "Add Products" },
                            {path: "/components/pages/ecommerce/cart", type: "link", active: false, selected: false, title: "Cart" },
                            {path: "/components/pages/ecommerce/checkout", type: "link", active: false, selected: false, title: "Checkout" },
                            {path: "/components/pages/ecommerce/edit-products", type: "link", active: false, selected: false, title: "Edit-Products" },
                            {path: "/components/pages/ecommerce/order-details", type: "link", active: false, selected: false, title: "Order-Details" },
                            {path: "/components/pages/ecommerce/orders", type: "link", active: false, selected: false, title: "Orders" },
                            {path: "/components/pages/ecommerce/products", type: "link", active: false, selected: false, title: "Products" },
                            {path: "/components/pages/ecommerce/product-details", type: "link", active: false, selected: false, title: "Product-Details" },
                            {path: "/components/pages/ecommerce/product-list", type: "link", active: false, selected: false, title: "Products-List" },
                            {path: "/components/pages/ecommerce/wishlist", type: "link", active: false, selected: false, title: "Wishlist" },
                        ]
                    },
                    { title: "Email", type: "sub", active: false, children: [
                            {path: "/components/pages/email/mail-app", type: "link", active: false, selected: false, title: "Mail-App" },
                            {path: "/components/pages/email/mail-settings", type: "link", active: false, selected: false, title: "Mail-Settings" },
                        ]
                    },
                    {path: "/components/pages/empty", type: "link", active: false, selected: false, title: "Empty", },
                    {path: "/components/pages/faqs", type: "link", active: false, selected: false, title: "FAQ's" },
                    {title: "File Manager", type: "sub", menusub: true, active: false, selected: false, children: [
                            {path: "/components/pages/filemanager/file-manager", type: "link", active: false, selected: false, title: "File Manager" },
                        ],
                    },
                    {
                        title: "Invoice", type: "sub", menusub: true, active: false, selected: false, children: [
                            {path: "/components/pages/invoice/create-invoice", type: "link", active: false, selected: false, title: "Create Invoice" },
                            {path: "/components/pages/invoice/invoice-details", type: "link", active: false, selected: false, title: "Invoice Details" },
                            {path: "/components/pages/invoice/invoice-list", type: "link", active: false, selected: false, title: "Invoice List" },
                        ],
                    },
                    {path: "/components/pages/landing", type: "link", active: false, selected: false, title: "Landing" },
                    {path: "/components/pages/jobs-landing", type: "link", active: false, selected: false, title: "Jobs Landing" },
                    {path: "/components/pages/notifications", type: "link", active: false, selected: false, title: "Notifications" },
                    {path: "/components/pages/pricing", type: "link", active: false, selected: false, title: "Pricing" },
                    {path: "/components/pages/profile", type: "link", active: false, selected: false, title: "Profile" },
                    {path: "/components/pages/reviews", type: "link", active: false, selected: false, title: "Reviews" },
                    {path: "/components/pages/team", type: "link", active: false, selected: false, title: "Team", },
                    {path: "/components/pages/terms&conditions", type: "link", active: false, selected: false, title: "Terms & Conditions" },
                    {path: "/components/pages/timeline", type: "link", active: false, selected: false, title: "Timeline" },
                    {path: "/components/pages/todo-list", type: "link", active: false, selected: false, title: "To Do List" },

                ]

            },
            { icon: TaskIcon, title: "Task", badgetxt: badge1, type: "sub", active: false, selected: false,  children: [

                    {path: "/components/task/kanban-board", type: "link", active: false, selected: false, title: "Kanban Board" },
                    {path: "/components/task/list-view", type: "link", active: false, selected: false, title: "List View" },
                    {path: "/components/task/task-details", type: "link", active: false, selected: false, title: "Task Details" },
                ]
            },
            { icon: AuthenticationIcon, title: " Authentication", type: "sub", active: false, selected: false, children: [
                    {path: "/components/authentication/coming-soon", type: "link", active: false, selected: false, title: "Coming Soon" },

                    {
                        title: "Create Password", type: "sub", menusub: true, active: false, selected: false, children: [
                            {path: "/components/authentication/create-password/create-basic", type: "link", active: false, selected: false, title: "Basic" },
                            {path: "/components/authentication/create-password/create-cover", type: "link", active: false, selected: false, title: "Cover" },
                        ],
                    },
                    {
                        title: "Lock Screen", type: "sub", menusub: true, active: false, selected: false, children: [
                            {path: "/components/authentication/lock-screen/screen-basic", type: "link", active: false, selected: false, title: "Basic" },
                            {path: "/components/authentication/lock-screen/screen-cover", type: "link", active: false, selected: false, title: "Cover" },
                        ],
                    },
                    { title: "Reset Password", type: "sub", menusub: true, active: false, selected: false, children: [
                            {path: "/components/authentication/reset-password/reset-basic", type: "link", active: false, selected: false, title: "Basic" },
                            {path: "/components/authentication/reset-password/reset-cover", type: "link", active: false, selected: false, title: "Cover" },
                        ],
                    },
                    { title: "Sign In", type: "sub", menusub: true, active: false, selected: false, children: [
                            {path: "/components/authentication/sign-in/signin-basic", type: "link", active: false, selected: false, title: "Basic" },
                            {path: "/components/authentication/sign-in/signin-cover", type: "link", active: false, selected: false, title: "Cover" },
                        ],
                    },
                    { title: "Sign Up", type: "sub", menusub: true, active: false, selected: false, children: [
                            {path: "/components/authentication/sign-up/signup-basic", type: "link", active: false, selected: false, title: "Basic" },
                            {path: "/components/authentication/sign-up/signup-cover", type: "link", active: false, selected: false, title: "Cover" },
                        ],
                    },
                    {title: "Two Step Verification", type: "sub", menusub: true, active: false, selected: false, children: [
                            {path: "/components/authentication/two-step-verification/two-basic", type: "link", active: false, selected: false, title: "Basic" },
                            {path: "/components/authentication/two-step-verification/two-cover", type: "link", active: false, selected: false, title: "Cover" },
                        ],
                    },
                    {path: "/components/authentication/under-maintanance", type: "link", active: false, selected: false, title: "Under Maintainance" },
                ]
            },
            { icon: ErrorIcon, title: "Error", type: "sub", active: false, selected: false, children: [

                    {path: "/components/error/error-401", type: "link", active: false, selected: false, title: "401-Error" },
                    {path: "/components/error/error-404", type: "link", active: false, selected: false, title: "404-Error" },
                    {path: "/components/error/error-500", type: "link", active: false, selected: false, title: "500-Error" },
                ]
            },

        ]
    },
    {
        menutitle: "GENERAL", Items: [
            { title: "Ui Elements", icon: UiElementsIcon, type: "sub", active: false, selected: false, children: [
                    {path: "/components/ui-elements/alerts", type: "link", active: false, selected: false, title: "Alerts" },
                    {path: "/components/ui-elements/badge", type: "link", active: false, selected: false, title: "Badge" },
                    {path: "/components/ui-elements/breadcrumb", type: "link", active: false, selected: false, title: "Breadcrumb" },
                    {path: "/components/ui-elements/buttons", type: "link", active: false, selected: false, title: "Buttons" },
                    {path: "/components/ui-elements/button-group", type: "link", active: false, selected: false, title: "Button Group" },
                    {path: "/components/ui-elements/cards", type: "link", active: false, selected: false, title: "Cards" },
                    {path: "/components/ui-elements/dropdowns", type: "link", active: false, selected: false, title: "Dropdowns" },
                    {path: "/components/ui-elements/indicator", type: "link", active: false, selected: false, title: "Indicator" },
                    {path: "/components/ui-elements/images&figures", type: "link", active: false, selected: false, title: "Images & Figures" },
                    {path: "/components/ui-elements/list-group", type: "link", active: false, selected: false, title: "List Group" },
                    {path: "/components/ui-elements/navs&tabs", type: "link", active: false, selected: false, title: "Navs & Tabs" },
                    {path: "/components/ui-elements/object-fit", type: "link", active: false, selected: false, title: "Object Fit" },
                    {path: "/components/ui-elements/pagination", type: "link", active: false, selected: false, title: "Pagination" },
                    {path: "/components/ui-elements/popovers", type: "link", active: false, selected: false, title: "Popovers" },
                    {path: "/components/ui-elements/progress", type: "link", active: false, selected: false, title: "Progress" },
                    {path: "/components/ui-elements/spinners", type: "link", active: false, selected: false, title: "Spinners" },
                    {path: "/components/ui-elements/toasts", type: "link", active: false, selected: false, title: "Toasts" },
                    {path: "/components/ui-elements/tooltips", type: "link", active: false, selected: false, title: "Tooltips" },
                ],
            },
            { title: "Utilities", icon: Utilities, type: "sub", active: false, selected: false, children: [
                    { path: "/components/utilities/avatars", type: "link", active: false, selected: false, title: "Avatars" },
                    { path: "/components/utilities/borders", type: "link", active: false, selected: false, title: "Borders" },
                    { path: "/components/utilities/colors", type: "link", active: false, selected: false, title: "Colors" },
                    { path: "/components/utilities/columns", type: "link", active: false, selected: false, title: "Columns" },
                    { path: "/components/utilities/flex", type: "link", active: false, selected: false, title: "Flex" },
                    { path: "/components/utilities/grids", type: "link", active: false, selected: false, title: "Grids" },

                ],
            },
            { title: "Forms", icon: FormsIcon, type: "sub", active: false, selected: false, children: [
                    { title: "Form Elements", type: "sub", menusub: true, active: false, selected: false, children: [
                            { path: "/components/forms/formelements/inputs", type: "link", active: false, selected: false, title: "Inputs" },
                            { path: "/components/forms/formelements/checks&radios", type: "link", active: false, selected: false, title: "checks & Radios " },
                            { path: "/components/forms/formelements/input-group", type: "link", active: false, selected: false, title: "Input Groups" },
                            { path: "/components/forms/formelements/form-select", type: "link", active: false, selected: false, title: "Form select" },
                            { path: "/components/forms/formelements/range-slider", type: "link", active: false, selected: false, title: "Range Slider" },
                            { path: "/components/forms/formelements/file-uploads", type: "link", active: false, selected: false, title: "File Uploads" },
                            { path: "/components/forms/formelements/date-time-picker", type: "link", active: false, selected: false, title: "Date,Time Picker" },
                            { path: "/components/forms/formelements/color-picker", type: "link", active: false, selected: false, title: "Color Pickers" },
                        ],
                    },
                    { path: "/components/forms/form-layouts", type: "link", active: false, selected: false, title: "Form Layouts" },
                    { title: "Form Editors", type: "sub", menusub: true, active: false, selected: false, children: [
                            { path: "/components/forms/formeditors/quill-editor", type: "link", active: false, selected: false, title: "Quill Editors" },
                        ],
                    },
                    { path: "/components/forms/validation", type: "link", active: false, selected: false, title: "Validation" },
                    { path: "/components/forms/select2", type: "link", active: false, selected: false, title: "Select2" },
                ],
            },
            { title: "Advanced Ui", icon: AdvancedUiIcon, type: "sub", active: false, selected: false, children: [
                    { path: "/components/advanced-ui/accordions&collapse", type: "link", active: false, selected: false, title: "Accordions & collapse" },
                    { path: "/components/advanced-ui/draggable-cards", type: "link", active: false, selected: false, title: "Draggable Cards" },
                    { path: "/components/advanced-ui/modals&closes", type: "link", active: false, selected: false, title: "Modals & Closes" },
                    { path: "/components/advanced-ui/navbar", type: "link", active: false, selected: false, title: "Navbar" },
                    { path: "/components/advanced-ui/offcanvas", type: "link", active: false, selected: false, title: "Offcanvas" },
                    { path: "/components/advanced-ui/ratings", type: "link", active: false, selected: false, title: "Ratings" },
                    { path: "/components/advanced-ui/swiper-js", type: "link", active: false, selected: false, title: "Swiper JS" },
                ],
            },
            { path: "/components/widgets/widgets", title: "widgets", icon: WidgetsIcon, badgetxt:badge2, type: "link", active: false, selected: false },

        ]
    },
    {
        menutitle: "Web app", Items: [
            { title: "Apps", icon: AppsIcon, type: "sub", badgetxt:badge1, active: false, selected: false, children: [
                    { path: "/components/apps/full-calendar", type: "link", active: false, selected: false, title: "Full Calendar" },
                    { path: "/components/apps/gallery", type: "link", active: false, selected: false, title: "Gallery" },
                    { title: "Projects", type: "sub", menusub: true, active: false, selected: false, children: [
                            { path: "/components/apps/projects/project-list", type: "link", active: false, selected: false, title: "Project List" },
                            { path: "/components/apps/projects/project-overview", type: "link", active: false, selected: false, title: "Project Overview" },
                            { path: "/components/apps/projects/create-project", type: "link", active: false, selected: false, title: "Create Project" },
                        ],
                    },
                    {title: "Jobs", type: "sub", menusub: true, active: false, selected: false, children: [
                            { path: "/components/apps/jobs/job-details", type: "link", active: false, selected: false, title: "Job Details" },
                            { path: "/components/apps/jobs/search-company", type: "link", active: false, selected: false, title: "Search Company" },
                            { path: "/components/apps/jobs/search-jobs", type: "link", active: false, selected: false, title: "Search Jobs" },
                            { path: "/components/apps/jobs/job-post", type: "link", active: false, selected: false, title: " Job Post" },
                            { path: "/components/apps/jobs/jobs-list", type: "link", active: false, selected: false, title: " Jobs List" },
                            { path: "/components/apps/jobs/search-candidate", type: "link", active: false, selected: false, title: " Search Candidate" },
                            { path: "/components/apps/jobs/candidate-details", type: "link", active: false, selected: false, title: "Candidate details" },
                        ],
                    },
                    { title: "NFT", type: "sub", menusub: true, active: false, selected: false, children: [
                            { path: "/components/apps/nft/market-place", type: "link", active: false, selected: false, title: "Market Place" },
                            { path: "/components/apps/nft/nft-details", type: "link", active: false, selected: false, title: "NFT Details" },
                            { path: "/components/apps/nft/create-nft", type: "link", active: false, selected: false, title: "Create NFT" },
                            { path: "/components/apps/nft/wallet-integration", type: "link", active: false, selected: false, title: " Wallet Integration" },
                            { path: "/components/apps/nft/live-auction", type: "link", active: false, selected: false, title: "Live Auction" },
                        ],
                    },
                    { title: "CRM", type: "sub", menusub: true, active: false, selected: false, children: [
                            { path: "/components/apps/crm/contacts", type: "link", active: false, selected: false, title: "Contacts" },
                            { path: "/components/apps/crm/companies", type: "link", active: false, selected: false, title: "Companies" },
                            { path: "/components/apps/crm/deals", type: "link", active: false, selected: false, title: "Deals" },
                            { path: "/components/apps/crm/leads", type: "link", active: false, selected: false, title: " Leads" },
                        ],
                    },
                    { title: "Crypto", type: "sub", menusub: true, active: false, selected: false, children: [
                            { path: "/components/apps/crypto/transactions", type: "link", active: false, selected: false, title: "Transactions" },
                            { path: "/components/apps/crypto/currency-exchange", type: "link", active: false, selected: false, title: "Currency Exchanges" },
                            { path: "/components/apps/crypto/buy&sell", type: "link", active: false, selected: false, title: "Buy & Sell" },
                            { path: "/components/apps/crypto/market-cap", type: "link", active: false, selected: false, title: " Marketcap" },
                            { path: "/components/apps/crypto/wallet", type: "link", active: false, selected: false, title: "Wallet" },
                        ],
                    },

                ],
            },
            {
				icon: NestedmenuIcon, title: "Nested Menu", type: "sub", active: false, selected: false, children: [

					{ title: "Nested-1", path: "", type: "link", active: false, selected: false },

					{
						title: "Nested-2", type: "sub", active: false, selected: false, children: [

							{ type: "link", path: "", active: false, selected: false, title: "Nested-2-1" },
							{ type: "link", path: "", active: false, selected: false, title: "Nested-2-2" },
							{ type: "link", path: "", active: false, selected: false, title: "Nested-2-3" },
					
				]
			},
				]
			},
        ]
    },
    {
        menutitle: "TABLES & CHARTS", Items: [
            { title: "Tables", icon: TablesIcon, type: "sub", menutitle: "", badgetxt: badge4, active: false, selected: false, children: [
                    { path: "/components/tables/table", type: "link", active: false, selected: false, title: "Tables" },
                    { path: "/components/tables/gridjs-table", type: "link", active: false, selected: false, title: "Grid JS Tables" },
                    { path: "/components/tables/data-table", type: "link", active: false, selected: false, title: "Data Tables" },
                ],
            },

            { title: "Charts", icon: ChartsIcon, type: "sub", children: [
                    { title: "Apex Charts", type: "sub", menusub: true, active: false, selected: false, children: [

                            { path: "/components/charts/apexcharts/line-charts", type: "link", active: false, selected: false, title: "Line Charts" },
                            { path: "/components/charts/apexcharts/area-charts", type: "link", active: false, selected: false, title: "Area Charts " },
                            { path: "/components/charts/apexcharts/column-charts", type: "link", active: false, selected: false, title: "Column Charts" },
                            { path: "/components/charts/apexcharts/bar-charts", type: "link", active: false, selected: false, title: "Bar Charts" },
                            { path: "/components/charts/apexcharts/mixed-charts", type: "link", active: false, selected: false, title: "Mixed Charts" },
                            { path: "/components/charts/apexcharts/range-area-chart", type: "link", active: false, selected: false, title: "Range Area Charts" },
                            { path: "/components/charts/apexcharts/timeline-chart", type: "link", active: false, selected: false, title: "Timeline Charts" },
                            { path: "/components/charts/apexcharts/candlestick-chart", type: "link", active: false, selected: false, title: "CandleStick Charts" },
                            { path: "/components/charts/apexcharts/boxplot-chart", type: "link", active: false, selected: false, title: "Boxplot Charts" },
                            { path: "/components/charts/apexcharts/bubble-chart", type: "link", active: false, selected: false, title: "Bubble Charts" },
                            { path: "/components/charts/apexcharts/scatter-chart", type: "link", active: false, selected: false, title: "Scatter Charts" },
                            { path: "/components/charts/apexcharts/heatmap-chart", type: "link", active: false, selected: false, title: "Heatmap Charts" },
                            { path: "/components/charts/apexcharts/treemap-chart", type: "link", active: false, selected: false, title: "Treemap Charts" },
                            { path: "/components/charts/apexcharts/pie-chart", type: "link", active: false, selected: false, title: "Pie Charts" },
                            { path: "/components/charts/apexcharts/radialbar-chart", type: "link", active: false, selected: false, title: "Radialbar Charts" },
                            { path: "/components/charts/apexcharts/radar-chart", type: "link", active: false, selected: false, title: "Radar Charts" },
                            { path: "/components/charts/apexcharts/polararea-chart", type: "link", active: false, selected: false, title: "Polararea Charts" },
                        ],
                    },
                    { path: "/components/charts/chartjs", type: "link", active: false, selected: false, title: "ChartJS Charts" },
                    { path: "/components/charts/echart", type: "link", active: false, selected: false, title: "Echart Charts" },
                ],
            },
        ]
    },
    { menutitle: "MAPS & ICONS", Items: [
            { title: "Maps", icon: MapsIcon, type: "sub", background: "hor-rightangle", active: false, selected: false, children: [
                    { path: "/components/maps/leaflet-map", type: "link", active: false, selected: false, title: "Leaflet Maps" },
                ],
            },
            { path: "/components/icons/icon", icon: Icons, type: "link", active: false, selected: false, title: "Icons" },
        ],
    },

];
export default MenuItems
