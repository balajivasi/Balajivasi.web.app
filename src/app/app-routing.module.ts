import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MyTechStackComponent } from './my-tech-stack/my-tech-stack.component';
import { ContactComponent } from './contact/contact.component';
import { UploadTechComponent } from './Admin/upload-tech/upload-tech.component';

const routes: Routes = [
  { path: '', component: AboutMeComponent },
  { path: 'Portfolio', component: PortfolioComponent },
  { path: 'MyTechStack', component: MyTechStackComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Admin/tech', component: UploadTechComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
