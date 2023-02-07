import {Component, OnInit} from '@angular/core';
import {Composer} from "./api/composers/composer";
import {ComposersService} from "./api/composers/composers.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'MusicApp';

}
