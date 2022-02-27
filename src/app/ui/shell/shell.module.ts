import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { ShellComponent } from "./components/shell/shell.component"

@NgModule({
  declarations: [
    ShellComponent
  ],
  exports: [
    ShellComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShellModule {
}
