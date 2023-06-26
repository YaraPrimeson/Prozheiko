exports.id = 631;
exports.ids = [631];
exports.modules = {

/***/ 63446:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 90510));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 27977, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7649, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 51232))

/***/ }),

/***/ 19226:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 90125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 86249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 97844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 61522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 13100, 23))

/***/ }),

/***/ 90510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./app/components/header/header.module.scss
var header_module = __webpack_require__(66122);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
;// CONCATENATED MODULE: ./app/assets/images/Logo.webp
/* harmony default export */ const Logo = ({"src":"/_next/static/media/Logo.a3e20e19.webp","height":66,"width":380,"blurDataURL":"data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAAAAQUxQSAkAAAAAPS4fPTw2ODoAVlA4ICgAAACwAQCdASoIAAEAAkA4JZQCdAEO/gLsAP77/zP4HogTwJIoN2ojQAAA","blurWidth":8,"blurHeight":1});
;// CONCATENATED MODULE: ./app/components/header/Header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const TheHeader = ()=>{
    const pathname = (0,navigation.usePathname)();
    const [selectOpen, setSelectOpen] = (0,react_.useState)(false);
    const handleSelectOpen = ()=>{
        setSelectOpen(true);
    };
    const handleSelectClose = ()=>{
        setSelectOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                className: pathname === "/" ? `${(header_module_default()).active} ${(header_module_default()).link}` : (header_module_default()).link,
                href: "/client/public",
                children: "ГОЛОВНА"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                onMouseEnter: handleSelectOpen,
                onMouseLeave: handleSelectClose,
                className: (header_module_default()).about__container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: pathname === "/about-clinic" || pathname === "/about-doctors" ? `${(header_module_default()).active} ${(header_module_default()).link}` : (header_module_default()).link,
                        children: "ПРО НАС"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        className: selectOpen ? `${(header_module_default()).active__icon} ${(header_module_default()).icon}` : (header_module_default()).icon,
                        width: "8",
                        height: "5",
                        viewBox: "0 0 8 5",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M1 1L4 4L7 1",
                            stroke: pathname === "/about-clinic" || pathname === "/about-doctors" ? "#12979B" : "#292929",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: selectOpen ? `${(header_module_default()).select} ${(header_module_default()).select_active} ` : (header_module_default()).select,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                onClick: handleSelectClose,
                                className: (header_module_default()).link__about__wrapper,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: `${(header_module_default()).link} ${(header_module_default()).link__about}`,
                                    href: "/about-clinic",
                                    children: "ПРО КЛІНІКУ"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                onClick: handleSelectClose,
                                className: (header_module_default()).link__about__wrapper,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: `${(header_module_default()).link} ${(header_module_default()).link__about}`,
                                    href: "/about-doctors",
                                    children: "ЛІКАРІ"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                className: pathname === "/services-and-prices" ? `${(header_module_default()).active} ${(header_module_default()).link}` : (header_module_default()).link,
                href: "/services-and-prices",
                children: "ПОСЛУГИ ТА ЦІНИ"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                className: pathname === "/blog" ? `${(header_module_default()).active} ${(header_module_default()).link}` : (header_module_default()).link,
                href: "/blog",
                children: "БЛОГ"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                loading: "lazy",
                src: Logo,
                alt: "prozheiko dental studio",
                className: (header_module_default()).img
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/contacts",
                className: pathname === "/contacts" ? `${(header_module_default()).active} ${(header_module_default()).link}` : (header_module_default()).link,
                children: "КОНТАКТИ"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: (header_module_default()).button,
                onClick: ()=>console.log("test"),
                children: "ЗАПИСАТИСЬ НА ВІЗИТ"
            })
        ]
    });
};
/* harmony default export */ const Header = (TheHeader);


/***/ }),

/***/ 52400:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__2E9fz",
	"info__container": "footer_info__container__j6yT9",
	"logo__img": "footer_logo__img__tsEmF",
	"logo__subtitle": "footer_logo__subtitle__P_cM8",
	"logo__phone": "footer_logo__phone__NPeGj",
	"info__title": "footer_info__title__ZHC8e",
	"general__list__container": "footer_general__list__container__r78su",
	"schedule": "footer_schedule__SQjAT",
	"schedule__wrapper": "footer_schedule__wrapper__0SSd9",
	"schedule__container": "footer_schedule__container__s136W",
	"footer__text": "footer_footer__text__LJyaP",
	"contacts__container": "footer_contacts__container__cdUze",
	"contact__link__container": "footer_contact__link__container__3o0GF",
	"contact__link": "footer_contact__link__foYVI",
	"social__container": "footer_social__container__FobfC",
	"social__text": "footer_social__text__Th3ha",
	"social__links__wrapper": "footer_social__links__wrapper__lrXUK",
	"social__link": "footer_social__link__CCBJh",
	"facebook": "footer_facebook__HfRn0"
};


/***/ }),

/***/ 66122:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__RatYy",
	"link": "header_link__Qbwyk",
	"about__container": "header_about__container__qyqte",
	"icon": "header_icon__pbbv6",
	"active__icon": "header_active__icon__Z0Oyg",
	"select": "header_select__XNgOA",
	"select_active": "header_select_active__CGK6f",
	"link__about__wrapper": "header_link__about__wrapper__zcP9t",
	"link__about": "header_link__about__pFxJp",
	"img": "header_img__nOsWy",
	"active": "header_active__aCW7X",
	"button": "header_button__MmSfo"
};


/***/ }),

/***/ 98379:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "global_wrapper__zqs7_",
	"title": "global_title__K63ol",
	"text": "global_text__WrRch",
	"button": "global_button__zKheS",
	"hover__link": "global_hover__link__4ZOu5"
};


/***/ }),

/***/ 54686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./app/styles/globals.scss
var globals = __webpack_require__(38036);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7887);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21313);
;// CONCATENATED MODULE: ./app/components/header/Header.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/yariksemenov/Desktop/prozheiko/client/app/components/header/Header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Header = (__default__);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(34834);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./app/components/footer/footer.module.scss
var footer_module = __webpack_require__(52400);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
// EXTERNAL MODULE: ./app/styles/global.module.scss
var global_module = __webpack_require__(98379);
var global_module_default = /*#__PURE__*/__webpack_require__.n(global_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(10993);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./app/assets/images/Logo_white.webp
/* harmony default export */ const Logo_white = ({"src":"/_next/static/media/Logo_white.45151b37.webp","height":96,"width":500,"blurDataURL":"data:image/webp;base64,UklGRmYAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAIBAGLSQhIyVYSjVPUkpOTwBWUDggLgAAAJABAJ0BKggAAgACQDglnAACnP3OAAD+/Jzid5167FKZ+1aS1gwfABmIYGKAAAA=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./app/components/footer/Footer.tsx







const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: (footer_module_default()).footer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (footer_module_default()).info__container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).logo__container,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: (footer_module_default()).logo__img,
                                src: Logo_white,
                                alt: "My Image",
                                width: 250,
                                height: 50,
                                loading: "lazy"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (footer_module_default()).logo__subtitle,
                                children: "Місце здорових посмішок"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: (footer_module_default()).logo__phone,
                                href: "tel:+38 (073) 38-38-532",
                                children: "+38 (073) 38-38-532"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).general,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: (footer_module_default()).info__title,
                                children: "ПРО ГОЛОВНЕ"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: (footer_module_default()).general__list__container,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: (footer_module_default()).general__list,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            className: `${(global_module_default()).hover__link} ${(footer_module_default()).footer__text}`,
                                            href: "@/src/app/components/footer/Footer#",
                                            children: "Консультація стоматолога"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: (footer_module_default()).general__list,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            className: `${(global_module_default()).hover__link} ${(footer_module_default()).footer__text}`,
                                            href: "@/src/app/components/footer/Footer#",
                                            children: "Лазерне відбілювання"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: (footer_module_default()).general__list,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            className: `${(global_module_default()).hover__link} ${(footer_module_default()).footer__text}`,
                                            href: "@/src/app/components/footer/Footer#",
                                            children: "Лікування карієсу"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: (footer_module_default()).general__list,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            className: `${(global_module_default()).hover__link} ${(footer_module_default()).footer__text}`,
                                            href: "@/src/app/components/footer/Footer#",
                                            children: "Ціни"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: (footer_module_default()).general__list,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            className: `${(global_module_default()).hover__link} ${(footer_module_default()).footer__text}`,
                                            href: "@/src/app/components/footer/Footer#",
                                            children: "Про клініку"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).schedule,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: (footer_module_default()).info__title,
                                children: "ГОДИНИ ПРИЙОМУ"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (footer_module_default()).schedule__wrapper,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (footer_module_default()).schedule__container,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (footer_module_default()).footer__text,
                                                children: "Понеділок - П’ятниця"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (footer_module_default()).footer__text,
                                                children: "Субота"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (footer_module_default()).footer__text,
                                                children: "Неділя"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (footer_module_default()).schedule__container,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (footer_module_default()).footer__text,
                                                children: "08:00 - 19:00"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (footer_module_default()).footer__text,
                                                children: "09:00 - 15:00"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (footer_module_default()).footer__text,
                                                children: "За запитом"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).contacts__container,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: (footer_module_default()).info__title,
                                children: "КОНТАКТИ"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (footer_module_default()).contact__link__container,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: (footer_module_default()).contact__link,
                                        href: "tel:+38 (073) 38-38-532",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                width: "18",
                                                height: "17",
                                                viewBox: "0 0 18 17",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M10.7036 3.75C11.4361 3.89292 12.1094 4.25119 12.6371 4.77895C13.1649 5.30671 13.5232 5.97995 13.6661 6.7125M10.7036 0.75C12.2255 0.919077 13.6448 1.60063 14.7283 2.68276C15.8118 3.76488 16.4951 5.18326 16.6661 6.705M15.9161 12.69V14.94C15.9169 15.1489 15.8741 15.3556 15.7905 15.547C15.7068 15.7384 15.5841 15.9102 15.4301 16.0514C15.2762 16.1926 15.0945 16.3001 14.8966 16.367C14.6988 16.4339 14.4891 16.4588 14.2811 16.44C11.9732 16.1892 9.75634 15.4006 7.80859 14.1375C5.99646 12.986 4.46009 11.4496 3.30859 9.6375C2.04107 7.6809 1.25227 5.45325 1.00609 3.135C0.987345 2.9276 1.01199 2.71857 1.07846 2.52122C1.14493 2.32387 1.25177 2.14252 1.39216 1.98872C1.53256 1.83491 1.70344 1.71203 1.89393 1.62789C2.08442 1.54375 2.29034 1.5002 2.49859 1.5H4.74859C5.11257 1.49642 5.46543 1.62531 5.74141 1.86265C6.01739 2.09999 6.19765 2.42959 6.24859 2.79C6.34355 3.51005 6.51968 4.21705 6.77359 4.8975C6.8745 5.16594 6.89633 5.45769 6.83652 5.73816C6.7767 6.01863 6.63773 6.27608 6.43609 6.48L5.48359 7.4325C6.55125 9.31016 8.10593 10.8648 9.98359 11.9325L10.9361 10.98C11.14 10.7784 11.3975 10.6394 11.6779 10.5796C11.9584 10.5198 12.2501 10.5416 12.5186 10.6425C13.199 10.8964 13.906 11.0725 14.6261 11.1675C14.9904 11.2189 15.3231 11.4024 15.561 11.6831C15.7988 11.9638 15.9252 12.3222 15.9161 12.69Z",
                                                    stroke: "white",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }),
                                            "+38 (073) 38-38-532"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: (footer_module_default()).contact__link,
                                        href: "tel:+38 (068) 38-38-532",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                width: "18",
                                                height: "17",
                                                viewBox: "0 0 18 17",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M10.7036 3.75C11.4361 3.89292 12.1094 4.25119 12.6371 4.77895C13.1649 5.30671 13.5232 5.97995 13.6661 6.7125M10.7036 0.75C12.2255 0.919077 13.6448 1.60063 14.7283 2.68276C15.8118 3.76488 16.4951 5.18326 16.6661 6.705M15.9161 12.69V14.94C15.9169 15.1489 15.8741 15.3556 15.7905 15.547C15.7068 15.7384 15.5841 15.9102 15.4301 16.0514C15.2762 16.1926 15.0945 16.3001 14.8966 16.367C14.6988 16.4339 14.4891 16.4588 14.2811 16.44C11.9732 16.1892 9.75634 15.4006 7.80859 14.1375C5.99646 12.986 4.46009 11.4496 3.30859 9.6375C2.04107 7.6809 1.25227 5.45325 1.00609 3.135C0.987345 2.9276 1.01199 2.71857 1.07846 2.52122C1.14493 2.32387 1.25177 2.14252 1.39216 1.98872C1.53256 1.83491 1.70344 1.71203 1.89393 1.62789C2.08442 1.54375 2.29034 1.5002 2.49859 1.5H4.74859C5.11257 1.49642 5.46543 1.62531 5.74141 1.86265C6.01739 2.09999 6.19765 2.42959 6.24859 2.79C6.34355 3.51005 6.51968 4.21705 6.77359 4.8975C6.8745 5.16594 6.89633 5.45769 6.83652 5.73816C6.7767 6.01863 6.63773 6.27608 6.43609 6.48L5.48359 7.4325C6.55125 9.31016 8.10593 10.8648 9.98359 11.9325L10.9361 10.98C11.14 10.7784 11.3975 10.6394 11.6779 10.5796C11.9584 10.5198 12.2501 10.5416 12.5186 10.6425C13.199 10.8964 13.906 11.0725 14.6261 11.1675C14.9904 11.2189 15.3231 11.4024 15.561 11.6831C15.7988 11.9638 15.9252 12.3222 15.9161 12.69Z",
                                                    stroke: "white",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }),
                                            "+38 (068) 38-38-532"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: (footer_module_default()).contact__link,
                                        href: "tel:+38 (044) 38-38-532",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                width: "18",
                                                height: "17",
                                                viewBox: "0 0 18 17",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M10.7036 3.75C11.4361 3.89292 12.1094 4.25119 12.6371 4.77895C13.1649 5.30671 13.5232 5.97995 13.6661 6.7125M10.7036 0.75C12.2255 0.919077 13.6448 1.60063 14.7283 2.68276C15.8118 3.76488 16.4951 5.18326 16.6661 6.705M15.9161 12.69V14.94C15.9169 15.1489 15.8741 15.3556 15.7905 15.547C15.7068 15.7384 15.5841 15.9102 15.4301 16.0514C15.2762 16.1926 15.0945 16.3001 14.8966 16.367C14.6988 16.4339 14.4891 16.4588 14.2811 16.44C11.9732 16.1892 9.75634 15.4006 7.80859 14.1375C5.99646 12.986 4.46009 11.4496 3.30859 9.6375C2.04107 7.6809 1.25227 5.45325 1.00609 3.135C0.987345 2.9276 1.01199 2.71857 1.07846 2.52122C1.14493 2.32387 1.25177 2.14252 1.39216 1.98872C1.53256 1.83491 1.70344 1.71203 1.89393 1.62789C2.08442 1.54375 2.29034 1.5002 2.49859 1.5H4.74859C5.11257 1.49642 5.46543 1.62531 5.74141 1.86265C6.01739 2.09999 6.19765 2.42959 6.24859 2.79C6.34355 3.51005 6.51968 4.21705 6.77359 4.8975C6.8745 5.16594 6.89633 5.45769 6.83652 5.73816C6.7767 6.01863 6.63773 6.27608 6.43609 6.48L5.48359 7.4325C6.55125 9.31016 8.10593 10.8648 9.98359 11.9325L10.9361 10.98C11.14 10.7784 11.3975 10.6394 11.6779 10.5796C11.9584 10.5198 12.2501 10.5416 12.5186 10.6425C13.199 10.8964 13.906 11.0725 14.6261 11.1675C14.9904 11.2189 15.3231 11.4024 15.561 11.6831C15.7988 11.9638 15.9252 12.3222 15.9161 12.69Z",
                                                    stroke: "white",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }),
                                            "+38 (044) 38-38-532"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: (footer_module_default()).contact__link,
                                        href: "mailto:clients@prozheiko.kiev.ua",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                width: "22",
                                                height: "22",
                                                viewBox: "0 0 22 22",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M3.66668 3.66699H18.3333C19.3417 3.66699 20.1667 4.49199 20.1667 5.50033V16.5003C20.1667 17.5087 19.3417 18.3337 18.3333 18.3337H3.66668C2.65834 18.3337 1.83334 17.5087 1.83334 16.5003V5.50033C1.83334 4.49199 2.65834 3.66699 3.66668 3.66699Z",
                                                        stroke: "white",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M20.1667 5.5L11 11.9167L1.83334 5.5",
                                                        stroke: "white",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    })
                                                ]
                                            }),
                                            "clients@prozheiko.kiev.ua"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: (footer_module_default()).contact__link,
                                        href: "https://goo.gl/maps/SmPx58yXziv5shCo9",
                                        target: "_blank",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z",
                                                        stroke: "white",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z",
                                                        stroke: "white",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    })
                                                ]
                                            }),
                                            "Бульвар Дружби народів 6-Б"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (footer_module_default()).social__container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (footer_module_default()).social__text__wrapper,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (footer_module_default()).social__text,
                            children: "Усі права захищено \xa9 Стоматологічна клініка PROZHEIKO DENTAL STUDIO"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).social__links__wrapper,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "@/src/app/components/footer/Footer#",
                                className: `${(footer_module_default()).social__link} ${(footer_module_default()).facebook}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    width: "11",
                                    height: "20",
                                    viewBox: "0 0 11 20",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M9.67109 11.4688L10.2031 8H6.875V5.75C6.875 4.80078 7.33906 3.875 8.82969 3.875H10.3438V0.921875C10.3438 0.921875 8.97031 0.6875 7.65781 0.6875C4.91563 0.6875 3.125 2.34922 3.125 5.35625V8H0.078125V11.4688H3.125V19.8547C3.73672 19.9508 4.3625 20 5 20C5.6375 20 6.26328 19.9508 6.875 19.8547V11.4688H9.67109Z",
                                        fill: "white"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "@/src/app/components/footer/Footer#",
                                className: (footer_module_default()).social__link,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 16 16",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M5.27709 7.915C5.27709 6.45794 6.45794 5.27645 7.915 5.27645C9.37206 5.27645 10.5535 6.45794 10.5535 7.915C10.5535 9.37206 9.37206 10.5535 7.915 10.5535C6.45794 10.5535 5.27709 9.37206 5.27709 7.915ZM3.85074 7.915C3.85074 10.1597 5.67031 11.9793 7.915 11.9793C10.1597 11.9793 11.9793 10.1597 11.9793 7.915C11.9793 5.67031 10.1597 3.85074 7.915 3.85074C5.67031 3.85074 3.85081 5.67018 3.85081 7.915M11.1904 3.68959C11.1903 3.87745 11.246 4.0611 11.3503 4.21734C11.4546 4.37357 11.6029 4.49537 11.7764 4.56733C11.9499 4.63929 12.1409 4.65817 12.3251 4.6216C12.5094 4.58502 12.6787 4.49463 12.8116 4.36185C12.9444 4.22907 13.035 4.05987 13.0717 3.87564C13.1084 3.69141 13.0897 3.50043 13.0179 3.32685C12.946 3.15327 12.8244 3.00488 12.6682 2.90045C12.5121 2.79603 12.3285 2.74025 12.1406 2.74017H12.1402C11.8884 2.74029 11.647 2.84034 11.4689 3.01836C11.2908 3.19637 11.1906 3.43779 11.1904 3.68959ZM4.71734 14.3577C3.94566 14.3225 3.52623 14.194 3.24749 14.0854C2.87796 13.9415 2.61429 13.7702 2.33708 13.4934C2.05986 13.2165 1.88827 12.9531 1.74504 12.5836C1.63638 12.305 1.50784 11.8854 1.47276 11.1137C1.43439 10.2794 1.42673 10.0288 1.42673 7.91513C1.42673 5.80144 1.43502 5.55152 1.47276 4.71652C1.5079 3.94484 1.63739 3.5261 1.74504 3.24667C1.8889 2.87713 2.06024 2.61347 2.33708 2.33625C2.61391 2.05904 2.87732 1.88744 3.24749 1.74421C3.5261 1.63556 3.94566 1.50702 4.71734 1.47194C5.55164 1.43356 5.80227 1.4259 7.915 1.4259C10.0277 1.4259 10.2786 1.43407 11.1136 1.47206C11.8853 1.50721 12.304 1.6367 12.5835 1.74434C12.953 1.88757 13.2167 2.05955 13.4939 2.33638C13.7711 2.61322 13.942 2.87726 14.0859 3.2468C14.1946 3.5254 14.3231 3.94496 14.3582 4.71664C14.3966 5.55164 14.4042 5.80157 14.4042 7.91525C14.4042 10.0289 14.3966 10.2789 14.3582 11.1139C14.323 11.8855 14.1939 12.305 14.0859 12.5837C13.942 12.9532 13.7707 13.2169 13.4939 13.4935C13.217 13.7701 12.953 13.9417 12.5835 14.0855C12.3048 14.1942 11.8853 14.3227 11.1136 14.3578C10.2793 14.3962 10.0287 14.4038 7.915 14.4038C5.80132 14.4038 5.55139 14.3962 4.71734 14.3578M4.6518 0.0479333C3.8092 0.0863052 3.23344 0.21991 2.73061 0.415569C2.21018 0.617623 1.76903 0.888696 1.32852 1.32852C0.888 1.76834 0.617623 2.20955 0.415569 2.73061C0.21991 3.23375 0.0863052 3.8092 0.0479333 4.6518C0.00892817 5.49573 0 5.76554 0 7.915C0 10.0645 0.00892817 10.3343 0.0479333 11.1782C0.0863052 12.0209 0.21991 12.5962 0.415569 13.0994C0.617623 13.6198 0.888063 14.0619 1.32852 14.5015C1.76897 14.9411 2.20955 15.2118 2.73061 15.4144C3.23439 15.6101 3.8092 15.7437 4.6518 15.7821C5.49618 15.8204 5.76554 15.83 7.915 15.83C10.0645 15.83 10.3343 15.8211 11.1782 15.7821C12.0209 15.7437 12.5962 15.6101 13.0994 15.4144C13.6198 15.2118 14.061 14.9413 14.5015 14.5015C14.942 14.0617 15.2118 13.6198 15.4144 13.0994C15.6101 12.5962 15.7443 12.0208 15.7821 11.1782C15.8204 10.3336 15.8294 10.0645 15.8294 7.915C15.8294 5.76554 15.8204 5.49573 15.7821 4.6518C15.7437 3.80914 15.6101 3.23344 15.4144 2.73061C15.2118 2.21018 14.9413 1.76903 14.5015 1.32852C14.0617 0.888 13.6198 0.617623 13.1 0.415569C12.5962 0.21991 12.0208 0.085672 11.1788 0.0479333C10.3348 0.00937141 10.0651 0 7.91595 0C5.76681 0 5.49649 0.00892817 4.65212 0.0479333",
                                        fill: "white"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "@/src/app/components/footer/Footer#",
                                className: (footer_module_default()).social__link,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    width: "15",
                                    height: "10",
                                    viewBox: "0 0 15 10",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M13.9882 1.56471C13.8235 0.952941 13.3412 0.470588 12.7294 0.305882C11.6118 0 7.14118 0 7.14118 0C7.14118 0 2.67059 0 1.55294 0.294118C0.952941 0.458824 0.458824 0.952941 0.294118 1.56471C0 2.68235 0 5 0 5C0 5 0 7.32941 0.294118 8.43529C0.458824 9.04706 0.941176 9.52941 1.55294 9.69412C2.68235 10 7.14118 10 7.14118 10C7.14118 10 11.6118 10 12.7294 9.70588C13.3412 9.54118 13.8235 9.05882 13.9882 8.44706C14.2824 7.32941 14.2824 5.01176 14.2824 5.01176C14.2824 5.01176 14.2941 2.68235 13.9882 1.56471Z",
                                            fill: "white"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M5.71753 7.14075L9.43518 4.99957L5.71753 2.8584V7.14075Z",
                                            fill: "black"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const footer_Footer = (Footer);

;// CONCATENATED MODULE: ./app/layout.tsx





const metadata = {
    title: "Prozheiko",
    description: "Generated by create next app"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "uk",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    style: {
                        flex: " 1 1 auto"
                    },
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(footer_Footer, {})
            ]
        })
    });
}


/***/ }),

/***/ 51232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Logo_white.45151b37.webp","height":96,"width":500,"blurDataURL":"data:image/webp;base64,UklGRmYAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAIBAGLSQhIyVYSjVPUkpOTwBWUDggLgAAAJABAJ0BKggAAgACQDglnAACnP3OAAD+/Jzid5167FKZ+1aS1gwfABmIYGKAAAA=","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ 4756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 38036:
/***/ (() => {



/***/ })

};
;