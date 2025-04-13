import{a as L,S as v,i}from"./assets/vendor-lDhL-8I6.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const b="49685164-dd199c429b54d7a6e3529f8c6",S="https://pixabay.com/api/",w=15;async function u(e,s=1){const n={key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:w,page:s};return(await L.get(S,{params:n})).data}const g=document.querySelector(".gallery"),h=document.querySelector(".load-more-btn"),d=document.querySelector(".end-message");let q=new v(".gallery a",{captionsData:"alt",captionDelay:250});function f(e){const s=e.map(n=>`
    <li class="gallery-item">
      <a href="${n.largeImageURL}">
        <img class="gallery-image" src="${n.webformatURL}" alt="${n.tags}" />
        <div class="image-info">
          <div class="image-info-item">
            <span class="image-info-title">Likes</span>
            <span class="image-info-value">${n.likes}</span>
          </div>
          <div class="image-info-item">
            <span class="image-info-title">Views</span>
            <span class="image-info-value">${n.views}</span>
          </div>
          <div class="image-info-item">
            <span class="image-info-title">Comments</span>
            <span class="image-info-value">${n.comments}</span>
          </div>
          <div class="image-info-item">
            <span class="image-info-title">Downloads</span>
            <span class="image-info-value">${n.downloads}</span>
          </div>
        </div>
      </a>
    </li>
  `).join("");if(g.insertAdjacentHTML("beforeend",s),q.refresh(),e.length>0){const n=document.querySelector(".gallery-item");if(n){const r=n.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}}function M(){g.innerHTML=""}function E(){const e=document.querySelector(".loading-text");e&&(e.style.display="block")}function P(){const e=document.querySelector(".loading-text");e&&(e.style.display="none")}function x(){h.style.display="block",d.style.display="none"}function m(){h.style.display="none"}function R(e="We're sorry, but you've reached the end of search results."){d.textContent=e,d.style.display="block"}let a=1,l="",y=0;const B=()=>{const e=document.querySelector(".load-more-btn"),s=document.querySelector(".loading-more-text");e&&(e.style.display="none"),s&&(s.style.display="block")},p=()=>{const e=document.querySelector(".loading-more-text");e&&(e.style.display="none")},O=()=>{const e=document.querySelector(".end-message");e&&(e.style.display="none")};document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".form"),s=document.querySelector(".load-more-btn");if(!e){console.error("Search form not found!");return}const n=async t=>{if(t.preventDefault(),l=t.target.elements.searchQuery.value.trim(),a=1,!l){i.error({title:"Error",message:"Please enter a search term",position:"topRight"});return}E(),M(),m(),p(),O();try{const o=await u(l,a);y=o.totalHits,o.hits.length===0?i.info({title:"Info",message:"Sorry, no images found. Please try another query!",position:"topRight"}):(f(o.hits),o.totalHits>15&&x())}catch{i.error({title:"Error",message:"Search failed. Please try again later.",position:"topRight"})}finally{P()}},r=async()=>{B(),a+=1;try{const t=await u(l,a);f(t.hits),a*15>=y&&(m(),R())}catch{i.error({title:"Error",message:"Failed to load more images",position:"topRight"})}finally{p()}};e.addEventListener("submit",n),s&&s.addEventListener("click",r)});
//# sourceMappingURL=index.js.map
