import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'tenis-match',
        loadChildren: () => import('./tenis-match/tenis-match.module').then(m => m.Tenis1TenisMatchModule)
      },
      {
        path: 'user-extra',
        loadChildren: () => import('./user-extra/user-extra.module').then(m => m.Tenis1UserExtraModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class Tenis1EntityModule {}
