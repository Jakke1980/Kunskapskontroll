(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{728:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n(0),r=n.n(a),o=n(1),l=n.n(o),c=n(2);const d={freetext:l()("free text"),highlight:l()("highlight"),ink:l()("drawing"),square:l()("area"),strikeout:l()("strikeout"),text:l()("point")};function i(e){return e.created_at}function m(e){return!e.inreplyto}function s(e){return e.inreplyto}function u(e){return e.deleted_at&&e.deleted_by?l()("Removed {d,date} by {name}",{d:new Date(e.deleted_at),name:e.deleted_by}):e.deleted_by?l()("Removed by {name}",{name:e.deleted_by}):e.deleted_at?l()("Removed {d,date}",{d:new Date(e.deleted_at)}):l()("Removed")}function p({annotationsByPage:e}){const t=Object.keys(e).map(t=>{const n=e[t].filter(i).filter(m).map(n=>{const a=function(e){return c.v[e]?l()(c.v[e]):void 0}(n.color),o=e[t].filter(i).filter(s).filter(e=>n.id===e.inreplyto).map(e=>r.a.createElement("li",{key:e.id},e.deleted&&r.a.createElement("div",{className:"ScreenreaderAnnotation-deleted"},u(e)),r.a.createElement("div",{className:"ScreenreaderAnnotation-author"},l()("Author")," :",e.user_name),r.a.createElement("div",{className:"ScreenreaderAnnotation-createdat"},l()("Created at { createdAt, time, short }",{createdAt:new Date(e.created_at)})),e.contents&&r.a.createElement("div",{className:"ScreenreaderAnnotation-root-comment"},l()("Comment Reply")," :",e.contents)));return r.a.createElement("li",{key:n.id,className:"ScreenreaderAnnotation"},r.a.createElement("h4",null,l()("Annotation of type { type }",{type:d[n.type]||n.type})),n.deleted&&r.a.createElement("div",{className:"ScreenreaderAnnotation-deleted"},u(n)),r.a.createElement("div",{className:"ScreenreaderAnnotation-author"},l()("Author")," :",n.user_name),a&&r.a.createElement("div",{className:"ScreenreaderAnnotation-color"},l()("Color")," :",a),r.a.createElement("div",{className:"ScreenreaderAnnotation-createdat"},l()("Created at { createdAt, time, short }",{createdAt:new Date(n.created_at)})),n.contents&&r.a.createElement("div",{className:"ScreenreaderAnnotation-root-comment"},l()("Comment")," :",n.contents),Boolean(o.length)&&r.a.createElement("div",{className:"ScreenreaderAnnotation-replies"},r.a.createElement("h5",null,l()("Replies")),r.a.createElement("ol",null,o)))});return r.a.createElement("div",{key:t,className:"ScreenreaderAnnotations-page"},r.a.createElement("h3",null,l()("Page { pageNumber, number }",{pageNumber:parseInt(t,10)+1})),r.a.createElement("ol",null,n))});return r.a.createElement("div",{className:"ScreenreaderAnnotations screenreader-only"},r.a.createElement("h2",null,l()("Annotations")),t)}}}]);
//# sourceMappingURL=26.6b2870ab01cf25d7bed9.bundle.js.map