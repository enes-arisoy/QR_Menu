const fetchMenu = async () => {
  // API'ya istek atmak için fetch fonksiyonunu kullanıyoruz.
  // fetch fonksiyonu bir Promise döndürür. Bu yüzden await anahtar kelimesi ile bekliyoruz.
  // fetch fonksiyonuna verdiğimiz parametre, API'nin URL'si. Bu örnekte API'ya GET isteği atıyoruz.
  // fetch fonksiyonu bize Response objesi döndürür. Response objesinin içinde API'dan gelen veri bulunur.
  const res = await fetch("../db.json");

  // API'den gelen veriyi JSON formatına çevirmek için json() fonksiyonunu kullanıyoruz.
  // json() fonksiyonu da bir Promise döndürür. Bu yüzden yine await anahtar kelimesi ile bekliyoruz.
  const data = await res.json();
  return data.menu;
};

export default fetchMenu;
