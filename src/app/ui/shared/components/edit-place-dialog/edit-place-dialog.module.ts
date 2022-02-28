import { CommonModule } from "@angular/common"
import { HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"
import { ReactiveFormsModule } from "@angular/forms"
import { EditPlaceDialogComponent } from "./edit-place-dialog.component"

@NgModule({
  declarations: [ EditPlaceDialogComponent ],
  exports: [ EditPlaceDialogComponent ],
  imports: [ CommonModule, ReactiveFormsModule, HttpClientModule ]
})
export class EditPlaceDialogModule {
}
