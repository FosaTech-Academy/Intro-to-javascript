const user = {
  name: "John Doe",
  age: 21,
  gender: "male",
  isStudent: false,
  skills: ["Python", "Typescript", "SQL", "Html"],
  greetTheBrethren: () => `Hello oo, my name is ${user["full name"]}`,
};

const jsonUserString = JSON.stringify(user); // -> converts a js object into a string

console.log(jsonUserString);

const parsedJSValue = JSON.parse(jsonUserString); // -> converts a json string into a js object

const restaurants = {
  data: [
    {
      id: 1,
      attributes: {
        name: "Item 7 (Go) - Bodija",
        city: "Ibadan 1",
        slug: "item-7-(go)-ibadanibadanuqavh1",
        country: "nigeria",
        createdAt: "2025-03-18T13:15:55.637Z",
        updatedAt: "2025-03-18T13:16:13.852Z",
        publishedAt: "2025-03-18T13:16:13.846Z",
      },
    },
    {
      id: 2,
      attributes: {
        name: "Iya Meta",
        city: "Ibadan 1",
        slug: "iya-meta-ibadan",
        country: "nigeria",
        createdAt: "2025-03-18T13:46:15.706Z",
        updatedAt: "2025-03-18T15:48:54.027Z",
        publishedAt: "2025-03-18T13:46:19.392Z",
      },
    },
    {
      id: 3,
      attributes: {
        name: "Amoke Oge - Oguntolu",
        city: "Gbagada",
        slug: "amoke-oge-shomolu",
        country: "nigeria",
        createdAt: "2025-03-18T15:50:21.823Z",
        updatedAt: "2025-03-18T15:50:23.780Z",
        publishedAt: "2025-03-18T15:50:23.774Z",
      },
    },
    {
      id: 4,
      attributes: {
        name: "Mega Chicken - Ikeja",
        city: "Alausa",
        slug: "mega-chicken-ikeja",
        country: "nigeria",
        createdAt: "2025-03-18T15:50:54.123Z",
        updatedAt: "2025-03-18T15:50:55.682Z",
        publishedAt: "2025-03-18T15:50:55.674Z",
      },
    },
    {
      id: 5,
      attributes: {
        name: "IYA MORIA",
        city: "Unilag",
        slug: "iya-moria-university-of-lagos",
        country: "nigeria",
        createdAt: "2025-03-18T15:51:22.134Z",
        updatedAt: "2025-03-18T15:51:24.460Z",
        publishedAt: "2025-03-18T15:51:24.454Z",
      },
    },
    {
      id: 6,
      attributes: {
        name: "Red Pepper by FoodCourt",
        city: "VI",
        slug: "red-pepper-by-foodcourteti-osa3atgcr",
        country: "nigeria",
        createdAt: "2025-03-18T15:52:21.602Z",
        updatedAt: "2025-03-18T15:52:22.892Z",
        publishedAt: "2025-03-18T15:52:22.887Z",
      },
    },
    {
      id: 7,
      attributes: {
        name: "Cravings n More - Egbeda",
        city: "Alimosho 2",
        slug: "cravings-n-more",
        country: "nigeria",
        createdAt: "2025-03-18T15:52:49.416Z",
        updatedAt: "2025-03-18T15:52:50.929Z",
        publishedAt: "2025-03-18T15:52:50.919Z",
      },
    },
    {
      id: 8,
      attributes: {
        name: "King Glab Cuisine - Yaba",
        city: "Alagomeji",
        slug: "king-glab",
        country: "nigeria",
        createdAt: "2025-03-18T15:53:21.799Z",
        updatedAt: "2025-03-18T15:53:25.607Z",
        publishedAt: "2025-03-18T15:53:25.603Z",
      },
    },
    {
      id: 9,
      attributes: {
        name: "Chicken Republic - Ajose",
        city: "VI",
        slug: "chicken-republic-ajose-vi",
        country: "nigeria",
        createdAt: "2025-03-18T15:53:50.652Z",
        updatedAt: "2025-03-18T15:53:52.018Z",
        publishedAt: "2025-03-18T15:53:52.013Z",
      },
    },
    {
      id: 10,
      attributes: {
        name: "Meddys buka",
        city: "Alimosho 1",
        slug: "meddys-buka-egbedag7rt2a",
        country: "nigeria",
        createdAt: "2025-03-18T15:54:28.725Z",
        updatedAt: "2025-03-18T15:54:29.941Z",
        publishedAt: "2025-03-18T15:54:29.936Z",
      },
    },
    {
      id: 11,
      attributes: {
        name: "GRUBBERS",
        city: "Lekki Peninsula",
        slug: "grubbers-lekki-penninsula-iiyrqqv5",
        country: "nigeria",
        createdAt: "2025-03-18T15:55:12.751Z",
        updatedAt: "2025-03-18T15:55:15.036Z",
        publishedAt: "2025-03-18T15:55:15.029Z",
      },
    },
    {
      id: 12,
      attributes: {
        name: "The Place - Lekki",
        city: "Lekki Phase 1",
        slug: "the-place-eti-osa",
        country: "nigeria",
        createdAt: "2025-03-18T15:55:41.657Z",
        updatedAt: "2025-03-18T15:55:42.922Z",
        publishedAt: "2025-03-18T15:55:42.917Z",
      },
    },
    {
      id: 13,
      attributes: {
        name: "Amala Central Foods",
        city: "Garki",
        slug: "amala-central-foodscentral-business-dism6exee",
        country: "nigeria",
        createdAt: "2025-03-18T15:56:06.029Z",
        updatedAt: "2025-03-18T15:56:10.080Z",
        publishedAt: "2025-03-18T15:56:10.076Z",
      },
    },
    {
      id: 14,
      attributes: {
        name: "Jay's Diner",
        city: "Ikoyi",
        slug: "jays-diner",
        country: "nigeria",
        createdAt: "2025-03-18T15:56:43.084Z",
        updatedAt: "2025-03-18T15:56:45.486Z",
        publishedAt: "2025-03-18T15:56:45.482Z",
      },
    },
    {
      id: 15,
      attributes: {
        name: "HNH resturant - Ikeja",
        city: "Ikeja",
        slug: "hnh-resturantikejaf6jga9",
        country: "nigeria",
        createdAt: "2025-03-18T15:57:12.380Z",
        updatedAt: "2025-03-18T15:57:21.515Z",
        publishedAt: "2025-03-18T15:57:21.505Z",
      },
    },
    {
      id: 16,
      attributes: {
        name: "Ahmad's SHAWARMA - Gwarimpa",
        city: "Gwarimpa",
        slug: "ahmad's-shawarma-gwarinpa",
        country: "nigeria",
        createdAt: "2025-03-18T15:57:38.390Z",
        updatedAt: "2025-03-18T15:57:39.490Z",
        publishedAt: "2025-03-18T15:57:39.486Z",
      },
    },
    {
      id: 17,
      attributes: {
        name: "Glover Court Suya",
        city: "VI",
        slug: "glover-court-suya",
        country: "nigeria",
        createdAt: "2025-03-18T15:58:03.376Z",
        updatedAt: "2025-03-18T15:58:04.665Z",
        publishedAt: "2025-03-18T15:58:04.660Z",
      },
    },
    {
      id: 18,
      attributes: {
        name: "So Fresh - Ikoyi",
        city: "Ikoyi",
        slug: "so-fresh-lekkiikoyibtvury",
        country: "nigeria",
        createdAt: "2025-03-18T15:58:34.225Z",
        updatedAt: "2025-03-18T15:58:35.339Z",
        publishedAt: "2025-03-18T15:58:35.334Z",
      },
    },
    {
      id: 19,
      attributes: {
        name: "Labule - Ikorodu",
        city: "Ikorodu",
        slug: "labule-oguduikoroduhbtxhv",
        country: "nigeria",
        createdAt: "2025-03-18T15:58:57.683Z",
        updatedAt: "2025-03-18T15:58:59.166Z",
        publishedAt: "2025-03-18T15:58:59.161Z",
      },
    },
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 19,
    },
  },
};

console.log(JSON.stringify(restaurants));

console.dir(restaurants.data);
