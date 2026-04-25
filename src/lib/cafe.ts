export const CAFE = {
  name: "Ponchik Monchik",
  phone: "093 699 909",
  phoneDial: "+374936999093".slice(0, 12), // +374 93 699 909
  phoneHref: "tel:+37493699909",
  address: "Moskovyan 31, Yerevan",
  addressHy: "Մոսկովյան 31, Երևան",
  addressRu: "Московян 31, Ереван",
  // Approximate coordinates for Moskovyan St., Yerevan
  lat: 40.1885,
  lng: 44.5126,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Moskovyan+31+Yerevan",
  mapsEmbed: "https://www.google.com/maps?q=Moskovyan+31,+Yerevan&output=embed",
  hours: "09:00–23:30",
  hoursOpen: "09:00",
  hoursClose: "23:30",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
} as const;
