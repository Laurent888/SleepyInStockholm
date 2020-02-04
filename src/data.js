import aa1 from "./img/aa1.jpg";
import aa2 from "./img/aa2.jpg";
import aa3 from "./img/aa3.jpg";
import ab1 from "./img/ab1.jpg";
import ab2 from "./img/ab2.jpg";
import ab3 from "./img/ab3.jpg";
import ac1 from "./img/ac1.jpg";
import ac2 from "./img/ac2.jpg";
import ac3 from "./img/ac3.jpg";
import ao1 from "./img/ao1.jpg";
import ao2 from "./img/ao2.jpg";
import ao3 from "./img/ao3.jpg";
import ae1 from "./img/ae1.jpg";
import ae2 from "./img/ae2.jpg";
import ae3 from "./img/ae3.jpg";
import af1 from "./img/af1.jpg";
import af2 from "./img/af2.jpg";
import af3 from "./img/af3.jpg";
import ag1 from "./img/ag1.jpg";
import ag2 from "./img/ag2.jpg";
import ag3 from "./img/ag3.jpg";
import ah1 from "./img/ah1.jpg";
import ah2 from "./img/ah2.jpg";
import ah3 from "./img/ah3.jpg";
import ai1 from "./img/ai1.jpg";
import ai2 from "./img/ai2.jpg";
import ai3 from "./img/ai3.jpg";
import aj1 from "./img/aj1.jpg";
import aj2 from "./img/aj2.jpg";
import aj3 from "./img/aj3.jpg";
import ak1 from "./img/ak1.jpg";
import ak2 from "./img/ak2.jpg";
import ak3 from "./img/ak3.jpg";
import al1 from "./img/al1.jpg";
import al2 from "./img/al2.jpg";
import al3 from "./img/al3.jpg";
import am1 from "./img/am1.jpg";
import am2 from "./img/am2.jpg";
import am3 from "./img/am3.jpg";
import an1 from "./img/an1.jpg";
import an2 from "./img/an2.jpg";
import an3 from "./img/an3.jpg";

const data = [
  {
    id: 1,
    address: "Vanadisvägen 12-16",
    coordinates: [59.347787, 18.049186],
    postal: "113 46",
    city: "stockholm",
    typeRoom: "1",
    maxGuests: 8,
    amenities: {
      wifi: "yes",
      dryer: "no",
      kitchen: "no",
      tv: "yes",
      washer: "yes"
    },
    price: 68,
    bedNumber: 2,
    reviewsNumber: 792,
    reviewsRate: "2.72",
    rules: { smoking: "no", pets: "yes", parties: "no" },
    owner: "Julie",
    images: [aa1, aa2, aa3],
    title: "Savour Minimal, Designer Style in a Heritage-listed Terrace",
    description:
      "Thinking about visiting Stockholm? I have a studio apartment that will be perfect for your stay. This modern rental comes with amenities such as heating, a dryer, and Wi-Fi. If you want to go to restaurants, museums, and parks, we're within walking distance."
  },
  {
    id: 2,
    address: "Tulegatan 27-21",
    coordinates: [59.344146, 18.060345],
    postal: "113 53",
    city: "stockholm",
    typeRoom: "1",
    maxGuests: 10,
    amenities: {
      wifi: "yes",
      dryer: "no",
      kitchen: "no",
      tv: "yes",
      washer: "yes"
    },
    price: 60,
    bedNumber: 2,
    reviewsNumber: 243,
    reviewsRate: "3.50",
    rules: { smoking: "yes", pets: "yes", parties: "no" },
    owner: "Chelsey",
    images: [ab1, ab2, ab3],
    title: "Bright Private Room Close to the City",
    description:
      "Restaurants, museums, and parks in Stockholm will make this a vacation to remember, and my modern studio apartment comes complete with heating, a dryer, and Wi-Fi. If you rent my Airbnb, I know you'll have a great stay in Stockholm."
  },
  {
    id: 3,
    address: "Östermalmsgatan 59-55",
    coordinates: [59.341959, 18.078814],
    postal: "114 50",
    city: "stockholm",
    typeRoom: "3",
    maxGuests: 6,
    amenities: {
      wifi: "yes",
      dryer: "no",
      kitchen: "no",
      tv: "yes",
      washer: "yes"
    },
    price: 91,
    bedNumber: 3,
    reviewsNumber: 599,
    reviewsRate: "4.98",
    rules: { smoking: "no", pets: "no", parties: "yes" },
    owner: "Tessa",
    images: [ac1, ac2, ac3],
    title: "Enjoy great views of the City in our Deluxe Room!",
    description:
      "Want to visit Stockholm without breaking the bank? We have exactly what you're looking for. Our modern apartment comes with studio, heating, a dryer, and Wi-Fi, and we're within walking distance to restaurants, museums, and parks."
  },
  {
    id: 4,
    address: "Saltmätargatan 3-1",
    coordinates: [59.339217, 18.058915],
    postal: "111 60",
    city: "stockholm",
    typeRoom: "2",
    maxGuests: 10,
    amenities: {
      wifi: "yes",
      dryer: "no",
      kitchen: "no",
      tv: "yes",
      washer: "yes"
    },
    price: 68,
    bedNumber: 1,
    reviewsNumber: 826,
    reviewsRate: "4.91",
    rules: { smoking: "yes", pets: "no", parties: "no" },
    owner: "Jannette",
    images: [ao1, ao2, ao3],
    title: "Convenient and private",
    description:
      "Embrace the spirit of DIY with this original cottage occupying a peaceful street position. This charming weatherboard home features 3 roomy bedrooms and bright, open living spaces. "
  },
  {
    id: 5,
    address: "Dalagatan 21-19",
    coordinates: [59.34339, 18.043814],
    postal: "113 27",
    city: "stockholm",
    typeRoom: "1",
    maxGuests: 2,
    amenities: {
      wifi: "yes",
      dryer: "no",
      kitchen: "no",
      tv: "yes",
      washer: "yes"
    },
    price: 70,
    bedNumber: 1,
    reviewsNumber: 635,
    reviewsRate: "4.90",
    rules: { smoking: "no", pets: "yes", parties: "no" },
    owner: "Eric",
    images: [ae1, ae2, ae3],
    title: "Splendid terrace magnificent view",
    description:
      "This cozy cottage is nestled against a spectacular coastal backdrop with an unbroken view of the sea and a faraway coastline. With an environmentally conscious design that maximizes home efficiency, this spectacular, modern family home provides plenty of space for entertaining. This truly is a dream abode for the growing family."
  },
  {
    id: 6,
    address: "Anna Whitlocks Gata 11",
    coordinates: [59.347544, 18.036468],
    postal: "113 65",
    city: "stockholm",
    typeRoom: "3",
    maxGuests: 6,
    amenities: {
      wifi: "yes",
      dryer: "no",
      kitchen: "no",
      tv: "yes",
      washer: "yes"
    },
    price: 45,
    bedNumber: 1,
    reviewsNumber: 926,
    reviewsRate: "1.80",
    rules: { smoking: "no", pets: "yes", parties: "no" },
    owner: "Philipp",
    images: [af1, af2, af3],
    title: "Brownstone Studio",
    description:
      "This immaculately presented apartment is set amongst manicured grounds within a private and secure complex. As a resident you will have access to lifestyle amenities including a lap pool, gymnasium, communal terraces, concierge service and basement parking."
  },
  {
    id: 7,
    address: "Inedalsgatan 10-16",
    coordinates: [59.335025, 18.036186],
    postal: "112 33",
    city: "stockholm",
    typeRoom: "2",
    maxGuests: 7,
    amenities: {
      wifi: "yes",
      dryer: "no",
      kitchen: "no",
      tv: "yes",
      washer: "yes"
    },

    price: 23,
    bedNumber: 3,
    reviewsNumber: 892,
    reviewsRate: "1.76",
    rules: { smoking: "yes", pets: "no", parties: "no" },
    owner: "Paula",
    images: [ag1, ag2, ag3],
    title: "Sunny, Modern room in Stockholm",
    description:
      "Hidden away on the fringe of the city is this charming four bedroom residence plus study on a lush, leafy oasis.On the entry level is a rumpus room complete with fireplace, garage access, laundry and recently remodeled bathroom."
  },
  {
    id: 8,
    address: "Wargentinsgatan 6",
    coordinates: [59.332967, 18.041081],
    postal: "112 29",
    city: "stockholm",
    typeRoom: "1",
    maxGuests: 9,
    amenities: {
      wifi: "yes",
      dryer: "no",
      kitchen: "no",
      tv: "yes",
      washer: "yes"
    },
    price: 19,
    bedNumber: 2,
    reviewsNumber: 377,
    reviewsRate: "1.34",
    rules: { smoking: "yes", pets: "no", parties: "yes" },
    owner: "David",
    images: [ah1, ah2, ah3],
    title: "Modern Apartment w/ Heating + ",
    description:
      "Stay in this peaceful apartment and live like a true local in Stockholm. We're within walking distance to parks, coffee shops, and cafes. Our rental comes with 1 bedroom, and a private bathroom and kitchen that you're free to use any time. A dryer, a coffee maker, a TV -- we've got everything you need."
  },
  {
    id: 9,
    address: "Parmmätargatan 15-13",
    coordinates: [59.329917, 18.047397],
    postal: "112 24",
    city: "stockholm",
    typeRoom: "1",
    maxGuests: 4,
    amenities: {
      wifi: "yes",
      dryer: "no",
      kitchen: "no",
      tv: "yes",
      washer: "yes"
    },
    price: 23,
    bedNumber: 3,
    reviewsNumber: 248,
    reviewsRate: "2.21",
    rules: { smoking: "no", pets: "yes", parties: "yes" },
    owner: "Damian",
    images: [ai1, ai2, ai3],
    title: "Stylish house 5 min from Waterfront",
    description:
      "My peaceful 1-bedroom apartment has everything you need for your Stockholm trip. The unit comes with a dryer, a coffee maker, and a TV. During your stay, you can also enjoy using a convenient private bathroom and kitchen. Our Airbnb is within walking distance to several popular parks, coffee shops, and cafes. An ideal base to explore Stockholm."
  },
  {
    id: 10,
    address: "Timmermansgatan 34a",
    coordinates: [59.316333, 18.060865],
    postal: "118 55",
    city: "stockholm",
    typeRoom: "3",
    maxGuests: 4,
    amenities: {
      wifi: "yes",
      dryer: "no",
      kitchen: "no",
      tv: "yes",
      washer: "yes"
    },
    price: 42,
    bedNumber: 2,
    reviewsNumber: 945,
    reviewsRate: "5.53",
    rules: { smoking: "yes", pets: "yes", parties: "no" },
    owner: "Andressa",
    images: [aj1, aj2, aj3],
    title: "Luxury studio w/ parking",
    description:
      "Parks, coffee shops, and cafes in Stockholm will make this a vacation to remember, and my peaceful 1-bedroom apartment comes complete with private bathroom and kitchen. The a dryer, a coffee maker, and a TV will make you wish you could stay even longer. If you rent my Airbnb, I know you'll have a great stay in Stockholm."
  },
  {
    id: 11,
    address: "Björngårdsgatan 14A",
    coordinates: [59.315781, 18.065924],
    postal: "118 52",
    city: "stockholm",
    typeRoom: "2",
    maxGuests: 4,
    amenities: {
      wifi: "yes",
      dryer: "no",
      kitchen: "no",
      tv: "yes",
      washer: "yes"
    },
    price: 80,
    bedNumber: 1,
    reviewsNumber: 950,
    reviewsRate: "4.76",
    rules: { smoking: "no", pets: "no", parties: "yes" },
    owner: "Stephania",
    images: [ak1, ak2, ak3],
    title: "Spacious & Modern | Close to Subway + Downtown",
    description:
      "The house comes complete with two living rooms, a welcoming kitchen/dining area, two bathrooms, three bedrooms, a study and a laundry, and retains the value of peaceful living while being conveniently close to shops, school and transport. "
  },
  {
    id: 12,
    address: "Möregatan 5",
    coordinates: [59.312081, 18.070186],
    postal: "118 27",
    city: "stockholm",
    typeRoom: "1",
    maxGuests: 11,
    amenities: {
      wifi: "yes",
      dryer: "no",
      kitchen: "no",
      tv: "yes",
      washer: "yes"
    },
    price: 103,
    bedNumber: 2,
    reviewsNumber: 697,
    reviewsRate: "3.19",
    rules: { smoking: "no", pets: "yes", parties: "yes" },
    owner: "Gustav",
    images: [al1, al2, al3],
    title: "Charming luminous apartment",
    description:
      "Want to visit Stockholm without breaking the bank? We have exactly what you're looking for. Our peaceful apartment comes with 1 bedroom, private bathroom, kitchen, a dryer, a coffee maker, and a TV, and we're within walking distance to parks, coffee shops, and cafes."
  },
  {
    id: 13,
    address: "Öregrundsgatan 13-11",
    coordinates: [59.345462, 18.112466],
    postal: "115 59",
    city: "stockholm",
    typeRoom: "2",
    maxGuests: 9,
    amenities: {
      wifi: "yes",
      dryer: "no",
      kitchen: "no",
      tv: "yes",
      washer: "yes"
    },
    price: 95,
    bedNumber: 2,
    reviewsNumber: 446,
    reviewsRate: "4.67",
    rules: { smoking: "yes", pets: "yes", parties: "yes" },
    owner: "Sebastian",
    images: [am1, am2, am3],
    title: "Modern Apartment w/ Heating + ",
    description:
      "Stay in this peaceful apartment and live like a true local in Stockholm. We're within walking distance to parks, coffee shops, and cafes. Our rental comes with 1 bedroom, and a private bathroom and kitchen that you're free to use any time. A dryer, a coffee maker, a TV -- we've got everything you need."
  },
  {
    id: 14,
    address: "Fjärde Bassängvägen 10",
    coordinates: [59.347868, 18.112526],
    postal: "115 41",
    city: "stockholm",
    typeRoom: "1",
    maxGuests: 11,
    amenities: {
      wifi: "yes",
      dryer: "no",
      kitchen: "no",
      tv: "yes",
      washer: "yes"
    },
    price: 60,
    bedNumber: 1,
    reviewsNumber: 291,
    reviewsRate: "2.70",
    rules: { smoking: "yes", pets: "no", parties: "yes" },
    owner: "Erica",
    images: [an1, an2, an3],
    title: "Peaceful Apartment w/ a Dryer + Pool",
    description:
      "My peaceful 1-bedroom apartment has everything you need for your Stockholm trip. The unit comes with a dryer, a coffee maker, and a crib. During your stay, you can also enjoy using a convenient pool and kitchen. Our Airbnb is within walking distance to several popular museums, national parks, and mountain slopes. An ideal base to explore Stockholm."
  }
];

export default data;
