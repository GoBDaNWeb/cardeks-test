import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { handleOpenModal as openDownloadModal } from '@/features/download-modal';
import { handleOpenModal as openMailModal } from '@/features/mail-modal';

import { setChangeRoute, setRouteBuilded } from '@/entities/map';
import { handleOpenModal } from '@/entities/new-route-modal';

import { handleCopyLink } from '@/shared/lib';
import { Button, CloseIcon, DownloadIcon, LinkIcon, MailIcon, PrintIcon } from '@/shared/ui';

import s from './route-info-short.module.scss';

export const RouteInfoShort = ({ setDetail, handleClose }) => {
	const dispatch = useDispatch();

	const {
		routeInfo: { routeAddresses, routeTime, routeLength }
	} = useSelector(state => state.map);

	const handleOpenNewRouteModal = () => {
		dispatch(handleOpenModal(true));
	};
	const handeOpenDownloadModal = () => {
		dispatch(openDownloadModal(true));
	};
	const handeOpenMailModal = () => {
		dispatch(openMailModal(true));
	};
	const handleChangeRoute = () => {
		dispatch(setRouteBuilded(false));
		dispatch(setChangeRoute(true));
	};

	return (
		<div className={s.routeInfoShort}>
			<div className={s.routeInfoTop}>
				<p className={s.title}>
					{routeAddresses.map((address, index) => (
						<Fragment key={address}>
							{address} {index === routeAddresses.length - 1 ? '' : ' - '}
						</Fragment>
					))}
				</p>
				<div className={s.btns}>
					<Button onClick={() => handleChangeRoute()}>Изменить опции</Button>
					<Button onClick={() => handleOpenNewRouteModal()}>Новый маршрут</Button>
				</div>
				<Button className={s.closeBtn} onClick={handleClose}>
					<CloseIcon />
				</Button>
			</div>
			<div className={s.routeInfoContent}>
				<p className={s.title}>Основной маршрут</p>
				<div className={s.routeInfoList}>
					<p>{routeTime}</p>
					<p>{routeLength}</p>
				</div>
				<div className={s.routeInfoFeatures}>
					<div className={s.btns}>
						<Button onClick={() => handeOpenDownloadModal()}>
							<DownloadIcon />
						</Button>
						<Button onClick={() => handleCopyLink(routeAddresses)}>
							<LinkIcon />
						</Button>
						<Button>
							<PrintIcon />
						</Button>
						<Button onClick={() => handeOpenMailModal()}>
							<MailIcon />
						</Button>
					</div>
					<Button className={s.aboutBtn} onClick={setDetail}>
						Подробнее
					</Button>
				</div>
			</div>
		</div>
	);
};
