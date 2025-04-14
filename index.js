import{a as v,S,i}from"./assets/vendor-lDhL-8I6.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const b="49685164-dd199c429b54d7a6e3529f8c6",q="https://pixabay.com/api/",h=15;async function u(e,s=1){const r={key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:h,page:s};return(await v.get(q,{params:r})).data}const L=document.querySelector(".gallery"),M=document.querySelector(".load-more-btn"),f=document.querySelector(".end-message");document.querySelector(".loader");let w=new S(".gallery a",{captionsData:"alt",captionDelay:250});function m(e,s=!1){const r=e.map(n=>`
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
  `).join("");if(L.insertAdjacentHTML("beforeend",r),w.refresh(),s&&e.length>0){const n=document.querySelector(".gallery-item");if(n){const t=n.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}}function E(){L.innerHTML=""}function P(){const e=document.querySelector(".loader");e&&e.classList.add("visible")}function B(){const e=document.querySelector(".loader");e&&e.classList.remove("visible")}function y(){const e=document.querySelector(".load-more-btn"),s=document.querySelector(".end-message");e&&(e.style.display="block"),s&&(s.style.display="none")}function d(){M.style.display="none"}function R(e="We're sorry, but you've reached the end of search results."){f.textContent=e,f.style.display="block"}let a=1,l="",p=0;const x=()=>{const e=document.querySelector(".load-more-btn"),s=document.querySelector(".loading-more-text");e&&(e.style.display="none"),s&&(s.style.display="block")},g=()=>{const e=document.querySelector(".loading-more-text");e&&(e.style.display="none")},C=()=>{const e=document.querySelector(".end-message");e&&(e.style.display="none")};document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".form"),s=document.querySelector(".load-more-btn");if(!e){console.error("Search form not found!");return}const r=async t=>{if(t.preventDefault(),l=t.target.elements.searchQuery.value.trim(),a=1,!l){i.error({title:"Error",message:"Please enter a search term",position:"topRight"});return}P(),E(),d(),g(),C();try{const o=await u(l,a);p=o.totalHits,o.hits.length===0?(i.info({title:"Info",message:"Sorry, no images found. Please try another query!",position:"topRight"}),d()):(m(o.hits,!1),o.totalHits>o.hits.length&&y())}catch{i.error({title:"Error",message:"Search failed. Please try again later.",position:"topRight"})}finally{B()}},n=async()=>{x(),a+=1;try{const t=await u(l,a);m(t.hits,!0),a*h>=p?(d(),R()):y()}catch{i.error({title:"Error",message:"Failed to load more images",position:"topRight"})}finally{g()}};e.addEventListener("submit",r),s&&s.addEventListener("click",n)});
//# sourceMappingURL=index.js.map
