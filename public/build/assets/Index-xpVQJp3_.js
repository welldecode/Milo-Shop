import{o as x,b,a as v,w as _,f as k,t as S,u as y,i as V,x as q,s as H,c as G,Q as X,e as s,l as z,F as O,O as Y}from"./app-M4UiiRmd.js";import{_ as Q}from"./AppLayout-VWRr5EQ-.js";import{i as U,j as J,k as K,n as L,f as $,N as W,h as Z,S as R}from"./SkeletonLoader.vue_vue_type_style_index_0_scoped_d98cf86a_lang-inmUiAAP.js";import"./_plugin-vue_export-helper-x3n3nnut.js";function ee(a){let{swiper:e,extendParams:T,on:h}=a;T({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let M=!1,g=!1;e.thumbs={swiper:null};function C(){const i=e.thumbs.swiper;if(!i||i.destroyed)return;const t=i.clickedIndex,c=i.clickedSlide;if(c&&c.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof t>"u"||t===null)return;let d;i.params.loop?d=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10):d=t,e.params.loop?e.slideToLoop(d):e.slideTo(d)}function n(){const{thumbs:i}=e.params;if(M)return!1;M=!0;const t=e.constructor;if(i.swiper instanceof t)e.thumbs.swiper=i.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(J(i.swiper)){const c=Object.assign({},i.swiper);Object.assign(c,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new t(c),g=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",C),!0}function u(i){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const c=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():t.params.slidesPerView;let d=1;const l=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(d=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(d=1),d=Math.floor(d),t.slides.forEach(f=>f.classList.remove(l)),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(let f=0;f<d;f+=1)K(t.slidesEl,`[data-swiper-slide-index="${e.realIndex+f}"]`).forEach(r=>{r.classList.add(l)});else for(let f=0;f<d;f+=1)t.slides[e.realIndex+f]&&t.slides[e.realIndex+f].classList.add(l);const m=e.params.thumbs.autoScrollOffset,P=m&&!t.params.loop;if(e.realIndex!==t.realIndex||P){const f=t.activeIndex;let r,I;if(t.params.loop){const o=t.slides.filter(j=>j.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];r=t.slides.indexOf(o),I=e.activeIndex>e.previousIndex?"next":"prev"}else r=e.realIndex,I=r>e.previousIndex?"next":"prev";P&&(r+=I==="next"?m:-1*m),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(r)<0&&(t.params.centeredSlides?r>f?r=r-Math.floor(c/2)+1:r=r+Math.floor(c/2)-1:r>f&&t.params.slidesPerGroup,t.slideTo(r,i?0:void 0))}}h("beforeInit",()=>{const{thumbs:i}=e.params;if(!(!i||!i.swiper))if(typeof i.swiper=="string"||i.swiper instanceof HTMLElement){const t=U(),c=()=>{const l=typeof i.swiper=="string"?t.querySelector(i.swiper):i.swiper;if(l&&l.swiper)i.swiper=l.swiper,n(),u(!0);else if(l){const m=P=>{i.swiper=P.detail[0],l.removeEventListener("init",m),n(),u(!0),i.swiper.update(),e.update()};l.addEventListener("init",m)}return l},d=()=>{if(e.destroyed)return;c()||requestAnimationFrame(d)};requestAnimationFrame(d)}else n(),u(!0)}),h("slideChange update resize observerUpdate",()=>{u()}),h("setTransition",(i,t)=>{const c=e.thumbs.swiper;!c||c.destroyed||c.setTransition(t)}),h("beforeDestroy",()=>{const i=e.thumbs.swiper;!i||i.destroyed||g&&i.destroy()}),Object.assign(e.thumbs,{init:n,update:u})}function te(a){let{swiper:e,extendParams:T,emit:h,once:M}=a;T({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function g(){if(e.params.cssMode)return;const u=e.getTranslate();e.setTranslate(u),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function C(){if(e.params.cssMode)return;const{touchEventsData:u,touches:i}=e;u.velocities.length===0&&u.velocities.push({position:i[e.isHorizontal()?"startX":"startY"],time:u.touchStartTime}),u.velocities.push({position:i[e.isHorizontal()?"currentX":"currentY"],time:L()})}function n(u){let{currentPos:i}=u;if(e.params.cssMode)return;const{params:t,wrapperEl:c,rtlTranslate:d,snapGrid:l,touchEventsData:m}=e,f=L()-m.touchStartTime;if(i<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(i>-e.maxTranslate()){e.slides.length<l.length?e.slideTo(l.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(m.velocities.length>1){const p=m.velocities.pop(),w=m.velocities.pop(),F=p.position-w.position,D=p.time-w.time;e.velocity=F/D,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(D>150||L()-p.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,m.velocities.length=0;let r=1e3*t.freeMode.momentumRatio;const I=e.velocity*r;let o=e.translate+I;d&&(o=-o);let j=!1,E;const B=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let A;if(o<e.maxTranslate())t.freeMode.momentumBounce?(o+e.maxTranslate()<-B&&(o=e.maxTranslate()-B),E=e.maxTranslate(),j=!0,m.allowMomentumBounce=!0):o=e.maxTranslate(),t.loop&&t.centeredSlides&&(A=!0);else if(o>e.minTranslate())t.freeMode.momentumBounce?(o-e.minTranslate()>B&&(o=e.minTranslate()+B),E=e.minTranslate(),j=!0,m.allowMomentumBounce=!0):o=e.minTranslate(),t.loop&&t.centeredSlides&&(A=!0);else if(t.freeMode.sticky){let p;for(let w=0;w<l.length;w+=1)if(l[w]>-o){p=w;break}Math.abs(l[p]-o)<Math.abs(l[p-1]-o)||e.swipeDirection==="next"?o=l[p]:o=l[p-1],o=-o}if(A&&M("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(d?r=Math.abs((-o-e.translate)/e.velocity):r=Math.abs((o-e.translate)/e.velocity),t.freeMode.sticky){const p=Math.abs((d?-o:o)-e.translate),w=e.slidesSizesGrid[e.activeIndex];p<w?r=t.speed:p<2*w?r=t.speed*1.5:r=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&j?(e.updateProgress(E),e.setTransition(r),e.setTranslate(o),e.transitionStart(!0,e.swipeDirection),e.animating=!0,$(c,()=>{!e||e.destroyed||!m.allowMomentumBounce||(h("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(E),$(c,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(h("_freeModeNoMomentumRelease"),e.updateProgress(o),e.setTransition(r),e.setTranslate(o),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,$(c,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(o),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&h("_freeModeNoMomentumRelease");(!t.freeMode.momentum||f>=t.longSwipesMs)&&(h("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:g,onTouchMove:C,onTouchEnd:n}})}const se={class:"font-semibold text-base text-zinc-500 leading-tight mt-12 mb-12"},ie={props:{property:Object,title:String,href:String}},N=Object.assign(ie,{__name:"Breadcrumb",setup(a){return(e,T)=>(x(),b("h2",se,[v(y(V),{class:"hover:text-emerald-500 duration-200",href:`/${a.href}`},{default:_(()=>[k(S(a.title),1)]),_:1},8,["href"]),k(" / "),v(y(V),{href:`/${a.href}/`,class:"text-zinc-500"},{default:_(()=>[k(S(a.property.title),1)]),_:1},8,["href"])]))}}),oe={class:"containerx mx-auto"},ne={class:"flex flex-col gap-10 md:flex-row md:justify-between lg:gap-24"},re={class:"w-[48rem]"},le=["src"],ae=["src"],ce={class:"lg:max-w-md xl:max-w-lg md:py-2 w-full"},de={class:"rounded-md flex flex-col h-full"},ue={class:"text-2xl font-extrabold text-zinc-700 uppercase w-[25rem] mb-2"},me=s("span",{class:"text-sm font-normal text-zinc-500"},[k("Vendido e entregue pelo: "),s("b",null,"AliexPress")],-1),fe={class:"wishlist mt-5 flex items-center justify-between gap-5"},pe={class:"quantity text-sm font-medium text-zinc-600"},he={key:0,class:"bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"},we={key:1,class:"bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300"},xe=s("div",{class:"flex items-center gap-4"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",viewBox:"0 0 24 24","stroke-width":".1",fill:"#222"},[s("path",{d:"M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"})]),s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",viewBox:"0 0 24 24",fill:"currentColor"},[s("path",{d:"M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"})])],-1),ge=s("hr",{class:"mt-5"},null,-1),be={class:"mt-5 inline-flex flex-col gap-5"},ve={class:""},_e={class:"font-extrabold text-3xl text-blue-700"},Ce=s("div",{class:"flex items-center gap-2 mt-5"},[s("div",{class:"flex items-center gap-2 text-sm font-medium bg-blue-50 px-6 py-2 rounded text-blue-700 border border-solid border-slate-200"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"w-5 h-5",fill:"currentColor"},[s("path",{d:"M3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979ZM20.0049 10.9998H4.00488V18.9998H20.0049V10.9998ZM20.0049 8.99979V4.99979H4.00488V8.99979H20.0049ZM14.0049 14.9998H18.0049V16.9998H14.0049V14.9998Z"})]),s("span",null,"Até 12x sem juros")])],-1),ye={class:"flex items-center justify-between gap-5"},Te=s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-white"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})],-1),Me=[Te],Se={class:"mt-10"},ke=s("h1",{class:"font-bold text-lg text-zinc-700"},"Produtos relacionados",-1),Pe={class:"mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-2 xl:gap-x-8"},Ie={class:"absolute right-5 top-10 flex items-center gap-3 opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-300"},je={class:"bg-blue-700 p-2 rounded-md"},Ee=["onClick"],Be=s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-white"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})],-1),Ve=[Be],Ae={class:"bg-blue-700 p-2 rounded-md"},ze=["onClick"],Oe=s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#fff",viewBox:"0 0 24 24","stroke-width":"1.5",class:"w-6 h-6 text-white"},[s("path",{d:"M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"})],-1),Le=[Oe],$e={class:"mt-4 flex justify-between gap-5"},De={class:"flex flex-col"},He={class:"h-[20rem]"},Ze=["src","alt"],Re=["alt"],Ne={class:"text-base text-gray-700 font-medium mt-5 mb-2"},Fe=s("span",{"aria-hidden":"true",class:""},null,-1),qe=s("p",{class:"mt-1 text-sm text-gray-500"},null,-1),Ge={class:"text-base font-bold text-gray-900"},Xe={class:"mt-[10rem]"},Ye=s("h1",{class:"font-bold text-2xl mb-5 text-zinc-600"},"Descrição",-1),Qe={class:"font-normal text-base text-zinc-500 leading-5"},Ue=s("div",{class:"container mx-auto mt-28"},[s("div",{class:"lg:col-span-3"})],-1),Je={components:{Breadcrumb:N},props:{products:Object,relatedPosts:Object}},st=Object.assign(Je,{__name:"Index",setup(a){q(()=>X().props.cart.data.items);const e=g=>{Y.post(route("cart.store",g),{onSuccess:C=>{console.log("foi"),Swal.fire({toast:!0,icon:"success",position:"top-end",showConfirmButton:!1,title:C.props.flash.success})}})},T=H(),h=g=>{T.value=g},M=H([te,W,ee]);return(g,C)=>(x(),G(Q,{title:a.products.title+"Milo!"},{default:_(()=>[s("div",oe,[v(N,{title:"Inicio",property:a.products,href:"product/"+a.products.slug,class:"pa-0 mt-1"},null,8,["property","href"]),s("div",ne,[s("div",re,[v(y(R),{style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},navigation:!0,thumbs:{swiper:T.value},modules:M.value,class:"mySwiper2 rounded-md"},{default:_(()=>[(x(),b(O,null,z(10,n=>v(y(Z),null,{default:_(()=>[s("img",{src:`https://picsum.photos/id/${110+n}/800/600`,class:"shadow rounded-md"},null,8,le)]),_:2},1024)),64))]),_:1},8,["thumbs","modules"]),v(y(R),{onSwiper:h,spaceBetween:10,slidesPerView:5,watchSlidesProgress:!0,grabCursor:!0,modules:M.value,class:"mySwiper mt-5"},{default:_(()=>[(x(),b(O,null,z(10,n=>v(y(Z),{key:`https://picsum.photos/id/${110+n}/200/100`,class:"my-slide"},{default:_(()=>[s("img",{src:`https://picsum.photos/id/${110+n}/200/100`,class:"shadow rounded-md"},null,8,ae)]),_:2},1024)),64))]),_:1},8,["modules"])]),s("div",ce,[s("div",de,[s("h1",ue,S(a.products.title),1),me,s("div",fe,[s("div",pe,[a.products.inStock==0?(x(),b("span",he,"Em Estoque")):(x(),b("span",we,"Fora de estoque"))]),xe]),ge,s("div",be,[s("div",ve,[s("h6",_e," R$ "+S(a.products.price),1),Ce]),s("div",ye,[v(y(V),{href:"/checkout",class:"w-full cursor-pointer bg-blue-500 hover:bg-blue-700 px-4 py-3 text-slate-50 rounded-md inline-flex items-center justify-center gap-3 text-base"},{default:_(()=>[k(" Comprar")]),_:1}),s("a",{onClick:C[0]||(C[0]=n=>e(a.products)),class:"cursor-pointer bg-blue-500 hover:bg-blue-700 px-4 py-3 text-slate-50 rounded-md inline-flex items-center justify-center gap-3 text-base"},Me)]),s("div",Se,[ke,s("div",Pe,[(x(!0),b(O,null,z(a.relatedPosts,n=>(x(),b("div",{key:n.id,class:"group relative"},[s("div",Ie,[s("div",je,[s("a",{onClick:u=>e(n)},Ve,8,Ee)]),s("div",Ae,[s("a",{onClick:u=>e(n)},Le,8,ze)])]),v(y(V),{href:"/product/"+n.slug},{default:_(()=>[s("div",$e,[s("div",De,[s("figure",He,[n.product_images.length>0?(x(),b("img",{key:0,src:`/${n.product_images[0].image}`,alt:n.imageAlt,class:"rounded h-full w-full object-cover object-center lg:h-full lg:w-full"},null,8,Ze)):(x(),b("img",{key:1,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png",alt:n.imageAlt,class:"rounded h-full w-full object-cover object-center lg:h-full lg:w-full"},null,8,Re))]),s("h3",Ne,[Fe,k(" "+S(n.title),1)]),qe,s("span",Ge,"R$ "+S(n.price),1)])])]),_:2},1032,["href"])]))),128))])])])])])]),s("div",Xe,[Ye,s("p",Qe,S(a.products.description),1)])]),Ue]),_:1},8,["title"]))}});export{st as default};