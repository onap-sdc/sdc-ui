import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { UiComponentsModule } from './ui-components/ui-components.module';
import { SdcButtonComponent } from './ui-components/button/button.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ShowCaseComponent } from './showcase/showcase.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'showcase', pathMatch: 'full' },
  { path: 'showcase', component: ShowCaseComponent },
  { path: 'about', component: AboutComponent },
  { path: 'github', component: RepoBrowserComponent,
    children: [
      { path: '', component: RepoListComponent },
      { path: ':org', component: RepoListComponent,
        children: [
          { path: '', component: RepoDetailComponent },
          { path: ':repo', component: RepoDetailComponent }
        ]
      }]
  }
];

