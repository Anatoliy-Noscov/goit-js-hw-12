import{a as L,S as v,i}from"./assets/vendor-lDhL-8I6.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const b="49685164-dd199c429b54d7a6e3529f8c6",S="https://pixabay.com/api/",q=15;async function u(e,s=1){const r={key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:q,page:s};return(await L.get(S,{params:r})).data}const g=document.querySelector(".gallery"),h=document.querySelector(".load-more-btn"),d=document.querySelector(".end-message");document.querySelector(".loader");let M=new v(".gallery a",{captionsData:"alt",captionDelay:250});function f(e){const s=e.map(r=>`
    <li class="gallery-item">
      <a href="${r.largeImageURL}">
        <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
        <div class="image-info">
          <div class="image-info-item">
            <span class="image-info-title">Likes</span>
            <span class="image-info-value">${r.likes}</span>
          </div>
          <div class="image-info-item">
            <span class="image-info-title">Views</span>
            <span class="image-info-value">${r.views}</span>
          </div>
          <div class="image-info-item">
            <span class="image-info-title">Comments</span>
            <span class="image-info-value">${r.comments}</span>
          </div>
          <div class="image-info-item">
            <span class="image-info-title">Downloads</span>
            <span class="image-info-value">${r.downloads}</span>
          </div>
        </div>
      </a>
    </li>
  `).join("");g.insertAdjacentHTML("beforeend",s),M.refresh()}function w(){g.innerHTML=""}function E(){h.style.display="block",d.style.display="none"}function m(){h.style.display="none"}function P(){d.textContent="We're sorry, but you've reached the end of search results.",d.style.display="block"}let n=1,l="",y=0;const x=()=>{const e=document.querySelector(".loading-text");e&&(e.style.display="block")},R=()=>{const e=document.querySelector(".loading-text");e&&(e.style.display="none")},O=()=>{const e=document.querySelector(".load-more-btn"),s=document.querySelector(".loading-more-text");e&&(e.style.display="none"),s&&(s.style.display="block")},p=()=>{const e=document.querySelector(".loading-more-text");e&&(e.style.display="none")},$=()=>{const e=document.querySelector(".end-message");e&&(e.style.display="none")};document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".form"),s=document.querySelector(".load-more-btn");if(!e){console.error("Search form not found!");return}const r=async t=>{if(t.preventDefault(),l=t.target.elements.searchQuery.value.trim(),n=1,!l){i.error({title:"Error",message:"Please enter a search term",position:"topRight"});return}x(),w(),m(),p(),$();try{const o=await u(l,n);y=o.totalHits,o.hits.length===0?i.info({title:"Info",message:"Sorry, no images found. Please try another query!",position:"topRight"}):(f(o.hits),o.totalHits>15&&E())}catch{i.error({title:"Error",message:"Search failed. Please try again later.",position:"topRight"})}finally{R()}},a=async()=>{O(),n+=1;try{const t=await u(l,n);f(t.hits),n*15>=y&&(m(),P("We're sorry, but you've reached the end of search results."))}catch{i.error({title:"Error",message:"Failed to load more images",position:"topRight"})}finally{p()}};e.addEventListener("submit",r),s&&s.addEventListener("click",a)});
//# sourceMappingURL=index.js.map
