import {Component, OnInit} from '@angular/core';
import {Composer} from "../api/composers/composer";
import {ComposersService} from "../api/composers/composers.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public composers: Composer[];

  constructor(private composerService: ComposersService){}
  ngOnInit(){
    this.getComposers();
  }

  public getComposers():void{
    this.composerService.getComposers().subscribe((
      response: Composer[])=>{
      this.composers = response;
      },
      (error: HttpErrorResponse) => {
      //alert(error.message);
      }
    );
  }
}
