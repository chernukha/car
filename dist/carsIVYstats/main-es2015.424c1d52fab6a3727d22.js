(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(t,n,e){t.exports=e("zUnb")},zUnb:function(t,n,e){"use strict";e.r(n);var a=e("fXoL"),i=e("jhN1"),o=e("3Pt+");let r=(()=>{class t{constructor(){this.carsList=[]}get cars(){return this.carsList}changeCar(t,n){this.carsList[t]=n}oneCar(t){return this.carsList[t]}pushCar(t){this.carsList.push(t)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=a.wb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=e("ofXK");function c(t,n){if(1&t){const t=a.Eb();a.Db(0,"tr",5),a.Jb("click",(function(){a.Mb(t);const e=n.index;return a.Kb().chooseCar(e)})),a.Db(1,"td"),a.Pb(2),a.Cb(),a.Db(3,"td"),a.Pb(4),a.Cb(),a.Db(5,"td"),a.Pb(6),a.Cb(),a.Db(7,"td"),a.Pb(8),a.Cb(),a.Db(9,"td"),a.Pb(10),a.Cb(),a.Cb()}if(2&t){const t=n.$implicit;a.qb(2),a.Qb(t.vid),a.qb(2),a.Qb(t.name),a.qb(2),a.Qb(t.model),a.qb(2),a.Qb(t.year),a.qb(2),a.Qb(t.type)}}function s(t,n){1&t&&(a.Db(0,"tr",6),a.Db(1,"td",7),a.Pb(2,"There are no cars yet"),a.Cb(),a.Cb())}let l=(()=>{class t{constructor(t){this.carsBankServie=t,this.formOpen=new a.j,this.chosenCar=new a.j,this.cars=[]}ngOnInit(){this.cars=this.carsBankServie.cars}chooseCar(t){this.chosenCar.emit(t)}showForm(){this.formOpen.emit(!0)}}return t.\u0275fac=function(n){return new(n||t)(a.Ab(r))},t.\u0275cmp=a.ub({type:t,selectors:[["app-list"]],outputs:{formOpen:"formOpen",chosenCar:"chosenCar"},decls:17,vars:2,consts:[[1,"form-control-static"],[1,"btn","btn-default","show-form",3,"click"],[1,"table","table-bordered","table-striped"],["class","car-item",3,"click",4,"ngFor","ngForOf"],["class","alert alert-info no-car",4,"ngIf"],[1,"car-item",3,"click"],[1,"alert","alert-info","no-car"],["colspan","5",1,"text-center"]],template:function(t,n){1&t&&(a.Db(0,"div",0),a.Db(1,"button",1),a.Jb("click",(function(){return n.showForm()})),a.Pb(2,"Add"),a.Cb(),a.Cb(),a.Db(3,"table",2),a.Db(4,"tr"),a.Db(5,"th"),a.Pb(6,"Vehicle ID"),a.Cb(),a.Db(7,"th"),a.Pb(8,"Name"),a.Cb(),a.Db(9,"th"),a.Pb(10,"Model"),a.Cb(),a.Db(11,"th"),a.Pb(12,"Year"),a.Cb(),a.Db(13,"th"),a.Pb(14,"Type"),a.Cb(),a.Cb(),a.Ob(15,c,11,5,"tr",3),a.Ob(16,s,3,0,"tr",4),a.Cb()),2&t&&(a.qb(15),a.Lb("ngForOf",n.cars),a.qb(1),a.Lb("ngIf",!n.cars.length))},directives:[b.c,b.d],styles:[""]}),t})();class d{constructor(t="",n="",e="",a=null,i=""){this.vid=t.toLocaleUpperCase(),this.name=n,this.model=e,this.year=a,this.type=i}get additional(){return{vid:this.vid,year:this.year}}get main(){return{name:this.name,model:this.model,type:this.type}}}function u(t,n){1&t&&(a.Db(0,"div",15),a.Pb(1," Wrong name "),a.Cb())}function f(t,n){1&t&&(a.Db(0,"div",15),a.Pb(1," Wrong model "),a.Cb())}function m(t,n){if(1&t&&(a.Db(0,"option",16),a.Pb(1),a.Cb()),2&t){const t=n.$implicit;a.Lb("value",t),a.qb(1),a.Qb(t)}}function h(t,n){1&t&&(a.Db(0,"div",15),a.Pb(1," Wrong type "),a.Cb())}function p(t,n){if(1&t&&(a.Db(0,"form",8),a.Db(1,"div",9),a.Db(2,"label"),a.Pb(3,"Name"),a.Cb(),a.Bb(4,"input",10),a.Ob(5,u,2,0,"div",11),a.Cb(),a.Db(6,"div",9),a.Db(7,"label"),a.Pb(8,"Model"),a.Cb(),a.Bb(9,"input",12),a.Ob(10,f,2,0,"div",11),a.Cb(),a.Db(11,"div",9),a.Db(12,"label"),a.Pb(13,"Type"),a.Cb(),a.Db(14,"select",13),a.Ob(15,m,2,2,"option",14),a.Cb(),a.Ob(16,h,2,0,"div",11),a.Cb(),a.Cb()),2&t){const t=a.Kb();a.Lb("formGroup",t.mainTab),a.qb(5),a.Lb("ngIf",t.mainTab.controls.name.invalid&&t.mainTab.controls.name.touched),a.qb(5),a.Lb("ngIf",t.mainTab.controls.model.invalid&&t.mainTab.controls.model.touched),a.qb(5),a.Lb("ngForOf",t.carTypes),a.qb(1),a.Lb("ngIf",t.mainTab.controls.type.invalid&&t.mainTab.controls.type.touched)}}function C(t,n){1&t&&(a.Db(0,"div",15),a.Pb(1," Wrong vehicle ID "),a.Cb())}function v(t,n){1&t&&(a.Db(0,"div",15),a.Pb(1," Wrong year "),a.Cb())}function D(t,n){if(1&t&&(a.Db(0,"form",8),a.Db(1,"div",9),a.Db(2,"label"),a.Pb(3,"Vehicle ID"),a.Cb(),a.Bb(4,"input",17),a.Ob(5,C,2,0,"div",11),a.Cb(),a.Db(6,"div",9),a.Db(7,"label"),a.Pb(8,"Year"),a.Cb(),a.Bb(9,"input",18),a.Ob(10,v,2,0,"div",11),a.Cb(),a.Cb()),2&t){const t=a.Kb();a.Lb("formGroup",t.additionalTab),a.qb(5),a.Lb("ngIf",t.additionalTab.controls.vid.invalid&&t.additionalTab.controls.vid.touched),a.qb(5),a.Lb("ngIf",t.additionalTab.controls.year.invalid&&t.additionalTab.controls.year.touched)}}function g(t,n){if(1&t){const t=a.Eb();a.Db(0,"button",19),a.Jb("click",(function(){return a.Mb(t),a.Kb().addCar()})),a.Pb(1," Add "),a.Cb()}if(2&t){const t=a.Kb();a.Lb("disabled",t.mainTab.invalid||t.additionalTab.invalid)}}function y(t,n){if(1&t){const t=a.Eb();a.Db(0,"button",19),a.Jb("click",(function(){return a.Mb(t),a.Kb().saveCar()})),a.Pb(1," Save "),a.Cb()}if(2&t){const t=a.Kb();a.Lb("disabled",t.mainTab.invalid||t.additionalTab.invalid)}}let T=(()=>{class t{constructor(t){this.carBankService=t,this.carIndex=null,this.close=new a.j,this.activeTab=0,this.carTypes=["","Minivan","Sedan","Bus"]}ngOnInit(){this.mainTab=new o.d({name:new o.b("",[o.l.required,o.l.pattern("[a-zA-Z]{2,15}")]),model:new o.b("",[o.l.required,o.l.pattern("[0-9a-zA-Z]{1,30}")]),type:new o.b("",[o.l.required])}),this.additionalTab=new o.d({vid:new o.b("",[o.l.required,o.l.pattern("[0-9a-zA-Z]{10,17}")]),year:new o.b("",[o.l.required,o.l.pattern("19[0-9][0-9]|20[0-2][0-9]")])}),this.initForms()}ngOnChanges(t){const n=t.carIndex;n.firstChange||n.currentValue===n.previousValue||this.initForms()}addCar(){this.carBankService.pushCar(this.createCarModel()),this.mainTab.reset(),this.additionalTab.reset()}changeTab(t){this.activeTab=t}closeComponent(){this.close.emit(!0)}createCarModel(){return new d(this.additionalTab.value.vid,this.mainTab.value.name,this.mainTab.value.model,Number(this.additionalTab.value.year),this.mainTab.value.type)}initForms(){const t=null!==this.carIndex?this.carBankService.oneCar(this.carIndex):new d;this.mainTab.setValue(t.main),this.additionalTab.setValue(t.additional)}saveCar(){this.carBankService.changeCar(this.carIndex,this.createCarModel()),this.close.emit(!0)}}return t.\u0275fac=function(n){return new(n||t)(a.Ab(r))},t.\u0275cmp=a.ub({type:t,selectors:[["app-form"]],inputs:{carIndex:"carIndex"},outputs:{close:"close"},features:[a.ob],decls:16,vars:10,consts:[[1,"form-control-static","text-right"],[1,"btn","btn-default",3,"click"],[1,"list-group-item","min-height-300"],[1,"nav","nav-tabs"],["href","",3,"click"],["class","form-control-static","novalidate","",3,"formGroup",4,"ngIf"],[1,"form-control-static","text-center"],["class","btn btn-default",3,"disabled","click",4,"ngIf"],["novalidate","",1,"form-control-static",3,"formGroup"],[1,"form-group"],["formControlName","name",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["formControlName","model",1,"form-control"],["formControlName","type",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],[1,"alert","alert-danger"],[3,"value"],["formControlName","vid",1,"form-control"],["formControlName","year",1,"form-control"],[1,"btn","btn-default",3,"disabled","click"]],template:function(t,n){1&t&&(a.Db(0,"div",0),a.Db(1,"button",1),a.Jb("click",(function(){return n.closeComponent()})),a.Pb(2,"Close"),a.Cb(),a.Cb(),a.Db(3,"div",2),a.Db(4,"ul",3),a.Db(5,"li"),a.Db(6,"a",4),a.Jb("click",(function(){return n.changeTab(0),!1})),a.Pb(7,"Home"),a.Cb(),a.Cb(),a.Db(8,"li"),a.Db(9,"a",4),a.Jb("click",(function(){return n.changeTab(1),!1})),a.Pb(10,"Profile"),a.Cb(),a.Cb(),a.Cb(),a.Ob(11,p,17,5,"form",5),a.Ob(12,D,11,3,"form",5),a.Cb(),a.Db(13,"div",6),a.Ob(14,g,2,1,"button",7),a.Ob(15,y,2,1,"button",7),a.Cb()),2&t&&(a.qb(5),a.sb(0==n.activeTab?"active":""),a.qb(3),a.sb(1==n.activeTab?"active":""),a.qb(3),a.Lb("ngIf",0===n.activeTab),a.qb(1),a.Lb("ngIf",1===n.activeTab),a.qb(2),a.Lb("ngIf",null===n.carIndex),a.qb(1),a.Lb("ngIf",null!==n.carIndex))},directives:[b.d,o.n,o.h,o.e,o.a,o.g,o.c,o.k,b.c,o.i,o.m],styles:["input.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%]{border:2px solid red}"]}),t})();function I(t,n){if(1&t){const t=a.Eb();a.Db(0,"app-form",4),a.Jb("close",(function(){return a.Mb(t),a.Kb().formDisplay(!1)})),a.Cb()}if(2&t){const t=a.Kb();a.Lb("carIndex",t.chosenCar)}}let P=(()=>{class t{constructor(){this.formDisplayStatus=!1,this.chosenCar=null}editCar(t){this.formDisplayStatus=!0,this.chosenCar=t}formDisplay(t){this.formDisplayStatus!==t&&(this.formDisplayStatus=t,this.chosenCar=null)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.ub({type:t,selectors:[["app-root"]],decls:4,vars:3,consts:[[1,"container-fluid"],[1,"row-fluid"],[3,"formOpen","chosenCar"],["class","col-sm-6",3,"carIndex","close",4,"ngIf"],[1,"col-sm-6",3,"carIndex","close"]],template:function(t,n){1&t&&(a.Db(0,"div",0),a.Db(1,"div",1),a.Db(2,"app-list",2),a.Jb("formOpen",(function(){return n.formDisplay(!0)}))("chosenCar",(function(t){return n.editCar(t)})),a.Cb(),a.Ob(3,I,1,1,"app-form",3),a.Cb(),a.Cb()),2&t&&(a.qb(2),a.sb(n.formDisplayStatus?"col-sm-6":"col-sm-12"),a.qb(1),a.Lb("ngIf",n.formDisplayStatus))},directives:[l,b.d,T],styles:[""]}),t})(),O=(()=>{class t{}return t.\u0275mod=a.yb({type:t,bootstrap:[P]}),t.\u0275inj=a.xb({factory:function(n){return new(n||t)},providers:[],imports:[[i.a,o.f,o.j]]}),t})();Object(a.I)(),i.b().bootstrapModule(O).catch(t=>console.log(t))},zn8P:function(t,n){function e(t){return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}))}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="zn8P"}},[[0,0,5]]]);