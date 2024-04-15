<template>
    <div class="flex flex-col relative gap-6 bg-[#7B09A680] px-12 pt-6 pb-2">
        <div class="">
            <img src="~/assets/images/logo.svg" alt="">
        </div>
        <div class="flex justify-between max-md:flex-col ">

            <div class="flex flex-col text-white gap-4">
                <div class="flex  gap-3 max-md:gap-2 md:flex-col max-md:text-xs">
                    <p>Home</p>
                    <p>Products</p>
                    <p>Features</p>
                    <p>Blogs</p>
                    <p>Contact us</p>
                </div>
            </div>
            <!--  -->
            <div class="flex flex-col gap-3 text-white  max-md:hidden">
                <p>Location</p>
                <p>Machakos, Nairobi</p>
                <p>P.O Box 001 -9001</p>
                <p>@info.kambanation.ke</p>
                <p>Syokimau Road</p>
            </div>

            <!--  -->
            <div class="flex flex-col gap-3 text-white max-md:hidden">
                <p>Community</p>
                <p>Fashion team</p>
                <p>Events</p>
                <p>Sponsors</p>
                <p>Support</p>
            </div>

            <!--  -->
            <div class="flex flex-col gap-3 text-white">
                <p>Subscribe our news</p>
                <p class=" text-xs">Stay update with new feature, fashions
                    <br>Get news on all events .
                </p>
                <div class="flex rounded-xl bg-white py-1 px-2 max-md:w-[90%] max-md:flex-col ">
                    <input type="text" class=" bg-transparent outline-none text-gray-800">
                    <button class=" bg-indigo-500 rounded-md px-2 py-[2px] text-xs">Subscribe</button>
                </div>
            </div>

        </div>
        <div class=" flex flex-col gap-4">
            <div class="flex gap-4">
                <img src="~/assets/images/whatsappicon.svg" alt="loading" class=" max-md:w-4">
                <img src="~/assets/images/facebookicon.svg" alt="loading" class=" max-md:w-4">
                <img src="~/assets/images/instagramicon.svg" alt="loading" class=" max-md:w-4">
            </div>
            <div class="flex gap-4 items-center">
                <div
                    class="w-4 h-4 border-[1px] text-xs border-white rounded-full flex justify-center items-center text-white">
                    c
                </div>
                <p class=" text-white  max-md:text-sm">2024 kambanation</p>
            </div>
        </div>
        <div class=" absolute right-0 bottom-0 ">
            <img src="~/assets/images/footerbg.svg" alt="loading">
        </div>
    </div>
</template>