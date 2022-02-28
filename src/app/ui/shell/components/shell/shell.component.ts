import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core"
import { FormControl } from "@angular/forms"

@Component({
  selector: "app-shell",
  templateUrl: "./shell.component.html",
  styleUrls: [ "./shell.component.css" ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit {
  public searchFormControl: FormControl = new FormControl()

  constructor() {
  }

  public ngOnInit(): void {
  }

  public onClickClearButton(): void {
    this.searchFormControl.reset()
  }
}
