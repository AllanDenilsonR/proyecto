"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_equipo_equipo_module_ts"],{

/***/ 26965:
/*!*******************************************************!*\
  !*** ./src/app/pages/equipo/equipo-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquipoRoutingModule": () => (/* binding */ EquipoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _pages_listaequipo_listaequipo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/listaequipo/listaequipo.component */ 42112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);




const routes = [
    { path: 'lista', component: _pages_listaequipo_listaequipo_component__WEBPACK_IMPORTED_MODULE_0__.ListaequipoComponent },
];
class EquipoRoutingModule {
}
EquipoRoutingModule.ɵfac = function EquipoRoutingModule_Factory(t) { return new (t || EquipoRoutingModule)(); };
EquipoRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EquipoRoutingModule });
EquipoRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EquipoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 28066:
/*!***********************************************!*\
  !*** ./src/app/pages/equipo/equipo.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquipoModule": () => (/* binding */ EquipoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ 50011);
/* harmony import */ var _equipo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equipo-routing.module */ 26965);
/* harmony import */ var _pages_listaequipo_listaequipo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/listaequipo/listaequipo.component */ 42112);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 63091);
/* harmony import */ var src_app_shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/widget/widget.module */ 57337);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! simplebar-angular */ 6878);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-lightbox */ 15367);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 91955);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ 12051);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var _dashboards_dashboards_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboards/dashboards.module */ 77480);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fullcalendar/angular */ 67200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);


















class EquipoModule {
}
EquipoModule.ɵfac = function EquipoModule_Factory(t) { return new (t || EquipoModule)(); };
EquipoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: EquipoModule });
EquipoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _equipo_routing_module__WEBPACK_IMPORTED_MODULE_0__.EquipoRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModalModule,
            _dashboards_dashboards_module__WEBPACK_IMPORTED_MODULE_6__.DashboardsModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__.NgApexchartsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
            src_app_shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_3__.WidgetModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltipModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbCollapseModule,
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_13__.FullCalendarModule,
            simplebar_angular__WEBPACK_IMPORTED_MODULE_14__.SimplebarAngularModule,
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__.LightboxModule,
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__.PaginationModule.forRoot(),
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__.DataTablesModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](EquipoModule, { declarations: [_pages_listaequipo_listaequipo_component__WEBPACK_IMPORTED_MODULE_1__.ListaequipoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _equipo_routing_module__WEBPACK_IMPORTED_MODULE_0__.EquipoRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModalModule,
        _dashboards_dashboards_module__WEBPACK_IMPORTED_MODULE_6__.DashboardsModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__.NgApexchartsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
        src_app_shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_3__.WidgetModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltipModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbCollapseModule,
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_13__.FullCalendarModule,
        simplebar_angular__WEBPACK_IMPORTED_MODULE_14__.SimplebarAngularModule,
        ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__.LightboxModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__.PaginationModule, angular_datatables__WEBPACK_IMPORTED_MODULE_5__.DataTablesModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectModule] }); })();


/***/ }),

/***/ 61457:
/*!***********************************************!*\
  !*** ./src/app/pages/equipo/models/equipo.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Equipo": () => (/* binding */ Equipo),
/* harmony export */   "Categoria": () => (/* binding */ Categoria),
/* harmony export */   "Ubicacion": () => (/* binding */ Ubicacion),
/* harmony export */   "Edificio": () => (/* binding */ Edificio),
/* harmony export */   "Usuario": () => (/* binding */ Usuario)
/* harmony export */ });
class Equipo {
    constructor(numinventario, numserie, marca, modelo, anio, descripcion, ip, estado, categoria, ubicacione, usuarioe, id) {
        this.numinventario = numinventario;
        this.numserie = numserie;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.descripcion = descripcion;
        this.ip = ip;
        this.estado = estado;
        this.categoria = categoria;
        this.ubicacione = ubicacione;
        this.usuarioe = usuarioe;
        this.id = id;
    }
}
class Categoria {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}
class Ubicacion {
    constructor(id, espaciofisico, nivel, edificio) {
        this.id = id;
        this.espaciofisico = espaciofisico;
        this.nivel = nivel;
        this.edificio = edificio;
    }
}
class Edificio {
    constructor(edificio, niveles, id) {
        this.edificio = edificio;
        this.niveles = niveles;
        this.id = id;
    }
}
class Usuario {
    constructor(id) {
        this.id = id;
    }
}


/***/ }),

/***/ 42112:
/*!*************************************************************************!*\
  !*** ./src/app/pages/equipo/pages/listaequipo/listaequipo.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListaequipoComponent": () => (/* binding */ ListaequipoComponent)
/* harmony export */ });
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-datatables */ 12051);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_equipo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/equipo */ 61457);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_enum_role_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/enum/role.enum */ 53921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_equipo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/equipo.service */ 72319);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_account_auth_login_service_autenticacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/account/auth/login/service/autenticacion.service */ 6163);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 50011);
















const _c0 = function (a0, a1, a2) { return { " bg-success": a0, " bg-danger": a1, " bg-warning": a2 }; };
const _c1 = function (a1) { return ["/mantenimiento/lista", a1]; };
function ListaequipoComponent_tr_43_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaequipoComponent_tr_43_Template_button_click_19_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14); const data_r11 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](47); return ctx_r13.openModalEditar(_r3, data_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaequipoComponent_tr_43_Template_button_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14); const data_r11 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](49); return ctx_r15.openModalEditarEstado(_r5, data_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r12 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r11.numinventario);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r11.numserie);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r11.marca);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r11.modelo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r11.categoria.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"]("", data_r11.ubicacione.edificio.edificio, "-", data_r11.ubicacione.nivel, " ", data_r11.ubicacione.espaciofisico, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](12, _c0, data_r11.estado === "Bueno", data_r11.estado === "Da\u00F1ado", data_r11.estado === "Obsoleto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r11.estado);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](16, _c1, data_r11.id));
} }
function ListaequipoComponent_ng_template_44_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Requiere un n\u00FAmero de serie");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaequipoComponent_ng_template_44_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Requiere un n\u00FAmero de serie");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaequipoComponent_ng_template_44_ng_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", year_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](year_r28);
} }
function ListaequipoComponent_ng_template_44_ng_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", c_r29.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](c_r29.nombre);
} }
function ListaequipoComponent_ng_template_44_span_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Seleccione una categor\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaequipoComponent_ng_template_44_span_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Requiere una categor\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaequipoComponent_ng_template_44_span_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Seleccione un estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaequipoComponent_ng_template_44_span_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Requiere un estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaequipoComponent_ng_template_44_ng_option_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", u_r30.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"]("", u_r30.edificio.edificio, "-", u_r30.nivel, " ", u_r30.espaciofisico, " ");
} }
function ListaequipoComponent_ng_template_44_span_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Seleccione una ubicaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaequipoComponent_ng_template_44_span_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Requiere una ubicaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaequipoComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h1", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Equipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaequipoComponent_ng_template_44_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32); const modal_r16 = restoredCtx.$implicit; return modal_r16.dismiss("Cross click"); })("click", function ListaequipoComponent_ng_template_44_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r33.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "form", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ListaequipoComponent_ng_template_44_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r34.guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " * Campo obligator\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "N\u00FAmero Serie");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ListaequipoComponent_ng_template_44_span_18_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ListaequipoComponent_ng_template_44_span_19_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Modelo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "N\u00FAmero Inventario");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Marca");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "A\u00F1o Compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "ng-select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, ListaequipoComponent_ng_template_44_ng_option_42_Template, 2, 2, "ng-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Categor\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "ng-select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "ng-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, ListaequipoComponent_ng_template_44_ng_option_51_Template, 2, 2, "ng-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, ListaequipoComponent_ng_template_44_span_53_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, ListaequipoComponent_ng_template_44_span_54_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](61, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "Bueno");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "Da\u00F1ado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "Obsoleto");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, ListaequipoComponent_ng_template_44_span_69_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, ListaequipoComponent_ng_template_44_span_70_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "Ubicaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "ng-select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](77, ListaequipoComponent_ng_template_44_ng_option_77_Template, 2, 4, "ng-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](79, ListaequipoComponent_ng_template_44_span_79_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](80, ListaequipoComponent_ng_template_44_span_80_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84, "Descripci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](85, "textarea", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaequipoComponent_ng_template_44_Template_button_click_87_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r35.reset(); })("click", function ListaequipoComponent_ng_template_44_Template_button_click_87_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32); const modal_r16 = restoredCtx.$implicit; return modal_r16.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_2_0;
    let tmp_3_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_14_0;
    let tmp_15_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r2.formulario);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r2.esCampoValido("numserie"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r2.formulario.get("numserie")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r2.formulario.get("numserie")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.years);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r2.esCampoValido("categoria"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.categorial);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r2.formulario.get("categoria")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx_r2.formulario.get("categoria")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r2.esCampoValido("estado"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx_r2.formulario.get("estado")) == null ? null : tmp_10_0.errors == null ? null : tmp_10_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx_r2.formulario.get("estado")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r2.esCampoValido("ubicacione"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.ubicacionel);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_14_0 = ctx_r2.formulario.get("ubicacione")) == null ? null : tmp_14_0.errors == null ? null : tmp_14_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_15_0 = ctx_r2.formulario.get("ubicacione")) == null ? null : tmp_15_0.errors == null ? null : tmp_15_0.errors["pattern"]);
} }
function ListaequipoComponent_ng_template_46_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Requiere un n\u00FAmero de serie");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaequipoComponent_ng_template_46_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Requiere un n\u00FAmero de serie");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaequipoComponent_ng_template_46_ng_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", year_r49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](year_r49);
} }
function ListaequipoComponent_ng_template_46_ng_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", c_r50.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](c_r50.nombre);
} }
function ListaequipoComponent_ng_template_46_span_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Seleccione una categor\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaequipoComponent_ng_template_46_span_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Requiere una categor\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaequipoComponent_ng_template_46_span_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Seleccione un estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaequipoComponent_ng_template_46_span_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Requiere un estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaequipoComponent_ng_template_46_ng_option_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", u_r51.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"](" ", u_r51.edificio.edificio, "-", u_r51.nivel, " ", u_r51.espaciofisico, " ");
} }
function ListaequipoComponent_ng_template_46_span_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Seleccione una ubicaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaequipoComponent_ng_template_46_span_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Requiere una ubicaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaequipoComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h1", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Equipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaequipoComponent_ng_template_46_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r53); const modal_r37 = restoredCtx.$implicit; return modal_r37.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "form", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ListaequipoComponent_ng_template_46_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r53); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r54.editar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " * Campo obligator\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "N\u00FAmero Serie");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ListaequipoComponent_ng_template_46_span_19_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ListaequipoComponent_ng_template_46_span_20_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Modelo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "N\u00FAmero Inventario");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Marca");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "A\u00F1o Compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "ng-select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, ListaequipoComponent_ng_template_46_ng_option_42_Template, 2, 2, "ng-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Categor\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "ng-select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "ng-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, ListaequipoComponent_ng_template_46_ng_option_51_Template, 2, 2, "ng-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, ListaequipoComponent_ng_template_46_span_53_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, ListaequipoComponent_ng_template_46_span_54_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](61, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "Bueno");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "Da\u00F1ado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "Obsoleto");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, "Descargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](71, ListaequipoComponent_ng_template_46_span_71_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, ListaequipoComponent_ng_template_46_span_72_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75, "Ubicaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "ng-select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](79, ListaequipoComponent_ng_template_46_ng_option_79_Template, 2, 4, "ng-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](81, ListaequipoComponent_ng_template_46_span_81_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](82, ListaequipoComponent_ng_template_46_span_82_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "Descripci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](87, "textarea", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaequipoComponent_ng_template_46_Template_button_click_89_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r53); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r55.reset(); })("click", function ListaequipoComponent_ng_template_46_Template_button_click_89_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r53); const modal_r37 = restoredCtx.$implicit; return modal_r37.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_2_0;
    let tmp_3_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_14_0;
    let tmp_15_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r4.formulario);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r4.esCampoValido("numserie"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r4.formulario.get("numserie")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r4.formulario.get("numserie")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r4.years);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r4.esCampoValido("categoria"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r4.categorial);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r4.formulario.get("categoria")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx_r4.formulario.get("categoria")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r4.esCampoValido("estado"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx_r4.formulario.get("estado")) == null ? null : tmp_10_0.errors == null ? null : tmp_10_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx_r4.formulario.get("estado")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r4.esCampoValido("ubicacione"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r4.ubicacionel);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_14_0 = ctx_r4.formulario.get("ubicacione")) == null ? null : tmp_14_0.errors == null ? null : tmp_14_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_15_0 = ctx_r4.formulario.get("ubicacione")) == null ? null : tmp_15_0.errors == null ? null : tmp_15_0.errors["pattern"]);
} }
function ListaequipoComponent_ng_template_48_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Seleccione un estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaequipoComponent_ng_template_48_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Requiere un estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaequipoComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h1", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Equipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaequipoComponent_ng_template_48_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61); const modal_r57 = restoredCtx.$implicit; return modal_r57.dismiss("Cross click"); })("click", function ListaequipoComponent_ng_template_48_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r62.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "form", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ListaequipoComponent_ng_template_48_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r63.editarEstado(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Bueno");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Da\u00F1ado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Obsoleto");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Descargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, ListaequipoComponent_ng_template_48_span_24_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, ListaequipoComponent_ng_template_48_span_25_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaequipoComponent_ng_template_48_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r64.reset(); })("click", function ListaequipoComponent_ng_template_48_Template_button_click_27_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61); const modal_r57 = restoredCtx.$implicit; return modal_r57.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r6.formulario);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r6.esCampoValido("estado"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r6.formulario.get("estado")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r6.formulario.get("estado")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
} }
function ListaequipoComponent_ng_template_50_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Seleccione un estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaequipoComponent_ng_template_50_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Requiere un estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListaequipoComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h1", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "PDF Equipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaequipoComponent_ng_template_50_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r70); const modal_r66 = restoredCtx.$implicit; return modal_r66.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "form", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ListaequipoComponent_ng_template_50_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r70); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r71.imprimir(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "select", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ListaequipoComponent_ng_template_50_Template_select_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r70); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r72.estados($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Seleccione");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Bueno");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Da\u00F1ado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Obsoleto");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Descargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Todos");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, ListaequipoComponent_ng_template_50_span_25_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, ListaequipoComponent_ng_template_50_span_26_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaequipoComponent_ng_template_50_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r70); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r73.reset(); })("click", function ListaequipoComponent_ng_template_50_Template_button_click_28_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r70); const modal_r66 = restoredCtx.$implicit; return modal_r66.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Generar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r8.formulario);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r8.esCampoValido("estado"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r8.formulario.get("estado")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r8.formulario.get("estado")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
} }
function ListaequipoComponent_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h1", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Ayuda");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaequipoComponent_ng_template_52_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r77); const modal_r75 = restoredCtx.$implicit; return modal_r75.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h2", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Ventana de Informaci\u00F3n de Equipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "ul", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Muestra una tabla que contiene una lista de todos los equipos almacenados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Bot\u00F3n Agregar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Permite incluir un nuevo equipo a la lista. Al hacer clic en este bot\u00F3n, podr\u00E1 ingresar los detalles del equipo, como su nombre, n\u00FAmero de serie y otros datos relevantes, y luego guardar la informaci\u00F3n en la base de datos. Esta funci\u00F3n es \u00FAtil cuando deseas registrar un nuevo equipo en el sistema y tener un registro organizado de todos los equipos disponibles. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "ul", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Bot\u00F3n Editar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " Permite actualizar la informaci\u00F3n precisa y relevante sobre los equipos. facilitando la gesti\u00F3n eficiente de la informaci\u00F3n del equipo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "ul", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Bot\u00F3n Cambiar Estado:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " Permite cambiar el estado actual de un equipo a otro estado deseado. Por ejemplo, cambiar de estado \"Bueno\" a Da\u00F1ado, Obsoleto, Descargo o viceversa. Teniendo en cuenta que al momento de cambiar a estado Obsoleto o Descargo a un equipo tiene que tener como minino 4 a\u00F1os a partir del a\u00F1o de compra. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "ul", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Bot\u00F3n Generar PDF:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Permite generar informaci\u00F3n almacenada de los equipos de acuerdo a los diferentes estados en un formato PDF que se puede compartir, imprimir y visualizar de manera consistente en una variedad de dispositivos y plataformas. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "ul", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Bot\u00F3n Iniciar Mantenimiento:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, " Permite iniciar un proceso de mantenimiento en un equipo. Este proceso de mantenimiento puede implicar una variedad de actividades, como reparaci\u00F3n, limpieza, actualizaci\u00F3n o cualquier acci\u00F3n necesaria para mantener el funcionamiento adecuado. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaequipoComponent_ng_template_52_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r77); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r78.reset(); })("click", function ListaequipoComponent_ng_template_52_Template_button_click_31_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r77); const modal_r75 = restoredCtx.$implicit; return modal_r75.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
// import { Usuario } from 'src/app/account/auth/login/models/usuario';
class ListaequipoComponent {
    constructor(equipoService, modalService, //para abrir el modal openModal()
    fb, authService) {
        this.equipoService = equipoService;
        this.modalService = modalService;
        this.fb = fb;
        this.authService = authService;
        this.years = [];
        this.equipos = [];
        // categoria !: Categoria[];
        this.categorial = []; //LISTA MOSTRAR
        this.ubicacionel = []; //LISTA MOSTRAR
        /**ROLES */
        this.estudiante = src_app_enum_role_enum__WEBPACK_IMPORTED_MODULE_3__.Role.ROLE_ESTUDIANTE;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.formulario = this.inifc();
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Equipo' }, { label: 'Registro', active: true }];
        this.user = this.authService.getUserFromLocalCache();
        /**table */
        this.dtOptions = {
            columnDefs: [
                { className: "dt-center", targets: '_all' },
                { orderable: false, targets: [1] },
                { searchable: false, targets: [1] },
                // { width: "50%", targets: [0, 1] },
                { responsivePriority: 1, targets: -1 },
            ],
            lengthMenu: [5, 10, 20, 50],
            destroy: true,
            language: {
                url: '//cdn.datatables.net/plug-ins/1.13.5/i18n/es-ES.json',
                lengthMenu: "Mostrar _MENU_ registros",
                zeroRecords: "Ningún dato encontrado",
            },
            pagingType: 'full_numbers',
            responsive: true,
        };
        const currentYear = new Date().getFullYear();
        for (let year = currentYear; year >= currentYear - 20; year--) {
            this.years.push(year);
        }
        this.cargarDatos();
        this.cargarCategorias();
        this.cargarUbicaciones();
    }
    inifc() {
        return this.fb.group({
            numserie: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            modelo: ['',],
            numinventario: ['',],
            marca: ['',],
            anio: ['',],
            estado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            categoria: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            ubicacione: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            ip: ['',],
            descripcion: ['',],
        });
    }
    // getPermisos() {
    //   return this.authService.hasRole(this.estudiante)
    // }
    reset() {
        this.formulario.reset();
    }
    cargarDatos() {
        this.equipoService.equipos().subscribe((resp) => {
            this.equipos = resp;
            this.dtTrigger.next(null);
        });
    }
    cargarCategorias() {
        this.equipoService.categorias().subscribe((resp) => {
            this.categorial = resp;
        });
    }
    cargarUbicaciones() {
        this.equipoService.ubicaciones().subscribe((resp) => {
            this.ubicacionel = resp;
        });
    }
    guardar() {
        if (this.formulario.valid) {
            const numserie = this.formulario.get('numserie').value;
            const numinventario = this.formulario.get('numinventario').value;
            const c = new _models_equipo__WEBPACK_IMPORTED_MODULE_2__.Categoria(this.formulario.get('categoria').value);
            const modelo = this.formulario.get('modelo').value;
            const marca = this.formulario.get('marca').value;
            const estado = this.formulario.get('estado').value;
            const ip = this.formulario.get('ip').value;
            const anio = this.formulario.get('anio').value;
            const u = new _models_equipo__WEBPACK_IMPORTED_MODULE_2__.Ubicacion(this.formulario.get('ubicacione').value);
            const descripcion = this.formulario.get('descripcion').value;
            const usuario = new _models_equipo__WEBPACK_IMPORTED_MODULE_2__.Usuario(this.user.id);
            this.equipo = new _models_equipo__WEBPACK_IMPORTED_MODULE_2__.Equipo(numinventario, numserie, marca, modelo, anio, descripcion, ip, estado, c, u, usuario);
            this.equipoService.guardar(this.equipo).subscribe((resp) => {
                if (resp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Éxito', 'Almacenado correctamente', 'success');
                    this.formulario.reset();
                    this.modalService.dismissAll();
                    this.reload();
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Ocurrio un problema', '', 'warning');
                }
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                position: 'center',
                title: 'Faltan datos en el formulario',
                text: 'completar campos requeridos',
                icon: 'warning',
            });
        }
    }
    openModalEditar(content, equipoe) {
        this.equipoE = equipoe;
        this.formulario.patchValue(equipoe);
        this.modalService.open(content, { size: 'lg', backdrop: 'static', keyboard: false });
        this.formulario.get("categoria").setValue(equipoe.categoria.id);
        this.formulario.get("ubicacione").setValue(equipoe.ubicacione.id);
    }
    openModalEditarEstado(content, equipoe) {
        this.equipoE = equipoe;
        this.formulario.patchValue(equipoe);
        this.modalService.open(content);
    }
    editar() {
        const anioCompra = this.formulario.get('anio').value;
        const anioActual = new Date().getFullYear();
        const aniosTranscurridos = anioActual - anioCompra;
        const nuevoEstado = this.formulario.controls['estado'].value;
        if (nuevoEstado === 'Bueno' || nuevoEstado === 'Dañado') {
            if (this.formulario.valid) {
                this.equipoE.id = this.equipoE.id;
                this.equipoE.numinventario = this.formulario.controls['numinventario'].value;
                this.equipoE.numserie = this.formulario.controls['numserie'].value;
                this.equipoE.marca = this.formulario.controls['marca'].value;
                this.equipoE.modelo = this.formulario.controls['modelo'].value;
                this.equipoE.anio = this.formulario.controls['anio'].value;
                this.equipoE.descripcion = this.formulario.controls['descripcion'].value;
                this.equipoE.ip = this.formulario.controls['ip'].value;
                this.equipoE.estado = this.formulario.controls['estado'].value;
                this.equipoE.categoria.id = this.formulario.controls['categoria'].value;
                this.equipoE.ubicacione.id = this.formulario.controls['ubicacione'].value;
                this.equipoE.usuarioe.id = this.user.id;
                this.equipoService.editarEquipo(this.equipoE).subscribe(resp => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Éxito', 'Modificado correctamente', 'success');
                    this.reload();
                    this.formulario.reset();
                    this.modalService.dismissAll();
                }, (err) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        title: 'Error',
                        text: `Algo fallo`,
                        icon: 'error',
                    });
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    position: 'center',
                    title: 'Faltan datos en el formulario',
                    text: 'completar campos requeridos',
                    icon: 'warning',
                });
            }
        }
        else if (aniosTranscurridos >= 4) {
            if (this.formulario.valid) {
                this.equipoE.id = this.equipoE.id;
                this.equipoE.numinventario = this.formulario.controls['numinventario'].value;
                this.equipoE.numserie = this.formulario.controls['numserie'].value;
                this.equipoE.marca = this.formulario.controls['marca'].value;
                this.equipoE.modelo = this.formulario.controls['modelo'].value;
                this.equipoE.anio = this.formulario.controls['anio'].value;
                this.equipoE.descripcion = this.formulario.controls['descripcion'].value;
                this.equipoE.ip = this.formulario.controls['ip'].value;
                this.equipoE.estado = this.formulario.controls['estado'].value;
                this.equipoE.categoria.id = this.formulario.controls['categoria'].value;
                this.equipoE.ubicacione.id = this.formulario.controls['ubicacione'].value;
                this.equipoE.usuarioe.id = this.user.id;
                this.equipoService.editarEquipo(this.equipoE).subscribe(resp => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Éxito', 'Modificado correctamente', 'success');
                    this.reload();
                    this.formulario.reset();
                    this.modalService.dismissAll();
                }, (err) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        title: 'Error',
                        text: `Algo fallo`,
                        icon: 'error',
                    });
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    position: 'center',
                    title: 'Faltan datos en el formulario',
                    text: 'completar campos requeridos',
                    icon: 'warning',
                });
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Error', 'No se puede cambiar el estado hasta que pasen al menos 4 años desde la compra.', 'error');
        }
    }
    editarEstado() {
        // Obtén el año de compra almacenado
        const anioCompra = this.formulario.get('anio').value;
        // Obtén el año actual
        const anioActual = new Date().getFullYear();
        // Calcula cuántos años han transcurrido desde la compra
        const aniosTranscurridos = anioActual - anioCompra;
        const nuevoEstado = this.formulario.controls['estado'].value;
        if (nuevoEstado === 'Bueno' || nuevoEstado === 'Dañado') {
            this.equipoE.id = this.equipoE.id;
            this.equipoE.estado = this.formulario.controls['estado'].value;
            this.equipoService.editarEquipo(this.equipoE).subscribe(resp => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Éxito', 'Estado Modificado correctamente', 'success');
                this.reload();
                this.formulario.reset();
                this.modalService.dismissAll();
            }, (err) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    title: 'Error',
                    text: `Algo fallo`,
                    icon: 'error',
                });
            });
        }
        else if (aniosTranscurridos >= 4) {
            // Realiza la edición del estado
            this.equipoE.id = this.equipoE.id;
            this.equipoE.estado = this.formulario.controls['estado'].value;
            this.equipoService.editarEquipo(this.equipoE).subscribe(resp => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Éxito', 'Estado Modificado correctamente', 'success');
                this.reload();
                this.formulario.reset();
                this.modalService.dismissAll();
            }, (err) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    title: 'Error',
                    text: `Algo fallo`,
                    icon: 'error',
                });
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Error', 'No se puede cambiar el estado hasta que pasen al menos 4 años desde la compra.', 'error');
        }
    }
    openModal(content) {
        this.modalService.open(content, { size: 'lg', backdrop: 'static', keyboard: false });
    }
    esCampoValido(campo) {
        const validarCampo = this.formulario.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
            ? 'is-invalid' : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched) ? 'is-valid' : '';
    }
    reload() {
        this.dtElement.dtInstance.then((dtInstance) => {
            this.equipos = [];
            dtInstance.destroy();
            this.cargarDatos();
        });
    }
    openModalPDF(content) {
        this.modalService.open(content, { backdrop: 'static', keyboard: false, size: 'sm' });
    }
    //PARA LA AYUDA
    openModalA(content) {
        this.modalService.open(content, {
            keyboard: false,
            scrollable: true, size: 'lg'
        });
    }
    estados(event) {
        this.estado = event.target.value;
    }
    imprimir() {
        if (this.estado === "Todos") {
            this.descargarPdfFullEquipo();
        }
        else {
            this.descargarPdfParametro();
        }
    }
    descargarPdfParametro() {
        this.equipoService.generarPdfEquipoxEstado(this.estado).subscribe((data) => {
            const blob = new Blob([data], { type: 'application/pdf' });
            const link = document.createElement('a');
            let url = URL.createObjectURL(blob);
            window.open(url);
        });
    }
    descargarPdfFullEquipo() {
        this.equipoService.generarPdfFullEquipo().subscribe((data) => {
            const blob = new Blob([data], { type: 'application/pdf' });
            // const link=document.createElement('a');
            let url = URL.createObjectURL(blob);
            window.open(url);
        });
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
}
ListaequipoComponent.ɵfac = function ListaequipoComponent_Factory(t) { return new (t || ListaequipoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_equipo_service__WEBPACK_IMPORTED_MODULE_4__.EquipoService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_account_auth_login_service_autenticacion_service__WEBPACK_IMPORTED_MODULE_5__.AutenticacionService)); };
ListaequipoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ListaequipoComponent, selectors: [["app-listaequipo"]], viewQuery: function ListaequipoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 54, vars: 4, consts: [[1, "container-fluid"], ["title", "Equipo", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "col-sm-6"], [1, "col-sm-3", "mb-3"], ["ngbTooltip", "Generar PDF", 1, "btn", "btn-outline-info", "dripicons-print", 3, "click"], [1, "text-sm-end", "mb-3"], ["type", "button", "data-toggle", "tooltip", "ngbTooltip", "Ayuda", "data-placement", "end", 1, "btn", "btn-info", "btn-icon", "rounded-circle", "btn-transparent", 2, "margin-right", "+35px", 3, "click"], [1, "fa", "fa-question-circle", "fa-lg"], [1, "row", "mb-2"], [1, "col-sm-12"], [1, "btn", "btn-info", "btn-rounded", "bg-gradient", 3, "click"], [1, "mdi", "mdi-plus", "me-1"], [1, "table-responsive"], ["datatable", "", "width", "100%", 1, "row-border", "hover", 3, "dtOptions", "dtTrigger"], [1, "table", "bg-light", "bg-gradient"], [1, ""], [4, "ngFor", "ngForOf"], ["role", "document"], ["agg", ""], ["contentEditar", ""], ["contentEditarEstado", ""], ["contentpdfestado", ""], ["ayudaEquipo", ""], ["scope", "row"], [1, "w-5", "p-1", "rounded", "text-white", 3, "ngClass"], ["ngbTooltip", "Editar", 1, "btn", "btn-outline-info", "btn-sm", "dripicons-document-edit", 3, "click"], ["ngbTooltip", "Cambia Estado", 1, "btn", "btn-outline-info", "btn-sm", "dripicons-clockwise", 3, "click"], ["ngbTooltip", "Iniciar Mantenimiento", 1, "btn", "btn-outline-info", "btn-sm", "dripicons-gear", 3, "routerLink"], ["id", "modalEquipo", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [3, "formGroup", "ngSubmit"], [1, "modal-body"], [1, "text-danger", "mb-4"], [1, "col-md-4"], [1, "mb-3"], [1, "text-danger"], ["type", "text", "name", "numserie", "autocomplete", "off", "formControlName", "numserie", 1, "form-control"], [1, "invalid-feedback"], [4, "ngIf"], ["type", "text", "name", "modelo", "autocomplete", "off", "formControlName", "modelo", 1, "form-control"], ["type", "text", "name", "ip", "autocomplete", "off", "formControlName", "ip", "maxlength", "15", 1, "form-control"], ["type", "text", "name", "numinventario", "autocomplete", "off", "formControlName", "numinventario", 1, "form-control"], ["type", "text", "name", "marca", "autocomplete", "off", "formControlName", "marca", 1, "form-control"], ["formControlName", "anio"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "categoria"], ["formControlName", "estado", 1, "form-control"], ["value", ""], ["value", "Bueno", "selected", ""], ["value", "Da\u00F1ado", "selected", ""], ["value", "Obsoleto", "selected", ""], ["formControlName", "ubicacione"], [1, "col-md-12"], ["cols", "110", "rows", "3", "name", "descripcion", "formControlName", "descripcion", "autocomplete", "off", "placeholder", "...", 1, "form-control"], [1, "modal-footer", "mt-5"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-info"], [3, "value"], ["value", "Descargo", "selected", ""], [1, "col-md-10"], ["formControlName", "estado", 1, "form-control", 3, "change"], ["value", "", "selected", ""], ["value", "Todos", "selected", ""], [1, "modal-footer"], [1, "modal-headerA"], [1, "modal-titleA"], ["type", "button", "aria-label", "Close", 1, "closeA", 3, "click"], [2, "text-align", "justify"], [2, "margin-bottom", "20px"], [2, "font-size", "15px"]], template: function ListaequipoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaequipoComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r80); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](51); return ctx.openModalPDF(_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaequipoComponent_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r80); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](53); return ctx.openModalA(_r9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaequipoComponent_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r80); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](45); return ctx.openModal(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Agregar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "thead", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "N\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "N\u00B0 Inventario");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "N\u00B0 Serie");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Marca");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Modelo");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Ubicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, ListaequipoComponent_tr_43_Template, 22, 18, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, ListaequipoComponent_ng_template_44_Template, 91, 20, "ng-template", 21, 22, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, ListaequipoComponent_ng_template_46_Template, 93, 20, "ng-template", 21, 23, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, ListaequipoComponent_ng_template_48_Template, 31, 5, "ng-template", 21, 24, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, ListaequipoComponent_ng_template_50_Template, 32, 5, "ng-template", 21, 25, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, ListaequipoComponent_ng_template_52_Template, 33, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.equipos);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_6__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltip, angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgOptionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"]], styles: ["@charset \"UTF-8\";\n.btn-icon.rounded-circle[_ngcontent-%COMP%] {\n  width: 30px;\n  \n  height: 30px;\n  padding: 0;\n  \n  line-height: 25px;\n  \n  font-size: 23px;\n  \n}\n.btn-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  \n  border: none;\n  \n  color: #007bff;\n  \n}\n\n.btn-transparent[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  \n}\n.closeA[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  top: 25px;\n  \n  left: 750px;\n  \n}\n.modal-headerA[_ngcontent-%COMP%] {\n  background-color: #6e0000;\n  height: 80px;\n}\n.modal-titleA[_ngcontent-%COMP%] {\n  color: #fff;\n  \n  position: absolute;\n  \n  top: 20px;\n  \n  left: 12px;\n}\n.modal-footerA[_ngcontent-%COMP%] {\n  background-color: #6e0000;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhZXF1aXBvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtFQUNJLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMERBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLCtDQUFBO0FBQ0o7QUFFQTtFQUNJLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EscURBQUE7QUFDSjtBQUVBLGdGQUFBO0FBQ0E7RUFDSSxjQUFBO0VBQ0EsNERBQUE7QUFDSjtBQUVBO0VBQ0ksa0JBQUE7RUFDSSwwREFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQUNSO0FBR0E7RUFDRyx5QkFBQTtFQUNDLFlBQUE7QUFBSjtBQUlBO0VBQ0ksV0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDSSwwREFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtFQUNJLFVBQUE7QUFEWjtBQUlBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBREoiLCJmaWxlIjoibGlzdGFlcXVpcG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uYnRuLWljb24ucm91bmRlZC1jaXJjbGUge1xuICB3aWR0aDogMzBweDtcbiAgLyogQ2FtYmlhIGVsIHRhbWHDsW8gc2Vnw7puIHR1cyBwcmVmZXJlbmNpYXMgKi9cbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAwO1xuICAvKiBFbGltaW5hIGVsIHJlbGxlbm8gcGFyYSBxdWUgc2VhIGNvbXBsZXRhbWVudGUgcmVkb25kbyAqL1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgLyogQWxpbmVhIGVsIGNvbnRlbmlkbyB2ZXJ0aWNhbG1lbnRlICovXG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgLyogQWp1c3RhIGVsIHRhbWHDsW8gZGVsIGljb25vIHNpIGVzIG5lY2VzYXJpbyAqL1xufVxuXG4uYnRuLXRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC8qIEVzdGFibGVjZSBlbCBmb25kbyBjb21vIHRyYW5zcGFyZW50ZSAqL1xuICBib3JkZXI6IG5vbmU7XG4gIC8qIEVsaW1pbmEgZWwgYm9yZGUgc2kgZXMgbmVjZXNhcmlvICovXG4gIGNvbG9yOiAjMDA3YmZmO1xuICAvKiBDYW1iaWEgZWwgY29sb3IgZGVsIHRleHRvIHNlZ8O6biB0dXMgcHJlZmVyZW5jaWFzICovXG59XG5cbi8qIFBlcnNvbmFsaXphIGVsIGNvbG9yIGRlIHRleHRvIGN1YW5kbyBzZSBwYXNhIGVsIGN1cnNvciBwb3IgZW5jaW1hIGRlbCBib3TDs24gKi9cbi5idG4tdHJhbnNwYXJlbnQ6aG92ZXIge1xuICBjb2xvcjogIzAwNTZiMztcbiAgLyogQ2FtYmlhIGVsIGNvbG9yIGRlbCB0ZXh0byBhbCBwYXNhciBlbCBjdXJzb3IgcG9yIGVuY2ltYSAqL1xufVxuXG4uY2xvc2VBIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiBFc3RhYmxlY2VyIHBvc2ljacOzbiBhYnNvbHV0YSBwYXJhIHBvc2ljaW9uYXIgZWwgYm90w7NuICovXG4gIHRvcDogMjVweDtcbiAgLyogRGlzdGFuY2lhIGRlc2RlIGxhIHBhcnRlIHN1cGVyaW9yICovXG4gIGxlZnQ6IDc1MHB4O1xuICAvKiBEaXN0YW5jaWEgZGVzZGUgbGEgaXpxdWllcmRhICovXG59XG5cbi5tb2RhbC1oZWFkZXJBIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlMDAwMDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4ubW9kYWwtdGl0bGVBIHtcbiAgY29sb3I6ICNmZmY7XG4gIC8qIENvbG9yIGRlbCB0ZXh0byBlbiBlbCBlbmNhYmV6YWRvICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogRXN0YWJsZWNlciBwb3NpY2nDs24gYWJzb2x1dGEgcGFyYSBwb3NpY2lvbmFyIGVsIGJvdMOzbiAqL1xuICB0b3A6IDIwcHg7XG4gIC8qIERpc3RhbmNpYSBkZXNkZSBsYSBwYXJ0ZSBzdXBlcmlvciAqL1xuICBsZWZ0OiAxMnB4O1xufVxuXG4ubW9kYWwtZm9vdGVyQSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZTAwMDA7XG4gIGhlaWdodDogNTBweDtcbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_equipo_equipo_module_ts.js.map