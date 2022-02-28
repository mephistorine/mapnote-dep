import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { ReactiveFormsModule } from "@angular/forms"
import { ShellComponent } from "./components/shell/shell.component"

@NgModule({
  declarations: [
    ShellComponent
  ],
  exports: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ShellModule {
}
