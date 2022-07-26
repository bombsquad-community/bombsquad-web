import { Component, Injectable, OnInit } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, mergeMap, Subject } from 'rxjs';
import { SEOServiceService } from 'src/app/services/seoservice.service';
import { ServersService } from 'src/app/services/servers.service';

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
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  value = '';
  totalRows = 0;
  pageSize = 10;
  currentPage = 0;
  pageSizeOptions: number[] = [ 10, 50, 100];
  servers:any;

  constructor(private serversService:ServersService,private router:Router,private _seoService:SEOServiceService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
        this.loadData();

        var rt = this.getChild(this.activatedRoute)

        rt.data.subscribe((data: any) => {
          console.log(data);
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
    this.serversService.getServers(this.pageSize,this.currentPage,this.value).subscribe(data=>{
      console.log(data);
      this.servers=data;
    })
  }

  pageChanged(event: PageEvent) {
    console.log({ event });
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
