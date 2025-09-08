<script setup>
import products from '@/script/products'
import FooterUser from './FooterUser.vue'
import HeaderUser from './HeaderUser.vue'
import { ref } from 'vue'

const picker = [
  {
    colors: [
      '#22c55e', // green
      '#ef4444', // red
      '#eab308', // yellow
      '#f97316', // orange
      '#06b6d4', // cyan
      '#3b82f6', // blue
      '#a855f7', // purple
      '#ec4899', // pink
      '#ffffff', // white
      '#000000', // black
    ],
    sizes: [
      'XX-Small',
      'X-Small',
      'Small',
      'Medium',
      'Large',
      'X-Large',
      'XX-Large',
      '3X-Large',
      '4X-Large',
    ],
  },
]

const selectedColor = ref(picker[0].colors[5])
const selectedSize = ref(picker[0].sizes[0])
</script>
<template>
  <HeaderUser></HeaderUser>
  <section class="breadcrumbs mx-16">
    <ul>
      <li>Home</li>
      <li>Casual</li>
    </ul>
  </section>
  <main class="mx-16 flex gap-6">
    <aside class="w-[295px] divide-y space-y-4 border border-gray-300 rounded-3xl p-4">
      <div class="flex sm:items-center lg:justify-between">
        <span class="text-2xl font-bold mb-4">Filters</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
          <g fill="none" stroke="#5b5555" stroke-linecap="round" stroke-width="1">
            <path d="M5 12V4m14 16v-3M5 20v-4m14-3V4m-7 3V4m0 16v-9" />
            <circle cx="5" cy="14" r="2" />
            <circle cx="12" cy="9" r="2" />
            <circle cx="19" cy="15" r="2" />
          </g>
        </svg>
      </div>
      <ul class="space-y-4">
        <li class="flex justify-between">
          T-shirts
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="#5b5555"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m10 17l5-5l-5-5"
            />
          </svg>
        </li>
        <li class="flex justify-between">
          Shorts
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="#5b5555"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m10 17l5-5l-5-5"
            />
          </svg>
        </li>
        <li class="flex justify-between">
          Shirts
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="#5b5555"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m10 17l5-5l-5-5"
            />
          </svg>
        </li>
        <li class="flex justify-between">
          Hoodie
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="#5b5555"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m10 17l5-5l-5-5"
            />
          </svg>
        </li>
        <li class="flex justify-between mb-4">
          Jeans
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="#5b5555"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m10 17l5-5l-5-5"
            />
          </svg>
        </li>
      </ul>
      <!-- price range -->
      <div>
        <div class="flex sm:items-center lg:justify-between">
          <span class="text-2xl font-bold">Price</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
            <path
              fill="#5b5555"
              d="m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
            />
          </svg>
        </div>
        <div class="w-64">
          <!-- Range container -->
          <div class="relative flex items-center mt-4">
            <!-- First slider -->
            <input
              id="minPrice"
              type="range"
              min="0"
              max="500"
              value="50"
              step="10"
              class="range range-sm absolute w-full pointer-events-none appearance-none bg-transparent"
            />

            <!-- Second slider -->
            <input
              id="maxPrice"
              type="range"
              min="0"
              max="500"
              value="200"
              step="10"
              class="range range-sm w-full appearance-none bg-transparent"
            />
          </div>

          <!-- Labels -->
          <div class="flex justify-between mt-2 text-sm font-medium mb-4">
            <span id="minPriceLabel">$50</span>
            <span id="maxPriceLabel">$200</span>
          </div>
        </div>
      </div>

      <!-- color picker -->
      <div>
        <div class="flex sm:items-center lg:justify-between mb-4">
          <span class="text-2xl font-bold">Colors</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
            <path
              fill="#5b5555"
              d="m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
            />
          </svg>
        </div>
        <div>
          <div class="grid grid-cols-5 gap-3 mb-4">
            <button
              v-for="color in picker[0].colors"
              :key="color"
              :style="{ background: color }"
              class="w-10 h-10 rounded-full border flex items-center justify-center transition-all"
              :class="selectedColor === color ? 'border-blue-600 scale-110' : ''"
              @click="selectedColor = color"
            >
              <span v-if="selectedColor === color" class="text-white text-sm font-bold">✓</span>
            </button>
          </div>
        </div>
      </div>
      <!-- size selector -->
      <div>
        <div class="flex sm:items-center lg:justify-between mb-4">
          <span class="text-2xl font-bold">Size</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
            <path
              fill="#5b5555"
              d="m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
            />
          </svg>
        </div>
        <div>
          <div class="grid grid-cols-2 gap-3 mb-4">
            <button
              class="btn rounded-full text-gray-500"
              v-for="size in picker[0].sizes"
              :key="size"
              :class="selectedSize === size ? 'bg-black text-white' : 'bg-gray-200'"
              @click="selectedSize = size"
            >
              {{ size }}
            </button>
          </div>
        </div>
      </div>
      <!-- Dress Style -->
      <div>
        <div class="flex sm:items-center lg:justify-between mb-4">
          <span class="text-2xl font-bold">Dress Style</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
            <path
              fill="#5b5555"
              d="m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
            />
          </svg>
        </div>
        <ul class="space-y-4 mb-4">
          <li class="flex justify-between">
            Casual
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="#5b5555"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m10 17l5-5l-5-5"
              />
            </svg>
          </li>
          <li class="flex justify-between">
            Formal
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="#5b5555"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m10 17l5-5l-5-5"
              />
            </svg>
          </li>
          <li class="flex justify-between">
            Party
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="#5b5555"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m10 17l5-5l-5-5"
              />
            </svg>
          </li>
          <li class="flex justify-between">
            Gym
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="#5b5555"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m10 17l5-5l-5-5"
              />
            </svg>
          </li>
        </ul>
        <button class="btn btn-neutral rounded-full py-6 px-20">Apply Filter</button>
      </div>
    </aside>

    <section class="flex-1">
      <div class="flex items-center justify-between mb-5">
        <h1 class="text-4xl">Casual</h1>
        <div>
          <span class="flex gap-2">
            Showing 1-10 of 100 Products Sort by:
            <span class="flex font-bold gap-1">
              Most Popular
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="#5b5555"
                  d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z"
                />
              </svg>
            </span>
          </span>
        </div>
      </div>

      <div class="flex flex-wrap gap-12 mb-4">
        <div class="cursor-pointer" v-for="product in products" :key="product.id">
          <img :src="product.image" :alt="product.name" />
          <p class="font-bold py-2">{{ product.name }}</p>
          <img :src="product.rating" alt="" />
          <p class="pt-2 font-bold text-2xl">{{ product.price }}</p>
        </div>
      </div>
      <div class="divider"></div>
      <div class="text-center">
        <div class="join">
          <button class="join-item btn">1</button>
          <button class="join-item btn">2</button>
          <button class="join-item btn btn-disabled">...</button>
          <button class="join-item btn">99</button>
          <button class="join-item btn">100</button>
        </div>
      </div>
    </section>
  </main>
  <FooterUser></FooterUser>
</template>
