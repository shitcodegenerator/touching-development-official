<script setup lang="ts">
defineProps({
    title: String,
    tag: String,
    desc: String,
    img: String,
    btnText: String,
})
</script>
<template>
    <div class="bg-white  pb-4 rounded-md box-shadow-sm relative overflow-hidden">
        <div v-if="desc" class="flex flex-col gap-2 ">
            <img :src="img" />
            <span class="absolute left-0 top-4 max-w-[80px] w-16 text-center text-xs bg-[#d6f2d7] text-[#6aa716] px-2 py-px rounded-sm">{{ tag ?? 'TAG' }}</span>
            <h5 class="px-4 text-sm font-bold sm:text-base">{{ title }}</h5>
            <p class="px-4 text-sm sm:text-base ">{{ desc }}</p>
            <button class="mx-4 hover:bg-main hover:text-white ease-in-out duration-300 transition border-main border text-main rounded-md py-2 tracking-wide">{{ btnText }}</button>
        </div>
        <div v-else class="px-4 py-4">
            <slot></slot>
        </div>

    </div>
</template>