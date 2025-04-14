import{a as L,S as v,i}from"./assets/vendor-lDhL-8I6.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const b="49685164-dd199c429b54d7a6e3529f8c6",S="https://pixabay.com/api/",q=15;async function f(e,n=1){const r={key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:q,page:n};return(await L.get(S,{params:r})).data}const g=document.querySelector(".gallery"),h=document.querySelector(".load-more-btn"),u=document.querySelector(".end-message");document.querySelector(".loader");let w=new v(".gallery a",{captionsData:"alt",captionDelay:250});function m(e,n=!1){const r=e.map(s=>`
    <li class="gallery-item">
      <a href="${s.largeImageURL}">
        <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}" />
        <div class="image-info">
          <div class="image-info-item">
            <span class="image-info-title">Likes</span>
            <span class="image-info-value">${s.likes}</span>
          </div>
          <div class="image-info-item">
            <span class="image-info-title">Views</span>
            <span class="image-info-value">${s.views}</span>
          </div>
          <div class="image-info-item">
            <span class="image-info-title">Comments</span>
            <span class="image-info-value">${s.comments}</span>
          </div>
          <div class="image-info-item">
            <span class="image-info-title">Downloads</span>
            <span class="image-info-value">${s.downloads}</span>
          </div>
        </div>
      </a>
    </li>
  `).join("");if(g.insertAdjacentHTML("beforeend",r),w.refresh(),n&&e.length>0){const s=document.querySelector(".gallery-item");if(s){const t=s.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}}function E(){g.innerHTML=""}function M(){const e=document.querySelector(".loader");e&&e.classList.add("visible")}function P(){const e=document.querySelector(".loader");e&&e.classList.remove("visible")}function R(){h.style.display="block",u.style.display="none"}function d(){h.style.display="none"}function B(e="We're sorry, but you've reached the end of search results."){u.textContent=e,u.style.display="block"}let a=1,l="",y=0;const x=()=>{const e=document.querySelector(".load-more-btn"),n=document.querySelector(".loading-more-text");e&&(e.style.display="none"),n&&(n.style.display="block")},p=()=>{const e=document.querySelector(".loading-more-text");e&&(e.style.display="none")},C=()=>{const e=document.querySelector(".end-message");e&&(e.style.display="none")};document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".form"),n=document.querySelector(".load-more-btn");if(!e){console.error("Search form not found!");return}const r=async t=>{if(t.preventDefault(),l=t.target.elements.searchQuery.value.trim(),a=1,!l){i.error({title:"Error",message:"Please enter a search term",position:"topRight"});return}M(),E(),d(),p(),C();try{const o=await f(l,a);y=o.totalHits,o.hits.length===0?(i.info({title:"Info",message:"Sorry, no images found. Please try another query!",position:"topRight"}),d()):(m(o.hits,!1),o.totalHits>15&&o.hits.length===15&&R())}catch{i.error({title:"Error",message:"Search failed. Please try again later.",position:"topRight"})}finally{P()}},s=async()=>{x(),a+=1;try{const t=await f(l,a);m(t.hits,!0),(t.hits.length<15||a*15>=y)&&(d(),B())}catch{i.error({title:"Error",message:"Failed to load more images",position:"topRight"})}finally{p()}};e.addEventListener("submit",r),n&&n.addEventListener("click",s)});
//# sourceMappingURL=index.js.map
