// Preview for "kurti collection" (facebook.com/profile.php?id=61574246213582)
// Product names and prices are SAMPLE values until the seller confirms real ones.

export const store = {
  name: "কুর্তি কালেকশন",
  nameLatin: "Kurti Collection",
  tagline: "জামার লেইস, গজ কাপড়, ওড়না আর নিজস্ব টেইলরের বানানো ড্রেস — এক জায়গায়।",
  about:
    "নারায়ণগঞ্জের সীমান্ত টাওয়ারে আমাদের দোকান। সিঙ্গেল কামিজ, কো-অর্ড সেট, শর্ট ফ্রক — সব আমাদের দক্ষ টেইলরের হাতে তৈরি। অনলাইনে অর্ডার করলে সারা দেশে ডেলিভারি।",

  previewNote: "এটি একটি ডেমো। পণ্যের নাম ও দাম নমুনা — আপনার আসল তথ্য বসিয়ে দেওয়া হবে।",

  whatsapp: "8801916802520",
  messengerUsername: "61574246213582",
  facebookUrl: "https://www.facebook.com/profile.php?id=61574246213582",
  phoneDisplay: "০১৯১৬-৮০২৫২০",
  address: "সীমান্ত টাওয়ার, লেভেল ৩, শপ ৩০০১, জালকুড়ি, নারায়ণগঞ্জ",
  hours: "দোকান খোলা থাকে প্রতিদিন",

  delivery: [
    { id: "ng", label: "নারায়ণগঞ্জ ও ঢাকা", fee: 70, time: "১–২ দিন" },
    { id: "bd", label: "সারা দেশে", fee: 130, time: "৩–৫ দিন" },
  ],
  payment: ["ক্যাশ অন ডেলিভারি", "বিকাশ", "নগদ"],

  lang: "bn",
  builtBy: "Kazi Marzuk",
  builtByUrl: "https://wa.me/8801891966267",

  categories: [
    { id: "lace", label: "লেইস" },
    { id: "dress", label: "রেডি ড্রেস" },
  ],

  products: [
    {
      id: "l1",
      name: "লেইস ডিজাইন ১ (প্রতি গজ)",
      category: "lace",
      price: 180,
      image: "photos/l1.jpg",
      description: "কামিজ, ওড়না বা নাইটওয়্যারের জন্য। যত গজ লাগবে পরিমাণে লিখুন।",
      tag: "নতুন",
    },
    {
      id: "l2",
      name: "লেইস ডিজাইন ২ (প্রতি গজ)",
      category: "lace",
      price: 150,
      image: "photos/l2.jpg",
      description: "জামার গলা, হাতা আর পাড়ে বসানোর জন্য।",
    },
    {
      id: "l3",
      name: "লেইস ডিজাইন ৩ (প্রতি গজ)",
      category: "lace",
      price: 160,
      image: "photos/l3.jpg",
      description: "নাইটওয়্যার আর হালকা জামার সাথে মানানসই।",
    },
    {
      id: "l4",
      name: "কটন চিকনকারি লেইস (প্রতি গজ)",
      category: "lace",
      price: 220,
      image: "photos/l4.jpg",
      description: "সুতি কাপড়ে চিকনকারি কাজ। গরমে আরামদায়ক।",
      tag: "জনপ্রিয়",
    },
    {
      id: "l5",
      name: "লেইস ডিজাইন ৫ (প্রতি গজ)",
      category: "lace",
      price: 140,
      image: "photos/l5.jpg",
      description: "কামিজ আর ওড়নার পাড়ের জন্য।",
    },
    {
      id: "d1",
      name: "সিঙ্গেল কামিজ (টেইলর মেড)",
      category: "dress",
      price: 1250,
      color: "#7A3B5C",
      sizes: ["M", "L", "XL", "XXL"],
      description: "আমাদের নিজস্ব টেইলরের বানানো। ছবি দিলে আপনার পছন্দের লেইস দিয়ে বানিয়ে দেওয়া হয়।",
    },
    {
      id: "d2",
      name: "কো-অর্ড সেট",
      category: "dress",
      price: 1650,
      color: "#2E5E6B",
      sizes: ["M", "L", "XL"],
      description: "টপ আর প্যান্ট একসাথে। প্রতিদিন পরার জন্য আরামদায়ক।",
    },
  ],
};
