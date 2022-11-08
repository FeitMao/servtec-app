import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login-admin',
    loadChildren: () => import('./login/login-admin/login-admin.module').then( m => m.LoginAdminPageModule)
  },
  {
    path: 'login-hardware',
    loadChildren: () => import('./login/login-hardware/login-hardware.module').then( m => m.LoginHardwarePageModule)
  },
  {
    path: 'login-software',
    loadChildren: () => import('./login/login-software/login-software.module').then( m => m.LoginSoftwarePageModule)
  },
  {
    path: 'login-ventas',
    loadChildren: () => import('./login/login-ventas/login-ventas.module').then( m => m.LoginVentasPageModule)
  },
  {
    path: 'presupuestos',
    loadChildren: () => import('./servicios/presupuestos/presupuestos.module').then( m => m.PresupuestosPageModule)
  },
  {
    path: 'aprobados',
    loadChildren: () => import('./servicios/aprobados/aprobados.module').then( m => m.AprobadosPageModule)
  },
  {
    path: 'rechazados',
    loadChildren: () => import('./servicios/rechazados/rechazados.module').then( m => m.RechazadosPageModule)
  },
  {
    path: 'entregados',
    loadChildren: () => import('./servicios/entregados/entregados.module').then( m => m.EntregadosPageModule)
  },
  {
    path: 'control-ot',
    loadChildren: () => import('./ot/control-ot/control-ot.module').then( m => m.ControlOtPageModule)
  },
  {
    path: 'ot-presupuestos',
    loadChildren: () => import('./hardware/ot-presupuestos/ot-presupuestos.module').then( m => m.OtPresupuestosPageModule)
  },
  {
    path: 'ot-aprobados',
    loadChildren: () => import('./hardware/ot-aprobados/ot-aprobados.module').then( m => m.OtAprobadosPageModule)
  },
  {
    path: 'repuestos',
    loadChildren: () => import('./hardware/repuestos/repuestos.module').then( m => m.RepuestosPageModule)
  },
  {
    path: 'ot-presupuestos',
    loadChildren: () => import('./software/ot-presupuestos/ot-presupuestos.module').then( m => m.OtPresupuestosPageModule)
  },
  {
    path: 'ot-aprobados',
    loadChildren: () => import('./software/ot-aprobados/ot-aprobados.module').then( m => m.OtAprobadosPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./software/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'sscc',
    loadChildren: () => import('./users/sscc/sscc.module').then( m => m.SsccPageModule)
  },
  {
    path: 'tec-hardware',
    loadChildren: () => import('./users/tec-hardware/tec-hardware.module').then( m => m.TecHardwarePageModule)
  },
  {
    path: 'tec-software',
    loadChildren: () => import('./users/tec-software/tec-software.module').then( m => m.TecSoftwarePageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./users/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'ventas',
    loadChildren: () => import('./users/ventas/ventas.module').then( m => m.VentasPageModule)
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./servicios/ingreso/ingreso.module').then( m => m.IngresoPageModule)
  },
  {
    path: 'entrega',
    loadChildren: () => import('./servicios/entrega/entrega.module').then( m => m.EntregaPageModule)
  },
  {
    path: 'natural',
    loadChildren: () => import('./clientes/natural/natural.module').then( m => m.NaturalPageModule)
  },
  {
    path: 'preferencial',
    loadChildren: () => import('./clientes/preferencial/preferencial.module').then( m => m.PreferencialPageModule)
  },
  {
    path: 'empresa',
    loadChildren: () => import('./clientes/empresa/empresa.module').then( m => m.EmpresaPageModule)
  },
  {
    path: 'convenios',
    loadChildren: () => import('./clientes/convenios/convenios.module').then( m => m.ConveniosPageModule)
  },
  {
    path: 'tipo-cliente',
    loadChildren: () => import('./clientes/tipo-cliente/tipo-cliente.module').then( m => m.TipoClientePageModule)
  },
  {
    path: 'vista-ot',
    loadChildren: () => import('./ot/vista-ot/vista-ot.module').then( m => m.VistaOtPageModule)
  },
  {
    path: 'entrega-ot',
    loadChildren: () => import('./ot/entrega-ot/entrega-ot.module').then( m => m.EntregaOtPageModule)
  },
  {
    path: 'register-ss',
    loadChildren: () => import('./register/register-ss/register-ss.module').then( m => m.RegisterSSPageModule)
  },
  {
    path: 'home-admin',
    loadChildren: () => import('./pagesPP/home-admin/home-admin.module').then( m => m.HomeAdminPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
