// Çok sayfalı uygulamalarda bir sayfa birden çok eleman için ortak ise bu sayfa dinamik şekilde render edilir. bunu yaparken ilk olarak url'e bir parametre geçilir. Sonrasında bu parametre url'den alınarak sayfa içeriğinin renderlanması sağlanır.

import fetchMenu from "./api.js";
import { elements, renderDetailPage, renderNotFoundPage } from "./ui.js";

//Javascript URLSearchParams classı sayesinde url'deki arama parametrelerini alıp kullanabiliriz.

const params = new URLSearchParams(window.location.search);

// urlSearch Params ile url'deki id değerine erişmek

const id = +params.get("id");

document.addEventListener("DOMContentLoaded", async () => {
  // API'den menu elemanlarını almak
  const data = await fetchMenu();

  // detay sayfasında renderlanacak ürünü almak
  const product = data.find((item) => item.id === id);

  // eğer ürün varsa renderDetailPage fonks. çalıştır, yoksa renderNotFoundPage fonks. çalıştır

  if (!product) {
    renderNotFoundPage(elements.detailPage);
  } else {
    renderDetailPage(product, elements.detailPage);
  }
});
