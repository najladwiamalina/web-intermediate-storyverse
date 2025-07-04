var _e=n=>{throw TypeError(n)};var Le=(n,e,t)=>e.has(n)||_e("Cannot "+t);var r=(n,e,t)=>(Le(n,e,"read from private field"),t?t.call(n):e.get(n)),a=(n,e,t)=>e.has(n)?_e("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),c=(n,e,t,s)=>(Le(n,e,"write to private field"),s?s.call(n,t):e.set(n,t),t),w=(n,e,t)=>(Le(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var D,m,Q;class dt{constructor({view:e,model:t,dbModel:s}){a(this,D);a(this,m);a(this,Q);c(this,D,t),c(this,m,e),c(this,Q,s)}async showStoryList(){r(this,m).showLoading();try{let e=await r(this,Q).getAll();e.length>0&&r(this,m).populateStoryList(e);const t=await r(this,D).getData();if(!t.ok){console.log(`Error : ${t}`);return}t.listStory,r(this,m).populateStoryList(t.listStory)}catch(e){console.log(`Error : ${e}`)}finally{r(this,m).hideLoading()}}async showMapMarker(){r(this,m).showMapLoading();try{const e=await r(this,D).getData();if(!e.ok){console.log(`Error : ${e}`);return}await r(this,m).populateMapMarker(0,0,e.listStory),await r(this,m).populateMapMarker(e.listStory.lat,e.listStory.lon,e.listStory)}catch(e){console.log(`Error : ${e}`)}finally{r(this,m).hideMapLoading()}}}D=new WeakMap,m=new WeakMap,Q=new WeakMap;const I="https://story-api.dicoding.dev/v1",Re="123",ut="BCCs2eonMI-6H2ctvFaWg-UYdDv387Vno_bzUzALpB442r2lCnsHmtrx8biyPi_E-1fSGABK_Qs_GlvPoJJqxbk",gt={mapTiller:"lnuhAxbXLgkhiXPIgsjO"};function $e(n){const e=n.split("/");return{resource:e[1]||null,id:e[2]||null}}function pt(n){let e="";return n.resource&&(e=e.concat(`/${n.resource}`)),n.id&&(e=e.concat("/:id")),e||"/"}function Ge(){return location.hash.replace("#","")||"/"}function ze(){const n=Ge(),e=$e(n);return pt(e)}function Ue(){const n=Ge();return $e(n)}function C(){try{const n=localStorage.getItem(Re);return n==="null"||n==="undefined"?null:n}catch(n){return console.error("getAccessToken: error:",n),null}}function mt(n){try{return localStorage.setItem(Re,n),!0}catch(e){return console.error("putAccessToken: error:",e),!1}}function Ne(){try{return localStorage.removeItem(Re),!0}catch(n){return console.error("getLogout: error:",n),!1}}const ht=["/login","/register"];function ke(n){const e=ze(),t=!!C();return ht.includes(e)&&t?(location.hash="/",null):n}function T(n){return!C()?(location.hash="/login",null):n}function Fe(){Ne()}const yt=Object.freeze(Object.defineProperty({__proto__:null,checkAuthenticatedRoute:T,checkUnauthenticatedRouteOnly:ke,getAccessToken:C,getLogout:Fe,putAccessToken:mt,removeAccessToken:Ne},Symbol.toStringTag,{value:"Module"})),M={OPEN_STREET_MAP:(n,e)=>`https://nominatim.openstreetmap.org/reverse?lat=${n}&lon=${e}&format=json`,OPEN_STREET_MAP_ADDRESS_TO_LATLNG:n=>`https://nominatim.openstreetmap.org/search?format=json&q=${n}`,REGISTER:`${I}/register`,LOGIN:`${I}/login`,GET_ALL_STORY:`${I}/stories`,ADD_STORY:`${I}/stories`,GET_DETAIL_STORY:`${I}/stories/`,SUBSCRIBE:`${I}/notifications/subscribe`,UNSUBSCRIBE:`${I}/notifications/subscribe`};async function wt(n){const t=await(await fetch(M.OPEN_STREET_MAP_ADDRESS_TO_LATLNG(n))).json(),{lat:s,lon:i}=t[0];return{lat:s,lng:i}}async function pe({lat:n,lng:e}){const t=await fetch(M.OPEN_STREET_MAP(n,e)),s=await t.json();return s.display_name?{address:s.display_name,ok:t.ok}:{address:"Address is not found",ok:t.ok}}async function ft({name:n,email:e,password:t}){const s=JSON.stringify({name:n,email:e,password:t}),i=await fetch(M.REGISTER,{method:"POST",headers:{"Content-type":"application/json"},body:s});return{...await i.json(),ok:i.ok}}async function vt({email:n,password:e}){const t=JSON.stringify({email:n,password:e}),s=await fetch(M.LOGIN,{method:"POST",headers:{"Content-Type":"application/json"},body:t});return{...await s.json(),ok:s.ok}}async function bt(){const n=C(),e=await fetch(M.GET_ALL_STORY,{headers:{Authorization:`Bearer ${n}`}});return{...await e.json(),ok:e.ok}}async function Ze(n){const e=C(),t=await fetch(`${M.GET_DETAIL_STORY}${n}`,{headers:{Authorization:`Bearer ${e}`}});return{...await t.json(),ok:t.ok}}async function Lt(n){const e=C(),t=await fetch(M.ADD_STORY,{method:"POST",headers:{Authorization:`Bearer ${e}`},body:n});return{...await t.json(),ok:t.ok}}async function We({endpoint:n,keys:{p256dh:e,auth:t}}){const s=C(),i=JSON.stringify({endpoint:n,keys:{p256dh:e,auth:t}}),o=await fetch(M.SUBSCRIBE,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:i});return{...await o.json(),ok:o.ok}}async function qe({endpoint:n}){const e=C(),t=JSON.stringify({endpoint:n}),s=await fetch(M.UNSUBSCRIBE,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:t});return{...await s.json(),ok:s.ok}}const Y=Object.freeze(Object.defineProperty({__proto__:null,getAddress:pe,getData:bt,getLatLng:wt,getLogin:vt,getRegistered:ft,getSingle:Ze,postStory:Lt,subscribePushNotification:We,unsubscribePushNotification:qe},Symbol.toStringTag,{value:"Module"}));function we(n,e="en-US",t={}){return new Date(n).toLocaleDateString(e,{year:"numeric",month:"long",day:"numeric",...t})}function xt(){window.stream&&(window.stream.getTracks().forEach(n=>n.stop()),window.stream=null)}async function St(n){const e=n.src;return await(await fetch(e)).blob()}function kt(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/-/g,"+").replace(/_/g,"/"),s=atob(t),i=new Uint8Array(s.length);for(let o=0;o<s.length;o++)i[o]=s.charCodeAt(o);return i}function Ct(){return"serviceWorker"in navigator}async function Mt(){if(!Ct){console.log("Service worker API unsupported");return}try{const n=await navigator.serviceWorker.register("/sw.js");console.log("Service worker telah terpasang",n)}catch(n){console.log("Failed to install service worker:",n)}}function X(){return`
  <div class="min-h-screen flex items-center justify-center">
    <svg class="pl" width="240" height="240" viewBox="0 0 240 240">
        <circle class="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
        <circle class="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
        <circle class="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
        <circle class="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
    </svg>
  </div>
    `}function Et({id:n,name:e,description:t,photoUrl:s,createdAt:i,order:o}){return`

    <a href="/#/detailStory/${n}" id="first-main-content-item" tabindex="${o}" class="border cursor-pointer border-zinc-900 rounded overflow-hidden"
      data-bs-id="${n}">
      <div class="h-[250px] overflow-hidden brightness-[90%]">
        <img src="${s}" alt="storyImage" loading="lazy" class="w-full h-full object-cover hover:scale-105 duration-300 transition ease-in-out" />
      </div>

      <div class="flex flex-col p-3">
        <h1 class="line-clamp-2 text-zinc-200 xl:text-lg mt-3">${e}</h1>
        <div class="flex gap-1">
        <svg viewBox="0 0 24 24" fill="#71717b" width="16" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> <path d="M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          

          <p class="text-sm mt-1 line-clamp-1">${we(i)}</p>
        </div>
        <p class="text-zinc-400 mt-1 line-clamp-[8]">
          ${t}
        </p>
      </div>
    </a>
    
    `}function Bt({id:n,name:e,description:t,image:s,createdAt:i,order:o}){const l=URL.createObjectURL(s);return`
  <div class=" border-zinc-900 rounded border ">
    <a href="/#/saved/${n}" id="first-main-content-item" tabindex="${o}" class="cursor-pointer overflow-hidden"
      data-bs-id="${n}">
      <div class="h-[250px] overflow-hidden brightness-[90%]">
        <img src="${l}" alt="storyImage" loading="lazy" class="w-full h-full object-cover hover:scale-105 duration-300 transition ease-in-out" />
      </div>

      <div class="flex flex-col p-3">
        <h1 id="story-name" class="line-clamp-2 text-zinc-200 xl:text-lg mt-3">${e}</h1>
        <div class="flex gap-1">
        <svg viewBox="0 0 24 24" fill="#71717b" width="16" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> <path d="M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          

          <p class="text-sm mt-1 line-clamp-1">${we(i)}</p>
        </div>
        <p class="text-zinc-400 mt-1 line-clamp-[8]">
          ${t}
        </p>
      </div>
    </a>
    <button id="delete-saved-story-btn" data-id="${n}" class="px-4 py-2 flex gap-2 text-white/75 bg-red-950 rounded active:bg-red-900 hover:bg-red-900 m-3">
    <span>Unsave</span>
  <svg viewBox="0 -0.5 21 21" width="16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>delete [#1487]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#d7d1d1"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]"> </path> </g> </g> </g> </g></svg>  </div>
    `}function It({id:n,name:e,photoUrl:t,description:s,createdAt:i,address:o}){return`
  <div class="stabilize-top pb-10 responsive">
   <div id="map-container" style="height: 400px" class="bg-zinc-600 w-full z-0"></div>

    <div data-id="${n}" id="detail-story-container" class="grid md:grid-cols-3 grid-cols-1 mt-5">

        <div class="overflow-hidden rounded col-span-1" style="height: 300px" >
            <img id="story-image" src="${t}" class="w-full h-full object-cover">
        </div>
        <ul class="flex flex-col gap-3 col-span-2 sm:px-5 sm:py-0 py-5">
            <h1 id="story-name" class="text-zinc-200 text-2xl">${e}</h1>
            <li><div class="flex gap-1">
                <svg viewBox="0 0 24 24"  fill="#71717b" width="16" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <path d="M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <p id="story-created-at" class="text-sm mt-1 line-clamp-1">Created at ${we(i)}</p>
            </div></li>
            <li class="flex gap-1">
            <svg viewBox="0 0 192 192" fill="#71717b" width="16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#000000" stroke-width="12" d="M96 22a51.88 51.88 0 0 0-36.77 15.303A52.368 52.368 0 0 0 44 74.246c0 16.596 4.296 28.669 20.811 48.898a163.733 163.733 0 0 1 20.053 28.38C90.852 163.721 90.146 172 96 172c5.854 0 5.148-8.279 11.136-20.476a163.723 163.723 0 0 1 20.053-28.38C143.704 102.915 148 90.841 148 74.246a52.37 52.37 0 0 0-15.23-36.943A51.88 51.88 0 0 0 96 22Z"></path><circle cx="96" cy="74" r="20" stroke="#000000" stroke-width="12"></circle></g></svg>
            <span id="story-address" class="text-sm line-clamp-1">${o}</span>
            </li>
            <li >
              <p id="story-description">
                ${s}
                </p>
            </li>
        </ul>

        <div class="mt-5 ">
        <button id="save-story-btn" class="flex gap-2 primary-btn justify-between" style="max-width: 80px; width:100%;">
            <span>Save</span>
            <svg viewBox="0 0 16 16" width="16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0H2V16H4L8 12L12 16H14V0ZM7 3V5H5V7H7V9H9V7H11V5H9V3H7Z"
            fill="#000000"></path> </g></svg>
        </button>

        </div>
    </div>
    </div>
  `}function Tt({id:n,name:e,image:t,description:s,createdAt:i,address:o}){return`
  <div class="stabilize-top pb-10">
   <div id="map-container" style="height: 400px" class="bg-zinc-600 w-full z-0"></div>

    <div data-id="${n}" id="detail-story-container" class="grid md:grid-cols-3 grid-cols-1 mt-5">

        <div class="overflow-hidden rounded col-span-1" style="height: 300px" >
            <img id="story-image" src="${URL.createObjectURL(t)}" class="w-full h-full object-cover">
        </div>
        <ul class="flex flex-col gap-3 col-span-2 sm:px-5 sm:py-0 py-5">
            <h1 id="story-name" class="text-zinc-200 text-2xl">${e}</h1>
            <li><div class="flex gap-1">
                <svg viewBox="0 0 24 24"  fill="#71717b" width="16" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <path d="M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <p id="story-created-at" class="text-sm mt-1 line-clamp-1">Created at ${we(i)}</p>
            </div></li>
            <li class="flex gap-1">
            <svg viewBox="0 0 192 192" fill="#71717b" width="16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#000000" stroke-width="12" d="M96 22a51.88 51.88 0 0 0-36.77 15.303A52.368 52.368 0 0 0 44 74.246c0 16.596 4.296 28.669 20.811 48.898a163.733 163.733 0 0 1 20.053 28.38C90.852 163.721 90.146 172 96 172c5.854 0 5.148-8.279 11.136-20.476a163.723 163.723 0 0 1 20.053-28.38C143.704 102.915 148 90.841 148 74.246a52.37 52.37 0 0 0-15.23-36.943A51.88 51.88 0 0 0 96 22Z"></path><circle cx="96" cy="74" r="20" stroke="#000000" stroke-width="12"></circle></g></svg>
            <span id="story-address" class="text-sm line-clamp-1">${o}</span>
            </li>
            <li >
              <p id="story-description">
                ${s}
                </p>
            </li>
        </ul>

        <div class="mt-7">
        <button id="unsave-btn" data-id="${n}" class="px-4 py-2 flex gap-2 text-white/75 bg-red-950 rounded active:bg-red-900 hover:bg-red-900">
        <span>Unsave</span>
        <svg viewBox="0 -0.5 21 21" width="16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>delete [#1487]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#d7d1d1"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]"> </path> </g> </g> </g> </g></svg>  </div>


        </div>
    </div>
  </div>
  `}function Ke(){return`
  <h1 class="text-xl flex justify-center items-center min-h-screen">No data</h1>
  `}function Ye(){return`
   <button id="subscribe-button" class="primary-btn flex gap-3 items-center">
                <p>Subscribe</p>
                <svg
                  width="16"
                  version="1.0"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 64 64"
                  enable-background="new 0 0 64 64"
                  xml:space="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path
                        fill="#231F20"
                        d="M56,44c-1.832,0-4-2.168-4-4V20C52,8.973,43.027,0,32,0S12,8.973,12,20v20c0,1.793-2.207,4-4,4 c-2.211,0-4,1.789-4,4s1.789,4,4,4h48c2.211,0,4-1.789,4-4S58.211,44,56,44z"
                      ></path>
                      <path fill="#231F20" d="M32,64c4.418,0,8-3.582,8-8H24C24,60.418,27.582,64,32,64z"></path>
                    </g>
                  </g>
                </svg>
              </button>
  `}function Je(){return`
    <button id="subscribe-button" class="primary-btn flex gap-3 items-center">
      <p>Unsubscribe</p>
      <svg width="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" 
      stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
       <path d="M16 16H13L9.75 12H1V10L3 8V5C3 4.60587 3.0456 4.22239 3.13182 3.85455L0 0H3L16 16Z" fill="#000000">
       </path> <path d="M13 8.61539L6.25443 0.313149C6.79787 0.11067 7.38601 0 8 0C10.7614 0 13 2.23858 13 5V8.61539Z" fill="#000000">
       </path> <path d="M7.99999 16C6.69378 16 5.58254 15.1652 5.1707 14H8.375L9.61633 15.5278C9.14984 15.8267 8.59515 16 7.99999 16Z" 
       fill="#000000"></path> </g>
       </svg>
    </button>
  `}var u,g,Oe;let fe=(Oe=class{constructor({containerId:e,lat:t,lng:s,draggable:i=!1}){a(this,u,null);a(this,g,null);this.init(e,t,s,i)}init(e,t,s,i){c(this,u,L.map(e).setView([t,s],5)),this.setLayer()}initEvent(){r(this,u).on("click",e=>this.handleMapClick(e)),r(this,g).on("dragend",()=>this.handleMapDrag())}async costumMark({lat:e,lng:t,option:s={}},i=null){i.forEach(o=>{o.lat===null||o.lon===null||c(this,g,L.marker([o.lat,o.lon],s).addTo(r(this,u)).bindPopup(` 
                <div class=" flex flex-col">
                    <img src="${o.photoUrl}" class="rounded-sm">
                    <h3 class="font-semibold mb-1 mt-2">${o.name}</h3>
                    <span class="max-w-[150px] line-clamp-3">${o.description}</span>
                </div>`))})}async createMark(e,t,s){c(this,g,L.marker([e,t]).addTo(r(this,u)).bindPopup(` 
                <div class=" flex flex-col">
                    <img src="${s.photoUrl}" class="rounded-sm">
                    <h3 class="font-semibold mb-1 mt-2">${s.name}</h3>
                    <span class="max-w-[150px] line-clamp-3">${s.description}</span>
                </div>`))}async createSavedMark(e,t,s){c(this,g,L.marker([e,t]).addTo(r(this,u)).bindPopup(` 
                <div class=" flex flex-col">
                    <img src="${URL.createObjectURL(s.image)}" class="rounded-sm">
                    <h3 class="font-semibold mb-1 mt-2">${s.name}</h3>
                    <span class="max-w-[150px] line-clamp-3">${s.description}</span>
                </div>`))}async mark({lat:e,lng:t,option:s}){try{let o=(await pe({lat:e,lng:t})).address||"Address is not found";c(this,g,L.marker([e,t],s).addTo(r(this,u)).bindPopup(`<b>Alamat: </b> ${o}`))}catch(i){console.error("Error mengambil alamat:",i)}}setLayer(){const e=L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}),t=L.tileLayer("https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",{attribution:"© Google Maps"}),s=L.tileLayer(`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${gt.mapTiller}`,{attribution:"© MapTiler"});e.addTo(r(this,u));const i={OpenStreetMap:e,"Google Satellite":t,"MapTiler Streets":s};L.control.layers(i).addTo(r(this,u))}async handleMapClick(e){const{lat:t,lng:s}=e.latlng;try{let o=(await pe({lat:t,lng:s})).address||"Address is not found";this.updateMarker(t,s,o)}catch(i){console.error("Error mengambil alamat:",i)}this.updateLatLngFields(t,s)}async handleMapDrag(){const{lat:e,lng:t}=r(this,g)._latlng;try{let i=(await pe({lat:e,lng:t})).address||"Address is not found";this.updateMarker(e,t,i)}catch(s){console.error("Error mengambil alamat:",s)}this.updateLatLngFields(e,t)}updateMarker(e,t,s){r(this,g)&&r(this,u).removeLayer(r(this,g)),c(this,g,L.marker([e,t],{draggable:!0}).addTo(r(this,u)).bindPopup(`<b>Alamat:</b> ${s}`).openPopup()),r(this,g).on("dragend",()=>this.handleMapDrag())}updateLatLngFields(e,t){document.getElementById("location-lat").value=e,document.getElementById("location-lng").value=t}},u=new WeakMap,g=new WeakMap,Oe);const Ce=(n,e)=>e.some(t=>n instanceof t);let Ve,je;function Rt(){return Ve||(Ve=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _t(){return je||(je=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Me=new WeakMap,xe=new WeakMap,ve=new WeakMap;function Vt(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{t(A(n.result)),i()},l=()=>{s(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",l)});return ve.set(e,n),e}function jt(n){if(Me.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{t(),i()},l=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});Me.set(n,e)}let Ee={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Me.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return A(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Xe(n){Ee=n(Ee)}function At(n){return _t().includes(n)?function(...e){return n.apply(Be(this),e),A(this.request)}:function(...e){return A(n.apply(Be(this),e))}}function Pt(n){return typeof n=="function"?At(n):(n instanceof IDBTransaction&&jt(n),Ce(n,Rt())?new Proxy(n,Ee):n)}function A(n){if(n instanceof IDBRequest)return Vt(n);if(xe.has(n))return xe.get(n);const e=Pt(n);return e!==n&&(xe.set(n,e),ve.set(e,n)),e}const Be=n=>ve.get(n);function Dt(n,e,{blocked:t,upgrade:s,blocking:i,terminated:o}={}){const l=indexedDB.open(n,e),P=A(l);return s&&l.addEventListener("upgradeneeded",d=>{s(A(l.result),d.oldVersion,d.newVersion,A(l.transaction),d)}),t&&l.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),P.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",B=>i(B.oldVersion,B.newVersion,B))}).catch(()=>{}),P}const Ht=["get","getKey","getAll","getAllKeys","count"],Ot=["put","add","delete","clear"],Se=new Map;function Ae(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Se.get(e))return Se.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Ot.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ht.includes(t)))return;const o=async function(l,...P){const d=this.transaction(l,i?"readwrite":"readonly");let B=d.store;return s&&(B=B.index(P.shift())),(await Promise.all([B[t](...P),i&&d.done]))[0]};return Se.set(e,o),o}Xe(n=>({...n,get:(e,t,s)=>Ae(e,t)||n.get(e,t,s),has:(e,t)=>!!Ae(e,t)||n.has(e,t)}));const $t=["continue","continuePrimaryKey","advance"],Pe={},Ie=new WeakMap,Qe=new WeakMap,Gt={get(n,e){if(!$t.includes(e))return n[e];let t=Pe[e];return t||(t=Pe[e]=function(...s){Ie.set(this,Qe.get(this)[e](...s))}),t}};async function*zt(...n){let e=this;if(e instanceof IDBCursor||(e=await e.openCursor(...n)),!e)return;e=e;const t=new Proxy(e,Gt);for(Qe.set(t,e),ve.set(t,Be(e));e;)yield t,e=await(Ie.get(t)||e.continue()),Ie.delete(t)}function De(n,e){return e===Symbol.asyncIterator&&Ce(n,[IDBIndex,IDBObjectStore,IDBCursor])||e==="iterate"&&Ce(n,[IDBIndex,IDBObjectStore])}Xe(n=>({...n,get(e,t,s){return De(e,t)?zt:n.get(e,t,s)},has(e,t){return De(e,t)||n.has(e,t)}}));const Ut="app",Nt=1,f="saved-stories",J=Dt(Ut,Nt,{upgrade:n=>{n.objectStoreNames.contains(f)||n.createObjectStore(f,{keyPath:"id"})}}),be={async putAndRefresh(n){const t=(await J).transaction(f,"readwrite"),s=t.objectStore(f);await s.clear(),await Promise.all(n.map(i=>{s.put(i)})),await t.done},async getAll(){return(await J).getAll(f)},async getById(n){return(await J).get(f,n)},async add(n){const t=(await J).transaction(f,"readwrite");t.objectStore(f).put(n),await t.done},async delete(n){const t=(await J).transaction(f,"readwrite");t.objectStore(f).delete(n),await t.done}};var H,ee,me,et;class Ft{constructor(){a(this,me);a(this,H,null);a(this,ee,null)}async render(){return`
    <div class="stabilize-top pb-10">
      <section class="mb-5 ">
        <div id="map-container" style="height: 600px;z-index: 1; position:relative"></div>
        <div id="map-loading-container"></div>
      </section>

      <section class="responsive">
        <h1 class="lg:text-center mb-10 text-[2.5rem] text-zinc-200 underline underline-offset-15">Dicoding Universe</h1>
        <div id="story-list-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-7 gap-3"></div>
        <div id="story-loading-container"></div>
      </section>
    </div>
    `}async afterRender(){c(this,H,new dt({view:this,model:Y,dbModel:be})),await r(this,H).showStoryList(),await w(this,me,et).call(this),await r(this,H).showMapMarker()}async populateMapMarker(e,t,s){await r(this,ee).costumMark({lat:e,lng:t},s)}populateStoryList(e){if(e.length<=0){this.storyListEmpty();return}let t=0;const s=e.reduce((i,o)=>(t=t+1,i.concat(Et({...o,order:t}))),"");document.getElementById("story-list-container").innerHTML=s}storyListEmpty(){document.getElementById("responsive").innerHTML=Ke()}showLoading(){document.getElementById("story-loading-container").innerHTML=X()}hideLoading(){document.getElementById("story-loading-container").innerHTML=""}showMapLoading(){document.getElementById("story-loading-container").innerHTML=X()}hideMapLoading(){document.getElementById("story-loading-container").innerHTML=""}}H=new WeakMap,ee=new WeakMap,me=new WeakSet,et=async function(){c(this,ee,new fe({containerId:document.getElementById("map-container"),lat:-.5341981739396645,lng:117.12302541745886}))};var b,te;class Zt{constructor({view:e,model:t}){a(this,b);a(this,te);c(this,b,e),c(this,te,t)}async getRegistered({name:e,email:t,password:s}){r(this,b).showSubmitLoadingButton();try{const i=await r(this,te).getRegistered({name:e,email:t,password:s});if(!i.ok){console.error("getRegistered: response:",i),r(this,b).registeredFailed(i.message);return}r(this,b).registeredSuccessfully(i.message,i.data)}catch(i){console.error("getRegistered: error:",i),r(this,b).registeredFailed(i.message)}finally{r(this,b).hideSubmitLoadingButton()}}}b=new WeakMap,te=new WeakMap;var ne,he,tt;class Wt{constructor(){a(this,he);a(this,ne,null)}async render(){return`
      <section class="flex justify-center items-center min-h-screen">

        <div class="lg:bg-zinc-900 lg:rounded-2xl px-10 py-8" style="max-width: 500px; width: 100%;">
          
          <img src="/images/logo.png" width="75px">
          <h1 class="form-header">Sign Up</h1>
          <p class="text-sm mt-1">Enter your detail below to create your account and get started</p>

          <form id="register-form" class="mt-7 flex flex-col gap-5">
            <div class="form-control">
              <label for="name-input">Full Name</label>
              <input required  id="name-input" type="text" name="name" class="input-control" placeholder="Enter your full name">     
            </div>
            <div class="form-control">
              <label for="email-input">Email</label>
              <input required id="email-input" type="email" name="email" class="input-control"  placeholder="Example: name@email.com">           
            </div>
            <div class="form-control">
              <label for="password-input">Password</label>
              <input required id="password-input" type="password" name="password" class="input-control" placeholder="Enter new password">   
            </div>
            
              <div id="submit-button-container" class="mt-3">
                <button class="primary-btn w-full" type="submit">Daftar akun</button>
              </div>
              <p class="text-center text-sm">Already have an account? <a href="#/login" class="text-blue-500">Login</a></p>
           
          </form>
        </div>
      </section>
    `}async afterRender(){c(this,ne,new Zt({view:this,model:Y})),w(this,he,tt).call(this)}registeredSuccessfully(e){console.log(e),location.hash="/login"}registeredFailed(e){alert(e)}showSubmitLoadingButton(){document.getElementById("submit-button-container").innerHTML=`
      <button class="primary-btn w-full cursor-not-allowed">
        <svg class="mx-auto size-6 animate-spin text-blue-500" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24"><circle class="opacity-[10%]" cx="12" cy="12" r="10" stroke="currentColor"
          stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
          </path>
        </svg>
      </button>
    `}hideSubmitLoadingButton(){document.getElementById("submit-button-container").innerHTML=`
      <button class="primary-btn w-full" type="submit">Daftar akun</button>
    `}}ne=new WeakMap,he=new WeakSet,tt=function(){document.getElementById("register-form").addEventListener("submit",async e=>{e.preventDefault();const t={name:document.getElementById("name-input").value,email:document.getElementById("email-input").value,password:document.getElementById("password-input").value};await r(this,ne).getRegistered(t)})};var x,se,re;class qt{constructor({view:e,model:t,authModel:s}){a(this,x);a(this,se);a(this,re);c(this,x,e),c(this,se,t),c(this,re,s)}async getLogin({email:e,password:t}){r(this,x).showSubmitLoadingButton();try{const s=await r(this,se).getLogin({email:e,password:t});if(!s.ok){console.log("getLogin: response:",s),r(this,x).loginFailed(s.message);return}console.log("getLogin: response:",s),r(this,re).putAccessToken(s.loginResult.token),r(this,x).loginSuccessfully(s.message,s.data)}catch(s){console.error("getLogin: error:",s),r(this,x).loginFailed(s.message)}finally{r(this,x).hideSubmitLoadingButton()}}}x=new WeakMap,se=new WeakMap,re=new WeakMap;var ie,ye,nt;class Kt{constructor(){a(this,ye);a(this,ie,null)}render(){return`
      <section id="login"class="flex justify-center items-center min-h-screen">
      
        <article class="px-10 py-8 lg:bg-zinc-900 lg:rounded-2xl" style="max-width: 500px; width: 100%;">

          <div class="flex justify-center items-center">
          <img src="/images/logo.png" width="75px">
          </div>
          <h1 class="text-center form-header">Welcome back</h1>
          <p class="text-center text-sm mt-1">Glad to see you again</p>
          <p class="text-center text-sm">Login to your account below</p>

          <form id="login-form" class="mt-7 flex flex-col gap-5">
            <div class="form-control">
              <label for="email-input" >Email</label>
                <input id="email-input" class="input-control"
                type="email" name="email" placeholder="Contoh: nama@email.com" >
            </div>
            <div class="form-control">
              <label for="password-input">Password</label> 
                <input id="password-input" class="input-control"
                type="password" name="password" placeholder="Masukkan password Anda">
            </div>
           
            <div id="submit-button-container" class="mt-3">
              <button id="login-button" class="primary-btn w-full" type="submit" >Login</button>
            </div>
            <p class="text-center text-sm">Don't have an account? <a href="#/register" class="text-blue-500">Sign up for free</a></p>
            
          </form>
        </article>
      </section>
    `}async afterRender(){c(this,ie,new qt({view:this,model:Y,authModel:yt})),w(this,ye,nt).call(this)}loginSuccessfully(e){console.log(e),location.hash="/"}loginFailed(e){alert(e)}showSubmitLoadingButton(){document.getElementById("submit-button-container").innerHTML=`
      <button class="primary-btn w-full cursor-not-allowed">
        <svg class="mx-auto size-6 animate-spin text-blue-500" xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24"><circle class="opacity-[10%]" cx="12" cy="12" r="10" stroke="currentColor" 
          stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
          </path>
        </svg>
      </button>
    `}hideSubmitLoadingButton(){document.getElementById("submit-button-container").innerHTML=`
      <button id="login-button" class="primary-btn w-full" type="submit">Login</button>
    `}}ie=new WeakMap,ye=new WeakSet,nt=function(){document.getElementById("login-form").addEventListener("submit",async e=>{e.preventDefault();const t={email:document.getElementById("email-input").value,password:document.getElementById("password-input").value};await r(this,ie).getLogin(t)})};var h,O,$,E,R;class Yt{constructor({video:e,videoContainer:t,openButton:s,canvas:i,imagePreview:o}){a(this,h,null);a(this,O,null);a(this,$,null);a(this,E,null);a(this,R,null);c(this,h,e),c(this,$,s),c(this,O,t),c(this,E,i),c(this,R,o)}async toggle(){if(window.stream)window.stream.getTracks().forEach(e=>e.stop()),r(this,h).srcObject=null,r(this,O).style.display="none",r(this,$).textContent="Open Camera",window.stream=null;else try{window.stream=await navigator.mediaDevices.getUserMedia({video:!0}),r(this,h).srcObject=window.stream,r(this,O).style.display="block",r(this,$).textContent="Close Camera"}catch(e){console.log(`Camera : ${e.message}`)}}async take(){const e=r(this,E).getContext("2d");return r(this,E).width=r(this,h).videoWidth,r(this,E).height=r(this,h).videoHeight,e.drawImage(r(this,h),0,0,r(this,h).videoWidth,r(this,h).videoHeight),new Promise(t=>{r(this,E).toBlob(s=>{if(s){r(this,R).src=URL.createObjectURL(s),r(this,R).alt="image-preview",r(this,R).style.display="block";const i=new File([s],"image.jpg",{type:"image/png"});t(i)}else t(null)},"image/png")})}}h=new WeakMap,O=new WeakMap,$=new WeakMap,E=new WeakMap,R=new WeakMap;var oe,S;class Jt{constructor({view:e,model:t}){a(this,oe);a(this,S);c(this,oe,t),c(this,S,e)}async createStory(e){r(this,S).showSubmitLoadingButton();try{const t=await r(this,oe).postStory(e);if(!t.ok){r(this,S).createFailed(t.message);return}r(this,S).createdSuccessfully(t.message)}catch(t){r(this,S).createFailed(t),console.log(t)}finally{r(this,S).hideSubmitLoadingButton()}}}oe=new WeakMap,S=new WeakMap;var ae,G,z,_,v,st,rt,it,ot;class Xt{constructor(){a(this,v);a(this,ae,null);a(this,G,null);a(this,z,null);a(this,_,null)}async render(){return`
            <div class="flex justify-center w-full stabilize-top pb-10 id="first-main-content-item">
                <form id="create-story-form" class="flex flex-col responsive" style="max-width: 900px; width: 100%">
                    <h1 class="form-header mb-3">Create story</h1>

                    <div class="flex flex-col gap-5">
                    <div class="form-control">
                        <label for="story-description">Description</label>
                        <textarea
                        type="text"
                        id="story-description"
                        class="input-control"
                        name="story-description"
                        placeholder="Once upon a time, in a faraway kingdom, a beautiful princess named Snow White lived with her wicked stepmother..."
                        style="height: 300px"
                        ></textarea>
                    </div>
                    </div>

                    <div class="flex flex-col mt-5">
                        <p>Image</p>
                        <p class="text-sm text-zinc-600">Input your image using 2 option below</p>

                        <div class="flex gap-3 mt-2">
                            <label for="open-folder" class="input-image-control">Open folder</label>
                            <input type="file" id="open-folder" class="hidden" accept="image/*" aria-hidden="true"/>
                            <button type="button" id="open-camera-btn" class="input-image-control">Open camera</button>
                        </div>

                        <div id="camera-review-container" class="mt-3 rounded-lg border border-zinc-700 p-3 hidden">
                            <video id="camera-review" autoplay></video>
                            <button id="take-picture-btn" type="button" class="input-image-control mt-3">Take</button>
                        </div>
                    </div>

                    <div>
                        <canvas id="canvas" class="mt-5 hidden"></canvas>
                        <img class="hidden mt-5" style="height: 250px" id="image-preview" />
                    </div>

                    <div class="mt-4">Location</div>
                    <div id="story-location" class="mt-5 z-0" style="height: 400px"></div>
                        <div class="flex gap-2 items-center mt-2">
                            <svg viewBox="0 0 24 24" width="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z"
                                    fill="#71717b"
                                ></path>
                                </g>
                            </svg>

                            <div class="flex gap-2">
                                <input id="location-lat" type="text" class="input-control mt-2 bg-zinc-900" value="-0.5341981739396645" aria-disabled disabled />
                                <input id="location-lng" type="text" class="input-control mt-2 bg-zinc-900" value="117.12302541745886" aria-disabled disabled />
                            </div>
                        </div>

                    <div class="flex gap-3 mt-7">
                    <a href="#/" class="py-2 px-3 rounded border flex gap-1 items-center"
                        ><svg fill="#71717b" height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                            d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"
                            ></path>
                        </g>
                        </svg>
                        <span>Back</span></a>

                    <div id="submit-button-container">
                        <button type="submit" class="primary-btn flex items-center">
                            <span>Create</span>
                            <svg viewBox="0 0 24 24" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M11.25 12.75V18H12.75V12.75H18V11.25H12.75V6H11.25V11.25H6V12.75H11.25Z"
                                fill="#09090b"
                                ></path>
                            </g>
                            </svg>
                        </button>
                    </div>

                    </div>
                </form>
                </div>
        `}async afterRender(){c(this,ae,new Jt({view:this,model:Y})),await w(this,v,st).call(this),await w(this,v,rt).call(this),await w(this,v,it).call(this),w(this,v,ot).call(this)}createdSuccessfully(e){alert(e),location.hash="/"}createFailed(e){alert(e)}showSubmitLoadingButton(){document.getElementById("submit-button-container").innerHTML=`
        <button class="primary-btn w-full cursor-not-allowed">
            <svg class="mx-auto size-6 animate-spin text-blue-500" xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24"><circle class="opacity-[10%]" cx="12" cy="12" r="10" stroke="currentColor" 
            stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
            </svg>
        </button>
        `}hideSubmitLoadingButton(){document.getElementById("submit-button-container").innerHTML=`
          <button type="submit" class="primary-btn flex items-center">
            <span>Create</span>
            <svg viewBox="0 0 24 24" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.25 12.75V18H12.75V12.75H18V11.25H12.75V6H11.25V11.25H6V12.75H11.25Z"
                fill="#09090b"
                ></path>
            </g>
            </svg>
        </button>
        `}}ae=new WeakMap,G=new WeakMap,z=new WeakMap,_=new WeakMap,v=new WeakSet,st=async function(){c(this,G,new fe({containerId:document.getElementById("story-location"),lat:-.5341981739396645,lng:117.12302541745886,draggable:!0})),await r(this,G).mark({lat:-.5341981739396645,lng:117.12302541745886,option:{draggable:!0}}),r(this,G).initEvent()},rt=async function(){document.getElementById("open-camera-btn").addEventListener("click",async()=>{c(this,z,new Yt({video:document.getElementById("camera-review"),videoContainer:document.getElementById("camera-review-container"),openButton:document.getElementById("open-camera-btn"),canvas:document.getElementById("canvas"),imagePreview:document.getElementById("image-preview")})),r(this,z).toggle()}),document.getElementById("take-picture-btn").addEventListener("click",async()=>{c(this,_,await r(this,z).take())})},it=async function(){document.getElementById("create-story-form").addEventListener("submit",async e=>{e.preventDefault();const t=document.getElementById("story-description").value,s=document.getElementById("location-lat").value,i=document.getElementById("location-lng").value,o=new FormData;o.append("description",t),o.append("photo",r(this,_)),o.append("lat",s),o.append("lon",i),r(this,ae).createStory(o)})},ot=function(){const e=document.getElementById("open-folder"),t=document.getElementById("image-preview");e.addEventListener("change",()=>{c(this,_,e.files[0]),t.src&&URL.revokeObjectURL(t.src),t.src=URL.createObjectURL(r(this,_)),t.style.display="block"})};class Qt{async render(){return`
        <div class="stabilize-top responsive flex justify-center lg:gap-20 sm:mt-20 mt-15">

        
            <div class="flex-col flex gap-2 ">
                <h1 class="text-2xl mt-5  text-zinc-300" id="first-main-content-item">404 - Page Not Found</h1>
                <p>There's nothing to see here</p>

                <div class="mt-4">
                    <a href="/#/"class="sm:py-3 sm:px-4 sm:text-base text-sm py-3 px-2 bg-white/25 text-zinc-200 hover:bg-white/50 rounded">Take me home</a>
                </div>
            </div>

            <img src="/images/404.png"  class="lg:w-[23rem] md:w-[15rem] w-[10rem]">
        </div>
        `}async afterRender(){}}var ce,y,le;class en{constructor({view:e,model:t,dbModel:s}){a(this,ce);a(this,y);a(this,le);c(this,ce,t),c(this,y,e),c(this,le,s)}async showDetailStory(){r(this,y).showLoading();try{const e=await Ze(Ue().id);if(!e.ok){r(this,y).dataIsNotFound(e.message);return}if(e.story.lat===null||e.story.lon===null)e.story.lat=-.5341981739396645,e.story.lon=117.12302541745886,e.story={...e.story,address:"Unknown (Missing coordinat)"},r(this,y).setItem(e.story),r(this,y).setupMap(e.story.lat,e.story.lon);else try{const t=await r(this,ce).getAddress({lat:e.story.lat,lng:e.story.lon});e.story={...e.story,address:t.address},r(this,y).setItem(e.story),r(this,y).setupMap(e.story.lat,e.story.lon),r(this,y).createMark(e.story.lat,e.story.lon,e.story)}catch(t){console.error(t)}}catch(e){console.error(e)}}async saveStory(e){try{await r(this,le).add(e),alert("Story saved !")}catch(t){alert("Failed to save story"),console.error(t)}}}ce=new WeakMap,y=new WeakMap,le=new WeakMap;var de,Te,U;class tn{constructor(){a(this,de);a(this,Te);a(this,U)}async render(){return`
        <section id="detail-story"></section>
        `}async afterRender(){c(this,U,new en({view:this,model:Y,dbModel:be})),await r(this,U).showDetailStory(),document.getElementById("save-story-btn").addEventListener("click",async()=>{const e=document.getElementById("story-name").textContent,t=document.getElementById("story-image"),s=await St(t),i=document.getElementById("story-created-at").textContent,o=document.getElementById("story-address").textContent,l=document.getElementById("story-description").textContent,d={id:document.getElementById("detail-story-container").dataset.id,image:s,name:e,createdAt:i,address:o,description:l};console.log(d),await r(this,U).saveStory(d)})}async setupMap(e,t){c(this,de,new fe({containerId:document.getElementById("map-container"),lat:e,lng:t}))}async createMark(e,t,s){r(this,de).createMark(e,t,s)}async setItem(e){document.getElementById("detail-story").innerHTML=It(e)}showLoading(){document.getElementById("detail-story").innerHTML=X()}hideLoading(){document.getElementById("detail-story").innerHTML=""}dataIsNotFound(e){document.getElementById("detail-story").innerHTML=`<h1 class="flex justify-center items-center min-h-screen text-xl">${e}</h1>`}}de=new WeakMap,Te=new WeakMap,U=new WeakMap;var V,N;class nn{constructor({view:e,dbModel:t}){a(this,V);a(this,N);c(this,V,e),c(this,N,t)}async showSavedStoryList(){r(this,V).showLoading();try{let e=await r(this,N).getAll();r(this,V).setStoryContainer(),r(this,V).populateStoryList(e)}catch(e){console.log(`Error : ${e}`)}}async deleteSavedStory(e){try{await r(this,N).delete(e),alert("Data successfully unsaved !")}catch(t){alert("Failed to unsave data"),console.error(t)}}}V=new WeakMap,N=new WeakMap;var j;class sn{constructor(){a(this,j)}async render(){return`
        <section id="container"></section>`}async afterRender(){c(this,j,new nn({view:this,dbModel:be})),await r(this,j).showSavedStoryList()}setupUnsaveButtons(){document.querySelectorAll("#delete-saved-story-btn").forEach(t=>{t.addEventListener("click",async s=>{const i=s.target.closest("#delete-saved-story-btn").dataset.id;confirm("Unsave this item?.")&&(await r(this,j).deleteSavedStory(i),await r(this,j).showSavedStoryList())})})}setStoryContainer(){document.getElementById("container").innerHTML=` 
        <div class="responsive stabilize-top flex flex-col">
            <h1>Saved story</h1> 
            <div id="story-saved-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-7 gap-3 my-5"></div>
        </div>`}populateStoryList(e){if(e.length<=0){this.savedStoryListEmpty();return}let t=0;const s=e.reduce((i,o)=>(t=t+1,i.concat(Bt({...o,order:t}))),"");document.getElementById("story-saved-container").innerHTML=s,this.setupUnsaveButtons()}savedStoryListEmpty(){document.getElementById("container").innerHTML=Ke()}showLoading(){document.getElementById("container").innerHTML=X()}hideLoading(){document.getElementById("container").innerHTML=""}}j=new WeakMap;var ue,p,F;class rn{constructor({view:e,model:t,dbModel:s}){a(this,ue);a(this,p);a(this,F);c(this,ue,t),c(this,p,e),c(this,F,s)}async showDetailSavedStory(){r(this,p).showLoading();try{const e=await r(this,F).getById(Ue().id);if(!e){r(this,p).dataIsNotFound();return}if(e.address==="Unknown (Missing coordinat)")r(this,p).setItem(e),r(this,p).setupUnsaveButton(),r(this,p).setupMap(-.5341981739396645,117.12302541745886);else{const t=await r(this,ue).getLatLng(e.address);r(this,p).setItem(e),r(this,p).setupMap(t.lat,t.lng),r(this,p).createMark(t.lat,t.lng,e),r(this,p).setupUnsaveButton()}}catch(e){console.error(e)}}async unsaveSavedStory(e){try{await r(this,F).delete(e),alert("Data successfully unsaved !"),location.hash="/saved"}catch(t){alert("Failed to unsave data"),console.error(t)}}}ue=new WeakMap,p=new WeakMap,F=new WeakMap;var ge,Z;class on{constructor(){a(this,ge);a(this,Z)}async render(){return`
        <section id="saved-story-detail" class="responsive"></section>
        `}async afterRender(){c(this,Z,new rn({view:this,model:Y,dbModel:be})),await r(this,Z).showDetailSavedStory()}setupUnsaveButton(){document.getElementById("unsave-btn").addEventListener("click",async e=>{const t=e.target.closest("#unsave-btn").dataset.id;await r(this,Z).unsaveSavedStory(t)})}async setupMap(e,t){c(this,ge,new fe({containerId:document.getElementById("map-container"),lat:e,lng:t}))}async createMark(e,t,s){r(this,ge).createSavedMark(e,t,s)}async setItem(e){document.getElementById("saved-story-detail").innerHTML=Tt(e)}showLoading(){document.getElementById("saved-story-detail").innerHTML=X()}hideLoading(){document.getElementById("saved-story-detail").innerHTML=""}dataIsNotFound(){document.getElementById("saved-story-detail").innerHTML='<h1 class="flex justify-center items-center min-h-screen text-xl">No data found</h1>'}}ge=new WeakMap,Z=new WeakMap;const He={"/login":()=>ke(new Kt),"/register":()=>ke(new Wt),"/":()=>T(new Ft),"/detailStory/:id":()=>T(new tn),"/createStory":()=>T(new Xt),"/saved":()=>T(new sn),"/saved/:id":()=>T(new on),"/404":()=>T(new Qt)};function an(){return{userVisibleOnly:!0,applicationServerKey:kt(ut)}}async function cn(){if(!("Notification"in window))return console.error("Notification API unsupported."),!1;const n=await Notification.requestPermission();if(n==="denied")return alert("Izin notifikasi ditolak."),!1;if(n==="default")return alert("Izin notifikasi ditutup atau diabaikan."),!1}async function ln(){return await(await navigator.serviceWorker.getRegistration()).pushManager.getSubscription()}async function dn(){await cn();let n;try{n=await(await navigator.serviceWorker.getRegistration()).pushManager.subscribe(an());const{endpoint:t,keys:s}=n.toJSON(),i=await We({endpoint:t,keys:s});if(!i.ok){console.log("subscribe: response:",i),alert(i.message);return}alert(i.message),document.getElementById("subscribe-button-container").innerHTML=Je()}catch(e){console.error(e)}}async function un(){let n;try{n=await ln();const{endpoint:e}=n.toJSON(),t=await n.unsubscribe(),s=await qe({endpoint:e});if(!s.ok){console.log("subscribe: response:",s),alert(s.message);return}alert(s.message),document.getElementById("subscribe-button-container").innerHTML=Ye()}catch(e){console.error(e)}}async function at(){return!!await(await navigator.serviceWorker.getRegistration()).pushManager.getSubscription()}async function gn(){await at()?await un():await dn()}var W,q,k,K,ct,lt;class pn{constructor({navigationDrawer:e,drawerButton:t,content:s}){a(this,K);a(this,W,null);a(this,q,null);a(this,k,null);c(this,W,s),c(this,q,t),c(this,k,e),w(this,K,ct).call(this),w(this,K,lt).call(this)}async renderPage(){!!C()?document.querySelector("header").style.display="block":document.querySelector("header").style.display="none";const t=ze();let s=He[t];s===void 0&&(s=He["/404"]);const i=s();if(!document.startViewTransition){r(this,W).innerHTML=await i.render(),await i.afterRender();return}document.startViewTransition(async()=>{r(this,W).innerHTML=await i.render(),await i.afterRender()}).updateCallbackDone.then(()=>{scrollTo({top:0,behavior:"instant"})})}}W=new WeakMap,q=new WeakMap,k=new WeakMap,K=new WeakSet,ct=function(){r(this,q).addEventListener("click",()=>{r(this,k).classList.toggle("open")}),document.body.addEventListener("click",t=>{!r(this,k).contains(t.target)&&!r(this,q).contains(t.target)&&r(this,k).classList.remove("open"),r(this,k).querySelectorAll("a").forEach(s=>{s.contains(t.target)&&r(this,k).classList.remove("open")})}),document.getElementById("logout-button").addEventListener("click",t=>{t.preventDefault(),confirm("Are you sure you want to logout?")&&(Fe(),location.hash="/login")})},lt=async function(){const e=document.getElementById("subscribe-button-container");await at()?e.innerHTML=Je():e.innerHTML=Ye(),document.getElementById("subscribe-button-container").addEventListener("click",function(){gn()})};window.stream=null;document.addEventListener("DOMContentLoaded",async()=>{const n=new pn({content:document.querySelector("#main-content"),drawerButton:document.querySelector("#drawer-button"),navigationDrawer:document.querySelector("#navigation-drawer")});await n.renderPage(),await Mt(),window.addEventListener("hashchange",async()=>{xt(),await n.renderPage()})});window.addEventListener("click",n=>{if(n.target.id==="close-message"&&n.target.closest("#message").remove(),n.target.id==="drawer-button"){const e=n.target.parentElement.querySelector("#navigation-drawer");e.classList.toggle("hidden"),e.classList.toggle("opacity-0")}});
