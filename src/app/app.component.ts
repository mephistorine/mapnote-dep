import { AfterViewInit, Component } from "@angular/core"
import { LatLng, TileLayer } from "leaflet"
import { LeafletMap } from "./lib"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.css" ]
})
export class AppComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    const map = new LeafletMap("map-container", {
      layers: [
        new TileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"
        })
      ],
      center: new LatLng(45.040034, 38.975828),
      zoom: 13
    })
  }
}
