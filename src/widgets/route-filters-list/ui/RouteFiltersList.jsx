import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import clsx from 'clsx';

import { RouteFilters } from '@/features/route-filters';
import { setFilterActive } from '@/features/route-form';

import { setActiveMenu } from '@/entities/mobile-menu';

import { Button, CloseIcon } from '@/shared/ui';

import s from './route-filters-list.module.scss';

export const RouteFiltersList = () => {
	const dispatch = useDispatch();

	const { activeMenu } = useSelector(store => store.menu);
	const { filterActive } = useSelector(store => store.routeForm);
	const { activeMenu: mobileActiveMenu } = useSelector(store => store.mobileMenu);

	const {
		routeInfo: { routeIsBuilded }
	} = useSelector(store => store.map);

	const handleCloseFilters = () => {
		dispatch(setFilterActive(false));
		dispatch(setActiveMenu(null));
	};

	useEffect(() => {
		if (routeIsBuilded) {
			handleCloseFilters();
		}
	}, [routeIsBuilded]);

	const routeFiltersClass = clsx(s.routeFilters, {
		[s.ready]: activeMenu === 'route',
		[s.active]: filterActive || mobileActiveMenu === 'filters'
	});

	return (
		<div className={routeFiltersClass}>
			<div className={s.routeFiltersTop}>
				<h5>Фильтр</h5>
				<Button onClick={() => handleCloseFilters()}>
					<CloseIcon />
				</Button>
			</div>
			<RouteFilters />
		</div>
	);
};
