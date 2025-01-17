import { IstatusCards } from "../interfaces/dashboard";

export const sidebarNavigations = [
    { icon: 'pi pi-home', title: 'Overview', href: '/main/overview' },
    { icon: 'pi pi-th-large', title: 'Dashboard', href: '/main/dashboard' },
    { icon: 'pi pi-map', title: 'Tracking', href: '/main/tracking' },
    { icon: 'pi pi-car', title: 'Devices', href: '/main/devices' },
    { icon: 'pi pi-users', title: 'Users', href: '/main/users' },
    { icon: 'pi pi-book', title: 'Reports', href: '/main/reports' }
];

export const moreSidebarNavigations = [{ icon: 'pi pi-cog', title: 'Settings' }];


export const statusCards: IstatusCards[] = [
        {
            count: 123456,
            status: 'Total',
            color: 'info',
            avatarUrl: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/main-avatar.png'
        },
        {
            count: 123,
            status: 'Idle',
            color: 'warn',
            avatarUrl: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/main-avatar.png'
        },
        {
            count: 233,
            status: 'Stopped',
            color: 'danger',
            avatarUrl: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/main-avatar.png'
        },
        {
            count: 4567,
            status: 'Running',
            color: 'success',
            avatarUrl: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/main-avatar.png'
        },
        {
            count: 234,
            status: 'Offline',
            color: 'contrast',
            avatarUrl: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/main-avatar.png'
        },
        {
            count: 263,
            status: 'Never Conn.',
            color: 'secondary',
            avatarUrl: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/main-avatar.png'
        }
    ];