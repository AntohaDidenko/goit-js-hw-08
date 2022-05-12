import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const makeGallery = galleryItems
  .map(
    image =>
      `<a href="${image.original}">
                <img
                src="${image.preview}"
                alt="${image.description}"
                />
            </a>`,
  )
  .join('');

gallery.innerHTML = makeGallery;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  close: false,
  showCounter: false,
});
