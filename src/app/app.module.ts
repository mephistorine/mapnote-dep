import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { EditPlaceDialogModule } from "./ui/shared/components/edit-place-dialog/edit-place-dialog.module"
import { ShellModule } from "./ui/shell/shell.module"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShellModule,
    EditPlaceDialogModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
