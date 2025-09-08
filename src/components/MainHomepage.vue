<script setup>
import FooterUser from './FooterUser.vue'
import HeaderUser from './HeaderUser.vue'
</script>

<template>
  <HeaderUser />
  <!--  -->
  <section class="max-w-full">
    <div class="h-[683px] pl-16 pt-28 bg-[url(/images/model-img.png)] bg-cover bg-no-repeat">
      <h1 class="w-[600px] font-extrabold text-6xl">FIND CLOTHES THAT MATCHES YOUR STLYE</h1>
      <p class="w-[600px] mt-4">
        Browse through our diverse range of meticulously crafted garments, designed to bring out
        your individuality and cater to your sense of style.
      </p>
      <router-link to="category"
        ><button class="btn btn-neutral text-[16px] mt-6 px-16 py-6 rounded-full">
          Shop now
        </button></router-link
      >
      <div class="flex gap-10 divide-x-2 mt-12">
        <div class="pr-2">
          <strong class="text-5xl">200+</strong>
          <p>International Brands</p>
        </div>
        <div class="px-2">
          <strong class="text-5xl"> 2,000+ </strong>
          <p>High-Quality Products</p>
        </div>
        <div class="px-2">
          <strong class="text-5xl"> 30,000+ </strong>
          <p>Happy Customers</p>
        </div>
      </div>
    </div>
  </section>

  <section class="container max-w-full flex gap-32 bg-black py-[50px] justify-center">
    <div><img src="/images/versace.png" alt="" /></div>
    <div><img src="/images/zara-logo.png" alt="" /></div>
    <div><img src="/images/gucci-logo.png" alt="" /></div>
    <div><img src="/images/prada-logo.png" alt="" /></div>
    <div><img src="/images/calvin.png" alt="" /></div>
  </section>

  <!-- New Arrivals -->
  <section class="max-w-full my-16 mx-16">
    <strong class="block text-center font-extrabold text-5xl mb-12">NEW ARRIVALS</strong>
    <div class="grid xl:grid-cols-4 md:grid-cols-3 justify-items-center">
      <a href="">
        <img src="/images/black-t-shirt.png" alt="" />
        <p class="font-bold py-2">T-shirt with Tape Details</p>
        <img src="/images/rating.png" alt="" />
        <p class="pt-2 font-bold text-2xl">$120</p>
      </a>

      <a href="">
        <img src="/images/jean.png" alt="" />
        <p class="font-bold py-2">Skinny Fit Jeans</p>
        <img src="/images/rating.png" alt="" />
        <p class="pt-2 font-bold text-2xl flex items-center">
          $240 <span class="text-gray-400 line-through px-2">$260 </span>
          <span class="px-3 py-1 text-[14px] text-red-600 bg-red-100 rounded-full">-20%</span>
        </p>
      </a>

      <a href="">
        <img src="/images/shirt-2.png" alt="" />
        <p class="font-bold py-2">Checkered Shirt</p>
        <img src="/images/rating.png" alt="" />
        <p class="pt-2 font-bold text-2xl">$180</p>
      </a>

      <a href="">
        <img src="/images/sleeve-shirt.png" alt="" />
        <p class="font-bold py-2">Sleeve Stripped T-shirt</p>
        <img src="/images/rating.png" alt="" />
        <p class="pt-2 font-bold text-2xl flex items-center">
          $130 <span class="text-gray-400 line-through px-2">$160</span>
          <span class="px-3 py-1 text-[14px] text-red-600 bg-red-100 rounded-full">-30%</span>
        </p>
      </a>
    </div>
    <div class="mt-8 text-center">
      <a href="#" class="btn px-16 rounded-full bg-white">View All</a>
    </div>
  </section>
  <hr class="border-gray-300 my-4 mx-16" />

  <!-- Top Selling -->
  <section class="mt-20 mx-16">
    <strong class="block text-center font-extrabold text-5xl mb-12">TOP SELLING</strong>
    <div class="grid xl:grid-cols-4 md:grid-cols-3 justify-items-center">
      <a href="">
        <img src="/images/black-t-shirt.png" alt="" />
        <p class="font-bold py-2">T-shirt with Tape Details</p>
        <img src="/images/rating.png" alt="" />
        <p class="pt-2 font-bold text-2xl flex items-center">
          $212
          <span class="text-gray-400 line-through px-2">$232 </span>
          <span class="px-3 py-1 text-[14px] text-red-600 bg-red-100 rounded-full">-20%</span>
        </p>
      </a>

      <a href="">
        <img src="/images/jean.png" alt="" />
        <p class="font-bold py-2">Skinny Fit Jeans</p>
        <img src="/images/rating.png" alt="" />
        <p class="pt-2 font-bold text-2xl flex items-center">$145</p>
      </a>

      <a href="">
        <img src="/images/shirt-2.png" alt="" />
        <p class="font-bold py-2">Checkered Shirt</p>
        <img src="/images/rating.png" alt="" />
        <p class="pt-2 font-bold text-2xl">$180</p>
      </a>

      <a href="">
        <img src="/images/sleeve-shirt.png" alt="" />
        <p class="font-bold py-2">Sleeve Stripped T-shirt</p>
        <img src="/images/rating.png" alt="" />
        <p class="pt-2 font-bold text-2xl">$130</p>
      </a>
    </div>
    <div class="my-8 text-center">
      <a href="#" class="btn px-16 rounded-full bg-white">View All</a>
    </div>
  </section>

  <section class="my-16 pb-20 mx-16 bg-gray-300 rounded-3xl">
    <div class="text-5xl py-20 font-extrabold text-center">BROWSE BY DRESS STYLE</div>
    <div class="flex flex-wrap justify-center gap-5">
      <a href="" class="w-[500px] relative transition hover:scale-96">
        <img class="w-full object-cover rounded-3xl" src="/images/casual.png" alt="" />
        <p class="absolute top-10 left-10 z-10 text-5xl font-bold">Casual</p>
      </a>
      <a href="" class="w-[700px] relative transition hover:scale-96">
        <img class="w-full h-[355px] object-cover rounded-3xl" src="/images/formal.png" alt="" />
        <p class="absolute top-10 left-10 z-10 text-5xl font-bold">Formal</p>
      </a>
      <a href="" class="w-[800px] relative transition hover:scale-96">
        <img class="w-full h-[300px] object-cover rounded-3xl" src="/images/party.png" alt="" />
        <p class="absolute top-10 left-10 z-10 text-5xl font-bold">Party</p>
      </a>
      <a href="" class="w-[400px] relative transition hover:scale-96">
        <img class="w-full h-[300px] object-cover rounded-3xl" src="/images/gym.png" alt="" />
        <p class="absolute top-10 left-5 z-10 text-5xl font-bold">Gym</p>
      </a>
    </div>
  </section>

  <section class="mx-16">
    <h1 class="font-extrabold text-5xl">OUR HAPPY CUSTOMERS</h1>
    <div class="grid grid-cols-3 gap-6">
      <div class="my-4 p-4 rounded-3xl border border-gray-400">
        <img src="/images/star.png" alt="" />
        <h1 class="py-4 flex items-center font-bold">
          Sarah M.
          <svg
            class="bg-green-600 rounded-full ml-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
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
        </h1>
        <p>
          "I'm blown away by the quality and style of the clothes I received from Shop.co. From
          casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
        </p>
      </div>
      <div class="my-4 p-4 rounded-3xl border border-gray-400">
        <img src="/images/star.png" alt="" />
        <h1 class="py-4 flex items-center font-bold">
          Alex K.
          <svg
            class="bg-green-600 rounded-full ml-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
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
        </h1>
        <p>
          "Finding clothes that align with my personal style used to be a challenge until I
          discovered Shop.co. The range of options they offer is truly remarkable, catering to a
          variety of tastes and occasions.”
        </p>
      </div>
      <div class="my-4 p-4 rounded-3xl border border-gray-400">
        <img src="/images/star.png" alt="" />
        <h1 class="py-4 flex items-center font-bold">
          James L.
          <svg
            class="bg-green-600 rounded-full ml-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
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
        </h1>
        <p>
          "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have
          stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with
          the latest trends.”
        </p>
      </div>
    </div>
  </section>
  <FooterUser />
</template>

<style scoped></style>
