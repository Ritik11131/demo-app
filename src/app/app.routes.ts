import { Routes } from '@angular/router';
// import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'main',
        loadChildren: () => import('./pages/main/main.routes').then(m => m.mainRoutes)
    },
    { 
        path: '', 
        redirectTo: '/main/overview', 
        pathMatch: 'full' 
    },
];