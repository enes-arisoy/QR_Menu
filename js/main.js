import fetchMenu from "./api.js";
import { elements, renderCard } from "./ui.js";

//sayfa yüklendiğinde API a istek atıp gelen veriyi dataya ata.
document.addEventListener("DOMContentLoaded", async () => {

    // API den veri çekme
  const data = await fetchMenu();
  
  // API den gelen veriyi arayüze renderlama
  renderCard(data);

  // ınputlara olay izleyicisi ekle ve değişen inputun kategorisine erişip bu categorideki ürünleri render etmek
  elements.inputs.forEach((input) => {
// querrySelectorAll metodu ile elde edilen inputs bir HtmlCollection olduğundan buna direkt addEventListener ekleyemeyiz. Bu sebeple bu HtmlCollection'ı dönüp her bir elemanı ayırdık.
input.addEventListener("change", () => {
  // seçili input'ın id'sini al
  const selected = input.id;

  // ! Eğer seçili category all ise tüm ürünleri ama bunun dışında bir category ise buna ait ürünleri renderla

  if (selected === "all") {
    renderCard(data);
  }
  else {
    // selectedId 'ye menu elemalarını dön ve seçili kategoriye sahip elemanları al
    const filtered = data.filter((item) => item.category == selected);
    // filtrelenen elemanları render etmek

    renderCard(filtered);
  }
  });
  
});
});

