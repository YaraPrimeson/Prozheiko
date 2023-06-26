exports.id = 212;
exports.ids = [212];
exports.modules = {

/***/ 9494:
/***/ ((module) => {

// Exports
module.exports = {
	"comments__card__wrapper": "comment_comments__card__wrapper__TgcSd",
	"comment": "comment_comment__em5lR",
	"icon": "comment_icon___vdrI",
	"text__wrapper": "comment_text__wrapper__hT8bM",
	"text": "comment_text__gi8rc",
	"info__wrapper": "comment_info__wrapper__ViLN4",
	"avatar__wrapper": "comment_avatar__wrapper__BPyw5",
	"name__avatar": "comment_name__avatar__4ALZ7",
	"name": "comment_name__VZ_Kp",
	"date": "comment_date__rWXmL"
};


/***/ }),

/***/ 35461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ comment_CommentContainer)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7887);
// EXTERNAL MODULE: ./app/components/comment/comment.module.scss
var comment_module = __webpack_require__(9494);
var comment_module_default = /*#__PURE__*/__webpack_require__.n(comment_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(10993);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./app/assets/images/stars.webp
/* harmony default export */ const stars = ({"src":"/_next/static/media/stars.417e3107.webp","height":18,"width":105,"blurDataURL":"data:image/webp;base64,UklGRl4AAABXRUJQVlA4WAoAAAAQAAAABwAAAAAAQUxQSAkAAAAAl1B7ZGN8UJYAVlA4IC4AAACQAQCdASoIAAEAAkA4JaACdLoAA5gA/vUOX/7/Vf9/Vf9/Vf7tP9V4gzPWQAAA","blurWidth":8,"blurHeight":1});
;// CONCATENATED MODULE: ./app/components/comment/Comment.tsx





const Comment = ({ text , name , nameAvatar , date  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (comment_module_default()).comment,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                className: (comment_module_default()).icon,
                width: "37",
                height: "28",
                viewBox: "0 0 37 28",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M28.8945 27.1494C25.8867 27.1494 23.8099 26.2542 22.6641 24.4639C21.5898 22.6019 21.0527 20.346 21.0527 17.6963C21.0527 13.8291 22.0911 10.4274 24.168 7.49121C26.3164 4.55501 28.9303 2.08431 32.0098 0.0791016L34.8027 4.16113C33.9434 4.73405 32.9408 5.4502 31.7949 6.30957C30.6491 7.16895 29.6465 8.17155 28.7871 9.31738C27.9277 10.3916 27.498 11.5374 27.498 12.7549C27.498 13.2562 27.7487 13.5068 28.25 13.5068L28.8945 13.292H29.1094C31.401 13.1488 33.1556 13.7217 34.373 15.0107C35.5905 16.2998 36.1992 18.0544 36.1992 20.2744C36.1992 22.7093 35.5547 24.4639 34.2656 25.5381C32.9766 26.6123 31.1862 27.1494 28.8945 27.1494ZM8.37695 27.1494C5.36914 27.1494 3.29232 26.2542 2.14648 24.4639C1.07227 22.6019 0.535156 20.346 0.535156 17.6963C0.535156 13.8291 1.57357 10.4632 3.65039 7.59863C5.72721 4.66243 8.30534 2.15592 11.3848 0.0791016L14.2852 4.16113C13.4258 4.73405 12.4232 5.486 11.2773 6.41699C10.1315 7.27637 9.12891 8.24316 8.26953 9.31738C7.41016 10.3916 6.98047 11.5374 6.98047 12.7549C6.98047 13.2562 7.23112 13.5068 7.73242 13.5068L8.37695 13.292C10.7402 13.292 12.5306 13.8291 13.748 14.9033C15.0371 15.9775 15.6816 17.7679 15.6816 20.2744C15.6816 22.7093 15.0371 24.4639 13.748 25.5381C12.459 26.6123 10.6686 27.1494 8.37695 27.1494Z",
                    fill: "#12979B"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (comment_module_default()).text__wrapper,
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (comment_module_default()).text,
                    children: text
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (comment_module_default()).info__wrapper,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (comment_module_default()).avatar__wrapper,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (comment_module_default()).name__avatar,
                            children: nameAvatar
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (comment_module_default()).info,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (comment_module_default()).rate
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                loading: "lazy",
                                src: stars,
                                alt: "rate stars"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (comment_module_default()).name,
                                children: name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (comment_module_default()).date,
                                children: date
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const comment_Comment = (Comment);

;// CONCATENATED MODULE: ./app/components/comment/CommentContainer.tsx




const CommentContainer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (comment_module_default()).comments__card__wrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(comment_Comment, {
                text: "Сьогодні я завершив етап лікувння зубів та виправлення помилок (моїх та попереднього лікаря)" + " у стоматолога Сергія Прожейко, за що хочу сказати йому велике дякую! Слідів реставрації майже" + " не видно. Якісно швидко і недорого. А ще минулого тижня безболісно видаляв корінь. Попереду" + " видалення двох зубів мудрості, так що теж прийду саме сюди.",
                date: "07.10.22",
                name: "Анатолій Пікуль",
                nameAvatar: "А"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(comment_Comment, {
                text: "Нарешті я знайшла лікаря, якого вже ніколи не зміню! На прийомі мені чітко пояснили ,які в мне проблеми, де і чому." + "\n Я отримала чіткий план лікування, ми погодили мої фінансові можливості з кроками ,які необхідно зробити. Сергій приємна людина, приходячи до нього на прийом, почуваєш сее дуже комфортно!",
                date: "23.06.20",
                name: "Ніна Гаєвська",
                nameAvatar: "Н"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(comment_Comment, {
                text: `Відмінний сервіс, класне ставлення до клієнта, Сергій - справжній професіонал, не тільки якісно виконав свою роботу за допомогою сучасної техніки, а також грамотно проконсультував про молочні зубки моєї дитини. Злагоджено, зворушливо, швидко! Приємно спотерігати за такою професійною роботою!`,
                date: "16.03.22",
                name: "Маргарита Башутіна",
                nameAvatar: "М"
            })
        ]
    });
};
/* harmony default export */ const comment_CommentContainer = (CommentContainer);


/***/ }),

/***/ 43125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/doctors-mini.0ee5112a.webp","height":1028,"width":1150,"blurDataURL":"data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoIAAcAAkA4JZQCdAEPDzli8AAAzfP29ctNP1Yd5GyOBlC2++g1nhfE8w2j29ZpYk20lTUP3wV1tvg4A/H3wAAA","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ 11243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/doctors-mini.0ee5112a.webp","height":1028,"width":1150,"blurDataURL":"data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoIAAcAAkA4JZQCdAEPDzli8AAAzfP29ctNP1Yd5GyOBlC2++g1nhfE8w2j29ZpYk20lTUP3wV1tvg4A/H3wAAA","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ 26090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/stars.417e3107.webp","height":18,"width":105,"blurDataURL":"data:image/webp;base64,UklGRl4AAABXRUJQVlA4WAoAAAAQAAAABwAAAAAAQUxQSAkAAAAAl1B7ZGN8UJYAVlA4IC4AAACQAQCdASoIAAEAAkA4JaACdLoAA5gA/vUOX/7/Vf9/Vf9/Vf7tP9V4gzPWQAAA","blurWidth":8,"blurHeight":1});

/***/ })

};
;