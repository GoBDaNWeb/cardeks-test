// import { RouteList } from '@/widgets/route-list';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ChangeLayer } from '@/widgets/change-layer';
import { Filters } from '@/widgets/filters';
import { FiltersList } from '@/widgets/filters-list';
import { MenuList } from '@/widgets/menu-list';
import { MobileMenu } from '@/widgets/mobile-menu';
import { ModalsMenu } from '@/widgets/modals-menu';
import { ObjectsList } from '@/widgets/objects-list';
import { RouteBuild } from '@/widgets/route-build';
import { RouteFiltersList } from '@/widgets/route-filters-list';
import { RouteInfo } from '@/widgets/route-info';
import { Search } from '@/widgets/search';
import { SettingsMapMenu } from '@/widgets/settings-map-menu';
import { Zoom } from '@/widgets/zoom';

import { DownloadModal } from '@/features/download-modal';
import { MailModal } from '@/features/mail-modal';
import { ReviewModal } from '@/features/review-modal';

import { GuideModal } from '@/entities/guide-modal';
import { NewRouteModal } from '@/entities/new-route-modal';

import s from './layout.module.scss';

export const Layout = ({ children }) => {
	return (
		<div className={s.layout}>
			{children}

			<div className={s.widgets}>
				<MobileMenu />
				<ReviewModal />
				<NewRouteModal />
				<GuideModal />
				<DownloadModal />
				<MailModal />
				<Search />
				<Filters />
				<FiltersList />
				<Zoom />
				<ChangeLayer />
				<ObjectsList />
				<RouteBuild />
				<RouteFiltersList />
				<SettingsMapMenu />
				<RouteInfo />
				<MenuList />
				<ModalsMenu />
				<ToastContainer />
			</div>
		</div>
	);
};
