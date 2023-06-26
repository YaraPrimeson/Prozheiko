exports.id = 29;
exports.ids = [29];
exports.modules = {

/***/ 39029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40667);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43598);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98591);
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53328);
/* harmony import */ var _form_visit_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67093);
/* harmony import */ var _form_visit_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_form_visit_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ 






const FormVisit = ()=>{
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_3___default()(new Date()));
    const handleChangeName = (e)=>{
        const value = e.target.value;
        setName(value);
    };
    const handleChangePhone = (e)=>{
        let numb = Number(e?.target?.value.replace(/\D/g, "").replace(/^7/, "8"));
        setPhone(numb);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_form_visit_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: (_form_visit_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form__title),
                children: "Заплануйте свій візит до стоматолога"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: (_form_visit_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input),
                onChange: handleChangeName,
                value: name,
                type: "text",
                name: "name",
                placeholder: "Ім’я та Прізвище"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_input_mask__WEBPACK_IMPORTED_MODULE_2___default()), {
                placeholder: "+380 093 123 45 67",
                className: (_form_visit_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input),
                value: phone,
                onChange: handleChangePhone,
                type: "tel",
                mask: "+(380) 99-999-99-99"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.LocalizationProvider, {
                dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__/* .AdapterDayjs */ .y,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.MobileDateTimePicker, {
                    sx: {
                        mt: "20px"
                    },
                    disablePast: true,
                    ampm: false,
                    className: (_form_visit_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input),
                    // renderInput={(params) => <TextField {...params} />}
                    value: date,
                    onChange: (newValue)=>setDate(newValue)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_form_visit_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button),
                children: "ВІДПРАВИТИ"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormVisit);


/***/ }),

/***/ 67093:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "form-visit_form__WnnMb",
	"form__title": "form-visit_form__title__spafJ",
	"input": "form-visit_input__wvGy9",
	"button": "form-visit_button__2OhWw"
};


/***/ })

};
;