import { HttpClient } from "@angular/common/http"
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core"
import { FormControl, FormGroup } from "@angular/forms"
import { Router } from "@angular/router"
import { catchError, EMPTY, finalize, take, tap } from "rxjs"
import { Place } from "../../../../domain/place"
import { generateRandomId } from "../../../../lib"
import { API_URL } from "../../constants"

@Component({
  selector: "app-edit-place-dialog",
  templateUrl: "./edit-place-dialog.component.html",
  styleUrls: [ "./edit-place-dialog.component.css" ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditPlaceDialogComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    name: new FormControl(),
    rating: new FormControl(5),
    description: new FormControl(),
    tags: new FormControl(),
    photos: new FormControl([])
  })

  constructor(private router: Router,
              private httpClient: HttpClient) {
  }

  public ngOnInit(): void {
  }

  public onClickSaveButton(): void {
    const formValue = this.form.value

    const place: Place = {
      id: generateRandomId(),
      name: formValue.name,
      rating: formValue.rating,
      description: formValue.description,
      tags: [],
      photos: []
    }

    this.httpClient.post(`${ API_URL }/places`, place).pipe(
      take(1),
      tap(() => {
        console.log("Успешно создано")
      }),
      catchError((error) => {
        console.error("Создание не удалось", error)
        return EMPTY
      }),
      finalize(() => this.close())
    ).subscribe()
  }

  public onClickCancelButton(): void {
    this.close()
  }

  private close(): void {
    this.router.navigateByUrl("/")
  }
}
