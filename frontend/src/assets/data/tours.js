import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Westminster Bridge",
    city: "London",
    distance: 300,
    address: "Westminster Bridge, London, UK",
    price: 99,
    maxGroupSize: 10,
    desc: "Explore the iconic Westminster Bridge, a symbol of London's rich history. Walk across the bridge while enjoying panoramic views of the River Thames, and take in the majestic sight of Big Ben and the Houses of Parliament. Perfect for history buffs and photography enthusiasts.",
    reviews: [
      {
        name: "John Doe",
        rating: 5,
        date: "2023-08-10",
        comment: "Amazing experience, highly recommend!",
      },
      {
        name: "Jane Smith",
        rating: 4.0,
        date: "2023-08-11",
        comment: "Beautiful scenery, but a bit crowded.",
      },
    ],
    avgRating: '',
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Bali",
    distance: 400,
    address: "Kuta, Bali, Indonesia",
    price: 99,
    maxGroupSize: 8,
    desc: "Immerse yourself in the serene beauty of Bali, where tropical beaches meet vibrant culture. Relax on the golden sands of Kuta Beach, explore the lush green rice terraces, and discover the island's rich spiritual heritage with visits to ancient temples. A perfect escape for those seeking both relaxation and adventure.",
    reviews: [
      {
        name: "John Smith",
        rating: 5,
        date: "2023-07-15",
        comment: "A paradise on earth, had a fantastic time!",
      },
    ],
    avgRating: 4,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Chiang Mai",
    distance: 500,
    address: "Doi Inthanon, Chiang Mai, Thailand",
    price: 99,
    maxGroupSize: 8,
    desc: "Experience the magic of the Snowy Mountains in northern Thailand, where cool mountain air and stunning vistas create an unforgettable atmosphere. Trek through lush forests, visit traditional hill tribe villages, and marvel at the cascading waterfalls. Ideal for nature lovers and adventure seekers alike.",
    reviews: [],
    avgRating: 0,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Phuket",
    distance: 500,
    address: "Phang Nga Bay, Phuket, Thailand",
    price: 99,
    maxGroupSize: 8,
    desc: "Begin your day with a breathtaking sunrise over Phang Nga Bay, where the golden light illuminates the limestone karsts that rise dramatically from the emerald waters. Cruise through hidden lagoons and visit the famous James Bond Island. This tour is perfect for capturing unforgettable moments.",
    reviews: [
      {
        name: "John Smith",
        rating: 4,
        date: "2023-09-02",
        comment: "Stunning sunrise, unforgettable experience!",
      },
    ],
    avgRating: 4.6,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Penida, Bali, Indonesia",
    city: "Bali",
    distance: 500,
    address: "Nusa Penida, Bali, Indonesia",
    price: 99,
    maxGroupSize: 8,
    desc: "Venture off the beaten path to Nusa Penida, Bali's hidden gem. Explore the island's rugged cliffs, pristine beaches, and crystal-clear waters that are perfect for snorkeling and diving. Visit the stunning Kelingking Beach and relax at Angel's Billabong, a natural infinity pool overlooking the ocean.",
    reviews: [],
    avgRating: 0,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Kyoto",
    address: "Maruyama Park, Kyoto, Japan",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Witness the enchanting beauty of cherry blossoms in full bloom at Maruyama Park, Kyoto's most famous spot for hanami. Stroll under the pink canopy, enjoy a picnic under the trees, and capture the perfect springtime moment in one of Japan's most picturesque settings.",
    reviews: [
      {
        name: "John Smith",
        rating: 4,
        date: "2023-04-05",
        comment: "The cherry blossoms were breathtaking!",
      },
    ],
    avgRating: 4.6,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten, Norway",
    city: "Lofoten",
    distance: 500,
    address: "Holmen Lofoten, Norway",
    price: 99,
    maxGroupSize: 8,
    desc: "Explore the untouched wilderness of Holmen Lofoten, where towering peaks meet the sea. This remote corner of Norway offers spectacular scenery, opportunities for fishing, kayaking, and hiking, and a chance to experience the Midnight Sun or Northern Lights, depending on the season.",
    reviews: [],
    avgRating: 0,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Jaflong, Sylhet",
    city: "Sylhet",
    distance: 100,
    address: "Jaflong, Sylhet, Bangladesh",
    price: 99,
    maxGroupSize: 5,
    desc: "Discover the natural beauty of Jaflong, nestled in the hills of Sylhet. Known for its picturesque landscapes and serene environment, Jaflong offers stunning views of tea gardens, river valleys, and the rolling hills that stretch across the horizon. Perfect for a peaceful retreat into nature.",
    reviews: [],
    avgRating: 0,
    photo: "/tour-images/tour-img08.jpg",
    featured: false,
  },
  {
    id: "09",
    title: "Cox's Bazar Sea Beach",
    city: "Chittagong",
    distance: 500,
    address: "Cox's Bazar, Chittagong, Bangladesh",
    price: 99,
    maxGroupSize: 8,
    desc: "Visit the world's longest natural sea beach, Cox's Bazar, where the golden sands stretch for miles along the Bay of Bengal. Relax on the beach, swim in the clear waters, and enjoy the vibrant local culture in this popular tourist destination.",
    reviews: [],
    avgRating: 0,
    photo: "/tour-images/tour-img09.jpg",
    featured: false,
  },
];

export default tours;
