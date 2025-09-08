<script setup>
import FooterUser from './FooterUser.vue'
import HeaderUser from './HeaderUser.vue'
</script>

<template>
  <HeaderUser />
  <!--  -->
  <main class="mx-16">
    <div class="breadcrumbs text-sm">
      <ul>
        <li><a>Home</a></li>
        <li><a>Shop</a></li>
        <li><a href="">Men</a></li>
        <li><a href="">T-shirts</a></li>
      </ul>
    </div>
    <!--  -->
    <section class="flex my-12">
      <div class="space-y-3">
        <img class="rounded-3xl" src="/images/one-life-t-shirt-1.png" alt="" />
        <img src="/images/one-life-t-shirt-2.png" alt="" />
        <img src="/images/one-life-t-shirt-3.png" alt="" />
      </div>
      <div class="ml-4"><img src="/src/assests/one-life-t-shirt-4.png" alt="" /></div>

      <div class="space-y-3 ml-12">
        <h1 class="text-4xl font-extrabold">ONE LIFE GRAPHIC T-SHIRT</h1>
        <img src="/images/rating.png" alt="" />
        <div class="space-x-4 items-center">
          <span class="font-bold text-3xl"> $260 </span>
          <span class="line-through text-3xl text-gray-400"> $300 </span>
          <span class="text-2xl text-red-500 bg-red-100 rounded-full py-2 px-4"> -40% </span>
        </div>
        <p>
          This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable
          fabric, it offers superior comfort and style.
        </p>
        <hr class="text-gray-300" />
        <p>Select Colors</p>
        <div class="flex gap-4">
          <div class="bg-yellow-900 rounded-full p-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
              <path
                fill="#fff"
                fill-rule="evenodd"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                d="m4 24l5-5l10 10L39 9l5 5l-25 25z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="bg-green-900 rounded-full w-[56px]"></div>
          <div class="bg-blue-950 rounded-full w-[56px]"></div>
        </div>
        <hr class="text-gray-300" />
        <p>Choose Size</p>
        <div class="space-x-4">
          <button class="btn rounded-3xl p-6">Small</button>
          <button class="btn rounded-3xl p-6">Medium</button>
          <button class="btn rounded-3xl p-6 bg-black text-white">Large</button>
          <button class="btn rounded-3xl p-6">X-Large</button>
        </div>
        <hr class="text-gray-300" />
        <div class="flex gap-6">
          <div class="btn items-center gap-12 bg-gray-100 rounded-full py-2 w-fit">
            <span class="text-xl text-gray-700">−</span>
            <span class="text-lg text-gray-900 select-none">1</span>
            <span class="text-xl text-gray-700">+</span>
          </div>
          <button class="btn bg-black text-white rounded-3xl flex-1">Add to Cart</button>
        </div>
      </div>
    </section>

    <section class="mb-2 flex">
      <a
        href="#"
        class="pb-4 text-center flex-1/12 border-b-2 border-gray-400 hover:border-black focus:border-black"
        >Product Details</a
      >
      <a
        href="#"
        class="text-center flex-1 border-b-2 border-gray-400 hover:border-black focus:border-black"
        >Rating & Reviews</a
      >
      <a
        href="#"
        class="text-center flex-1 border-b-2 border-gray-400 hover:border-black focus:border-black"
        >FAQs</a
      >
    </section>

    <section class="my-10 flex justify-between">
      <div>
        <span class="font-bold text-3xl">All Reviews</span>
        <span class="text-gray-500"> (451)</span>
      </div>
      <!--  -->
      <div class="space-x-4">
        <div class="btn rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" stroke="#000" stroke-linecap="round" stroke-width="1">
              <path d="M5 12V4m14 16v-3M5 20v-4m14-3V4m-7 3V4m0 16v-9" />
              <circle cx="5" cy="14" r="2" />
              <circle cx="12" cy="9" r="2" />
              <circle cx="19" cy="15" r="2" />
            </g>
          </svg>
        </div>
        <!--  -->
        <button class="btn rounded-3xl gap-4">
          Latest
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 1024 1024">
            <path
              fill="#000"
              d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z"
            />
          </svg>
        </button>
        <button class="btn btn-neutral rounded-3xl">Write a Review</button>
        <!--  -->
      </div>
      <!--  -->
    </section>
    <!-- Review by users -->
    <section class="grid grid-cols-2 gap-4">
      <div class="rounded-3xl border border-gray-300 p-6">
        <img class="" src="/images/star.png" alt="" />
        <p class="flex items-center text-2xl font-bold my-2">
          Samantha D.<svg
            class="bg-green-600 rounded-full ml-1"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 48 48"
          >
            <path
              fill="white"
              fill-rule="evenodd"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M4 24L9 19L19 29L39 9L44 14L19 39L4 24Z"
              clip-rule="evenodd"
            />
          </svg>
        </p>
        <p class="mb-10">
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.
          As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to
          shirt."
        </p>
        <p>Posted on August 14, 2023</p>
      </div>
      <!--  -->
      <div class="rounded-3xl border border-gray-300 p-6">
        <img class="" src="/images/star.png" alt="" />
        <p class="flex items-center text-2xl font-bold my-2">
          Samantha D.<svg
            class="bg-green-600 rounded-full ml-1"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 48 48"
          >
            <path
              fill="white"
              fill-rule="evenodd"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M4 24L9 19L19 29L39 9L44 14L19 39L4 24Z"
              clip-rule="evenodd"
            />
          </svg>
        </p>
        <p class="mb-10">
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.
          As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to
          shirt."
        </p>
        <p>Posted on August 14, 2023</p>
      </div>
      <!--  -->
      <div class="rounded-3xl border border-gray-300 p-6">
        <img class="" src="/images/star.png" alt="" />
        <p class="flex items-center text-2xl font-bold my-2">
          Samantha D.<svg
            class="bg-green-600 rounded-full ml-1"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 48 48"
          >
            <path
              fill="white"
              fill-rule="evenodd"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M4 24L9 19L19 29L39 9L44 14L19 39L4 24Z"
              clip-rule="evenodd"
            />
          </svg>
        </p>
        <p class="mb-10">
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.
          As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to
          shirt."
        </p>
        <p>Posted on August 14, 2023</p>
      </div>
      <!--  -->
      <div class="rounded-3xl border border-gray-300 p-6">
        <img class="" src="/images/star.png" alt="" />
        <p class="flex items-center text-2xl font-bold my-2">
          Samantha D.<svg
            class="bg-green-600 rounded-full ml-1"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 48 48"
          >
            <path
              fill="white"
              fill-rule="evenodd"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M4 24L9 19L19 29L39 9L44 14L19 39L4 24Z"
              clip-rule="evenodd"
            />
          </svg>
        </p>
        <p class="mb-10">
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.
          As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to
          shirt."
        </p>
        <p>Posted on August 14, 2023</p>
      </div>
      <!--  -->
      <div class="rounded-3xl border border-gray-300 p-6">
        <img class="" src="/images/star.png" alt="" />
        <p class="flex items-center text-2xl font-bold my-2">
          Samantha D.<svg
            class="bg-green-600 rounded-full ml-1"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 48 48"
          >
            <path
              fill="white"
              fill-rule="evenodd"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M4 24L9 19L19 29L39 9L44 14L19 39L4 24Z"
              clip-rule="evenodd"
            />
          </svg>
        </p>
        <p class="mb-10">
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.
          As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to
          shirt."
        </p>
        <p>Posted on August 14, 2023</p>
      </div>
      <!--  -->
      <div class="rounded-3xl border border-gray-300 p-6">
        <img class="" src="/images/star.png" alt="" />
        <p class="flex items-center text-2xl font-bold my-2">
          Samantha D.<svg
            class="bg-green-600 rounded-full ml-1"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 48 48"
          >
            <path
              fill="white"
              fill-rule="evenodd"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M4 24L9 19L19 29L39 9L44 14L19 39L4 24Z"
              clip-rule="evenodd"
            />
          </svg>
        </p>
        <p class="mb-10">
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.
          As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to
          shirt."
        </p>
        <p>Posted on August 14, 2023</p>
      </div>
      <!--  -->
    </section>
    <div class="text-center my-12">
      <button class="btn rounded-3xl px-12">Load More Reviews</button>
    </div>
    <!-- recommend products section -->
    <h1 class="text-6xl text-center font-bold">YOU MIGHT ALSO LIKE</h1>
    <section class="my-14 flex flex-wrap justify-between">
      <a href="">
        <img src="/src/assests/polo.png" alt="" />
        <p class="font-bold py-2">T-shirt with Tape Details</p>
        <img src="/images/rating.png" alt="" />
        <p class="pt-2 font-bold text-2xl flex items-center">
          $212
          <span class="text-gray-400 line-through px-2">$232 </span>
          <span class="px-3 py-1 text-[14px] text-red-600 bg-red-100 rounded-full">-20%</span>
        </p>
      </a>
      <!--  -->
      <a href="">
        <img src="/src/assests/gradient.png" alt="" />
        <p class="font-bold py-2">T-shirt with Tape Details</p>
        <img src="/images/rating.png" alt="" />
        <p class="pt-2 font-bold text-2xl flex items-center">
          $212
          <span class="text-gray-400 line-through px-2">$232 </span>
          <span class="px-3 py-1 text-[14px] text-red-600 bg-red-100 rounded-full">-20%</span>
        </p>
      </a>
      <!--  -->
      <a href="">
        <img src="/src/assests/polo-2.png" alt="" />
        <p class="font-bold py-2">T-shirt with Tape Details</p>
        <img src="/images/rating.png" alt="" />
        <p class="pt-2 font-bold text-2xl flex items-center">
          $212
          <span class="text-gray-400 line-through px-2">$232 </span>
          <span class="px-3 py-1 text-[14px] text-red-600 bg-red-100 rounded-full">-20%</span>
        </p>
      </a>
      <!--  -->
      <a href="">
        <img src="/src/assests/black-striped.png" alt="" />
        <p class="font-bold py-2">T-shirt with Tape Details</p>
        <img src="/images/rating.png" alt="" />
        <p class="pt-2 font-bold text-2xl flex items-center">
          $212
          <span class="text-gray-400 line-through px-2">$232 </span>
          <span class="px-3 py-1 text-[14px] text-red-600 bg-red-100 rounded-full">-20%</span>
        </p>
      </a>
    </section>
  </main>

  <FooterUser></FooterUser>
</template>
