<script setup lang="ts">
import { useCartStore } from '~/store/cartStore'
interface Product {
    name: string,
    image: string,
    categories: string,
    color: string
}

const products: any = await useFetch('http://localhost:3000/product', {
    method: 'GET'
})
const cartStore = useCartStore()
// console.log(products.data.value, "Products ");

const selectedProd = ref()
async function addProductToCart(prod: any, index: any) {
    if (prod) {
        cartStore.cartItems.push(prod)
        selectedProd.value = index
    }
    // console.log(cartStore.cartItems, "store gat something");
}

// console.log(itemsInCart.value);




</script>
<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-wrap gap-4 max-md:flex-col">
            <div class=" " v-for="(prod, index) in products.data.value">
                <div class="flex flex-col gap-4 border-[1px] border-[#7B09A645] rounded-md p-2 w-72 max-md:w-80"
                    :class="{ ' shadow-2xl': selectedProd == index }">
                    <div class="flex gap-4">
                        <img :src="`http://localhost:3000/${prod.image}`" alt="" class="w-36 h-36">
                        <div class=" flex flex-col gap-3">
                            <p class="font-bold">{{ prod.name }}</p>
                            <p>Size: <span class=" text-orange-500">Medium</span></p>
                            <p>Color: <span class=" w-4 h-4">{{ prod.color }}</span></p>
                        </div>

                    </div>
                    <div class="flex justify-between items-center">
                        <p>Price: KSH <span>{{ prod.price }}/=</span></p>
                        <button
                            class=" bg-gray-400 rounded-md px-2 py-1 text-xs active:bg-orange-500 active:text-white  hover:bg-orange-500 hover:text-white"
                            @click="addProductToCart(prod, index)">Add to
                            Cart</button>
                    </div>
                </div>
            </div>

        </div>
        <div class=" w-screen flex items-center justify-center rounded-md text-white mt-4">
            <button class=" bg-indigo-500 rounded-md px-4 py-1 font-medium text-xl">Show More</button>
        </div>
    </div>
</template>