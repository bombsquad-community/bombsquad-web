"use strict";(self.webpackChunkballistica_web=self.webpackChunkballistica_web||[]).push([[877],{877:(_,p,o)=>{o.r(p),o.d(p,{MyCustomPaginatorIntl:()=>T,PlayersComponent:()=>P,PlayersModule:()=>U});var l=o(3075),g=o(6696),C=o(7579),u=o(7531),h=o(773),c=o(7322),m=o(5245),v=o(9062),d=o(9808),t=o(5e3),f=o(520);new f.WM({"Content-Type":"application/json"});let y=(()=>{class n{constructor(e){this.http=e}getPlayers(e){return(!e||""==e)&&(e="Andro"),this.http.get("https://api2.bombsquad.ga/player",{params:{key:e}})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(f.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var b=o(6627);function M(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.resetSearch())}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}function Z(n,i){1&n&&(t.TgZ(0,"div",11),t._UZ(1,"mat-spinner"),t.qZA())}function O(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.hij("",e,", ")}}function x(n,i){if(1&n&&(t.TgZ(0,"div",12)(1,"div",13)(2,"div",14)(3,"h5",15),t._uU(4),t.qZA(),t.TgZ(5,"label"),t._uU(6,"Name:"),t.qZA(),t._uU(7),t._UZ(8,"br"),t.TgZ(9,"label"),t._uU(10,"Pbid: "),t.qZA(),t._uU(11),t.TgZ(12,"label"),t._uU(13,"Character:"),t.qZA(),t._uU(14),t._UZ(15,"br"),t.TgZ(16,"label"),t._uU(17,"Created On:"),t.qZA(),t._uU(18),t._UZ(19,"br"),t.TgZ(20,"label"),t._uU(21,"Accounts: "),t.qZA(),t.YNc(22,O,2,1,"span",16),t.qZA()()()),2&n){const e=i.$implicit,a=t.oxw();t.xp6(4),t.Oqu(e.accounts[0]),t.xp6(3),t.hij(" ",e.names.toString()," "),t.xp6(4),t.hij(" ",e.pbid," ,"),t.xp6(3),t.hij(" ",e.character," "),t.xp6(4),t.hij(" ",a.getdate(e.createdOn)," "),t.xp6(4),t.Q6J("ngForOf",e.accounts)}}let T=(()=>{class n{constructor(){this.changes=new C.x,this.firstPageLabel=$localize`First page`,this.itemsPerPageLabel=$localize`Items per page:`,this.lastPageLabel=$localize`Last page`,this.nextPageLabel="Next page",this.previousPageLabel="Previous page"}getRangeLabel(e,a,r){if(0===r)return $localize`Page 1 of 1`;const s=Math.ceil(r/a);return $localize`Page ${e+1} of ${s}`}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),P=(()=>{class n{constructor(e,a,r,s){this.playersService=e,this.router=a,this._seoService=r,this.activatedRoute=s,this.value="",this.totalRows=0,this.pageSize=10,this.currentPage=0,this.pageSizeOptions=[10,50,100],this.isLoading=!0}ngOnInit(){this.loadData(),this.getChild(this.activatedRoute).data.subscribe(a=>{this._seoService.updateTitle(a.title),this._seoService.updateOgUrl(a.ogUrl),this._seoService.updateDescription(a.description)})}getChild(e){return e.firstChild?this.getChild(e.firstChild):e}loadData(){this.playersService.getPlayers(this.value).subscribe(e=>{this.isLoading=!1,this.players=[].concat(e)})}getdate(e){return new Date(e)}pageChanged(e){this.pageSize=e.pageSize,this.currentPage=e.pageIndex,this.loadData()}valueChange(e){this.loadData()}resetSearch(){this.value="",this.loadData()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(y),t.Y36(g.F0),t.Y36(b.S),t.Y36(g.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-players"]],decls:16,vars:4,consts:[[1,"background"],[1,"heading"],[1,"about-page"],[1,"search-box"],["appearance","fill",1,"example-form-field"],["matInput","","type","text",3,"ngModel","ngModelChange"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"mods-list"],["class","loading",4,"ngIf"],["class","mod",4,"ngFor","ngForOf"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],[1,"loading"],[1,"mod"],[1,"card"],[1,"card-body"],[1,"card-title",2,"font-weight","550"],[4,"ngFor","ngForOf"]],template:function(e,a){1&e&&(t.TgZ(0,"section")(1,"div",0)(2,"div",1)(3,"span"),t._uU(4,"Players Account List"),t.qZA()(),t.TgZ(5,"div",2),t._uU(6," Fetch BombSquad Players account details from device id , pb-id "),t.qZA(),t.TgZ(7,"div",3)(8,"mat-form-field",4)(9,"mat-label"),t._uU(10,"Search Players"),t.qZA(),t.TgZ(11,"input",5),t.NdJ("ngModelChange",function(s){return a.value=s})("ngModelChange",function(s){return a.valueChange(s)}),t.qZA(),t.YNc(12,M,3,0,"button",6),t.qZA()(),t.TgZ(13,"div",7),t.YNc(14,Z,2,0,"div",8),t.YNc(15,x,23,6,"div",9),t.qZA()()()),2&e&&(t.xp6(11),t.Q6J("ngModel",a.value),t.xp6(1),t.Q6J("ngIf",a.value),t.xp6(2),t.Q6J("ngIf",a.isLoading),t.xp6(1),t.Q6J("ngForOf",a.players))},dependencies:[d.sg,d.O5,h.Ou,c.KE,c.hX,c.R9,u.Nt,m.Hw,l.Fj,l.JJ,l.On],styles:[".background[_ngcontent-%COMP%]{background-color:#000;min-height:65vh}.heading[_ngcontent-%COMP%]{color:#fff;text-align:center;font-size:2em;padding-top:20px}.mat-card[_ngcontent-%COMP%]{background-color:#c9c9c9!important}[_nghost-%COMP%]     .mat-form-field-underline{background-color:#fff!important;border:1px solid}[_nghost-%COMP%]     .mat-form-field-label{color:#fff!important}.search-box[_ngcontent-%COMP%]{color:#f5f5f5;margin:auto;padding-top:2em;width:40%}.about-page[_ngcontent-%COMP%]{width:40%;margin:auto;color:#a09e9e;padding-top:20px;font-size:small}.about-page[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.card-body[_ngcontent-%COMP%]{padding:1rem 1.6rem}.mods-list[_ngcontent-%COMP%]{width:43%;margin:auto}.mods-list[_ngcontent-%COMP%]   .mod[_ngcontent-%COMP%]{padding-bottom:2em;cursor:pointer}.loading[_ngcontent-%COMP%]{min-height:51vh;align-items:center;justify-content:center;display:flex}mat-paginator[_ngcontent-%COMP%]{background-color:#ffffff1a;color:#fff}[_nghost-%COMP%]     .mat-select-value{color:#ebe6e6e7!important}@media only screen and (max-width: 768px){.mods-list[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]{width:80%}}"]}),n})();const S=[{path:"",component:P}];let U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,g.Bz.forChild(S),h.Cq,c.lN,u.c,v.TU,m.Ps,l.u5]}),n})()}}]);