<script setup lang="ts">
const products = await useFetch('http://localhost:3000/product', {
    method: 'GET'
})
// console.log(products.data.value, "Products ");

</script>
<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-wrap gap-4">
            <div class=" flex flex-col gap-4 border-[2px] border-[#7B09A645] rounded-md p-2 w-72"
                v-for="prod in products.data.value">
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
                    <button class=" bg-gray-400 rounded-md px-2 py-1 text-xs">Add to Cart</button>
                </div>

            </div>

        </div>
        <div class=" w-screen flex items-center justify-center rounded-md text-white">
            <button class=" bg-indigo-500 rounded-md px-4 py-1 font-medium">Show More</button>
        </div>
    </div>
</template>