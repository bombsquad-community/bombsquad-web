import { Component, Injectable, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { Subject } from 'rxjs';
import { SEOServiceService } from 'src/app/services/seoservice.service';

import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { PlayersService } from 'src/app/services/players.service';
@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  // For internationalization, the `$localize` function from
  // the `@angular/localize` package can be used.
  firstPageLabel = $localize`First page`;
  itemsPerPageLabel = $localize`Items per page:`;
  lastPageLabel = $localize`Last page`;

  // You can set labels to an arbitrary string too, or dynamically compute
  // it through other third-party internationalization libraries.
  nextPageLabel = 'Next page';
  previousPageLabel = 'Previous page';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return $localize`Page 1 of 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return $localize`Page ${page + 1} of ${amountPages}`;
  }
}


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  value = '';
  totalRows = 0;
  pageSize = 10;
  currentPage = 0;
  pageSizeOptions: number[] = [ 10, 50, 100];
  players:any;
  isLoading:boolean = true;
  constructor(private playersService:PlayersService,private router:Router,private _seoService:SEOServiceService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
        this.loadData();

        var rt = this.getChild(this.activatedRoute)

        rt.data.subscribe((data: any) => {

          this._seoService.updateTitle(data.title);
          this._seoService.updateOgUrl(data.ogUrl);
          //Updating Description tag dynamically with title
          this._seoService.updateDescription(data.description)
        });
  }

  getChild(activatedRoute: ActivatedRoute):any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

  loadData(){
    this.playersService.getPlayers(this.value).subscribe((data:any)=>{
      this.isLoading = false;
      this.players=[].concat(data);
    })
  }

  getdate(date:string) {
    return new Date(date);
  }

  pageChanged(event: PageEvent) {

    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.loadData();
  }

  valueChange(event:any){
    this.loadData();
  }

  resetSearch(){
    this.value="";
    this.loadData()
  }

}

const routes: Routes = [{path: '', component: PlayersComponent}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    FormsModule
    ],
  exports: [PlayersComponent],
  declarations: [PlayersComponent],
  providers: []
})
export class PlayersModule {
}
