import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Partials
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';

// Views
import { HomeComponent } from './views/home/home.component';
import { HrAppComponent } from './views/hr-app/hr-app.component';
import { GoComponent } from './views/go/go.component';
import { App2goComponent } from './views/app2go/app2go.component';
import { BlogComponent } from './views/blog/blog.component';
import { ContactComponent } from './views/contact/contact.component';
import { FaqComponent } from './views/faq/faq.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: '',        component: HomeComponent },
  { path: 'hr',      component: HrAppComponent },
  { path: 'go',      component: GoComponent },
  { path: 'app2go',  component: App2goComponent },
  { path: 'blog',    component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq',     component: FaqComponent },
  { path: '**',      component: PageNotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
