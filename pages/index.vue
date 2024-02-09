<template>
    <div id="home" class="px-12 py-6 ">
        <!-- navigation  -->

        <div class="flex justify-between items-center  ">
            <div class=" flex gap-4  ">
                <NuxtLink to="#home" class=" active:border-b-2 border-indigo-500 hover:border-b-2">Home
                </NuxtLink>
                <NuxtLink to="#products" class=" active:border-b-2 border-indigo-500 hover:border-b-2">Products</NuxtLink>
                <NuxtLink to="#features" class=" active:border-b-2 border-indigo-500 hover:border-b-2">Features</NuxtLink>
                <NuxtLink to="#blogs" class=" active:border-b-2 border-indigo-500 hover:border-b-2">Blogs</NuxtLink>
            </div>
            <div class="">
                <img src="~assets/images/logo.svg" alt="loading">
            </div>
            <div class="flex gap-6 items-center">
                <div class="flex border-y-[1px] border-gray-500 rounded-md w-full px-4 py-1 items-center gap-2 ">
                    <img src="~/assets/images/searchicon.svg" alt="loading" class=" w-6">
                    <input type="text" class=" outline-none w-full" placeholder="Search for products">
                </div>
                <div class="flex ">
                    <img src="~assets/images/carticon.svg" alt="" class=" z-10">
                    <div class=" -ml-2 -mt-2">
                        <div class=" w-6 h-6  bg-[#730C99] rounded-[50%] flex items-center justify-center text-white ">{{
                            2 }}
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <!-- home, hero part -->

    </div>
    <div class="  h-[87vh] flex  items-center">
        <div class="flex w-full gap-4">
            <div class="flex w-[50%]  justify-center items-center gap-4">
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
            <div class=" h-[87vh] relative w-[50%] flex justify-center items-center">
                <img src="~assets/images/heros.svg" class=" z-10" alt="">
                <div class="absolute bottom-0 right-0 ">
                    <img src="~assets/images/bckcolor.svg" class=" w-96" alt="">
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
</template>
<style>
/* .router-link-active {
    color: rebeccapurple;
} */
</style>