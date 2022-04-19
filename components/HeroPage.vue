<template>
  <div>
    <div class="bg-primary-color">
      <div class="flex justify-around sm:justify-between items-center px-4 sm:px-24 py-4 sm:py-2" style="background-color: rgba(200,200,200,.1);">
        <div>
          <img src="~assets/icon/icon.png" alt="search Icon" class="w-6 cursor-pointer">
        </div>
        <div class="flex relative w-1/3 items-center border-1 rounded-full py-2" style="background-color: rgba(200,200,200,.1);">
          <div class="pl-4 pr-2">
            <img src="~assets/icon/search_icon.png" alt="search Icon" class="w-4">
          </div>
          <input type="text" placeholder="Try 'don jazzy'" class="focus:outline-none bg-transparent w-3/4 placeholder:italic placeholder:text-white text-white">
        </div>
        <div class="w-1/3">
          <div class="flex justify-around items-center">
            <div class="sm:hidden rounded-full bg-secondary-color cursor-pointer px-4 py-2">
              <div class="text-sm text-white">
                Signup
              </div>
            </div>
            <div class="text-white cursor-pointer">
              Login
            </div>
            <div class="hidden sm:block rounded-full bg-secondary-color cursor-pointer px-4 py-2">
              <div class="text-sm text-white">
                Create Account
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- This design only displays on sm and above screens -->
      <div class="hidden sm:flex justify-between items-center w-full h-screen ">
        <div class="px-12">
          <div class="font-bold text-2xl ">
            <div class="text-white">
              Unlock the most
            </div>
            <div class="text-transparent bg-clip-text bg-gradient-to-r from-linear-gradient to-linear-gradient-100">
              unforgettable moments
            </div>
            <div class="text-white">
              with your favourite stars.
            </div>
          </div>
          <div class="pt-2" />
          <div class="text-gray-100">
            Access thousands of celebrities and request a <br>
            personalized video message for any occasion.
          </div>
          <div class="pt-12" />
          <!-- <div class="rounded-md w-1/3 text-white cursor-pointer py-2 text-center bg-gradient-to-r from-secondary-color to-primary-color"> -->
          <div class="rounded-md w-1/3 text-white cursor-pointer py-2 text-center bg-gradient-to-r from-linear-gradient to-linear-gradient-100">
            <div> Book now </div>
          </div>
          <div class="pt-4" />
        </div>
        <div class="flex flex-1 justify-between">
          <div class="w-80 relative z-0">
            <div class="absolute left-6  z-2 h-96 w-56 rounded-lg border-dashed border-2 border-primary-color-200" />
            <div class="absolute top-4 z-3 h-96 w-56 rounded-2xl">
              <img src="~assets/image/clout.png" alt="Clout image" class="object-left-top h-full w-full rounded-2xl">
            </div>
            <div class="absolute bottom-8 left-40 z-4 text-white rounded-md border-solid border-2 border-primary-color-200">
              <div class="flex items-center px-4 py-2 bg-primary-color-100 rounded-md w-44">
                <div class="rounded-full h-12 w-12 bg-white flex justify-center items-center mr-4">
                  <img src="~assets/icon/party.png" alt="Lojay icon" class="w-6">
                </div>
                <div> Lojay </div>
              </div>
            </div>
          </div>
          <div class="w-40 text-right">
            <div class="h-96 w-full">
              <img src="~assets/image/clout_female.png" alt="Clout image" class="object-fit object-left-top h-full w-full rounded-l-2xl">
            </div>
          </div>
        </div>
      </div>
      <div class="sm:hidden w-full h-screen relative z-0">
        <div class="relative">
          <img src="~assets/image/clout.png" alt="image Full" class="h-full w-full rounded-t-2xl">
          <img src="~assets/image/bg_gradient.png" alt="image Full" class="h-full w-full rounded-t-2xl absolute bottom-0">
        </div>
        <div class="absolute bottom-28 px-8">
          <div class="">
            <div class="font-bold text-4xl leading-loose">
              <div class="text-white">
                Unlock the most
              </div>
              <div class="text-transparent bg-clip-text bg-gradient-to-r from-linear-gradient to-linear-gradient-100">
                unforgettable moments
              </div>
              <div class="text-white">
                with your favourite stars.
              </div>
            </div>
            <div class="pt-2" />
            <div class="text-xl text-gray-100">
              Access thousands of celebrities and request a <br>
              personalized video message for any occasion.
            </div>
            <div class="pt-12" />
            <!-- <div class="rounded-md w-1/3 text-white cursor-pointer py-2 text-center bg-gradient-to-r from-secondary-color to-primary-color"> -->
            <div class="text-xl rounded-md w-2/5 text-white cursor-pointer py-4 text-center bg-gradient-to-r from-linear-gradient to-linear-gradient-100">
              <div> Book now </div>
            </div>
            <div class="pt-4" />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white py-12">
      <div class="flex flex-col sm:flex-row sm:justify-between items-center w-full  py-16">
        <div class="px-8 sm:px-12">
          <div class="my-4 bg-gradient-to-r from-linear-gradient to-linear-gradient-100 w-24 sm:w-12 h-24 sm:h-12 rounded-2xl sm:p-3 flex justify-center items-center">
            <img src="~assets/icon/mic.png" alt="mic icon" class=" w-10 sm:h-6  h-10 sm:w-6">
          </div>
          <div class="font-bold text-5xl sm:text-2xl ">
            <div>
              Share
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-linear-gradient to-linear-gradient-100">
                Amaze-ing moments
              </span>
              with your favourite stars.
            </div>
          </div>
          <div class="pt-4 sm:pt-2" />
          <div class="text-xl">
            When it comes to your favourite artistes, they’re <br>
            always here to put a smile on your face
          </div>
          <div class="pb-12 sm:pb-0" />
        </div>
        <div class="hidden sm:flex justify-between overflow-x-auto">
          <div class="">
            <div class="w-80 bg-gray-100 pt-4 pl-4 pr-4 mb-4 rounded-2xl">
              <div class="flex justify-start items-center pb-4 ">
                <img src="~assets/image/small_wizkid.png" alt="image thumbnail" class="h-12 w-12 rounded-full">
              </div>
              <div class="relative">
                <img src="~assets/image/large_wizkid.png" alt="image Full" class="h-84 rounded-t-2xl">
                <img src="~assets/image/bg_gradient.png" alt="image Full" class="h-84 rounded-t-2xl absolute bottom-0">
              </div>
            </div>
            <div class="flex justify-between items-center px-4">
              <div class="flex  items-center">
                <img src="~assets/icon/lightening.png" alt="mic icon" class="h-4 w-4 pr-2">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-golden-color to-golden-color-200">
                  24 hour delivery
                </span>
              </div>
              <div class="rounded-md w-1/3 text-white cursor-pointer py-2 text-center bg-gradient-to-r from-linear-gradient to-linear-gradient-100">
                <div> Book now </div>
              </div>
            </div>
          </div>
          <div class="md:ml-8 md:mr-8">
            <div class="">
              <div class="w-80 bg-gray-100 pt-4 pl-4 pr-4 mb-4 rounded-2xl">
                <div class="flex justify-start items-center pb-4">
                  <img src="~assets/image/small_adesua.png" alt="image thumbnail" class="h-12 w-12 rounded-full">
                </div>
                <div class="relative">
                  <img src="~assets/image/large_adesua.png" alt="image Full" class="h-84 w-84 rounded-t-2xl">
                  <img src="~assets/image/bg_gradient.png" alt="image Full" class="h-84 w-84 rounded-t-2xl absolute bottom-0">
                </div>
              </div>
              <div class="flex justify-between items-center px-4">
                <div class="flex  items-center">
                  <img src="~assets/icon/lightening.png" alt="mic icon" class="h-4 w-4 pr-2">
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-golden-color to-golden-color-200">
                    24 hour delivery
                  </span>
                </div>
                <div class="rounded-md w-1/3 text-white cursor-pointer py-2 text-center bg-gradient-to-r from-linear-gradient to-linear-gradient-100">
                  <div> Book now </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sm:hidden px-8 flex overflow-x-auto">
          <div v-for="celeb in midCelebArr" :key="celeb.id" class="w-full flex-none mr-8">
            <div class="bg-gray-100 pt-4 pl-4 pr-4 mb-4 rounded-2xl">
              <div class="flex justify-start items-center pb-4 ">
                <img :src="celeb.small_img" alt="image thumbnail" class="h-12 w-12 rounded-full">
              </div>
              <div class="relative">
                <img :src="celeb.img" alt="image Full" class="h-2/4 rounded-t-2xl">
                <img src="~assets/image/bg_gradient.png" alt="image Full" class="h-full w-full rounded-t-2xl absolute bottom-0">
              </div>
            </div>
            <div class="flex justify-between items-center my-4">
              <div class="flex  items-center">
                <img src="~assets/icon/lightening.png" alt="lightening icon" class="h-4 w-4 pr-2">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-golden-color to-golden-color-200 text-3xl sm:text-xl">
                  24 hour delivery
                </span>
              </div>
              <div class="rounded-md w-2/4 text-white cursor-pointer py-4 text-center bg-gradient-to-r from-linear-gradient to-linear-gradient-100 text-2xl">
                <div> Book now </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ml-12 mt-24 sm:-mt-24 flex justify-between items-center">
        <div>
          <img src="~assets/image/line.png" alt="image thumbnail" class="h-36 hidden sm:block">
        </div>
        <div class="flex">
          <div class="hidden sm:block text-secondary-color mr-4">
            Scroll to navigate
          </div>
          <div class="sm:hidden text-secondary-color pr-4 text-2xl">
            Swipe right to navigate
          </div>
          <div class="h-12 w-12 sm:h-10 sm:w-10 rounded-full mr-4 bg-secondary-color flex justify-center items-center cursor-pointer">
            <img src="~assets/icon/scroll_icon.png" class="h-6 w-6 sm:h-4 sm:w-4">
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <div class="flex justify-between items-center px-12 my-12">
        <div class="py-4 text-5xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-linear-gradient to-linear-gradient-100">
          Categories
        </div>
        <div class="flex items-center">
          <div class="text-secondary-color text-2xl sm:text-lg">
            See All
          </div>
          <div class="flex ">
            <img src="~assets/icon/left_direction.png" class="h-8 w-8 sm:h-4 sm:w-4 mx-2">
            <img src="~assets/icon/right_direction.png" class="h-8 w-8 sm:h-4 sm:w-4">
          </div>
        </div>
      </div>
      <div class="pl-12 py-4 flex items-center overflow-x-auto">
        <div class="flex justify-around items-center border-solid border-2 border-secondary-color rounded-full px-4 py-2 font-medium text-secondary-color mr-4">
          <img src="~assets/icon/e1.png" class="h-4 w-4 mr-2">
          <div> New </div>
        </div>
        <div v-for="cat in catArr" :key="cat.id" class="flex justify-around items-center border-solid border-2 hover:border-secondary-color hover:text-secondary-color border-gray-300 rounded-full px-4 py-2 font-medium text-gray-300 mr-4 cursor-pointer">
          <img :src="cat.icon" class="h-4 w-4 mr-2">
          <div class="text-lg">
            {{ cat.title }}
          </div>
        </div>
      </div>
      <div class="flex items-center overflow-x-scroll  py-4 ml-12">
        <div v-for="celeb in celebCatArr" :key="celeb.id" class="mr-4 mb-4 w-72 flex-none">
          <div class="relative">
            <img :src="celeb.img" alt="image Full" class="h-72 w-full rounded-t-2xl">
            <img src="~assets/image/bg_gradient.png" alt="image Full" class="h-72 w-full rounded-t-2xl absolute bottom-0">
            <div class="absolute bottom-4 right-4 p-2 rounded-lg border-2 border-solid border-green-400 text-green-400 text-base z-5">
              ₦{{ celeb.price.toLocaleString() }}
            </div>
          </div>
          <div class="p-4 flex justify-between items-center bg-red-100 rounded-b-2xl">
            <div>
              <div class="font-semibold text-black whitespace-nowrap">
                {{ celeb.name }}
              </div>
              <div class="font-light text-base text-grey-200 whitespace-nowrap">
                {{ celeb.secondaryCategory }}
              </div>
            </div>
            <div class="flex  items-center rounded-full px-4 border-1 border-solid border-yellow-500 bg-yellow-100">
              <img src="~assets/icon/lightening.png" alt="mic icon" class="h-4 w-4 pr-2">
              <span class="text-yellow-600">
                24h
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center overflow-x-auto py-4 ml-12">
        <div v-for="celeb in celebCatArr" :key="celeb.id" class="mr-4 mb-4 w-72 flex-none">
          <div class="relative">
            <img :src="celeb.img" alt="image Full" class="h-72 w-full rounded-t-2xl">
            <img src="~assets/image/bg_gradient.png" alt="image Full" class="h-72 w-full rounded-t-2xl absolute bottom-0">
            <div class="absolute bottom-4 right-4 p-2 rounded-lg border-2 border-solid border-green-400 text-green-400 text-base z-5">
              ₦{{ celeb.price.toLocaleString() }}
            </div>
          </div>
          <div class="p-4 flex justify-between items-center bg-red-100 rounded-b-2xl">
            <div>
              <div class="font-semibold text-black whitespace-nowrap">
                {{ celeb.name }}
              </div>
              <div class="font-light text-base text-grey-200 whitespace-nowrap">
                {{ celeb.secondaryCategory }}
              </div>
            </div>
            <div class="flex  items-center rounded-full px-4 border-1 border-solid border-yellow-500 bg-yellow-100">
              <img src="~assets/icon/lightening.png" alt="mic icon" class="h-4 w-4 pr-2">
              <span class="text-yellow-600">
                24h
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center px-12 py-12">
        <div class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-linear-gradient to-linear-gradient-100">
          Actors
        </div>
      </div>
      <div class="flex items-center overflow-x-auto py-4 ml-12">
        <div v-for="celeb in celebCatArr" :key="celeb.id" class="mr-4 mb-4 w-72 flex-none">
          <div class="relative">
            <img :src="celeb.img" alt="image Full" class="h-72 w-full rounded-t-2xl">
            <img src="~assets/image/bg_gradient.png" alt="image Full" class="h-72 w-full rounded-t-2xl absolute bottom-0">
            <div class="absolute bottom-4 right-4 p-2 rounded-lg border-2 border-solid border-green-400 text-green-400 text-base z-5">
              ₦{{ celeb.price.toLocaleString() }}
            </div>
          </div>
          <div class="p-4 flex justify-between items-center bg-red-100 rounded-b-2xl">
            <div>
              <div class="font-semibold text-black whitespace-nowrap">
                {{ celeb.name }}
              </div>
              <div class="font-light text-base text-grey-200 whitespace-nowrap">
                {{ celeb.secondaryCategory }}
              </div>
            </div>
            <div class="flex  items-center rounded-full px-4 border-1 border-solid border-yellow-500 bg-yellow-100">
              <img src="~assets/icon/lightening.png" alt="mic icon" class="h-4 w-4 pr-2">
              <span class="text-yellow-600">
                24h
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-primary-color w-full px-4 py-4 flex flex-col sm:flex-row justify-between items-start text-white">
      <div class="py-4 sm:py-0">
        <div>
          <img src="~assets/image/amaze_logo.png" alt="amaze_logo" class="w-2/4 sm:w-3/4">
        </div>
        <div>
          Copyright 2022
        </div>
      </div>
      <div class="py-4 sm:py-0">
        <div class="text-secondary-color text-lg sm:text-base">
          Support
        </div>
        <ul class="cursor-pointer text-2xl sm:text-lg leading-loose">
          <li> FAQ  </li>
          <li> Contact Us  </li>
          <li> Terms & Condition  </li>
          <li> Privacy Policy  </li>
        </ul>
      </div>
      <div class="py-4 sm:py-0">
        <div class="text-secondary-color text-lg sm:text-base">
          Amaze for Talents
        </div>
        <ul class="cursor-pointer text-2xl sm:text-lg leading-loose">
          <li> Enroll As Talent  </li>
        </ul>
      </div>
      <div class="py-4 sm:py-0 w-full sm:w-2/5">
        <div class="flex justify-between">
          <div>
            <img src="~assets/image/googlestore.png" alt="google playstore" class="w-full">
          </div>
          <div>
            <img src="~assets/image/applestore.png" alt="apple store" class="w-full">
          </div>
        </div>
        <div class="flex justify-between items-center pt-4 text-lg sm:text-sm">
          <div class="cursor-pointer">
            FB
          </div>
          <div class="cursor-pointer">
            TW
          </div>
          <div class="cursor-pointer">
            IG
          </div>
          <div class="cursor-pointer">
            YT
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroPage',
  data () {
    return {
      catArr: [
        { id: 0, icon: require('../assets/icon/e2.png'), title: 'Actors' },
        { id: 1, icon: require('../assets/icon/e3.png'), title: 'Musicians' },
        { id: 1, icon: require('../assets/icon/e4.png'), title: 'Comedians' },
        { id: 1, icon: require('../assets/icon/e5.png'), title: 'Dancers' },
        { id: 1, icon: require('../assets/icon/e6.png'), title: 'Punist' },
        { id: 1, icon: require('../assets/icon/e7.png'), title: 'Guitarist' },
        { id: 1, icon: require('../assets/icon/e8.png'), title: 'Clowns' }
      ],
      celebCatArr: [
        { id: 0, img: require('../assets/image/c1.png'), name: 'Busola Ayeni', secondaryCategory: 'Singer, Actress', price: 100000 },
        { id: 1, img: require('../assets/image/c2.png'), name: 'Dodos Uvieghara', secondaryCategory: 'Lifestyle, Youtube', price: 100000 },
        { id: 2, img: require('../assets/image/c3.png'), name: 'Dinma Umeh', secondaryCategory: 'Youtuber ', price: 130000 },
        { id: 3, img: require('../assets/image/c4.png'), name: 'Joshua Boyega', secondaryCategory: 'Actor', price: 100000 }
      ],
      midCelebArr: [
        { id: 0, img: require('../assets/image/large_wizkid.png'), small_img: require('../assets/image/small_wizkid.png') },
        { id: 1, img: require('../assets/image/large_adesua.png'), small_img: require('../assets/image/small_adesua.png') }
        // { id: 2, img: require('../assets/image/large_adesua.png'), small_img: require('../assets/image/small_adesua.png') }
      ]
    }
  }
}
</script>

<style>
  ::-webkit-scrollbar {
      display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .wiz_adesua {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
</style>
