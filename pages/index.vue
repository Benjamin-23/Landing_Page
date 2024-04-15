<script setup lang="ts">
import { useCartStore } from '~/store/cartStore';

const categories = ref(["All", "Latest", "Best-Selling", "Top-Rated"])
const activeCategories = ref(0)

const cartStore: any = useCartStore()
const isScrolled = ref(false)

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
// handle scroll  
// to change nav color

function handleScroll() {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 0
    isScrolled.value = scrollPosition > scrollThreshold
}
const showCartScreen = ref(false)
const productQty = ref(1)
const showCategoryScreen = false
const paymentByMpesa = ref(false)
</script>

<template>
    <div class=" w-full overflow-x-hidden">
        <div id="home" class="px-12 py-6 max-md:py-4" :class="{ 'px-0 ': isScrolled }">
            <!-- navigation  -->

            <div class="w-full flex justify-between items-center  max-md:gap-6 "
                :class="{ 'bg-indigo-50 w-full z-20 fixed top-0 left-0  px-12 py-6': isScrolled }">
                <div class=" flex gap-4 max-md:hidden " :class="{ 'text-indigo-500 ': isScrolled }">
                    <NuxtLink to="#home" class=" active:border-b-2 border-indigo-500 hover:border-b-2"
                        :class="{ 'border-orange-500 hover:border-b-2': isScrolled || showCartScreen === true }">Home
                    </NuxtLink>
                    <CategoryList v-if="showCategoryScreen" />
                    <NuxtLink to="#products" class=" active:border-b-2 border-indigo-500 hover:border-b-2"
                        :class="{ 'border-orange-500 hover:border-b-2': isScrolled }">Products
                    </NuxtLink>
                    <NuxtLink to="#features" class=" active:border-b-2 border-indigo-500 hover:border-b-2"
                        :class="{ 'border-orange-500 hover:border-b-2': isScrolled }">Features
                    </NuxtLink>
                    <NuxtLink to="#blogs" class=" active:border-b-2 border-indigo-500 hover:border-b-2"
                        :class="{ 'border-orange-500 hover:border-b-2': isScrolled }">Blogs</NuxtLink>
                </div>
                <!-- mobile responsive  -->
                <div class="md:hidden">
                    <MobileMenuLink />
                </div>
                <div class="">
                    <img src="~assets/images/logo.svg" class="max-md:w-32" alt="loading">
                </div>

                <div class="flex gap-6 items-center">
                    <div
                        class="flex border-y-[1px] border-gray-500 rounded-md w-full px-4 py-1 items-center gap-2 max-md:hidden ">
                        <img src="~/assets/images/searchicon.svg" alt="loading" class=" w-6">
                        <input type="text" class=" outline-none w-full bg-transparent"
                            placeholder="Search for products">
                    </div>
                    <div class="flex " @click="showCartScreen = true && cartStore.cartItems.length">
                        <img src="~assets/images/carticon.svg" alt="" class=" z-10">
                        <div class=" -ml-2 -mt-2">
                            <div
                                class=" w-6 h-6  bg-[#730C99] rounded-[50%] flex items-center justify-center text-white ">
                                {{ cartStore.cartItems.length }}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <!-- home, hero part -->

        </div>
        <div class="  h-[87vh] flex  items-center max-md:h-fit max-md:pb-6 max-md:items-start">
            <div class="flex w-full gap-4 max-md:flex-col max-md:gap-0">
                <div class="flex w-[50%]  justify-center items-center gap-4 max-md:w-full">
                    <div class="flex flex-col w-[80%] gap-4">
                        <p class=" text-6xl font-bold">A Clothing
                            Brand Collection</p>
                        <p class=" text-3xl font-light">
                            Better way to start shopping
                        </p>
                        <p class=" text-md">
                            Make the new experience of shopping, get the high quality product from our favorite shop.
                        </p>
                        <div class=" bg-indigo-500 px-4 text-white text-center py-2 w-[50%] rounded-md">
                            <button>Shop now</button>
                        </div>
                    </div>


                </div>
                <!-- image aside -->
                <div
                    class=" h-[87vh] max-md:h-0   relative w-[50%] flex justify-center items-center max-md:w-full max-md:-z-20 max-md:opacity-10">
                    <img src="~assets/images/heros.svg" class=" z-10 max-md:w-80" alt="">
                    <div class="absolute bottom-0 right-0 ">
                        <img src="~assets/images/bckcolor.svg" class=" w-96 " alt="">
                    </div>

                </div>
            </div>

        </div>
        <div id="products" class="px-12 py-4 flex  flex-col ">
            <div class="">
                <p class=" border-b-4 border-orange-600 text-2xl w-fit">Our Collections</p>
            </div>
            <div class=" pt-8">
                <ProductList />
            </div>

        </div>
        <div class=" bg-[#E9E9E950] py-12 px-12 mt-4 max-md:px-4">
            <div id="features" class="flex flex-col  gap-6  w-full">
                <div class="w-full">
                    <p class=" text-2xl font-bold text-center">FEATURED CATEGORIES</p>
                </div>
                <div class="flex gap-6 text-sm font-medium  items-center justify-center">
                    <p class=" cursor-pointer" v-for="(list, index) in categories" :key="index"
                        :class="{ 'border-b-2 border-indigo-500': activeCategories == index }"
                        @click="activeCategories = index">
                        {{ list }}</p>
                </div>
                <div class="flex">
                    <FeaturedCategories />
                </div>
            </div>
            <!-- blogs -->
            <div id="blogs" class="">
                <Blogs />
            </div>

            <div class=" flex gap-4 max-md:flex-col">

                <div class=" flex justify-center py-8 bg-white rounded-xl w-1/2  max-md:w-full">
                    <img src="~/assets/images/map.svg" alt="loading">
                </div>
                <!-- submit message -->
                <div class="w-1/2 rounded-2xl bg-white py-8 px-6 max-md:w-full">
                    <p class=" text-center mb-4 font-semibold text-xl text-gray-900">Get In Touch</p>
                    <div class="flex flex-col gap-6">
                        <div class="flex gap-4 text-gray-800 w-fit">
                            <!-- first name  -->
                            <div class="flex flex-col gap-4 ">
                                <label for="">First Name</label>
                                <input type="text" placeholder="Joe"
                                    class=" w-[100%] border-b-[1px] px-2 bg-transparent rounded-md border-gray-600 outline-none">
                            </div>
                            <!-- phone Number -->
                            <div class="flex flex-col gap-4 ">
                                <label for="">Phone Number</label>
                                <input type="text" placeholder="+254712345678"
                                    class=" w-[100%] border-b-[1px] px-2 bg-transparent rounded-md border-gray-600 outline-none">
                            </div>


                        </div>

                        <div class="flex gap-4 text-gray-800">
                            <!-- Email  -->
                            <div class="flex flex-col gap-4 ">
                                <label for="">Email</label>
                                <input type="text" placeholder="@example@gmail.com"
                                    class=" w-[100%] border-b-[1px] px-2 bg-transparent rounded-md border-gray-600 outline-none">
                            </div>
                            <!-- phone Number -->
                            <div class="flex flex-col gap-4 ">
                                <label for="">Subject</label>
                                <input type="text" placeholder="Enquiry"
                                    class=" w-[100%] border-b-[1px] px-2 bg-transparent rounded-md border-gray-600 outline-none">
                            </div>
                            <!-- email -->


                        </div>

                        <!-- text  message  -->

                        <div class="w-full  text-gray-800 flex flex-col">
                            <label for="">Message</label>
                            <textarea class=" px-4 border-[1px] outline-none border-gray-600 rounded-lg" cols="30"
                                rows="5"></textarea>
                        </div>

                        <!-- submit data -->
                        <button class=" bg-indigo-500 rounded-md px-4 py-2 text-white">Submit</button>


                    </div>
                </div>

            </div>
        </div>

        <!-- partners  section -->
        <div class="flex flex-col gap-6 justify-center items-center py-12">
            <p class=" font-bold text-2xl">Recents Partners</p>
            <div class="flex gap-12 max-md:flex-col">
                <div class=" flex flex-col gap-4">
                    <img src="~/assets/images/pro.svg" class=" h-40" alt="loading">
                    <p class=" text-md font-semibold text-gray-900">Pro Innovation</p>
                </div>
                <div class=" flex flex-col gap-4">
                    <img src="~/assets/images/semara.svg" class="h-40" alt="loading">
                    <p class="text-md font-semibold text-gray-900">Semara Hotel</p>
                </div>

            </div>
        </div>

        <!--  footer -->
        <div class="">
            <Footer />
        </div>


    </div>
    <!-- show cart  -->
    <!-- customer can make payment on delevery or on purchase -->

    <Teleport to="body" v-if="showCartScreen">
        <div class="bg-[#D9D9D970] z-30 rounded-2xl px-6 py-4 w-[40%] fixed top-14 right-0 ">
            <p class=" text-right font-semibold text-xl cursor-pointer text-gray-800" @click=" showCartScreen = false">X
            </p>
            <div class=" flex justify-between" v-for="cartItem in cartStore.cartItems">
                <p>{{ cartItem.name }}</p>
                <p>{{ productQty }}</p>
                <p>{{ cartItem.price ? cartItem.price : 0 }}</p>
                <div class="flex gap-4 ">
                    <button class=" bg-indigo-500 rounded-md w-4 flex items-center justify-center text-white h-4"
                        @click="productQty++">+</button>
                    <button
                        class="bg-indigo-500 rounded-md w-4 flex items-center justify-center text-white h-4">-</button>
                </div>

                <p>{{ cartItem.price * productQty }}</p>
            </div>
            <!-- make payment button -->
            <p class=" text-indigo-500 font-semibold">Total Amount <span class=" text-black">5000.00</span></p>
            <div class="flex gap-4 mt-4">
                <button class=" bg-indigo-500 rounded-md p-2 text-white text-sm" @click="paymentByMpesa = true">Pay
                    with Mpesa</button>
                <button class=" bg-indigo-500 rounded-md p-2 text-white text-sm">Pay with Paypal</button>
            </div>
            <div class=" my-2  flex flex-col gap-2" v-if="paymentByMpesa">
                <label> Enter Mpesa number</label>
                <input type="text" class=" border-gray-400 rounded-md border-[1px] px-2 outline-none"
                    placeholder=" +2546712345678">
                <button class="bg-orange-500 w-1/2 rounded-md py-2 text-white">Complete Payment</button>

            </div>
        </div>
    </Teleport>
</template>

<style>
/* .router-link-active {
    color: rebeccapurple;
} */
</style>