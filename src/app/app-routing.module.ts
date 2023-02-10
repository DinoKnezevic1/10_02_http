import { MouseComponent } from './components/mouse/mouse.component';
import { CatsComponent } from './components/cats/cats.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Dogs',
    component: DogsComponent,
  },
  {
    path: 'Cats',
    component: CatsComponent,
  },
  {
    path: 'Mouse',
    component: MouseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
