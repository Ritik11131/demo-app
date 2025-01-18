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
            id:1,
            count: 123456,
            status: 'Total',
            color: 'text-blue-500',
            avatarUrl: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/main-avatar.png'
        },
        {
            id:2,
            count: 123,
            status: 'Idle',
            color: 'text-yellow-500',
            avatarUrl: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/main-avatar.png'
        },
        {
            id:3,
            count: 233,
            status: 'Stopped',
            color: 'text-red-500',
            avatarUrl: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/main-avatar.png'
        },
        {
            id:4,
            count: 4567,
            status: 'Running',
            color: 'text-green-500',
            avatarUrl: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/main-avatar.png'
        },
        {
            id:5,
            count: 234,
            status: 'Offline',
            color: 'text-gray-500',
            avatarUrl: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/main-avatar.png'
        },
        {
            id:6,
            count: 263,
            status: 'Never Connected',
            color: '',
            avatarUrl: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/main-avatar.png'
        }
    ];