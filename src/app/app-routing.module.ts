import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { EditPlaceDialogComponent } from "./ui/shared/components/edit-place-dialog/edit-place-dialog.component"

const routes: Routes = [
  {
    path: "create",
    component: EditPlaceDialogComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
