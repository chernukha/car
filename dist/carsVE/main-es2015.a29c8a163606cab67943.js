(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
  0: function (l, n, u) {
    l.exports = u("zUnb")
  }, zUnb: function (l, n, u) {
    "use strict";
    u.r(n);
    var t = u("8Y7J");

    class a {
    }

    class e {
      constructor() {
        this.formDisplayStatus = !1, this.chosenCar = null
      }

      editCar(l) {
        this.formDisplayStatus = !0, this.chosenCar = l
      }

      formDisplay(l) {
        this.formDisplayStatus !== l && (this.formDisplayStatus = l, this.chosenCar = null)
      }
    }

    var i = u("s7LF"), o = u("SVse");

    class r {
      constructor(l = "", n = "", u = "", t = null, a = "") {
        this.vid = l.toLocaleUpperCase(), this.name = n, this.model = u, this.year = t, this.type = a
      }

      get additional() {
        return {vid: this.vid, year: this.year}
      }

      get main() {
        return {name: this.name, model: this.model, type: this.type}
      }
    }

    class s {
      constructor(l) {
        this.carBankService = l, this.carIndex = null, this.close = new t.k, this.activeTab = 0, this.carTypes = ["", "Minivan", "Sedan", "Bus"]
      }

      ngOnInit() {
        this.mainTab = new i.g({
          name: new i.e("", [i.q.required, i.q.pattern("[a-zA-Z]{2,15}")]),
          model: new i.e("", [i.q.required, i.q.pattern("[0-9a-zA-Z]{1,30}")]),
          type: new i.e("", [i.q.required])
        }), this.additionalTab = new i.g({
          vid: new i.e("", [i.q.required, i.q.pattern("[0-9a-zA-Z]{10,17}")]),
          year: new i.e("", [i.q.required, i.q.pattern("19[0-9][0-9]|20[0-2][0-9]")])
        }), this.initForms()
      }

      ngOnChanges(l) {
        const n = l.carIndex;
        n.firstChange || n.currentValue === n.previousValue || this.initForms()
      }

      addCar() {
        this.carBankService.pushCar(this.createCarModel()), this.mainTab.reset(), this.additionalTab.reset()
      }

      changeTab(l) {
        this.activeTab = l
      }

      closeComponent() {
        this.close.emit(!0)
      }

      createCarModel() {
        return new r(this.additionalTab.value.vid, this.mainTab.value.name, this.mainTab.value.model, Number(this.additionalTab.value.year), this.mainTab.value.type)
      }

      initForms() {
        const l = null !== this.carIndex ? this.carBankService.oneCar(this.carIndex) : new r;
        this.mainTab.setValue(l.main), this.additionalTab.setValue(l.additional)
      }

      saveCar() {
        this.carBankService.changeCar(this.carIndex, this.createCarModel()), this.close.emit(!0)
      }
    }

    let c = (() => {
      class l {
        constructor() {
          this.carsList = []
        }

        get cars() {
          return this.carsList
        }

        changeCar(l, n) {
          this.carsList[l] = n
        }

        oneCar(l) {
          return this.carsList[l]
        }

        pushCar(l) {
          this.carsList.push(l)
        }
      }

      return l.\u0275prov = t.Jb({
        factory: function () {
          return new l
        }, token: l, providedIn: "root"
      }), l
    })();
    var b = t.lb({
      encapsulation: 0,
      styles: [["input.ng-touched.ng-invalid[_ngcontent-%COMP%], select.ng-touched.ng-invalid[_ngcontent-%COMP%]{border:2px solid red}"]],
      data: {}
    });

    function d(l) {
      return t.Ib(0, [(l()(), t.nb(0, 0, null, null, 1, "div", [["class", "alert alert-danger"]], null, null, null, null, null)), (l()(), t.Gb(-1, null, [" Wrong name "]))], null, null)
    }

    function m(l) {
      return t.Ib(0, [(l()(), t.nb(0, 0, null, null, 1, "div", [["class", "alert alert-danger"]], null, null, null, null, null)), (l()(), t.Gb(-1, null, [" Wrong model "]))], null, null)
    }

    function g(l) {
      return t.Ib(0, [(l()(), t.nb(0, 0, null, null, 3, "option", [], null, null, null, null, null)), t.mb(1, 147456, null, 0, i.n, [t.i, t.x, [2, i.p]], {value: [0, "value"]}, null), t.mb(2, 147456, null, 0, i.u, [t.i, t.x, [8, null]], {value: [0, "value"]}, null), (l()(), t.Gb(3, null, ["", ""]))], (function (l, n) {
        l(n, 1, 0, n.context.$implicit), l(n, 2, 0, n.context.$implicit)
      }), (function (l, n) {
        l(n, 3, 0, n.context.$implicit)
      }))
    }

    function p(l) {
      return t.Ib(0, [(l()(), t.nb(0, 0, null, null, 1, "div", [["class", "alert alert-danger"]], null, null, null, null, null)), (l()(), t.Gb(-1, null, [" Wrong type "]))], null, null)
    }

    function f(l) {
      return t.Ib(0, [(l()(), t.nb(0, 0, null, null, 39, "form", [["class", "form-control-static"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], (function (l, n, u) {
        var a = !0;
        return "submit" === n && (a = !1 !== t.Bb(l, 2).onSubmit(u) && a), "reset" === n && (a = !1 !== t.Bb(l, 2).onReset() && a), a
      }), null, null)), t.mb(1, 16384, null, 0, i.v, [], null, null), t.mb(2, 540672, null, 0, i.h, [[8, null], [8, null]], {form: [0, "form"]}, null), t.Cb(2048, null, i.b, null, [i.h]), t.mb(4, 16384, null, 0, i.m, [[4, i.b]], null, null), (l()(), t.nb(5, 0, null, null, 10, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(), t.nb(6, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Gb(-1, null, ["Name"])), (l()(), t.nb(8, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "name"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], (function (l, n, u) {
        var a = !0;
        return "input" === n && (a = !1 !== t.Bb(l, 9)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Bb(l, 9).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Bb(l, 9)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Bb(l, 9)._compositionEnd(u.target.value) && a), a
      }), null, null)), t.mb(9, 16384, null, 0, i.c, [t.x, t.i, [2, i.a]], null, null), t.Cb(1024, null, i.j, (function (l) {
        return [l]
      }), [i.c]), t.mb(11, 671744, null, 0, i.f, [[3, i.b], [8, null], [8, null], [6, i.j], [2, i.t]], {name: [0, "name"]}, null), t.Cb(2048, null, i.k, null, [i.f]), t.mb(13, 16384, null, 0, i.l, [[4, i.k]], null, null), (l()(), t.W(16777216, null, null, 1, null, d)), t.mb(15, 16384, null, 0, o.d, [t.F, t.C], {ngIf: [0, "ngIf"]}, null), (l()(), t.nb(16, 0, null, null, 10, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(), t.nb(17, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Gb(-1, null, ["Model"])), (l()(), t.nb(19, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "model"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], (function (l, n, u) {
        var a = !0;
        return "input" === n && (a = !1 !== t.Bb(l, 20)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Bb(l, 20).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Bb(l, 20)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Bb(l, 20)._compositionEnd(u.target.value) && a), a
      }), null, null)), t.mb(20, 16384, null, 0, i.c, [t.x, t.i, [2, i.a]], null, null), t.Cb(1024, null, i.j, (function (l) {
        return [l]
      }), [i.c]), t.mb(22, 671744, null, 0, i.f, [[3, i.b], [8, null], [8, null], [6, i.j], [2, i.t]], {name: [0, "name"]}, null), t.Cb(2048, null, i.k, null, [i.f]), t.mb(24, 16384, null, 0, i.l, [[4, i.k]], null, null), (l()(), t.W(16777216, null, null, 1, null, m)), t.mb(26, 16384, null, 0, o.d, [t.F, t.C], {ngIf: [0, "ngIf"]}, null), (l()(), t.nb(27, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(), t.nb(28, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Gb(-1, null, ["Type"])), (l()(), t.nb(30, 0, null, null, 7, "select", [["class", "form-control"], ["formControlName", "type"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], (function (l, n, u) {
        var a = !0;
        return "change" === n && (a = !1 !== t.Bb(l, 31).onChange(u.target.value) && a), "blur" === n && (a = !1 !== t.Bb(l, 31).onTouched() && a), a
      }), null, null)), t.mb(31, 16384, null, 0, i.p, [t.x, t.i], null, null), t.Cb(1024, null, i.j, (function (l) {
        return [l]
      }), [i.p]), t.mb(33, 671744, null, 0, i.f, [[3, i.b], [8, null], [8, null], [6, i.j], [2, i.t]], {name: [0, "name"]}, null), t.Cb(2048, null, i.k, null, [i.f]), t.mb(35, 16384, null, 0, i.l, [[4, i.k]], null, null), (l()(), t.W(16777216, null, null, 1, null, g)), t.mb(37, 278528, null, 0, o.c, [t.F, t.C, t.o], {ngForOf: [0, "ngForOf"]}, null), (l()(), t.W(16777216, null, null, 1, null, p)), t.mb(39, 16384, null, 0, o.d, [t.F, t.C], {ngIf: [0, "ngIf"]}, null)], (function (l, n) {
        var u = n.component;
        l(n, 2, 0, u.mainTab), l(n, 11, 0, "name"), l(n, 15, 0, u.mainTab.controls.name.invalid && u.mainTab.controls.name.touched), l(n, 22, 0, "model"), l(n, 26, 0, u.mainTab.controls.model.invalid && u.mainTab.controls.model.touched), l(n, 33, 0, "type"), l(n, 37, 0, u.carTypes), l(n, 39, 0, u.mainTab.controls.type.invalid && u.mainTab.controls.type.touched)
      }), (function (l, n) {
        l(n, 0, 0, t.Bb(n, 4).ngClassUntouched, t.Bb(n, 4).ngClassTouched, t.Bb(n, 4).ngClassPristine, t.Bb(n, 4).ngClassDirty, t.Bb(n, 4).ngClassValid, t.Bb(n, 4).ngClassInvalid, t.Bb(n, 4).ngClassPending), l(n, 8, 0, t.Bb(n, 13).ngClassUntouched, t.Bb(n, 13).ngClassTouched, t.Bb(n, 13).ngClassPristine, t.Bb(n, 13).ngClassDirty, t.Bb(n, 13).ngClassValid, t.Bb(n, 13).ngClassInvalid, t.Bb(n, 13).ngClassPending), l(n, 19, 0, t.Bb(n, 24).ngClassUntouched, t.Bb(n, 24).ngClassTouched, t.Bb(n, 24).ngClassPristine, t.Bb(n, 24).ngClassDirty, t.Bb(n, 24).ngClassValid, t.Bb(n, 24).ngClassInvalid, t.Bb(n, 24).ngClassPending), l(n, 30, 0, t.Bb(n, 35).ngClassUntouched, t.Bb(n, 35).ngClassTouched, t.Bb(n, 35).ngClassPristine, t.Bb(n, 35).ngClassDirty, t.Bb(n, 35).ngClassValid, t.Bb(n, 35).ngClassInvalid, t.Bb(n, 35).ngClassPending)
      }))
    }

    function h(l) {
      return t.Ib(0, [(l()(), t.nb(0, 0, null, null, 1, "div", [["class", "alert alert-danger"]], null, null, null, null, null)), (l()(), t.Gb(-1, null, [" Wrong vehicle ID "]))], null, null)
    }

    function v(l) {
      return t.Ib(0, [(l()(), t.nb(0, 0, null, null, 1, "div", [["class", "alert alert-danger"]], null, null, null, null, null)), (l()(), t.Gb(-1, null, [" Wrong year "]))], null, null)
    }

    function C(l) {
      return t.Ib(0, [(l()(), t.nb(0, 0, null, null, 26, "form", [["class", "form-control-static"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], (function (l, n, u) {
        var a = !0;
        return "submit" === n && (a = !1 !== t.Bb(l, 2).onSubmit(u) && a), "reset" === n && (a = !1 !== t.Bb(l, 2).onReset() && a), a
      }), null, null)), t.mb(1, 16384, null, 0, i.v, [], null, null), t.mb(2, 540672, null, 0, i.h, [[8, null], [8, null]], {form: [0, "form"]}, null), t.Cb(2048, null, i.b, null, [i.h]), t.mb(4, 16384, null, 0, i.m, [[4, i.b]], null, null), (l()(), t.nb(5, 0, null, null, 10, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(), t.nb(6, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Gb(-1, null, ["Vehicle ID"])), (l()(), t.nb(8, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "vid"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], (function (l, n, u) {
        var a = !0;
        return "input" === n && (a = !1 !== t.Bb(l, 9)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Bb(l, 9).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Bb(l, 9)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Bb(l, 9)._compositionEnd(u.target.value) && a), a
      }), null, null)), t.mb(9, 16384, null, 0, i.c, [t.x, t.i, [2, i.a]], null, null), t.Cb(1024, null, i.j, (function (l) {
        return [l]
      }), [i.c]), t.mb(11, 671744, null, 0, i.f, [[3, i.b], [8, null], [8, null], [6, i.j], [2, i.t]], {name: [0, "name"]}, null), t.Cb(2048, null, i.k, null, [i.f]), t.mb(13, 16384, null, 0, i.l, [[4, i.k]], null, null), (l()(), t.W(16777216, null, null, 1, null, h)), t.mb(15, 16384, null, 0, o.d, [t.F, t.C], {ngIf: [0, "ngIf"]}, null), (l()(), t.nb(16, 0, null, null, 10, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(), t.nb(17, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Gb(-1, null, ["Year"])), (l()(), t.nb(19, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "year"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], (function (l, n, u) {
        var a = !0;
        return "input" === n && (a = !1 !== t.Bb(l, 20)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Bb(l, 20).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Bb(l, 20)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Bb(l, 20)._compositionEnd(u.target.value) && a), a
      }), null, null)), t.mb(20, 16384, null, 0, i.c, [t.x, t.i, [2, i.a]], null, null), t.Cb(1024, null, i.j, (function (l) {
        return [l]
      }), [i.c]), t.mb(22, 671744, null, 0, i.f, [[3, i.b], [8, null], [8, null], [6, i.j], [2, i.t]], {name: [0, "name"]}, null), t.Cb(2048, null, i.k, null, [i.f]), t.mb(24, 16384, null, 0, i.l, [[4, i.k]], null, null), (l()(), t.W(16777216, null, null, 1, null, v)), t.mb(26, 16384, null, 0, o.d, [t.F, t.C], {ngIf: [0, "ngIf"]}, null)], (function (l, n) {
        var u = n.component;
        l(n, 2, 0, u.additionalTab), l(n, 11, 0, "vid"), l(n, 15, 0, u.additionalTab.controls.vid.invalid && u.additionalTab.controls.vid.touched), l(n, 22, 0, "year"), l(n, 26, 0, u.additionalTab.controls.year.invalid && u.additionalTab.controls.year.touched)
      }), (function (l, n) {
        l(n, 0, 0, t.Bb(n, 4).ngClassUntouched, t.Bb(n, 4).ngClassTouched, t.Bb(n, 4).ngClassPristine, t.Bb(n, 4).ngClassDirty, t.Bb(n, 4).ngClassValid, t.Bb(n, 4).ngClassInvalid, t.Bb(n, 4).ngClassPending), l(n, 8, 0, t.Bb(n, 13).ngClassUntouched, t.Bb(n, 13).ngClassTouched, t.Bb(n, 13).ngClassPristine, t.Bb(n, 13).ngClassDirty, t.Bb(n, 13).ngClassValid, t.Bb(n, 13).ngClassInvalid, t.Bb(n, 13).ngClassPending), l(n, 19, 0, t.Bb(n, 24).ngClassUntouched, t.Bb(n, 24).ngClassTouched, t.Bb(n, 24).ngClassPristine, t.Bb(n, 24).ngClassDirty, t.Bb(n, 24).ngClassValid, t.Bb(n, 24).ngClassInvalid, t.Bb(n, 24).ngClassPending)
      }))
    }

    function B(l) {
      return t.Ib(0, [(l()(), t.nb(0, 0, null, null, 1, "button", [["class", "btn btn-default"]], [[8, "disabled", 0]], [[null, "click"]], (function (l, n, u) {
        var t = !0;
        return "click" === n && (t = !1 !== l.component.addCar() && t), t
      }), null, null)), (l()(), t.Gb(-1, null, [" Add "]))], null, (function (l, n) {
        var u = n.component;
        l(n, 0, 0, u.mainTab.invalid || u.additionalTab.invalid)
      }))
    }

    function I(l) {
      return t.Ib(0, [(l()(), t.nb(0, 0, null, null, 1, "button", [["class", "btn btn-default"]], [[8, "disabled", 0]], [[null, "click"]], (function (l, n, u) {
        var t = !0;
        return "click" === n && (t = !1 !== l.component.saveCar() && t), t
      }), null, null)), (l()(), t.Gb(-1, null, [" Save "]))], null, (function (l, n) {
        var u = n.component;
        l(n, 0, 0, u.mainTab.invalid || u.additionalTab.invalid)
      }))
    }

    function y(l) {
      return t.Ib(0, [(l()(), t.nb(0, 0, null, null, 2, "div", [["class", "form-control-static text-right"]], null, null, null, null, null)), (l()(), t.nb(1, 0, null, null, 1, "button", [["class", "btn btn-default"]], null, [[null, "click"]], (function (l, n, u) {
        var t = !0;
        return "click" === n && (t = !1 !== l.component.closeComponent() && t), t
      }), null, null)), (l()(), t.Gb(-1, null, ["Close"])), (l()(), t.nb(3, 0, null, null, 11, "div", [["class", "list-group-item min-height-300"]], null, null, null, null, null)), (l()(), t.nb(4, 0, null, null, 6, "ul", [["class", "nav nav-tabs"]], null, null, null, null, null)), (l()(), t.nb(5, 0, null, null, 2, "li", [], [[8, "className", 0]], null, null, null, null)), (l()(), t.nb(6, 0, null, null, 1, "a", [["href", ""]], null, [[null, "click"]], (function (l, n, u) {
        var t = !0;
        return "click" === n && (l.component.changeTab(0), t = !1), t
      }), null, null)), (l()(), t.Gb(-1, null, ["Home"])), (l()(), t.nb(8, 0, null, null, 2, "li", [], [[8, "className", 0]], null, null, null, null)), (l()(), t.nb(9, 0, null, null, 1, "a", [["href", ""]], null, [[null, "click"]], (function (l, n, u) {
        var t = !0;
        return "click" === n && (l.component.changeTab(1), t = !1), t
      }), null, null)), (l()(), t.Gb(-1, null, ["Profile"])), (l()(), t.W(16777216, null, null, 1, null, f)), t.mb(12, 16384, null, 0, o.d, [t.F, t.C], {ngIf: [0, "ngIf"]}, null), (l()(), t.W(16777216, null, null, 1, null, C)), t.mb(14, 16384, null, 0, o.d, [t.F, t.C], {ngIf: [0, "ngIf"]}, null), (l()(), t.nb(15, 0, null, null, 4, "div", [["class", "form-control-static text-center"]], null, null, null, null, null)), (l()(), t.W(16777216, null, null, 1, null, B)), t.mb(17, 16384, null, 0, o.d, [t.F, t.C], {ngIf: [0, "ngIf"]}, null), (l()(), t.W(16777216, null, null, 1, null, I)), t.mb(19, 16384, null, 0, o.d, [t.F, t.C], {ngIf: [0, "ngIf"]}, null)], (function (l, n) {
        var u = n.component;
        l(n, 12, 0, 0 === u.activeTab), l(n, 14, 0, 1 === u.activeTab), l(n, 17, 0, null === u.carIndex), l(n, 19, 0, null !== u.carIndex)
      }), (function (l, n) {
        var u = n.component;
        l(n, 5, 0, t.ub(1, "", 0 == u.activeTab ? "active" : "", "")), l(n, 8, 0, t.ub(1, "", 1 == u.activeTab ? "active" : "", ""))
      }))
    }

    class T {
      constructor(l) {
        this.carsBankServie = l, this.formOpen = new t.k, this.chosenCar = new t.k, this.cars = []
      }

      ngOnInit() {
        this.cars = this.carsBankServie.cars
      }

      chooseCar(l) {
        this.chosenCar.emit(l)
      }

      showForm() {
        this.formOpen.emit(!0)
      }
    }

    var k = t.lb({encapsulation: 0, styles: [[""]], data: {}});

    function A(l) {
      return t.Ib(0, [(l()(), t.nb(0, 0, null, null, 10, "tr", [["class", "car-item"]], null, [[null, "click"]], (function (l, n, u) {
        var t = !0;
        return "click" === n && (t = !1 !== l.component.chooseCar(l.context.index) && t), t
      }), null, null)), (l()(), t.nb(1, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Gb(2, null, ["", ""])), (l()(), t.nb(3, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Gb(4, null, ["", ""])), (l()(), t.nb(5, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Gb(6, null, ["", ""])), (l()(), t.nb(7, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Gb(8, null, ["", ""])), (l()(), t.nb(9, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Gb(10, null, ["", ""]))], null, (function (l, n) {
        l(n, 2, 0, n.context.$implicit.vid), l(n, 4, 0, n.context.$implicit.name), l(n, 6, 0, n.context.$implicit.model), l(n, 8, 0, n.context.$implicit.year), l(n, 10, 0, n.context.$implicit.type)
      }))
    }

    function x(l) {
      return t.Ib(0, [(l()(), t.nb(0, 0, null, null, 2, "tr", [["class", "alert alert-info no-car"]], null, null, null, null, null)), (l()(), t.nb(1, 0, null, null, 1, "td", [["class", "text-center"], ["colspan", "5"]], null, null, null, null, null)), (l()(), t.Gb(-1, null, ["There are no cars yet"]))], null, null)
    }

    function w(l) {
      return t.Ib(0, [(l()(), t.nb(0, 0, null, null, 2, "div", [["class", "form-control-static"]], null, null, null, null, null)), (l()(), t.nb(1, 0, null, null, 1, "button", [["class", "btn btn-default show-form"]], null, [[null, "click"]], (function (l, n, u) {
        var t = !0;
        return "click" === n && (t = !1 !== l.component.showForm() && t), t
      }), null, null)), (l()(), t.Gb(-1, null, ["Add"])), (l()(), t.nb(3, 0, null, null, 15, "table", [["class", "table table-bordered table-striped"]], null, null, null, null, null)), (l()(), t.nb(4, 0, null, null, 10, "tr", [], null, null, null, null, null)), (l()(), t.nb(5, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), t.Gb(-1, null, ["Vehicle ID"])), (l()(), t.nb(7, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), t.Gb(-1, null, ["Name"])), (l()(), t.nb(9, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), t.Gb(-1, null, ["Model"])), (l()(), t.nb(11, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), t.Gb(-1, null, ["Year"])), (l()(), t.nb(13, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), t.Gb(-1, null, ["Type"])), (l()(), t.W(16777216, null, null, 1, null, A)), t.mb(16, 278528, null, 0, o.c, [t.F, t.C, t.o], {ngForOf: [0, "ngForOf"]}, null), (l()(), t.W(16777216, null, null, 1, null, x)), t.mb(18, 16384, null, 0, o.d, [t.F, t.C], {ngIf: [0, "ngIf"]}, null)], (function (l, n) {
        var u = n.component;
        l(n, 16, 0, u.cars), l(n, 18, 0, !u.cars.length)
      }), null)
    }

    var G = t.lb({encapsulation: 0, styles: [[""]], data: {}});

    function F(l) {
      return t.Ib(0, [(l()(), t.nb(0, 0, null, null, 1, "app-form", [["class", "col-sm-6"]], null, [[null, "close"]], (function (l, n, u) {
        var t = !0;
        return "close" === n && (t = !1 !== l.component.formDisplay(!1) && t), t
      }), y, b)), t.mb(1, 638976, null, 0, s, [c], {carIndex: [0, "carIndex"]}, {close: "close"})], (function (l, n) {
        l(n, 1, 0, n.component.chosenCar)
      }), null)
    }

    function D(l) {
      return t.Ib(0, [(l()(), t.nb(0, 0, null, null, 5, "div", [["class", "container-fluid"]], null, null, null, null, null)), (l()(), t.nb(1, 0, null, null, 4, "div", [["class", "row-fluid"]], null, null, null, null, null)), (l()(), t.nb(2, 0, null, null, 1, "app-list", [], [[8, "className", 0]], [[null, "formOpen"], [null, "chosenCar"]], (function (l, n, u) {
        var t = !0, a = l.component;
        return "formOpen" === n && (t = !1 !== a.formDisplay(!0) && t), "chosenCar" === n && (t = !1 !== a.editCar(u) && t), t
      }), w, k)), t.mb(3, 114688, null, 0, T, [c], null, {
        formOpen: "formOpen",
        chosenCar: "chosenCar"
      }), (l()(), t.W(16777216, null, null, 1, null, F)), t.mb(5, 16384, null, 0, o.d, [t.F, t.C], {ngIf: [0, "ngIf"]}, null)], (function (l, n) {
        var u = n.component;
        l(n, 3, 0), l(n, 5, 0, u.formDisplayStatus)
      }), (function (l, n) {
        l(n, 2, 0, n.component.formDisplayStatus ? "col-sm-6" : "col-sm-12")
      }))
    }

    function P(l) {
      return t.Ib(0, [(l()(), t.nb(0, 0, null, null, 1, "app-root", [], null, null, null, D, G)), t.mb(1, 49152, null, 0, e, [], null, null)], null, null)
    }

    var S = t.jb("app-root", e, P, {}, {}, []), O = u("cUpR"), q = t.kb(a, [e], (function (l) {
      return t.zb([t.Ab(512, t.g, t.O, [[8, [S]], [3, t.g], t.r]), t.Ab(5120, t.q, t.ab, [[3, t.q]]), t.Ab(4608, o.f, o.e, [t.q]), t.Ab(5120, t.db, t.bb, [t.t]), t.Ab(4608, t.f, t.f, []), t.Ab(5120, t.a, t.X, []), t.Ab(5120, t.o, t.Y, []), t.Ab(5120, t.p, t.Z, []), t.Ab(4608, O.b, O.k, [o.b]), t.Ab(6144, t.A, null, [O.b]), t.Ab(4608, O.e, O.g, []), t.Ab(5120, O.c, (function (l, n, u, t, a, e, i, o) {
        return [new O.i(l, n, u), new O.n(t), new O.m(a, e, i, o)]
      }), [o.b, t.t, t.v, o.b, o.b, O.e, t.P, [2, O.f]]), t.Ab(4608, O.d, O.d, [O.c, t.t]), t.Ab(135680, O.l, O.l, [o.b]), t.Ab(4608, O.j, O.j, [O.d, O.l, t.a]), t.Ab(6144, t.y, null, [O.j]), t.Ab(6144, O.o, null, [O.l]), t.Ab(4608, t.D, t.D, [t.t]), t.Ab(4608, i.s, i.s, []), t.Ab(4608, i.d, i.d, []), t.Ab(1073742336, o.a, o.a, []), t.Ab(1024, t.j, O.p, []), t.Ab(1024, t.b, (function (l) {
        return [O.q(l)]
      }), [[2, t.s]]), t.Ab(512, t.c, t.c, [[2, t.b]]), t.Ab(131584, t.e, t.e, [t.t, t.P, t.n, t.j, t.g, t.c]), t.Ab(1073742336, t.d, t.d, [t.e]), t.Ab(1073742336, O.a, O.a, [[3, O.a]]), t.Ab(1073742336, i.r, i.r, []), t.Ab(1073742336, i.i, i.i, []), t.Ab(1073742336, i.o, i.o, []), t.Ab(1073742336, a, a, []), t.Ab(256, t.h, t.cb, []), t.Ab(256, t.Q, "root", [])])
    }));
    Object(t.J)(), O.h().bootstrapModuleFactory(q).catch(l => console.log(l))
  }, zn8P: function (l, n) {
    function u(l) {
      return Promise.resolve().then((function () {
        var n = new Error("Cannot find module '" + l + "'");
        throw n.code = "MODULE_NOT_FOUND", n
      }))
    }

    u.keys = function () {
      return []
    }, u.resolve = u, l.exports = u, u.id = "zn8P"
  }
}, [[0, 0, 5]]]);
