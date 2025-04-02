import{s as Ee}from"./index-C3RHdeFp.js";import{B as z,C as v,aN as B,Z as E,j as w,a6 as H,D as F,A,z as U,V as O,s as K,m as l,R as q,G as S,W,o as m,c,t as T,K as I,H as P,I as D,a as f,Y as Z,h as x,J as $,L as M,X,i as L,b as g,a9 as ie,aK as se,q as Ve,aO as ze,aP as De,aD as Oe,E as Te,aQ as Be,w as k,T as ae,ak as Re,n as ee,r as C,f as V}from"./index-wrm9_nsc.js";import{s as re}from"./index-BYZbYdfr.js";import{s as oe}from"./index-Dvrit5Ax.js";import{s as Y}from"./index-o3nAP5rb.js";import{s as Ge}from"./index-Cty8Dbe1.js";import{s as _e}from"./index-urjKO6R_.js";import{s as Ne}from"./index-DgR5Ra0k.js";import{s as je,a as He,b as Ue}from"./index-K03cT3wT.js";import{s as qe}from"./index-DftabTR5.js";import{s as We,a as Ze}from"./index-Cv4EGKPT.js";import{s as Xe}from"./index-BdTeRLVH.js";import"./index-BrhIYckQ.js";import"./index-D8J0t0kc.js";import"./index-CuVYfZ_j.js";import"./index-CH15zwiX.js";var Ye=({dt:e})=>`
.p-megamenu {
    position: relative;
    display: flex;
    align-items: center;
    background: ${e("megamenu.background")};
    border: 1px solid ${e("megamenu.border.color")};
    border-radius: ${e("megamenu.border.radius")};
    color: ${e("megamenu.color")};
    gap: ${e("megamenu.gap")};
}

.p-megamenu-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-megamenu-root-list {
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: ${e("megamenu.gap")};
}

.p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content {
    border-radius: ${e("megamenu.base.item.border.radius")};
}

.p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content > .p-megamenu-item-link {
    padding: ${e("megamenu.base.item.padding")};
}

.p-megamenu-item-content {
    transition: background ${e("megamenu.transition.duration")}, color ${e("megamenu.transition.duration")};
    border-radius: ${e("megamenu.item.border.radius")};
    color: ${e("megamenu.item.color")};
}

.p-megamenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${e("megamenu.item.padding")};
    gap: ${e("megamenu.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-megamenu-item-label {
    line-height: 1;
}

.p-megamenu-item-icon {
    color: ${e("megamenu.item.icon.color")};
}

.p-megamenu-submenu-icon {
    color: ${e("megamenu.submenu.icon.color")};
    font-size: ${e("megamenu.submenu.icon.size")};
    width: ${e("megamenu.submenu.icon.size")};
    height: ${e("megamenu.submenu.icon.size")};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content {
    color: ${e("megamenu.item.focus.color")};
    background: ${e("megamenu.item.focus.background")};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon {
    color: ${e("megamenu.item.icon.focus.color")};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {
    color: ${e("megamenu.submenu.icon.focus.color")};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover {
    color: ${e("megamenu.item.focus.color")};
    background: ${e("megamenu.item.focus.background")};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon {
    color: ${e("megamenu.item.icon.focus.color")};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-submenu-icon {
    color: ${e("megamenu.submenu.icon.focus.color")};
}

.p-megamenu-item-active > .p-megamenu-item-content {
    color: ${e("megamenu.item.active.color")};
    background: ${e("megamenu.item.active.background")};
}

.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon {
    color: ${e("megamenu.item.icon.active.color")};
}

.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
    color: ${e("megamenu.submenu.icon.active.color")};
}

.p-megamenu-overlay {
    display: none;
    position: absolute;
    width: auto;
    z-index: 1;
    left: 0;
    min-width: 100%;
    padding: ${e("megamenu.overlay.padding")};
    background: ${e("megamenu.overlay.background")};
    color: ${e("megamenu.overlay.color")};
    border: 1px solid ${e("megamenu.overlay.border.color")};
    border-radius: ${e("megamenu.overlay.border.radius")};
    box-shadow: ${e("megamenu.overlay.shadow")};
}

.p-megamenu-overlay:dir(rtl) {
    left: auto;
    right: 0;
}

.p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
    display: block;
}

.p-megamenu-submenu {
    margin: 0;
    list-style: none;
    padding: ${e("megamenu.submenu.padding")};
    min-width: 12.5rem;
    display: flex;
    flex-direction: column;
    gap: ${e("megamenu.submenu.gap")}
}

.p-megamenu-submenu-label {
    padding: ${e("megamenu.submenu.label.padding")};
    color: ${e("megamenu.submenu.label.color")};
    font-weight: ${e("megamenu.submenu.label.font.weight")};
    background: ${e("megamenu.submenu.label.background")};
}

.p-megamenu-separator {
    border-block-start: 1px solid ${e("megamenu.separator.border.color")};
}

.p-megamenu-horizontal {
    align-items: center;
    padding: ${e("megamenu.horizontal.orientation.padding")};
}

.p-megamenu-horizontal .p-megamenu-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: ${e("megamenu.horizontal.orientation.gap")};
}

.p-megamenu-horizontal .p-megamenu-end {
    margin-left: auto;
    align-self: center;
}

.p-megamenu-horizontal .p-megamenu-end:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-megamenu-vertical {
    display: inline-flex;
    min-width: 12.5rem;
    flex-direction: column;
    align-items: stretch;
    padding: ${e("megamenu.vertical.orientation.padding")};
}

.p-megamenu-vertical .p-megamenu-root-list {
    align-items: stretch;
    flex-direction: column;
    gap: ${e("megamenu.vertical.orientation.gap")};
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
    left: 100%;
    top: 0;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay:dir(rtl) {
    left: auto;
    right: 100%;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
    margin-left: auto;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
    transform: rotate(180deg);
}

.p-megamenu-grid {
    display: flex;
}

.p-megamenu-col-2,
.p-megamenu-col-3,
.p-megamenu-col-4,
.p-megamenu-col-6,
.p-megamenu-col-12 {
    flex: 0 0 auto;
    padding: ${e("megamenu.overlay.gap")};
}

.p-megamenu-col-2 {
    width: 16.6667%;
}

.p-megamenu-col-3 {
    width: 25%;
}

.p-megamenu-col-4 {
    width: 33.3333%;
}

.p-megamenu-col-6 {
    width: 50%;
}

.p-megamenu-col-12 {
    width: 100%;
}

.p-megamenu-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: ${e("megamenu.mobile.button.size")};
    height: ${e("megamenu.mobile.button.size")};
    position: relative;
    color: ${e("megamenu.mobile.button.color")};
    border: 0 none;
    background: transparent;
    border-radius: ${e("megamenu.mobile.button.border.radius")};
    transition: background ${e("megamenu.transition.duration")}, color ${e("megamenu.transition.duration")}, outline-color ${e("megamenu.transition.duration")}, box-shadow ${e("megamenu.transition.duration")};
    outline-color: transparent;
}

.p-megamenu-button:hover {
    color: ${e("megamenu.mobile.button.hover.color")};
    background: ${e("megamenu.mobile.button.hover.background")};
}

.p-megamenu-button:focus-visible {
    box-shadow: ${e("megamenu.mobile.button.focus.ring.shadow")};
    outline: ${e("megamenu.mobile.button.focus.ring.width")} ${e("megamenu.mobile.button.focus.ring.style")} ${e("megamenu.mobile.button.focus.ring.color")};
    outline-offset: ${e("megamenu.mobile.button.focus.ring.offset")};
}

.p-megamenu-mobile {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-button {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-root-list {
    position: absolute;
    display: none;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 100%;
    padding: ${e("megamenu.submenu.padding")};
    gap: ${e("megamenu.submenu.gap")};
    background: ${e("megamenu.overlay.background")};
    border: 1px solid ${e("megamenu.overlay.border.color")};
    box-shadow: ${e("megamenu.overlay.shadow")};
}

.p-megamenu-mobile .p-megamenu-root-list:dir(rtl) {
    left: auto;
    right: 0;
}

.p-megamenu-mobile-active .p-megamenu-root-list {
    display: block;
}

.p-megamenu-mobile .p-megamenu-root-list .p-megamenu-item {
    width: 100%;
    position: static;
}

.p-megamenu-mobile .p-megamenu-overlay {
    position: static;
    border: 0 none;
    border-radius: 0;
    box-shadow: none;
}

.p-megamenu-mobile .p-megamenu-grid {
    flex-wrap: wrap;
    overflow: auto;
    max-height: 90%;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
    transform: rotate(-180deg);
}
`,Qe={rootList:function(t){var n=t.props;return{"max-height":n.scrollHeight,overflow:"auto"}}},Je={root:function(t){var n=t.instance;return["p-megamenu p-component",{"p-megamenu-mobile":n.queryMatches,"p-megamenu-mobile-active":n.mobileActive,"p-megamenu-horizontal":n.horizontal,"p-megamenu-vertical":n.vertical}]},start:"p-megamenu-start",button:"p-megamenu-button",rootList:"p-megamenu-root-list",submenuLabel:function(t){var n=t.instance,s=t.processedItem;return["p-megamenu-submenu-label",{"p-disabled":n.isItemDisabled(s)}]},item:function(t){var n=t.instance,s=t.processedItem;return["p-megamenu-item",{"p-megamenu-item-active":n.isItemActive(s),"p-focus":n.isItemFocused(s),"p-disabled":n.isItemDisabled(s)}]},itemContent:"p-megamenu-item-content",itemLink:"p-megamenu-item-link",itemIcon:"p-megamenu-item-icon",itemLabel:"p-megamenu-item-label",submenuIcon:"p-megamenu-submenu-icon",overlay:"p-megamenu-overlay",grid:"p-megamenu-grid",column:function(t){var n=t.instance,s=t.processedItem,r=n.isItemGroup(s)?s.items.length:0,i;if(n.$parentInstance.queryMatches)i="p-megamenu-col-12";else switch(r){case 2:i="p-megamenu-col-6";break;case 3:i="p-megamenu-col-4";break;case 4:i="p-megamenu-col-3";break;case 6:i="p-megamenu-col-2";break;default:i="p-megamenu-col-12";break}return i},submenu:"p-megamenu-submenu",separator:"p-megamenu-separator",end:"p-megamenu-end"},et=z.extend({name:"megamenu",style:Ye,classes:Je,inlineStyles:Qe}),tt={name:"BaseMegaMenu",extends:K,props:{model:{type:Array,default:null},orientation:{type:String,default:"horizontal"},breakpoint:{type:String,default:"960px"},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},scrollHeight:{type:String,default:"20rem"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:et,provide:function(){return{$pcMegaMenu:this,$parentInstance:this}}},ue={name:"MegaMenuSub",hostName:"MegaMenu",extends:K,emits:["item-click","item-mouseenter"],props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},horizontal:{type:Boolean,default:!1},submenu:{type:Object,default:null},mobileActive:{type:Boolean,default:!1},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItem:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getSubListId:function(t){return"".concat(this.getItemId(t),"_list")},getSubListKey:function(t){return this.getSubListId(t)},getItemId:function(t){return"".concat(this.menuId,"_").concat(t.key)},getItemKey:function(t){return this.getItemId(t)},getItemProp:function(t,n,s){return t&&t.item?B(t.item[n],s):void 0},getItemLabel:function(t){return this.getItemProp(t,"label")},getPTOptions:function(t,n,s){return this.ptm(s,{context:{item:t.item,index:n,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t)}})},isItemActive:function(t){return v(this.activeItem)?this.activeItem.key===t.key:!1},isItemVisible:function(t){return this.getItemProp(t,"visible")!==!1},isItemDisabled:function(t){return this.getItemProp(t,"disabled")},isItemFocused:function(t){return this.focusedItemId===this.getItemId(t)},isItemGroup:function(t){return v(t.items)},onItemClick:function(t,n){this.getItemProp(n,"command",{originalEvent:t,item:n.item}),this.$emit("item-click",{originalEvent:t,processedItem:n,isFocus:!0})},onItemMouseEnter:function(t,n){this.$emit("item-mouseenter",{originalEvent:t,processedItem:n})},getAriaSetSize:function(){var t=this;return this.items.filter(function(n){return t.isItemVisible(n)&&!t.getItemProp(n,"separator")}).length},getAriaPosInset:function(t){var n=this;return t-this.items.slice(0,t).filter(function(s){return n.isItemVisible(s)&&n.getItemProp(s,"separator")}).length+1},getMenuItemProps:function(t,n){return{action:l({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions(t,n,"itemLink")),icon:l({class:[this.cx("itemIcon"),this.getItemProp(t,"icon")]},this.getPTOptions(t,n,"itemIcon")),label:l({class:this.cx("label")},this.getPTOptions(t,n,"label")),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions(t,n,"submenuIcon"))}}},components:{AngleRightIcon:Y,AngleDownIcon:oe},directives:{ripple:q}},nt=["tabindex"],it=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],st=["onClick","onMouseenter"],at=["href","target"],rt=["id"];function ot(e,t,n,s,r,i){var u=S("MegaMenuSub",!0),d=W("ripple");return m(),c("ul",l({class:n.level===0?e.cx("rootList"):e.cx("submenu"),tabindex:n.tabindex},n.level===0?e.ptm("rootList"):e.ptm("submenu")),[n.submenu?(m(),c("li",l({key:0,class:[e.cx("submenuLabel",{submenu:n.submenu}),i.getItemProp(n.submenu,"class")],style:i.getItemProp(n.submenu,"style"),role:"presentation"},e.ptm("submenuLabel")),T(i.getItemLabel(n.submenu)),17)):I("",!0),(m(!0),c(P,null,D(n.items,function(a,o){return m(),c(P,{key:i.getItemKey(a)},[i.isItemVisible(a)&&!i.getItemProp(a,"separator")?(m(),c("li",l({key:0,id:i.getItemId(a),style:i.getItemProp(a,"style"),class:[e.cx("item",{processedItem:a}),i.getItemProp(a,"class")],role:"menuitem","aria-label":i.getItemLabel(a),"aria-disabled":i.isItemDisabled(a)||void 0,"aria-expanded":i.isItemGroup(a)?i.isItemActive(a):void 0,"aria-haspopup":i.isItemGroup(a)&&!i.getItemProp(a,"to")?"menu":void 0,"aria-level":n.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(o),ref_for:!0},i.getPTOptions(a,o,"item"),{"data-p-active":i.isItemActive(a),"data-p-focused":i.isItemFocused(a),"data-p-disabled":i.isItemDisabled(a)}),[f("div",l({class:e.cx("itemContent"),onClick:function(b){return i.onItemClick(b,a)},onMouseenter:function(b){return i.onItemMouseEnter(b,a)},ref_for:!0},i.getPTOptions(a,o,"itemContent")),[n.templates.item?(m(),x(M(n.templates.item),{key:1,item:a.item,hasSubmenu:i.isItemGroup(a),label:i.getItemLabel(a),props:i.getMenuItemProps(a,o)},null,8,["item","hasSubmenu","label","props"])):Z((m(),c("a",l({key:0,href:i.getItemProp(a,"url"),class:e.cx("itemLink"),target:i.getItemProp(a,"target"),tabindex:"-1",ref_for:!0},i.getPTOptions(a,o,"itemLink")),[n.templates.itemicon?(m(),x(M(n.templates.itemicon),{key:0,item:a.item,class:$(e.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(a,"icon")?(m(),c("span",l({key:1,class:[e.cx("itemIcon"),i.getItemProp(a,"icon")],ref_for:!0},i.getPTOptions(a,o,"itemIcon")),null,16)):I("",!0),f("span",l({class:e.cx("itemLabel"),ref_for:!0},i.getPTOptions(a,o,"itemLabel")),T(i.getItemLabel(a)),17),i.isItemGroup(a)?(m(),c(P,{key:2},[n.templates.submenuicon?(m(),x(M(n.templates.submenuicon),l({key:0,active:i.isItemActive(a),class:e.cx("submenuIcon"),ref_for:!0},i.getPTOptions(a,o,"submenuIcon")),null,16,["active","class"])):(m(),x(M(n.horizontal||n.mobileActive?"AngleDownIcon":"AngleRightIcon"),l({key:1,class:e.cx("submenuIcon"),ref_for:!0},i.getPTOptions(a,o,"submenuIcon")),null,16,["class"]))],64)):I("",!0)],16,at)),[[d]])],16,st),i.isItemVisible(a)&&i.isItemGroup(a)?(m(),c("div",l({key:0,class:e.cx("overlay"),ref_for:!0},e.ptm("overlay")),[f("div",l({class:e.cx("grid"),ref_for:!0},e.ptm("grid")),[(m(!0),c(P,null,D(a.items,function(p){return m(),c("div",l({key:i.getItemKey(p),class:e.cx("column",{processedItem:a}),ref_for:!0},e.ptm("column")),[(m(!0),c(P,null,D(p,function(b){return m(),x(u,{key:i.getSubListKey(b),id:i.getSubListId(b),style:X(e.sx("submenu",!0,{processedItem:a})),role:"menu",menuId:n.menuId,focusedItemId:n.focusedItemId,submenu:b,items:b.items,templates:n.templates,level:n.level+1,mobileActive:n.mobileActive,pt:e.pt,unstyled:e.unstyled,onItemClick:t[0]||(t[0]=function(y){return e.$emit("item-click",y)}),onItemMouseenter:t[1]||(t[1]=function(y){return e.$emit("item-mouseenter",y)})},null,8,["id","style","menuId","focusedItemId","submenu","items","templates","level","mobileActive","pt","unstyled"])}),128))],16)}),128))],16)],16)):I("",!0)],16,it)):I("",!0),i.isItemVisible(a)&&i.getItemProp(a,"separator")?(m(),c("li",l({key:1,id:i.getItemId(a),class:[e.cx("separator"),i.getItemProp(a,"class")],style:i.getItemProp(a,"style"),role:"separator",ref_for:!0},e.ptm("separator")),null,16,rt)):I("",!0)],64)}),128))],16,nt)}ue.render=ot;var me={name:"MegaMenu",extends:tt,inheritAttrs:!1,emits:["focus","blur"],outsideClickListener:null,resizeListener:null,matchMediaListener:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data:function(){return{mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,key:"",parentKey:""},activeItem:null,dirty:!1,query:null,queryMatches:!1}},watch:{activeItem:function(t){v(t)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()},methods:{getItemProp:function(t,n){return t?B(t[n]):void 0},getItemLabel:function(t){return this.getItemProp(t,"label")},isItemDisabled:function(t){return this.getItemProp(t,"disabled")},isItemVisible:function(t){return this.getItemProp(t,"visible")!==!1},isItemGroup:function(t){return v(this.getItemProp(t,"items"))},isItemSeparator:function(t){return this.getItemProp(t,"separator")},getProccessedItemLabel:function(t){return t?this.getItemLabel(t.item):void 0},isProccessedItemGroup:function(t){return t&&v(t.items)},toggle:function(t){var n=this;this.mobileActive?(this.mobileActive=!1,E.clear(this.menubar),this.hide()):(this.mobileActive=!0,E.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){n.show()},1)),this.bindOutsideClickListener(),t.preventDefault()},show:function(){this.focusedItemInfo={index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},w(this.menubar)},hide:function(t,n){var s=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){w(s.$refs.menubutton,{preventScroll:!0})},1)),this.activeItem=null,this.focusedItemInfo={index:-1,key:"",parentKey:""},n&&w(this.menubar),this.dirty=!1},onFocus:function(t){if(this.focused=!0,this.focusedItemInfo.index===-1){var n=this.findFirstFocusedItemIndex(),s=this.findVisibleItem(n);this.focusedItemInfo={index:n,key:s.key,parentKey:s.parentKey}}this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.focusedItemInfo={index:-1,key:"",parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",t)},onKeyDown:function(t){if(this.disabled){t.preventDefault();return}var n=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"ArrowRight":this.onArrowRightKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Space":this.onSpaceKey(t);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&H(t.key)&&this.searchItems(t,t.key);break}},onItemChange:function(t){var n=t.processedItem,s=t.isFocus;if(!F(n)){var r=n.index,i=n.key,u=n.parentKey,d=n.items,a=v(d);a&&(this.activeItem=n),this.focusedItemInfo={index:r,key:i,parentKey:u},a&&(this.dirty=!0),s&&w(this.menubar)}},onItemClick:function(t){var n=t.originalEvent,s=t.processedItem,r=this.isProccessedItemGroup(s),i=F(s.parent),u=this.isSelected(s);if(u){var d=s.index,a=s.key,o=s.parentKey;this.activeItem=null,this.focusedItemInfo={index:d,key:a,parentKey:o},this.dirty=!i,this.mobileActive||w(this.menubar,{preventScroll:!0})}else r?this.onItemChange(t):this.hide(n)},onItemMouseEnter:function(t){!this.mobileActive&&this.dirty&&this.onItemChange(t)},menuButtonClick:function(t){this.toggle(t)},menuButtonKeydown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&this.menuButtonClick(t)},onArrowDownKey:function(t){if(this.horizontal)if(v(this.activeItem)&&this.activeItem.key===this.focusedItemInfo.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{var n=this.findVisibleItem(this.focusedItemInfo.index),s=this.isProccessedItemGroup(n);s&&(this.onItemChange({originalEvent:t,processedItem:n}),this.focusedItemInfo={index:-1,key:n.key,parentKey:n.parentKey},this.searchValue="")}var r=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(t,r),t.preventDefault()},onArrowUpKey:function(t){if(t.altKey&&this.horizontal){if(this.focusedItemInfo.index!==-1){var n=this.findVisibleItem(this.focusedItemInfo.index),s=this.isProccessedItemGroup(n);!s&&v(this.activeItem)&&(this.focusedItemInfo.index===0?(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null):this.changeFocusedItemInfo(t,this.findFirstItemIndex()))}t.preventDefault()}else{var r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(t,r),t.preventDefault()}},onArrowLeftKey:function(t){var n=this.findVisibleItem(this.focusedItemInfo.index),s=this.isProccessedItemGroup(n);if(s){if(this.horizontal){var r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(t,r)}}else{this.vertical&&v(this.activeItem)&&n.columnIndex===0&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null);var i=n.columnIndex-1,u=this.visibleItems.findIndex(function(d){return d.columnIndex===i});u!==-1&&this.changeFocusedItemInfo(t,u)}t.preventDefault()},onArrowRightKey:function(t){var n=this.findVisibleItem(this.focusedItemInfo.index),s=this.isProccessedItemGroup(n);if(s){if(this.vertical)if(v(this.activeItem)&&this.activeItem.key===n.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{var r=this.findVisibleItem(this.focusedItemInfo.index),i=this.isProccessedItemGroup(r);i&&(this.onItemChange({originalEvent:t,processedItem:r}),this.focusedItemInfo={index:-1,key:r.key,parentKey:r.parentKey},this.searchValue="")}var u=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(t,u)}else{var d=n.columnIndex+1,a=this.visibleItems.findIndex(function(o){return o.columnIndex===d});a!==-1&&this.changeFocusedItemInfo(t,a)}t.preventDefault()},onHomeKey:function(t){this.changeFocusedItemInfo(t,this.findFirstItemIndex()),t.preventDefault()},onEndKey:function(t){this.changeFocusedItemInfo(t,this.findLastItemIndex()),t.preventDefault()},onEnterKey:function(t){if(this.focusedItemInfo.index!==-1){var n=A(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),s=n&&A(n,'a[data-pc-section="itemlink"]');s?s.click():n&&n.click();var r=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(r);!i&&this.changeFocusedItemInfo(t,this.findFirstFocusedItemIndex())}t.preventDefault()},onSpaceKey:function(t){this.onEnterKey(t)},onEscapeKey:function(t){v(this.activeItem)&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key},this.activeItem=null),t.preventDefault()},onTabKey:function(t){if(this.focusedItemInfo.index!==-1){var n=this.findVisibleItem(this.focusedItemInfo.index),s=this.isProccessedItemGroup(n);!s&&this.onItemChange({originalEvent:t,processedItem:n})}this.hide()},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){var s=t.container&&!t.container.contains(n.target),r=!(t.target&&(t.target===n.target||t.target.contains(n.target)));s&&r&&t.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(n){U()||t.hide(n,!0),t.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var t=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){t.queryMatches=n.matches,t.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(t){var n;return this.isValidItem(t)&&((n=this.getProccessedItemLabel(t))===null||n===void 0?void 0:n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(t){return!!t&&!this.isItemDisabled(t.item)&&!this.isItemSeparator(t.item)&&this.isItemVisible(t.item)},isValidSelectedItem:function(t){return this.isValidItem(t)&&this.isSelected(t)},isSelected:function(t){return v(this.activeItem)?this.activeItem.key===t.key:!1},findFirstItemIndex:function(){var t=this;return this.visibleItems.findIndex(function(n){return t.isValidItem(n)})},findLastItemIndex:function(){var t=this;return O(this.visibleItems,function(n){return t.isValidItem(n)})},findNextItemIndex:function(t){var n=this,s=t<this.visibleItems.length-1?this.visibleItems.slice(t+1).findIndex(function(r){return n.isValidItem(r)}):-1;return s>-1?s+t+1:t},findPrevItemIndex:function(t){var n=this,s=t>0?O(this.visibleItems.slice(0,t),function(r){return n.isValidItem(r)}):-1;return s>-1?s:t},findSelectedItemIndex:function(){var t=this;return this.visibleItems.findIndex(function(n){return t.isValidSelectedItem(n)})},findFirstFocusedItemIndex:function(){var t=this.findSelectedItemIndex();return t<0?this.findFirstItemIndex():t},findLastFocusedItemIndex:function(){var t=this.findSelectedItemIndex();return t<0?this.findLastItemIndex():t},findVisibleItem:function(t){return v(this.visibleItems)?this.visibleItems[t]:null},searchItems:function(t,n){var s=this;this.searchValue=(this.searchValue||"")+n;var r=-1,i=!1;return this.focusedItemInfo.index!==-1?(r=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u){return s.isItemMatched(u)}),r=r===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(u){return s.isItemMatched(u)}):r+this.focusedItemInfo.index):r=this.visibleItems.findIndex(function(u){return s.isItemMatched(u)}),r!==-1&&(i=!0),r===-1&&this.focusedItemInfo.index===-1&&(r=this.findFirstFocusedItemIndex()),r!==-1&&this.changeFocusedItemInfo(t,r),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){s.searchValue="",s.searchTimeout=null},500),i},changeFocusedItemInfo:function(t,n){var s=this.findVisibleItem(n);this.focusedItemInfo.index=n,this.focusedItemInfo.key=v(s)?s.key:"",this.scrollInView()},scrollInView:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,n=t!==-1?"".concat(this.$id,"_").concat(t):this.focusedItemId,s;n===null&&this.queryMatches?s=this.$refs.menubutton:s=A(this.menubar,'li[id="'.concat(n,'"]')),s&&s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},createProcessedItems:function(t){var n=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",u=arguments.length>4?arguments[4]:void 0,d=[];return t&&t.forEach(function(a,o){var p=(i!==""?i+"_":"")+(u!==void 0?u+"_":"")+o,b={item:a,index:o,level:s,key:p,parent:r,parentKey:i,columnIndex:u!==void 0?u:r.columnIndex!==void 0?r.columnIndex:o};b.items=s===0&&a.items&&a.items.length>0?a.items.map(function(y,_){return n.createProcessedItems(y,s+1,b,p,_)}):n.createProcessedItems(a.items,s+1,b,p),d.push(b)}),d},containerRef:function(t){this.container=t},menubarRef:function(t){this.menubar=t?t.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var t=v(this.activeItem)?this.activeItem:null;return t&&t.key===this.focusedItemInfo.parentKey?t.items.reduce(function(n,s){return s.forEach(function(r){r.items.forEach(function(i){n.push(i)})}),n},[]):this.processedItems},horizontal:function(){return this.orientation==="horizontal"},vertical:function(){return this.orientation==="vertical"},focusedItemId:function(){return v(this.focusedItemInfo.key)?"".concat(this.$id,"_").concat(this.focusedItemInfo.key):null}},components:{MegaMenuSub:ue,BarsIcon:re}},ut=["id"],mt=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function lt(e,t,n,s,r,i){var u=S("BarsIcon"),d=S("MegaMenuSub");return m(),c("div",l({ref:i.containerRef,id:e.$id,class:e.cx("root")},e.ptmi("root")),[e.$slots.start?(m(),c("div",l({key:0,class:e.cx("start")},e.ptm("start")),[L(e.$slots,"start")],16)):I("",!0),L(e.$slots,e.$slots.button?"button":"menubutton",{id:e.$id,class:$(e.cx("button")),toggleCallback:function(o){return i.menuButtonClick(o)}},function(){var a;return[e.model&&e.model.length>0?(m(),c("a",l({key:0,ref:"menubutton",role:"button",tabindex:"0",class:e.cx("button"),"aria-haspopup":!!(e.model.length&&e.model.length>0),"aria-expanded":r.mobileActive,"aria-controls":e.$id,"aria-label":(a=e.$primevue.config.locale.aria)===null||a===void 0?void 0:a.navigation,onClick:t[0]||(t[0]=function(o){return i.menuButtonClick(o)}),onKeydown:t[1]||(t[1]=function(o){return i.menuButtonKeydown(o)})},e.ptm("button")),[L(e.$slots,e.$slots.buttonicon?"buttonicon":"menubuttonicon",{},function(){return[g(u,ie(se(e.ptm("buttonIcon"))),null,16)]})],16,mt)):I("",!0)]}),g(d,{ref:i.menubarRef,id:e.$id+"_list",tabindex:e.disabled?-1:e.tabindex,role:"menubar","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-disabled":e.disabled||void 0,"aria-orientation":e.orientation,"aria-activedescendant":r.focused?i.focusedItemId:void 0,menuId:e.$id,focusedItemId:r.focused?i.focusedItemId:void 0,items:i.processedItems,horizontal:i.horizontal,templates:e.$slots,activeItem:r.activeItem,mobileActive:r.mobileActive,level:0,style:X(e.sx("rootList")),pt:e.pt,unstyled:e.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter},null,8,["id","tabindex","aria-label","aria-labelledby","aria-disabled","aria-orientation","aria-activedescendant","menuId","focusedItemId","items","horizontal","templates","activeItem","mobileActive","style","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"]),e.$slots.end?(m(),c("div",l({key:1,class:e.cx("end")},e.ptm("end")),[L(e.$slots,"end")],16)):I("",!0)],16,ut)}me.render=lt;var ct=({dt:e})=>`
.p-contextmenu {
    background: ${e("contextmenu.background")};
    color: ${e("contextmenu.color")};
    border: 1px solid ${e("contextmenu.border.color")};
    border-radius: ${e("contextmenu.border.radius")};
    box-shadow: ${e("contextmenu.shadow")};
    min-width: 12.5rem;
}

.p-contextmenu-root-list,
.p-contextmenu-submenu {
    margin: 0;
    padding: ${e("contextmenu.list.padding")};
    list-style: none;
    outline: 0 none;
    display: flex;
    flex-direction: column;
    gap: ${e("contextmenu.list.gap")};
}

.p-contextmenu-submenu {
    position: absolute;
    display: flex;
    flex-direction: column;
    min-width: 100%;
    z-index: 1;
    background: ${e("contextmenu.background")};
    color: ${e("contextmenu.color")};
    border: 1px solid ${e("contextmenu.border.color")};
    border-radius: ${e("contextmenu.border.radius")};
    box-shadow: ${e("contextmenu.shadow")};
}

.p-contextmenu-item {
    position: relative;
}

.p-contextmenu-item-content {
    transition: background ${e("contextmenu.transition.duration")}, color ${e("contextmenu.transition.duration")};
    border-radius: ${e("contextmenu.item.border.radius")};
    color: ${e("contextmenu.item.color")};
}

.p-contextmenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${e("contextmenu.item.padding")};
    gap: ${e("contextmenu.item.gap")};
    user-select: none;
}

.p-contextmenu-item-label {
    line-height: 1;
}

.p-contextmenu-item-icon {
    color: ${e("contextmenu.item.icon.color")};
}

.p-contextmenu-submenu-icon {
    color: ${e("contextmenu.submenu.icon.color")};
    margin-left: auto;
    font-size: ${e("contextmenu.submenu.icon.size")};
    width: ${e("contextmenu.submenu.icon.size")};
    height: ${e("contextmenu.submenu.icon.size")};
}

.p-contextmenu-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content {
    color: ${e("contextmenu.item.focus.color")};
    background: ${e("contextmenu.item.focus.background")};
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-item-icon {
    color: ${e("contextmenu.item.icon.focus.color")};
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
    color: ${e("contextmenu.submenu.icon.focus.color")};
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover {
    color: ${e("contextmenu.item.focus.color")};
    background: ${e("contextmenu.item.focus.background")};
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-item-icon {
    color: ${e("contextmenu.item.icon.focus.color")};
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-submenu-icon {
    color: ${e("contextmenu.submenu.icon.focus.color")};
}

.p-contextmenu-item-active > .p-contextmenu-item-content {
    color: ${e("contextmenu.item.active.color")};
    background: ${e("contextmenu.item.active.background")};
}

.p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-item-icon {
    color: ${e("contextmenu.item.icon.active.color")};
}

.p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
    color: ${e("contextmenu.submenu.icon.active.color")};
}

.p-contextmenu-separator {
    border-block-start: 1px solid ${e("contextmenu.separator.border.color")};
}

.p-contextmenu-enter-from,
.p-contextmenu-leave-active {
    opacity: 0;
}

.p-contextmenu-enter-active {
    transition: opacity 250ms;
}

.p-contextmenu-mobile .p-contextmenu-submenu {
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-inline-start: ${e("tieredmenu.submenu.mobile.indent")};
    padding-inline-end: 0;
}

.p-contextmenu-mobile .p-contextmenu-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-contextmenu-mobile .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
    transform: rotate(-90deg);
}
`,dt={root:function(t){var n=t.instance;return["p-contextmenu p-component",{"p-contextmenu-mobile":n.queryMatches}]},rootList:"p-contextmenu-root-list",item:function(t){var n=t.instance,s=t.processedItem;return["p-contextmenu-item",{"p-contextmenu-item-active":n.isItemActive(s),"p-focus":n.isItemFocused(s),"p-disabled":n.isItemDisabled(s)}]},itemContent:"p-contextmenu-item-content",itemLink:"p-contextmenu-item-link",itemIcon:"p-contextmenu-item-icon",itemLabel:"p-contextmenu-item-label",submenuIcon:"p-contextmenu-submenu-icon",submenu:"p-contextmenu-submenu",separator:"p-contextmenu-separator"},pt=z.extend({name:"contextmenu",style:ct,classes:dt}),ft={name:"BaseContextMenu",extends:K,props:{model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},global:{type:Boolean,default:!1},breakpoint:{type:String,default:"960px"},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:pt,provide:function(){return{$pcContextMenu:this,$parentInstance:this}}},le={name:"ContextMenuSub",hostName:"ContextMenu",extends:K,emits:["item-click","item-mouseenter","item-mousemove"],props:{items:{type:Array,default:null},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},root:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getItemId:function(t){return"".concat(this.menuId,"_").concat(t.key)},getItemKey:function(t){return this.getItemId(t)},getItemProp:function(t,n,s){return t&&t.item?B(t.item[n],s):void 0},getItemLabel:function(t){return this.getItemProp(t,"label")},getItemLabelId:function(t){return"".concat(this.menuId,"_").concat(t.key,"_label")},getPTOptions:function(t,n,s){return this.ptm(t,{context:{item:n.item,active:this.isItemActive(n),focused:this.isItemFocused(n),disabled:this.isItemDisabled(n),index:s}})},isItemActive:function(t){return this.activeItemPath.some(function(n){return n.key===t.key})},isItemVisible:function(t){return this.getItemProp(t,"visible")!==!1},isItemDisabled:function(t){return this.getItemProp(t,"disabled")},isItemFocused:function(t){return this.focusedItemId===this.getItemId(t)},isItemGroup:function(t){return v(t.items)},onItemClick:function(t,n){this.getItemProp(n,"command",{originalEvent:t,item:n.item}),this.$emit("item-click",{originalEvent:t,processedItem:n,isFocus:!0})},onItemMouseEnter:function(t,n){this.$emit("item-mouseenter",{originalEvent:t,processedItem:n})},onItemMouseMove:function(t,n){this.$emit("item-mousemove",{originalEvent:t,processedItem:n,isFocus:!0})},getAriaSetSize:function(){var t=this;return this.items.filter(function(n){return t.isItemVisible(n)&&!t.getItemProp(n,"separator")}).length},getAriaPosInset:function(t){var n=this;return t-this.items.slice(0,t).filter(function(s){return n.isItemVisible(s)&&n.getItemProp(s,"separator")}).length+1},onEnter:function(){Be(this.$refs.container,this.level)},getMenuItemProps:function(t,n){return{action:l({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions("itemLink",t,n)),icon:l({class:[this.cx("itemIcon"),this.getItemProp(t,"icon")]},this.getPTOptions("itemIcon",t,n)),label:l({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",t,n)),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions("submenuicon",t,n))}}},components:{AngleRightIcon:Y},directives:{ripple:q}},bt=["tabindex"],ht=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],It=["onClick","onMouseenter","onMousemove"],gt=["href","target"],vt=["id"],yt=["id"];function xt(e,t,n,s,r,i){var u=S("AngleRightIcon"),d=S("ContextMenuSub",!0),a=W("ripple");return m(),x(ae,l({name:"p-contextmenusub",onEnter:i.onEnter},e.ptm("menu.transition")),{default:k(function(){return[n.root||n.visible?(m(),c("ul",l({key:0,ref:"container",tabindex:n.tabindex},e.ptm("rootList")),[(m(!0),c(P,null,D(n.items,function(o,p){return m(),c(P,{key:i.getItemKey(o)},[i.isItemVisible(o)&&!i.getItemProp(o,"separator")?(m(),c("li",l({key:0,id:i.getItemId(o),style:i.getItemProp(o,"style"),class:[e.cx("item",{processedItem:o}),i.getItemProp(o,"class")],role:"menuitem","aria-label":i.getItemLabel(o),"aria-disabled":i.isItemDisabled(o)||void 0,"aria-expanded":i.isItemGroup(o)?i.isItemActive(o):void 0,"aria-haspopup":i.isItemGroup(o)&&!i.getItemProp(o,"to")?"menu":void 0,"aria-level":n.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(p),ref_for:!0},i.getPTOptions("item",o,p),{"data-p-active":i.isItemActive(o),"data-p-focused":i.isItemFocused(o),"data-p-disabled":i.isItemDisabled(o)}),[f("div",l({class:e.cx("itemContent"),onClick:function(y){return i.onItemClick(y,o)},onMouseenter:function(y){return i.onItemMouseEnter(y,o)},onMousemove:function(y){return i.onItemMouseMove(y,o)},ref_for:!0},i.getPTOptions("itemContent",o,p)),[n.templates.item?(m(),x(M(n.templates.item),{key:1,item:o.item,hasSubmenu:i.getItemProp(o,"items"),label:i.getItemLabel(o),props:i.getMenuItemProps(o,p)},null,8,["item","hasSubmenu","label","props"])):Z((m(),c("a",l({key:0,href:i.getItemProp(o,"url"),class:e.cx("itemLink"),target:i.getItemProp(o,"target"),tabindex:"-1",ref_for:!0},i.getPTOptions("itemLink",o,p)),[n.templates.itemicon?(m(),x(M(n.templates.itemicon),{key:0,item:o.item,class:$(e.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(o,"icon")?(m(),c("span",l({key:1,class:[e.cx("itemIcon"),i.getItemProp(o,"icon")],ref_for:!0},i.getPTOptions("itemIcon",o,p)),null,16)):I("",!0),f("span",l({id:i.getItemLabelId(o),class:e.cx("itemLabel"),ref_for:!0},i.getPTOptions("itemLabel",o,p)),T(i.getItemLabel(o)),17,vt),i.getItemProp(o,"items")?(m(),c(P,{key:2},[n.templates.submenuicon?(m(),x(M(n.templates.submenuicon),{key:0,active:i.isItemActive(o),class:$(e.cx("submenuIcon"))},null,8,["active","class"])):(m(),x(u,l({key:1,class:e.cx("submenuIcon"),ref_for:!0},i.getPTOptions("submenuicon",o,p)),null,16,["class"]))],64)):I("",!0)],16,gt)),[[a]])],16,It),i.isItemVisible(o)&&i.isItemGroup(o)?(m(),x(d,l({key:0,id:i.getItemId(o)+"_list",role:"menu",class:e.cx("submenu"),menuId:n.menuId,focusedItemId:n.focusedItemId,items:o.items,templates:n.templates,activeItemPath:n.activeItemPath,level:n.level+1,visible:i.isItemActive(o)&&i.isItemGroup(o),pt:e.pt,unstyled:e.unstyled,onItemClick:t[0]||(t[0]=function(b){return e.$emit("item-click",b)}),onItemMouseenter:t[1]||(t[1]=function(b){return e.$emit("item-mouseenter",b)}),onItemMousemove:t[2]||(t[2]=function(b){return e.$emit("item-mousemove",b)}),"aria-labelledby":i.getItemLabelId(o),ref_for:!0},e.ptm("submenu")),null,16,["id","class","menuId","focusedItemId","items","templates","activeItemPath","level","visible","pt","unstyled","aria-labelledby"])):I("",!0)],16,ht)):I("",!0),i.isItemVisible(o)&&i.getItemProp(o,"separator")?(m(),c("li",l({key:1,id:i.getItemId(o),style:i.getItemProp(o,"style"),class:[e.cx("separator"),i.getItemProp(o,"class")],role:"separator",ref_for:!0},e.ptm("separator")),null,16,yt)):I("",!0)],64)}),128))],16,bt)):I("",!0)]}),_:1},16,["onEnter"])}le.render=xt;var ce={name:"ContextMenu",extends:ft,inheritAttrs:!1,emits:["focus","blur","show","hide","before-show","before-hide"],target:null,outsideClickListener:null,resizeListener:null,documentContextMenuListener:null,matchMediaListener:null,pageX:null,pageY:null,container:null,list:null,data:function(){return{focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],visible:!1,submenuVisible:!1,query:null,queryMatches:!1}},watch:{activeItemPath:function(t){v(t)?(this.bindOutsideClickListener(),this.bindResizeListener()):this.visible||(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.bindMatchMediaListener(),this.global&&this.bindDocumentContextMenuListener()},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.unbindDocumentContextMenuListener(),this.unbindMatchMediaListener(),this.container&&this.autoZIndex&&E.clear(this.container),this.target=null,this.container=null},methods:{getItemProp:function(t,n){return t?B(t[n]):void 0},getItemLabel:function(t){return this.getItemProp(t,"label")},isItemDisabled:function(t){return this.getItemProp(t,"disabled")},isItemVisible:function(t){return this.getItemProp(t,"visible")!==!1},isItemGroup:function(t){return v(this.getItemProp(t,"items"))},isItemSeparator:function(t){return this.getItemProp(t,"separator")},getProccessedItemLabel:function(t){return t?this.getItemLabel(t.item):void 0},isProccessedItemGroup:function(t){return t&&v(t.items)},toggle:function(t){this.visible?this.hide():this.show(t)},show:function(t){this.$emit("before-show"),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},w(this.list),this.pageX=t.pageX,this.pageY=t.pageY,this.visible?this.position():this.visible=!0,t.stopPropagation(),t.preventDefault()},hide:function(){this.$emit("before-hide"),this.visible=!1,this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""}},onFocus:function(t){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:-1,level:0,parentKey:""},this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.$emit("blur",t)},onKeyDown:function(t){var n=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"ArrowRight":this.onArrowRightKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Space":this.onSpaceKey(t);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&H(t.key)&&this.searchItems(t,t.key);break}},onItemChange:function(t,n){var s=t.processedItem,r=t.isFocus;if(!F(s)){var i=s.index,u=s.key,d=s.level,a=s.parentKey,o=s.items,p=v(o),b=this.activeItemPath.filter(function(y){return y.parentKey!==a&&y.parentKey!==u});p&&(b.push(s),this.submenuVisible=!0),this.focusedItemInfo={index:i,level:d,parentKey:a},r&&w(this.list),!(n==="hover"&&this.queryMatches)&&(this.activeItemPath=b)}},onItemClick:function(t){var n=t.processedItem,s=this.isProccessedItemGroup(n),r=this.isSelected(n);if(r){var i=n.index,u=n.key,d=n.level,a=n.parentKey;this.activeItemPath=this.activeItemPath.filter(function(o){return u!==o.key&&u.startsWith(o.key)}),this.focusedItemInfo={index:i,level:d,parentKey:a},w(this.list)}else s?this.onItemChange(t):this.hide()},onItemMouseEnter:function(t){this.onItemChange(t,"hover")},onItemMouseMove:function(t){this.focused&&this.changeFocusedItemIndex(t,t.processedItem.index)},onArrowDownKey:function(t){var n=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(t,n),t.preventDefault()},onArrowUpKey:function(t){if(t.altKey){if(this.focusedItemInfo.index!==-1){var n=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(n);!s&&this.onItemChange({originalEvent:t,processedItem:n})}this.popup&&this.hide(),t.preventDefault()}else{var r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(t,r),t.preventDefault()}},onArrowLeftKey:function(t){var n=this,s=this.visibleItems[this.focusedItemInfo.index],r=this.activeItemPath.find(function(u){return u.key===s.parentKey}),i=F(s.parent);i||(this.focusedItemInfo={index:-1,parentKey:r?r.parentKey:""},this.searchValue="",this.onArrowDownKey(t)),this.activeItemPath=this.activeItemPath.filter(function(u){return u.parentKey!==n.focusedItemInfo.parentKey}),t.preventDefault()},onArrowRightKey:function(t){var n=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(n);s&&(this.onItemChange({originalEvent:t,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key},this.searchValue="",this.onArrowDownKey(t)),t.preventDefault()},onHomeKey:function(t){this.changeFocusedItemIndex(t,this.findFirstItemIndex()),t.preventDefault()},onEndKey:function(t){this.changeFocusedItemIndex(t,this.findLastItemIndex()),t.preventDefault()},onEnterKey:function(t){if(this.focusedItemInfo.index!==-1){var n=A(this.list,'li[id="'.concat("".concat(this.focusedItemIdx),'"]')),s=n&&A(n,'[data-pc-section="itemlink"]');s?s.click():n&&n.click();var r=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(r);!i&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}t.preventDefault()},onSpaceKey:function(t){this.onEnterKey(t)},onEscapeKey:function(t){this.hide(),!this.popup&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex()),t.preventDefault()},onTabKey:function(t){if(this.focusedItemInfo.index!==-1){var n=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(n);!s&&this.onItemChange({originalEvent:t,processedItem:n})}this.hide()},onEnter:function(t){Ve(t,{position:"absolute"}),this.position(),this.autoZIndex&&E.set("menu",t,this.baseZIndex+this.$primevue.config.zIndex.menu)},onAfterEnter:function(){this.bindOutsideClickListener(),this.bindResizeListener(),this.$emit("show"),w(this.list)},onLeave:function(){this.$emit("hide"),this.container=null},onAfterLeave:function(t){this.autoZIndex&&E.clear(t),this.unbindOutsideClickListener(),this.unbindResizeListener()},position:function(){var t=this.pageX+1,n=this.pageY+1,s=this.container.offsetParent?this.container.offsetWidth:ze(this.container),r=this.container.offsetParent?this.container.offsetHeight:De(this.container),i=Oe(),u=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||0,d=window.scrollX||document.documentElement.scrollLeft||document.body.scrollLeft||0;t+s-d>i.width&&(t-=s),n+r-u>i.height&&(n-=r),t<d&&(t=d),n<u&&(n=u),this.container.style.left=t+"px",this.container.style.top=n+"px"},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){var s=t.container&&!t.container.contains(n.target),r=t.visible?!(t.target&&(t.target===n.target||t.target.contains(n.target))):!0;s&&r&&t.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.visible&&!U()&&t.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindDocumentContextMenuListener:function(){var t=this;this.documentContextMenuListener||(this.documentContextMenuListener=function(n){n.button===2&&t.show(n)},document.addEventListener("contextmenu",this.documentContextMenuListener))},unbindDocumentContextMenuListener:function(){this.documentContextMenuListener&&(document.removeEventListener("contextmenu",this.documentContextMenuListener),this.documentContextMenuListener=null)},bindMatchMediaListener:function(){var t=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){t.queryMatches=n.matches},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(t){var n;return this.isValidItem(t)&&((n=this.getProccessedItemLabel(t))===null||n===void 0?void 0:n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(t){return!!t&&!this.isItemDisabled(t.item)&&!this.isItemSeparator(t.item)&&this.isItemVisible(t.item)},isValidSelectedItem:function(t){return this.isValidItem(t)&&this.isSelected(t)},isSelected:function(t){return this.activeItemPath.some(function(n){return n.key===t.key})},findFirstItemIndex:function(){var t=this;return this.visibleItems.findIndex(function(n){return t.isValidItem(n)})},findLastItemIndex:function(){var t=this;return O(this.visibleItems,function(n){return t.isValidItem(n)})},findNextItemIndex:function(t){var n=this,s=t<this.visibleItems.length-1?this.visibleItems.slice(t+1).findIndex(function(r){return n.isValidItem(r)}):-1;return s>-1?s+t+1:t},findPrevItemIndex:function(t){var n=this,s=t>0?O(this.visibleItems.slice(0,t),function(r){return n.isValidItem(r)}):-1;return s>-1?s:t},findSelectedItemIndex:function(){var t=this;return this.visibleItems.findIndex(function(n){return t.isValidSelectedItem(n)})},findFirstFocusedItemIndex:function(){var t=this.findSelectedItemIndex();return t<0?this.findFirstItemIndex():t},findLastFocusedItemIndex:function(){var t=this.findSelectedItemIndex();return t<0?this.findLastItemIndex():t},searchItems:function(t,n){var s=this;this.searchValue=(this.searchValue||"")+n;var r=-1,i=!1;return this.focusedItemInfo.index!==-1?(r=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u){return s.isItemMatched(u)}),r=r===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(u){return s.isItemMatched(u)}):r+this.focusedItemInfo.index):r=this.visibleItems.findIndex(function(u){return s.isItemMatched(u)}),r!==-1&&(i=!0),r===-1&&this.focusedItemInfo.index===-1&&(r=this.findFirstFocusedItemIndex()),r!==-1&&this.changeFocusedItemIndex(t,r),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){s.searchValue="",s.searchTimeout=null},500),i},changeFocusedItemIndex:function(t,n){this.focusedItemInfo.index!==n&&(this.focusedItemInfo.index=n,this.scrollInView())},scrollInView:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,n=t!==-1?"".concat(this.$id,"_").concat(t):this.focusedItemIdx,s=A(this.list,'li[id="'.concat(n,'"]'));s&&s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(t){var n=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",u=[];return t&&t.forEach(function(d,a){var o=(i!==""?i+"_":"")+a,p={item:d,index:a,level:s,key:o,parent:r,parentKey:i};p.items=n.createProcessedItems(d.items,s+1,p,o),u.push(p)}),u},containerRef:function(t){this.container=t},listRef:function(t){this.list=t?t.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var t=this,n=this.activeItemPath.find(function(s){return s.key===t.focusedItemInfo.parentKey});return n?n.items:this.processedItems},focusedItemIdx:function(){return this.focusedItemInfo.index!==-1?"".concat(this.$id).concat(v(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{ContextMenuSub:le,Portal:Te}};function kt(e,t,n,s,r,i){var u=S("ContextMenuSub"),d=S("Portal");return m(),x(d,{appendTo:e.appendTo},{default:k(function(){return[g(ae,l({name:"p-contextmenu",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},e.ptm("transition")),{default:k(function(){return[r.visible?(m(),c("div",l({key:0,ref:i.containerRef,class:e.cx("root")},e.ptmi("root")),[g(u,{ref:i.listRef,id:e.$id+"_list",class:$(e.cx("rootList")),role:"menubar",root:!0,tabindex:e.tabindex,"aria-orientation":"vertical","aria-activedescendant":r.focused?i.focusedItemIdx:void 0,menuId:e.$id,focusedItemId:r.focused?i.focusedItemIdx:void 0,items:i.processedItems,templates:e.$slots,activeItemPath:r.activeItemPath,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,level:0,visible:r.submenuVisible,pt:e.pt,unstyled:e.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter,onItemMousemove:i.onItemMouseMove},null,8,["id","class","tabindex","aria-activedescendant","menuId","focusedItemId","items","templates","activeItemPath","aria-labelledby","aria-label","visible","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"])],16)):I("",!0)]}),_:1},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:1},8,["appendTo"])}ce.render=kt;var wt=({dt:e})=>`
.p-steplist {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow-x: auto;
}

.p-step {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: ${e("stepper.step.gap")};
    padding: ${e("stepper.step.padding")};
}

.p-step:last-of-type {
    flex: initial;
}

.p-step-header {
    border: 0 none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")};
    border-radius: ${e("stepper.step.header.border.radius")};
    outline-color: transparent;
    background: transparent;
    padding: ${e("stepper.step.header.padding")};
    gap: ${e("stepper.step.header.gap")};
}

.p-step-header:focus-visible {
    box-shadow: ${e("stepper.step.header.focus.ring.shadow")};
    outline: ${e("stepper.step.header.focus.ring.width")} ${e("stepper.step.header.focus.ring.style")} ${e("stepper.step.header.focus.ring.color")};
    outline-offset: ${e("stepper.step.header.focus.ring.offset")};
}

.p-stepper.p-stepper-readonly .p-step {
    cursor: auto;
}

.p-step-title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: ${e("stepper.step.title.color")};
    font-weight: ${e("stepper.step.title.font.weight")};
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")};
}

.p-step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${e("stepper.step.number.color")};
    border: 2px solid ${e("stepper.step.number.border.color")};
    background: ${e("stepper.step.number.background")};
    min-width: ${e("stepper.step.number.size")};
    height: ${e("stepper.step.number.size")};
    line-height: ${e("stepper.step.number.size")};
    font-size: ${e("stepper.step.number.font.size")};
    z-index: 1;
    border-radius: ${e("stepper.step.number.border.radius")};
    position: relative;
    font-weight: ${e("stepper.step.number.font.weight")};
}

.p-step-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${e("stepper.step.number.border.radius")};
    box-shadow: ${e("stepper.step.number.shadow")};
}

.p-step-active .p-step-header {
    cursor: default;
}

.p-step-active .p-step-number {
    background: ${e("stepper.step.number.active.background")};
    border-color: ${e("stepper.step.number.active.border.color")};
    color: ${e("stepper.step.number.active.color")};
}

.p-step-active .p-step-title {
    color: ${e("stepper.step.title.active.color")};
}

.p-step:not(.p-disabled):focus-visible {
    outline: ${e("focus.ring.width")} ${e("focus.ring.style")} ${e("focus.ring.color")};
    outline-offset: ${e("focus.ring.offset")};
}

.p-step:has(~ .p-step-active) .p-stepper-separator {
    background: ${e("stepper.separator.active.background")};
}

.p-stepper-separator {
    flex: 1 1 0;
    background: ${e("stepper.separator.background")};
    width: 100%;
    height: ${e("stepper.separator.size")};
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")};
}

.p-steppanels {
    padding: ${e("stepper.steppanels.padding")};
}

.p-steppanel {
    background: ${e("stepper.steppanel.background")};
    color: ${e("stepper.steppanel.color")};
}

.p-stepper:has(.p-stepitem) {
    display: flex;
    flex-direction: column;
}

.p-stepitem {
    display: flex;
    flex-direction: column;
    flex: initial;
}

.p-stepitem.p-stepitem-active {
    flex: 1 1 auto;
}

.p-stepitem .p-step {
    flex: initial;
}

.p-stepitem .p-steppanel-content {
    width: 100%;
    padding: ${e("stepper.steppanel.padding")};
    margin-inline-start: 1rem;
}

.p-stepitem .p-steppanel {
    display: flex;
    flex: 1 1 auto;
}

.p-stepitem .p-stepper-separator {
    flex: 0 0 auto;
    width: ${e("stepper.separator.size")};
    height: auto;
    margin: ${e("stepper.separator.margin")};
    position: relative;
    left: calc(-1 * ${e("stepper.separator.size")});
}

.p-stepitem .p-stepper-separator:dir(rtl) {
    left: calc(-9 * ${e("stepper.separator.size")});
}

.p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
    background: ${e("stepper.separator.active.background")};
}

.p-stepitem:last-of-type .p-steppanel {
    padding-inline-start: ${e("stepper.step.number.size")};
}
`,Lt={root:function(t){var n=t.props;return["p-stepper p-component",{"p-readonly":n.linear}]},separator:"p-stepper-separator"},Pt=z.extend({name:"stepper",style:wt,classes:Lt}),Mt={name:"BaseStepper",extends:K,props:{value:{type:[String,Number],default:void 0},linear:{type:Boolean,default:!1}},style:Pt,provide:function(){return{$pcStepper:this,$parentInstance:this}}},de={name:"Stepper",extends:Mt,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(t){this.d_value=t}},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isStepActive:function(t){return this.d_value===t},isStepDisabled:function(){return this.linear}}};function St(e,t,n,s,r,i){return m(),c("div",l({class:e.cx("root"),role:"tablist"},e.ptmi("root")),[e.$slots.start?L(e.$slots,"start",{key:0}):I("",!0),L(e.$slots,"default"),e.$slots.end?L(e.$slots,"end",{key:1}):I("",!0)],16)}de.render=St;var Kt={root:"p-steplist"},Ct=z.extend({name:"steplist",classes:Kt}),$t={name:"BaseStepList",extends:K,style:Ct,provide:function(){return{$pcStepList:this,$parentInstance:this}}},pe={name:"StepList",extends:$t,inheritAttrs:!1};function At(e,t,n,s,r,i){return m(),c("div",l({class:e.cx("root")},e.ptmi("root")),[L(e.$slots,"default")],16)}pe.render=At;var Ft={root:function(t){var n=t.instance;return["p-step",{"p-step-active":n.active,"p-disabled":n.isStepDisabled}]},header:"p-step-header",number:"p-step-number",title:"p-step-title"},Et=z.extend({name:"step",classes:Ft}),fe={name:"StepperSeparator",hostName:"Stepper",extends:K};function Vt(e,t,n,s,r,i){return m(),c("span",l({class:e.cx("separator")},e.ptm("separator")),null,16)}fe.render=Vt;var zt={name:"BaseStep",extends:K,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:Et,provide:function(){return{$pcStep:this,$parentInstance:this}}},be={name:"Step",extends:zt,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepList:{default:null},$pcStepItem:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el&&this.$pcStepList){var t=Re(this.$el,ee(this.$pcStepper.$el,'[data-pc-name="step"]')),n=ee(this.$pcStepper.$el,'[data-pc-name="step"]').length;this.isSeparatorVisible=t!==n-1}},methods:{getPTOptions:function(t){var n=t==="root"?this.ptmi:this.ptm;return n(t,{context:{active:this.active,disabled:this.isStepDisabled}})},onStepClick:function(){this.$pcStepper.updateValue(this.activeValue)}},computed:{active:function(){return this.$pcStepper.isStepActive(this.activeValue)},activeValue:function(){var t;return this.$pcStepItem?(t=this.$pcStepItem)===null||t===void 0?void 0:t.value:this.value},isStepDisabled:function(){return!this.active&&(this.$pcStepper.isStepDisabled()||this.disabled)},id:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.id,"_step_").concat(this.activeValue)},ariaControls:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.id,"_steppanel_").concat(this.activeValue)},a11yAttrs:function(){return{root:{role:"presentation","aria-current":this.active?"step":void 0,"data-pc-name":"step","data-pc-section":"root","data-p-disabled":this.isStepDisabled,"data-p-active":this.active},header:{id:this.id,role:"tab",taindex:this.disabled?-1:void 0,"aria-controls":this.ariaControls,"data-pc-section":"header",disabled:this.isStepDisabled,onClick:this.onStepClick}}}},components:{StepperSeparator:fe}},Dt=["id","tabindex","aria-controls","disabled"];function Ot(e,t,n,s,r,i){var u=S("StepperSeparator");return e.asChild?L(e.$slots,"default",{key:1,class:$(e.cx("root")),active:i.active,value:e.value,a11yAttrs:i.a11yAttrs,activateCallback:i.onStepClick}):(m(),x(M(e.as),l({key:0,class:e.cx("root"),"aria-current":i.active?"step":void 0,role:"presentation","data-p-active":i.active,"data-p-disabled":i.isStepDisabled},i.getPTOptions("root")),{default:k(function(){return[f("button",l({id:i.id,class:e.cx("header"),role:"tab",type:"button",tabindex:i.isStepDisabled?-1:void 0,"aria-controls":i.ariaControls,disabled:i.isStepDisabled,onClick:t[0]||(t[0]=function(){return i.onStepClick&&i.onStepClick.apply(i,arguments)})},i.getPTOptions("header")),[f("span",l({class:e.cx("number")},i.getPTOptions("number")),T(i.activeValue),17),f("span",l({class:e.cx("title")},i.getPTOptions("title")),[L(e.$slots,"default")],16)],16,Dt),r.isSeparatorVisible?(m(),x(u,{key:0})):I("",!0)]}),_:3},16,["class","aria-current","data-p-active","data-p-disabled"]))}be.render=Ot;var Tt=({dt:e})=>`
.p-breadcrumb {
    background: ${e("breadcrumb.background")};
    padding: ${e("breadcrumb.padding")};
    overflow-x: auto;
}

.p-breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: ${e("breadcrumb.gap")};
}

.p-breadcrumb-separator {
    display: flex;
    align-items: center;
    color: ${e("breadcrumb.separator.color")};
}

.p-breadcrumb-separator-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-breadcrumb::-webkit-scrollbar {
    display: none;
}

.p-breadcrumb-item-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: ${e("breadcrumb.item.gap")};
    transition: background ${e("breadcrumb.transition.duration")}, color ${e("breadcrumb.transition.duration")}, outline-color ${e("breadcrumb.transition.duration")}, box-shadow ${e("breadcrumb.transition.duration")};
    border-radius: ${e("breadcrumb.item.border.radius")};
    outline-color: transparent;
    color: ${e("breadcrumb.item.color")};
}

.p-breadcrumb-item-link:focus-visible {
    box-shadow: ${e("breadcrumb.item.focus.ring.shadow")};
    outline: ${e("breadcrumb.item.focus.ring.width")} ${e("breadcrumb.item.focus.ring.style")} ${e("breadcrumb.item.focus.ring.color")};
    outline-offset: ${e("breadcrumb.item.focus.ring.offset")};
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
    color: ${e("breadcrumb.item.hover.color")};
}

.p-breadcrumb-item-label {
    transition: inherit;
}

.p-breadcrumb-item-icon {
    color: ${e("breadcrumb.item.icon.color")};
    transition: inherit;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
    color: ${e("breadcrumb.item.icon.hover.color")};
}
`,Bt={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",separatorIcon:"p-breadcrumb-separator-icon",item:function(t){var n=t.instance;return["p-breadcrumb-item",{"p-disabled":n.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},Rt=z.extend({name:"breadcrumb",style:Tt,classes:Bt}),Gt={name:"BaseBreadcrumb",extends:K,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:Rt,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},he={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:K,props:{item:null,templates:null,index:null},methods:{onClick:function(t){this.item.command&&this.item.command({originalEvent:t,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var t=this.item,n=t.to,s=t.url,r=typeof window<"u"?window.location.pathname:"";return n===r||s===r?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var t=this;return{action:l({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(s){return t.onClick(s)}},this.ptm("itemLink",this.ptmOptions)),icon:l({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:l({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},_t=["href","target","aria-current"];function Nt(e,t,n,s,r,i){return i.visible()?(m(),c("li",l({key:0,class:[e.cx("item"),n.item.class]},e.ptm("item",i.ptmOptions)),[n.templates.item?(m(),x(M(n.templates.item),{key:1,item:n.item,label:i.label(),props:i.getMenuItemProps},null,8,["item","label","props"])):(m(),c("a",l({key:0,href:n.item.url||"#",class:e.cx("itemLink"),target:n.item.target,"aria-current":i.isCurrentUrl(),onClick:t[0]||(t[0]=function(){return i.onClick&&i.onClick.apply(i,arguments)})},e.ptm("itemLink",i.ptmOptions)),[n.templates&&n.templates.itemicon?(m(),x(M(n.templates.itemicon),{key:0,item:n.item,class:$(e.cx("itemIcon",i.ptmOptions))},null,8,["item","class"])):n.item.icon?(m(),c("span",l({key:1,class:[e.cx("itemIcon"),n.item.icon]},e.ptm("itemIcon",i.ptmOptions)),null,16)):I("",!0),n.item.label?(m(),c("span",l({key:2,class:e.cx("itemLabel")},e.ptm("itemLabel",i.ptmOptions)),T(i.label()),17)):I("",!0)],16,_t))],16)):I("",!0)}he.render=Nt;var Ie={name:"Breadcrumb",extends:Gt,inheritAttrs:!1,components:{BreadcrumbItem:he,ChevronRightIcon:qe}};function jt(e,t,n,s,r,i){var u=S("BreadcrumbItem"),d=S("ChevronRightIcon");return m(),c("nav",l({class:e.cx("root")},e.ptmi("root")),[f("ol",l({class:e.cx("list")},e.ptm("list")),[e.home?(m(),x(u,l({key:0,item:e.home,class:e.cx("homeItem"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):I("",!0),(m(!0),c(P,null,D(e.model,function(a,o){return m(),c(P,{key:a.label+"_"+o},[e.home||o!==0?(m(),c("li",l({key:0,class:e.cx("separator"),ref_for:!0},e.ptm("separator")),[L(e.$slots,"separator",{},function(){return[g(d,l({"aria-hidden":"true",class:e.cx("separatorIcon"),ref_for:!0},e.ptm("separatorIcon")),null,16,["class"])]})],16)):I("",!0),g(u,{item:a,index:o,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}Ie.render=jt;var Ht=({dt:e})=>`
.p-menubar {
    display: flex;
    align-items: center;
    background: ${e("menubar.background")};
    border: 1px solid ${e("menubar.border.color")};
    border-radius: ${e("menubar.border.radius")};
    color: ${e("menubar.color")};
    padding: ${e("menubar.padding")};
    gap: ${e("menubar.gap")};
}

.p-menubar-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-menubar-root-list,
.p-menubar-submenu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
}

.p-menubar-root-list {
    align-items: center;
    flex-wrap: wrap;
    gap: ${e("menubar.gap")};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: ${e("menubar.base.item.border.radius")};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${e("menubar.base.item.padding")};
}

.p-menubar-item-content {
    transition: background ${e("menubar.transition.duration")}, color ${e("menubar.transition.duration")};
    border-radius: ${e("menubar.item.border.radius")};
    color: ${e("menubar.item.color")};
}

.p-menubar-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${e("menubar.item.padding")};
    gap: ${e("menubar.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-menubar-item-label {
    line-height: 1;
}

.p-menubar-item-icon {
    color: ${e("menubar.item.icon.color")};
}

.p-menubar-submenu-icon {
    color: ${e("menubar.submenu.icon.color")};
    margin-left: auto;
    font-size: ${e("menubar.submenu.icon.size")};
    width: ${e("menubar.submenu.icon.size")};
    height: ${e("menubar.submenu.icon.size")};
}

.p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-item.p-focus > .p-menubar-item-content {
    color: ${e("menubar.item.focus.color")};
    background: ${e("menubar.item.focus.background")};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
    color: ${e("menubar.item.icon.focus.color")};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${e("menubar.submenu.icon.focus.color")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
    color: ${e("menubar.item.focus.color")};
    background: ${e("menubar.item.focus.background")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
    color: ${e("menubar.item.icon.focus.color")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
    color: ${e("menubar.submenu.icon.focus.color")};
}

.p-menubar-item-active > .p-menubar-item-content {
    color: ${e("menubar.item.active.color")};
    background: ${e("menubar.item.active.background")};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
    color: ${e("menubar.item.icon.active.color")};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${e("menubar.submenu.icon.active.color")};
}

.p-menubar-submenu {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    background: ${e("menubar.submenu.background")};
    border: 1px solid ${e("menubar.submenu.border.color")};
    border-radius: ${e("menubar.submenu.border.radius")};
    box-shadow: ${e("menubar.submenu.shadow")};
    color: ${e("menubar.submenu.color")};
    flex-direction: column;
    padding: ${e("menubar.submenu.padding")};
    gap: ${e("menubar.submenu.gap")};
}

.p-menubar-submenu .p-menubar-separator {
    border-block-start: 1px solid ${e("menubar.separator.border.color")};
}

.p-menubar-submenu .p-menubar-item {
    position: relative;
}

.p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-end:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: ${e("menubar.mobile.button.size")};
    height: ${e("menubar.mobile.button.size")};
    position: relative;
    color: ${e("menubar.mobile.button.color")};
    border: 0 none;
    background: transparent;
    border-radius: ${e("menubar.mobile.button.border.radius")};
    transition: background ${e("menubar.transition.duration")}, color ${e("menubar.transition.duration")}, outline-color ${e("menubar.transition.duration")};
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: ${e("menubar.mobile.button.hover.color")};
    background: ${e("menubar.mobile.button.hover.background")};
}

.p-menubar-button:focus-visible {
    box-shadow: ${e("menubar.mobile.button.focus.ring.shadow")};
    outline: ${e("menubar.mobile.button.focus.ring.width")} ${e("menubar.mobile.button.focus.ring.style")} ${e("menubar.mobile.button.focus.ring.color")};
    outline-offset: ${e("menubar.mobile.button.focus.ring.offset")};
}

.p-menubar-mobile {
    position: relative;
}

.p-menubar-mobile .p-menubar-button {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list {
    position: absolute;
    display: none;
    width: 100%;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
    padding: ${e("menubar.submenu.padding")};
    background: ${e("menubar.submenu.background")};
    border: 1px solid ${e("menubar.submenu.border.color")};
    box-shadow: ${e("menubar.submenu.shadow")};
    border-radius: ${e("menubar.submenu.border.radius")};
    gap: ${e("menubar.submenu.gap")};
}

.p-menubar-mobile .p-menubar-root-list:dir(rtl) {
    left: auto;
    right: 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${e("menubar.item.padding")};
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-item {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
    border-block-start: 1px solid ${e("menubar.separator.border.color")};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
.p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar-mobile .p-menubar-submenu {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-inline-start: ${e("menubar.submenu.mobile.indent")};
    padding-inline-end: 0;
}
`,Ut={submenu:function(t){var n=t.instance,s=t.processedItem;return{display:n.isItemActive(s)?"flex":"none"}}},qt={root:function(t){var n=t.instance;return["p-menubar p-component",{"p-menubar-mobile":n.queryMatches,"p-menubar-mobile-active":n.mobileActive}]},start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:function(t){var n=t.instance,s=t.processedItem;return["p-menubar-item",{"p-menubar-item-active":n.isItemActive(s),"p-focus":n.isItemFocused(s),"p-disabled":n.isItemDisabled(s)}]},itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},Wt=z.extend({name:"menubar",style:Ht,classes:qt,inlineStyles:Ut}),Zt={name:"BaseMenubar",extends:K,props:{model:{type:Array,default:null},buttonProps:{type:null,default:null},breakpoint:{type:String,default:"960px"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Wt,provide:function(){return{$pcMenubar:this,$parentInstance:this}}},ge={name:"MenubarSub",hostName:"Menubar",extends:K,emits:["item-mouseenter","item-click","item-mousemove"],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},templates:{type:Object,default:null},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId:function(t){return"".concat(this.menuId,"_").concat(t.key)},getItemKey:function(t){return this.getItemId(t)},getItemProp:function(t,n,s){return t&&t.item?B(t.item[n],s):void 0},getItemLabel:function(t){return this.getItemProp(t,"label")},getItemLabelId:function(t){return"".concat(this.menuId,"_").concat(t.key,"_label")},getPTOptions:function(t,n,s){return this.ptm(s,{context:{item:t.item,index:n,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t),level:this.level}})},isItemActive:function(t){return this.activeItemPath.some(function(n){return n.key===t.key})},isItemVisible:function(t){return this.getItemProp(t,"visible")!==!1},isItemDisabled:function(t){return this.getItemProp(t,"disabled")},isItemFocused:function(t){return this.focusedItemId===this.getItemId(t)},isItemGroup:function(t){return v(t.items)},onItemClick:function(t,n){this.getItemProp(n,"command",{originalEvent:t,item:n.item}),this.$emit("item-click",{originalEvent:t,processedItem:n,isFocus:!0})},onItemMouseEnter:function(t,n){this.$emit("item-mouseenter",{originalEvent:t,processedItem:n})},onItemMouseMove:function(t,n){this.$emit("item-mousemove",{originalEvent:t,processedItem:n})},getAriaPosInset:function(t){return t-this.calculateAriaSetSize.slice(0,t).length+1},getMenuItemProps:function(t,n){return{action:l({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions(t,n,"itemLink")),icon:l({class:[this.cx("itemIcon"),this.getItemProp(t,"icon")]},this.getPTOptions(t,n,"itemIcon")),label:l({class:this.cx("itemLabel")},this.getPTOptions(t,n,"itemLabel")),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions(t,n,"submenuIcon"))}}},computed:{calculateAriaSetSize:function(){var t=this;return this.items.filter(function(n){return t.isItemVisible(n)&&t.getItemProp(n,"separator")})},getAriaSetSize:function(){var t=this;return this.items.filter(function(n){return t.isItemVisible(n)&&!t.getItemProp(n,"separator")}).length}},components:{AngleRightIcon:Y,AngleDownIcon:oe},directives:{ripple:q}},Xt=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],Yt=["onClick","onMouseenter","onMousemove"],Qt=["href","target"],Jt=["id"],en=["id"];function tn(e,t,n,s,r,i){var u=S("MenubarSub",!0),d=W("ripple");return m(),c("ul",l({class:n.level===0?e.cx("rootList"):e.cx("submenu")},n.level===0?e.ptm("rootList"):e.ptm("submenu")),[(m(!0),c(P,null,D(n.items,function(a,o){return m(),c(P,{key:i.getItemKey(a)},[i.isItemVisible(a)&&!i.getItemProp(a,"separator")?(m(),c("li",l({key:0,id:i.getItemId(a),style:i.getItemProp(a,"style"),class:[e.cx("item",{processedItem:a}),i.getItemProp(a,"class")],role:"menuitem","aria-label":i.getItemLabel(a),"aria-disabled":i.isItemDisabled(a)||void 0,"aria-expanded":i.isItemGroup(a)?i.isItemActive(a):void 0,"aria-haspopup":i.isItemGroup(a)&&!i.getItemProp(a,"to")?"menu":void 0,"aria-level":n.level+1,"aria-setsize":i.getAriaSetSize,"aria-posinset":i.getAriaPosInset(o),ref_for:!0},i.getPTOptions(a,o,"item"),{"data-p-active":i.isItemActive(a),"data-p-focused":i.isItemFocused(a),"data-p-disabled":i.isItemDisabled(a)}),[f("div",l({class:e.cx("itemContent"),onClick:function(b){return i.onItemClick(b,a)},onMouseenter:function(b){return i.onItemMouseEnter(b,a)},onMousemove:function(b){return i.onItemMouseMove(b,a)},ref_for:!0},i.getPTOptions(a,o,"itemContent")),[n.templates.item?(m(),x(M(n.templates.item),{key:1,item:a.item,root:n.root,hasSubmenu:i.getItemProp(a,"items"),label:i.getItemLabel(a),props:i.getMenuItemProps(a,o)},null,8,["item","root","hasSubmenu","label","props"])):Z((m(),c("a",l({key:0,href:i.getItemProp(a,"url"),class:e.cx("itemLink"),target:i.getItemProp(a,"target"),tabindex:"-1",ref_for:!0},i.getPTOptions(a,o,"itemLink")),[n.templates.itemicon?(m(),x(M(n.templates.itemicon),{key:0,item:a.item,class:$(e.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(a,"icon")?(m(),c("span",l({key:1,class:[e.cx("itemIcon"),i.getItemProp(a,"icon")],ref_for:!0},i.getPTOptions(a,o,"itemIcon")),null,16)):I("",!0),f("span",l({id:i.getItemLabelId(a),class:e.cx("itemLabel"),ref_for:!0},i.getPTOptions(a,o,"itemLabel")),T(i.getItemLabel(a)),17,Jt),i.getItemProp(a,"items")?(m(),c(P,{key:2},[n.templates.submenuicon?(m(),x(M(n.templates.submenuicon),{key:0,root:n.root,active:i.isItemActive(a),class:$(e.cx("submenuIcon"))},null,8,["root","active","class"])):(m(),x(M(n.root?"AngleDownIcon":"AngleRightIcon"),l({key:1,class:e.cx("submenuIcon"),ref_for:!0},i.getPTOptions(a,o,"submenuIcon")),null,16,["class"]))],64)):I("",!0)],16,Qt)),[[d]])],16,Yt),i.isItemVisible(a)&&i.isItemGroup(a)?(m(),x(u,{key:0,id:i.getItemId(a)+"_list",menuId:n.menuId,role:"menu",style:X(e.sx("submenu",!0,{processedItem:a})),focusedItemId:n.focusedItemId,items:a.items,mobileActive:n.mobileActive,activeItemPath:n.activeItemPath,templates:n.templates,level:n.level+1,"aria-labelledby":i.getItemLabelId(a),pt:e.pt,unstyled:e.unstyled,onItemClick:t[0]||(t[0]=function(p){return e.$emit("item-click",p)}),onItemMouseenter:t[1]||(t[1]=function(p){return e.$emit("item-mouseenter",p)}),onItemMousemove:t[2]||(t[2]=function(p){return e.$emit("item-mousemove",p)})},null,8,["id","menuId","style","focusedItemId","items","mobileActive","activeItemPath","templates","level","aria-labelledby","pt","unstyled"])):I("",!0)],16,Xt)):I("",!0),i.isItemVisible(a)&&i.getItemProp(a,"separator")?(m(),c("li",l({key:1,id:i.getItemId(a),class:[e.cx("separator"),i.getItemProp(a,"class")],style:i.getItemProp(a,"style"),role:"separator",ref_for:!0},e.ptm("separator")),null,16,en)):I("",!0)],64)}),128))],16)}ge.render=tn;var ve={name:"Menubar",extends:Zt,inheritAttrs:!1,emits:["focus","blur"],matchMediaListener:null,data:function(){return{mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],dirty:!1,query:null,queryMatches:!1}},watch:{activeItemPath:function(t){v(t)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.container&&E.clear(this.container),this.container=null},methods:{getItemProp:function(t,n){return t?B(t[n]):void 0},getItemLabel:function(t){return this.getItemProp(t,"label")},isItemDisabled:function(t){return this.getItemProp(t,"disabled")},isItemVisible:function(t){return this.getItemProp(t,"visible")!==!1},isItemGroup:function(t){return v(this.getItemProp(t,"items"))},isItemSeparator:function(t){return this.getItemProp(t,"separator")},getProccessedItemLabel:function(t){return t?this.getItemLabel(t.item):void 0},isProccessedItemGroup:function(t){return t&&v(t.items)},toggle:function(t){var n=this;this.mobileActive?(this.mobileActive=!1,E.clear(this.menubar),this.hide()):(this.mobileActive=!0,E.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){n.show()},1)),this.bindOutsideClickListener(),t.preventDefault()},show:function(){w(this.menubar)},hide:function(t,n){var s=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){w(s.$refs.menubutton)},0)),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},n&&w(this.menubar),this.dirty=!1},onFocus:function(t){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",t)},onKeyDown:function(t){var n=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"ArrowRight":this.onArrowRightKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Space":this.onSpaceKey(t);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&H(t.key)&&this.searchItems(t,t.key);break}},onItemChange:function(t,n){var s=t.processedItem,r=t.isFocus;if(!F(s)){var i=s.index,u=s.key,d=s.level,a=s.parentKey,o=s.items,p=v(o),b=this.activeItemPath.filter(function(y){return y.parentKey!==a&&y.parentKey!==u});p&&b.push(s),this.focusedItemInfo={index:i,level:d,parentKey:a},p&&(this.dirty=!0),r&&w(this.menubar),!(n==="hover"&&this.queryMatches)&&(this.activeItemPath=b)}},onItemClick:function(t){var n=t.originalEvent,s=t.processedItem,r=this.isProccessedItemGroup(s),i=F(s.parent),u=this.isSelected(s);if(u){var d=s.index,a=s.key,o=s.level,p=s.parentKey;this.activeItemPath=this.activeItemPath.filter(function(y){return a!==y.key&&a.startsWith(y.key)}),this.focusedItemInfo={index:d,level:o,parentKey:p},this.dirty=!i,w(this.menubar)}else if(r)this.onItemChange(t);else{var b=i?s:this.activeItemPath.find(function(y){return y.parentKey===""});this.hide(n),this.changeFocusedItemIndex(n,b?b.index:-1),this.mobileActive=!1,w(this.menubar)}},onItemMouseEnter:function(t){this.dirty&&this.onItemChange(t,"hover")},onItemMouseMove:function(t){this.focused&&this.changeFocusedItemIndex(t,t.processedItem.index)},menuButtonClick:function(t){this.toggle(t)},menuButtonKeydown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&this.menuButtonClick(t)},onArrowDownKey:function(t){var n=this.visibleItems[this.focusedItemInfo.index],s=n?F(n.parent):null;if(s){var r=this.isProccessedItemGroup(n);r&&(this.onItemChange({originalEvent:t,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key},this.onArrowRightKey(t))}else{var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(t,i)}t.preventDefault()},onArrowUpKey:function(t){var n=this,s=this.visibleItems[this.focusedItemInfo.index],r=F(s.parent);if(r){var i=this.isProccessedItemGroup(s);if(i){this.onItemChange({originalEvent:t,processedItem:s}),this.focusedItemInfo={index:-1,parentKey:s.key};var u=this.findLastItemIndex();this.changeFocusedItemIndex(t,u)}}else{var d=this.activeItemPath.find(function(o){return o.key===s.parentKey});if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:d?d.parentKey:""},this.searchValue="",this.onArrowLeftKey(t),this.activeItemPath=this.activeItemPath.filter(function(o){return o.parentKey!==n.focusedItemInfo.parentKey});else{var a=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(t,a)}}t.preventDefault()},onArrowLeftKey:function(t){var n=this,s=this.visibleItems[this.focusedItemInfo.index],r=s?this.activeItemPath.find(function(u){return u.key===s.parentKey}):null;if(r)this.onItemChange({originalEvent:t,processedItem:r}),this.activeItemPath=this.activeItemPath.filter(function(u){return u.parentKey!==n.focusedItemInfo.parentKey}),t.preventDefault();else{var i=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(t,i),t.preventDefault()}},onArrowRightKey:function(t){var n=this.visibleItems[this.focusedItemInfo.index],s=n?this.activeItemPath.find(function(u){return u.key===n.parentKey}):null;if(s){var r=this.isProccessedItemGroup(n);r&&(this.onItemChange({originalEvent:t,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key},this.onArrowDownKey(t))}else{var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(t,i),t.preventDefault()}},onHomeKey:function(t){this.changeFocusedItemIndex(t,this.findFirstItemIndex()),t.preventDefault()},onEndKey:function(t){this.changeFocusedItemIndex(t,this.findLastItemIndex()),t.preventDefault()},onEnterKey:function(t){if(this.focusedItemInfo.index!==-1){var n=A(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),s=n&&A(n,'a[data-pc-section="itemlink"]');s?s.click():n&&n.click();var r=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(r);!i&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}t.preventDefault()},onSpaceKey:function(t){this.onEnterKey(t)},onEscapeKey:function(t){if(this.focusedItemInfo.level!==0){var n=this.focusedItemInfo;this.hide(t,!1),this.focusedItemInfo={index:Number(n.parentKey.split("_")[0]),level:0,parentKey:""}}t.preventDefault()},onTabKey:function(t){if(this.focusedItemInfo.index!==-1){var n=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(n);!s&&this.onItemChange({originalEvent:t,processedItem:n})}this.hide()},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){var s=t.container&&!t.container.contains(n.target),r=!(t.target&&(t.target===n.target||t.target.contains(n.target)));s&&r&&t.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(n){U()||t.hide(n,!0),t.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var t=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){t.queryMatches=n.matches,t.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(t){var n;return this.isValidItem(t)&&((n=this.getProccessedItemLabel(t))===null||n===void 0?void 0:n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(t){return!!t&&!this.isItemDisabled(t.item)&&!this.isItemSeparator(t.item)&&this.isItemVisible(t.item)},isValidSelectedItem:function(t){return this.isValidItem(t)&&this.isSelected(t)},isSelected:function(t){return this.activeItemPath.some(function(n){return n.key===t.key})},findFirstItemIndex:function(){var t=this;return this.visibleItems.findIndex(function(n){return t.isValidItem(n)})},findLastItemIndex:function(){var t=this;return O(this.visibleItems,function(n){return t.isValidItem(n)})},findNextItemIndex:function(t){var n=this,s=t<this.visibleItems.length-1?this.visibleItems.slice(t+1).findIndex(function(r){return n.isValidItem(r)}):-1;return s>-1?s+t+1:t},findPrevItemIndex:function(t){var n=this,s=t>0?O(this.visibleItems.slice(0,t),function(r){return n.isValidItem(r)}):-1;return s>-1?s:t},findSelectedItemIndex:function(){var t=this;return this.visibleItems.findIndex(function(n){return t.isValidSelectedItem(n)})},findFirstFocusedItemIndex:function(){var t=this.findSelectedItemIndex();return t<0?this.findFirstItemIndex():t},findLastFocusedItemIndex:function(){var t=this.findSelectedItemIndex();return t<0?this.findLastItemIndex():t},searchItems:function(t,n){var s=this;this.searchValue=(this.searchValue||"")+n;var r=-1,i=!1;return this.focusedItemInfo.index!==-1?(r=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u){return s.isItemMatched(u)}),r=r===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(u){return s.isItemMatched(u)}):r+this.focusedItemInfo.index):r=this.visibleItems.findIndex(function(u){return s.isItemMatched(u)}),r!==-1&&(i=!0),r===-1&&this.focusedItemInfo.index===-1&&(r=this.findFirstFocusedItemIndex()),r!==-1&&this.changeFocusedItemIndex(t,r),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){s.searchValue="",s.searchTimeout=null},500),i},changeFocusedItemIndex:function(t,n){this.focusedItemInfo.index!==n&&(this.focusedItemInfo.index=n,this.scrollInView())},scrollInView:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,n=t!==-1?"".concat(this.$id,"_").concat(t):this.focusedItemId,s=A(this.menubar,'li[id="'.concat(n,'"]'));s&&s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(t){var n=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",u=[];return t&&t.forEach(function(d,a){var o=(i!==""?i+"_":"")+a,p={item:d,index:a,level:s,key:o,parent:r,parentKey:i};p.items=n.createProcessedItems(d.items,s+1,p,o),u.push(p)}),u},containerRef:function(t){this.container=t},menubarRef:function(t){this.menubar=t?t.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var t=this,n=this.activeItemPath.find(function(s){return s.key===t.focusedItemInfo.parentKey});return n?n.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.$id).concat(v(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{MenubarSub:ge,BarsIcon:re}};function R(e){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(e)}function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?te(Object(n),!0).forEach(function(s){nn(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function nn(e,t,n){return(t=sn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sn(e){var t=an(e,"string");return R(t)=="symbol"?t:t+""}function an(e,t){if(R(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var s=n.call(e,t);if(R(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var rn=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function on(e,t,n,s,r,i){var u=S("BarsIcon"),d=S("MenubarSub");return m(),c("div",l({ref:i.containerRef,class:e.cx("root")},e.ptmi("root")),[e.$slots.start?(m(),c("div",l({key:0,class:e.cx("start")},e.ptm("start")),[L(e.$slots,"start")],16)):I("",!0),L(e.$slots,e.$slots.button?"button":"menubutton",{id:e.$id,class:$(e.cx("button")),toggleCallback:function(o){return i.menuButtonClick(o)}},function(){var a;return[e.model&&e.model.length>0?(m(),c("a",l({key:0,ref:"menubutton",role:"button",tabindex:"0",class:e.cx("button"),"aria-haspopup":!!(e.model.length&&e.model.length>0),"aria-expanded":r.mobileActive,"aria-controls":e.$id,"aria-label":(a=e.$primevue.config.locale.aria)===null||a===void 0?void 0:a.navigation,onClick:t[0]||(t[0]=function(o){return i.menuButtonClick(o)}),onKeydown:t[1]||(t[1]=function(o){return i.menuButtonKeydown(o)})},ne(ne({},e.buttonProps),e.ptm("button"))),[L(e.$slots,e.$slots.buttonicon?"buttonicon":"menubuttonicon",{},function(){return[g(u,ie(se(e.ptm("buttonicon"))),null,16)]})],16,rn)):I("",!0)]}),g(d,{ref:i.menubarRef,id:e.$id+"_list",role:"menubar",items:i.processedItems,templates:e.$slots,root:!0,mobileActive:r.mobileActive,tabindex:"0","aria-activedescendant":r.focused?i.focusedItemId:void 0,menuId:e.$id,focusedItemId:r.focused?i.focusedItemId:void 0,activeItemPath:r.activeItemPath,level:0,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,pt:e.pt,unstyled:e.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter,onItemMousemove:i.onItemMouseMove},null,8,["id","items","templates","mobileActive","aria-activedescendant","menuId","focusedItemId","activeItemPath","aria-labelledby","aria-label","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"]),e.$slots.end?(m(),c("div",l({key:1,class:e.cx("end")},e.ptm("end")),[L(e.$slots,"end")],16)):I("",!0)],16)}ve.render=on;const un={class:"card"},mn={class:"card"},ln={class:"flex flex-col md:flex-row gap-8"},cn={class:"md:w-1/2"},dn={class:"card"},pn={class:"md:w-1/2"},fn={class:"card"},bn={class:"flex flex-col md:flex-row gap-8 mt-6"},hn={class:"md:w-1/3"},In={class:"card"},gn={class:"md:w-1/3"},vn={class:"card"},yn={class:"md:w-1/3"},xn={class:"card"},kn={class:"flex flex-col md:flex-row gap-8 mt-8"},wn={class:"md:w-1/2"},Ln={class:"card"},Pn={class:"md:w-1/2"},Mn={class:"card"},Nn={__name:"MenuDoc",setup(e){const t=C(null),n=C(null),s=C([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]},{label:"Quit",icon:"pi pi-fw pi-sign-out"}]),r=C({icon:"pi pi-home",to:"/"}),i=C([{label:"Computer"},{label:"Notebook"},{label:"Accessories"},{label:"Backpacks"},{label:"Item"}]),u=C([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]},{separator:!0},{label:"Quit",icon:"pi pi-fw pi-sign-out"}]),d=C([{label:"Save",icon:"pi pi-save"},{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-trash"},{separator:!0},{label:"Home",icon:"pi pi-home"}]),a=C([{label:"Customers",items:[{label:"New",icon:"pi pi-fw pi-plus"},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]}]),o=C([{label:"Save",icon:"pi pi-save"},{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-trash"},{separator:!0},{label:"Options",icon:"pi pi-cog"}]),p=C([{label:"Fashion",icon:"pi pi-fw pi-tag",items:[[{label:"Woman",items:[{label:"Woman Item"},{label:"Woman Item"},{label:"Woman Item"}]},{label:"Men",items:[{label:"Men Item"},{label:"Men Item"},{label:"Men Item"}]}],[{label:"Kids",items:[{label:"Kids Item"},{label:"Kids Item"}]},{label:"Luggage",items:[{label:"Luggage Item"},{label:"Luggage Item"},{label:"Luggage Item"}]}]]},{label:"Electronics",icon:"pi pi-fw pi-desktop",items:[[{label:"Computer",items:[{label:"Computer Item"},{label:"Computer Item"}]},{label:"Camcorder",items:[{label:"Camcorder Item"},{label:"Camcorder Item"},{label:"Camcorder Item"}]}],[{label:"TV",items:[{label:"TV Item"},{label:"TV Item"}]},{label:"Audio",items:[{label:"Audio Item"},{label:"Audio Item"},{label:"Audio Item"}]}],[{label:"Sports.7",items:[{label:"Sports.7.1"},{label:"Sports.7.2"}]}]]},{label:"Furniture",icon:"pi pi-fw pi-image",items:[[{label:"Living Room",items:[{label:"Living Room Item"},{label:"Living Room Item"}]},{label:"Kitchen",items:[{label:"Kitchen Item"},{label:"Kitchen Item"},{label:"Kitchen Item"}]}],[{label:"Bedroom",items:[{label:"Bedroom Item"},{label:"Bedroom Item"}]},{label:"Outdoor",items:[{label:"Outdoor Item"},{label:"Outdoor Item"},{label:"Outdoor Item"}]}]]},{label:"Sports",icon:"pi pi-fw pi-star",items:[[{label:"Basketball",items:[{label:"Basketball Item"},{label:"Basketball Item"}]},{label:"Football",items:[{label:"Football Item"},{label:"Football Item"},{label:"Football Item"}]}],[{label:"Tennis",items:[{label:"Tennis Item"},{label:"Tennis Item"}]}]]}]),b=C([{label:"Первый курс",icon:"pi pi-fw pi-table",items:[{label:"1 семестр",icon:"pi pi-fw pi-user-plus",items:[{label:"Вывод графика",icon:"pi pi-fw pi-plus"},{label:"НПМ",icon:"pi pi-fw pi-copy"},{label:"НПМ",icon:"pi pi-fw pi-copy"},{label:"НПМ",icon:"pi pi-fw pi-copy"},{label:"НПМ",icon:"pi pi-fw pi-copy"},{label:"НПМ",icon:"pi pi-fw pi-copy"}]},{label:"2 семестр",icon:"pi pi-fw pi-user-plus",items:[{label:"Вывод графика",icon:"pi pi-fw pi-plus"},{label:"НПМ",icon:"pi pi-fw pi-copy"},{label:"НПМ",icon:"pi pi-fw pi-copy"},{label:"НПМ",icon:"pi pi-fw pi-copy"},{label:"НПМ",icon:"pi pi-fw pi-copy"},{label:"НПМ",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Второй курс",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Третий курс",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Четвертый курс",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]}]);function y(G){t.value.toggle(G)}function _(G){n.value.show(G)}return(G,h)=>{const ye=We,xe=Xe,ke=Ze,we=ve,Le=Ie,N=be,Pe=pe,Me=de,j=He,Se=Ue,Ke=je,Ce=Ne,Q=_e,$e=Ge,Ae=ce,J=me,Fe=Ee;return m(),c(P,null,[f("div",un,[h[0]||(h[0]=f("div",{class:"font-semibold text-xl mb-4"},"Menubar",-1)),g(we,{model:s.value},{end:k(()=>[g(ke,{iconPosition:"left"},{default:k(()=>[g(ye,{class:"pi pi-search"}),g(xe,{type:"text",placeholder:"Search"})]),_:1})]),_:1},8,["model"])]),f("div",mn,[h[1]||(h[1]=f("div",{class:"font-semibold text-xl mb-4"},"Breadcrumb",-1)),g(Le,{home:r.value,model:i.value},null,8,["home","model"])]),f("div",ln,[f("div",cn,[f("div",dn,[h[5]||(h[5]=f("div",{class:"font-semibold text-xl mb-4"},"Steps",-1)),g(Me,{value:"1"},{default:k(()=>[g(Pe,null,{default:k(()=>[g(N,{value:"1"},{default:k(()=>h[2]||(h[2]=[V("Header I")])),_:1}),g(N,{value:"2"},{default:k(()=>h[3]||(h[3]=[V("Header II")])),_:1}),g(N,{value:"3"},{default:k(()=>h[4]||(h[4]=[V("Header III")])),_:1})]),_:1})]),_:1})])]),f("div",pn,[f("div",fn,[h[9]||(h[9]=f("div",{class:"font-semibold text-xl mb-4"},"TabMenu",-1)),g(Ke,{value:"0"},{default:k(()=>[g(Se,null,{default:k(()=>[g(j,{value:"0"},{default:k(()=>h[6]||(h[6]=[V("Header I")])),_:1}),g(j,{value:"1"},{default:k(()=>h[7]||(h[7]=[V("Header II")])),_:1}),g(j,{value:"2"},{default:k(()=>h[8]||(h[8]=[V("Header III")])),_:1})]),_:1})]),_:1})])])]),f("div",bn,[f("div",hn,[f("div",In,[h[10]||(h[10]=f("div",{class:"font-semibold text-xl mb-4"},"Tiered Menu",-1)),g(Ce,{model:u.value},null,8,["model"])])]),f("div",gn,[f("div",vn,[h[11]||(h[11]=f("div",{class:"font-semibold text-xl mb-4"},"Plain Menu",-1)),g(Q,{model:a.value},null,8,["model"])])]),f("div",yn,[f("div",xn,[h[12]||(h[12]=f("div",{class:"font-semibold text-xl mb-4"},"Overlay Menu",-1)),g(Q,{ref_key:"menu",ref:t,model:d.value,popup:!0},null,8,["model"]),g($e,{type:"button",label:"Options",icon:"pi pi-angle-down",onClick:y,style:{width:"auto"}})]),f("div",{class:"card",onContextmenu:_},[h[13]||(h[13]=f("div",{class:"font-semibold text-xl mb-4"},"Context Menu",-1)),h[14]||(h[14]=V(" Right click to display. ")),g(Ae,{ref_key:"contextMenu",ref:n,model:o.value},null,8,["model"])],32)])]),f("div",kn,[f("div",wn,[f("div",Ln,[h[15]||(h[15]=f("div",{class:"font-semibold text-xl mb-4"},"MegaMenu | Horizontal",-1)),g(J,{model:p.value},null,8,["model"]),h[16]||(h[16]=f("div",{class:"font-semibold text-xl mb-4 mt-8"},"MegaMenu | Vertical",-1)),g(J,{model:p.value,orientation:"vertical"},null,8,["model"])])]),f("div",Pn,[f("div",Mn,[h[17]||(h[17]=f("div",{class:"font-semibold text-xl mb-4"},"Учебный план",-1)),g(Fe,{model:b.value},null,8,["model"])])])])],64)}}};export{Nn as default};
