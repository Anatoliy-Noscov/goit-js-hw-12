import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoadMoreButton,
  hideLoadMoreButton,
  showEndMessage,
  showLoader,
  hideLoader,
} from './js/render-functions';

let currentPage = 1;
let currentQuery = '';
let totalHits = 0;

const showLoadMoreLoader = () => {
  const btn = document.querySelector('.load-more-btn');
  const loader = document.querySelector('.loading-more-text');

  if (btn) btn.style.display = 'none';
  if (loader) loader.style.display = 'block';
};

const hideLoadMoreLoader = () => {
  const loader = document.querySelector('.loading-more-text');
  if (loader) loader.style.display = 'none';
};

const hideEndMessage = () => {
  const endMsg = document.querySelector('.end-message');
  if (endMsg) endMsg.style.display = 'none';
};

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.form');
  const loadMoreBtn = document.querySelector('.load-more-btn');
  if (!searchForm) {
    console.error('Search form not found!');
    return;
  }

  const handleSearch = async event => {
    event.preventDefault();
    currentQuery = event.target.elements.searchQuery.value.trim();
    currentPage = 1;

    if (!currentQuery) {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search term',
        position: 'topRight',
      });
      return;
    }

    showLoader();
    clearGallery();
    hideLoadMoreButton();
    hideLoadMoreLoader();
    hideEndMessage();

    try {
      const data = await getImagesByQuery(currentQuery, currentPage);
      totalHits = data.totalHits;

      if (data.hits.length === 0) {
        iziToast.info({
          title: 'Info',
          message: 'Sorry, no images found. Please try another query!',
          position: 'topRight',
        });
        hideLoadMoreButton();
      } else {
        createGallery(data.hits);
        if (data.totalHits > 15 && data.hits.length === 15) {
          showLoadMoreButton();
        }
      }
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: 'Search failed. Please try again later.',
        position: 'topRight',
      });
    } finally {
      hideLoader();
    }
  };

  const handleLoadMore = async () => {
    showLoadMoreLoader();
    currentPage += 1;

    try {
      const data = await getImagesByQuery(currentQuery, currentPage);
      createGallery(data.hits);

      if (data.hits.length < 15 || currentPage * 15 >= totalHits) {
        hideLoadMoreButton();
        showEndMessage();
      }
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: 'Failed to load more images',
        position: 'topRight',
      });
    } finally {
      hideLoadMoreLoader();
    }
  };

  searchForm.addEventListener('submit', handleSearch);

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', handleLoadMore);
  }
});
