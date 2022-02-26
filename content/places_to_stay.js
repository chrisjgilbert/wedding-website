const content = [
  {
    title: "Capelongue, Bonnieux",
    content: `Owned by the Beaumier group who have a couple of hotels across the region. Relatively upmarket and has a great restaurant, garden and pool.`,
    image: "capelongue-min.png",
    link: "https://www.beaumier.com/en/properties/capelongue-hotel/",
    details: [
      "Les Claparèdes, Chemin des Cabanes, 84480 Bonnieux",
      "+33 4 90 75 89 78",
      "Price £££",
    ],
  },
  {
    title: "Les Clos du Buis, Bonnieux",
    link: "https://hotel-bonnieux-luberon.com/en/",
    content: `This is a great B&B in Bonnieux. It is relatively basic but in a fantastic location and has apartments as well as rooms. It also has a pool.`,
    image: "clos_du_buis_bonnieux-min.png",
    details: [
      "Rue Victor Hugo, 84480 Bonnieux",
      "+33 4 90 75 88 48",
      "Price ££",
    ],
  },
  {
    title: "Domaine les Roullets, Oppède",
    content: `A boutique B&B with 5 bedrooms and a self catered cottage in beautiful grounds which include a 700 year old tree, truffle forest, vineyard and a pool. B&B bedrooms are for adults only so not a great option if you are travelling with kids. Neither of us have stayed here but it comes recommended.`,
    image: "domaine_les_roullets-min.png",
    link: "https://www.lesroullets.com",
    details: [
      "305a chemin de Fontdrèche, 84580 Oppède",
      "+33 4 90 71 21 88",
      "Price £££",
    ],
  },
  {
    title: "Crillon le Brave, nr Mont Ventoux",
    content: `Whilst it is not in the Luberon, it is a beautiful place to stay and our favourite hotel in Provence. It is built into the village that it takes its name from, with bedrooms expanding into multiple unique buildings. Full of charm, atmosphere and where we got engaged - Ventoux is a stones throw away and the local wine is delicious.`,
    image: "crillon_le_brave-min.png",
    link: "https://www.crillonlebrave.com",
    details: [
      "Place de l'Eglise, 84410 Crillon-le-Brave",
      "+33 4 90 65 61 61",
      "Price ££££",
    ],
  },
  {
    title: "La Coquillade, Gargas",
    content: `A Thomson favourite (its upmarket) and the site of Ali‘s 60th. If you want a luxury stay we‘d highly recommend it - there is a spa, gym, multiple tennis courts, 2 swimming pools, and crucially, a helicopter pad. It‘s also a good option for dinner with the restaurant in the vines a beautiful setting.`,
    image: "la_coquillade-min.png",
    details: ["Le Perotet, 84400 Gargas", "+33 (0)4 90 74 71 71", "Price ££££"],
    link: "https://coquillade.fr/en/",
  },
  {
    title: "Le Moulin, Lourmarin",
    content: `A simple but beautifully designed hotel in the heart of Lourmarin. We stayed there in September 2021 and thought it was a great base as you are in the heart of the village.`,
    image: "le_moulin-min.png",
    details: [
      "Av. Raoul Dautry, 84160 Lourmarin",
      "+33 4 90 68 06 69",
      "Price £££",
    ],
    link: "https://www.beaumier.com/en/properties/le-moulin-hotel/",
  },
  {
    title: "Le Galinier de Lourmarin, Lourmarin",
    content: `A beautiful hotel situated just outside Lourmarin. It is a 18th-century bastide and full of Provençal charm. Le Galinier is first and foremost a bed and breakfast but owner and chef Delphine hosts a table d'hôte on Wednesday, Thursday and Sunday nights.`,
    image: "le_galinier-min.png",
    details: [
      "Av. du 8 Mai, 84160 Lourmarin",
      "+33 4 89 81 40 75",
      "Price £££",
    ],
    link: "https://www.beaumier.com/en/properties/le-galinier-villa/",
  },
  {
    title: "La Bastide de Gordes, Gordes",
    content: `An old school slightly chinzy French hotel that‘s famous in the local area. Neither of us have stayed there but Gordes is a very pretty village and the hotel is similarly aesthetically pleasing.`,
    image: "la_bastide_de_gordes-min.png",
    details: [
      "La Bastide,61 Rue de la Combe, 84220 Gordes",
      "+33 (0)4 90 72 12 12",
      "Price £££",
    ],
    link: "https://airelles.com/en/destination/gordes-hotel",
  },
  {
    title: "Domaine de Fontenille, Bonnieux",
    content: `Another upmarket hotel with a great vineyard and restaurants. An Ali and Jo Thomson recommendation.`,
    image: "domaine_de_fontenille-min.png",
    details: [
      "Rte de Roquefraiche, 84360 Lauris",
      "+33 4 13 98 00 00",
      "Price £££",
    ],
    link: "https://www.lesdomainesdefontenille.com/en/domainedefontenille.html",
  },
  {
    title: "Le Clos Les Eydins, between Bonnieux and Pont Julien",
    content: `This is a simple B&B in Bonnieux. Although relatively basic, it is in a fantastic location and has apartments as well as rooms. It also has a pool.`,
    image: "le_clos_les_eydins-min.png",
    details: [
      "Chem. du Four, 84480 Bonnieux",
      "+33 6 18 40 61 56",
      "Price £££",
    ],
    link: "https://www.leseydins.com/en",
  },
  {
    title: "Villa rentals",
    content: `There are lots of websites offering villa rentals if you want to share a house with a larger group and also lots of great options available on Air BNB.

    Some sites that Ali Thomson recommends are below.
    `,
    image: "villa_rentals-min.png",
    details: [
      "https://www.house-farmhouse-property-provence-luberon.com/rentals-search.php",
      "https://www.theluberon.com",
      "https://www.vrbo.com/en-gb",
    ],
  },
  {
    title: "La Grande Verrière, Goult",
    content: `A simple B&B that is extremely well located near to Goult and a short drive to the wedding venue. This charming guest house has a pool and is well located for walking in the area. They also have some rooms that are self-catered.`,
    image: "la_grande_verrière-min.png",
    details: [
      "3194 Chem. de la Verrière, 84220 Goult",
      "+33 6 63 03 52 71",
      "Price ££",
    ],
    link: "https://www.expedia.co.uk/Goult-Hotels-La-Grande-Verriere.h31827817.Hotel-Information",
  },
  {
    title: "La Maison Papillons",
    content: `If you are looking to stay further afield as part of a bigger trip, we'd recommend staying in Montcluse with Olivier and Caroline and their labrador Juju. We stayed there in Sept 2021 and enjoyed exploring the area which is more rustic than the Luberon, but a great place to unwind nevertheless. Olivier is a keen cyclist and can guide you on local rides. His bar opens bang on 6pm ready for an evening drink and every other evening they host dinner for all of the guests which are great value and delicious.`,
    image: "la_maison_papillons-min.png",
    details: [
      "Hameau de Monteil, 30630 Montclus",
      "+33 6 20 46 80 05",
      "Price ££",
    ],
    link: "https://lamaisonpapillons.fr",
  },
];

export default content;
