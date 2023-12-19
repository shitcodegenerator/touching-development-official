<script setup lang="ts">
import achievementImage from '@/assets/images/home/achievement_1.jpg'
import { Location } from '@element-plus/icons-vue'
const featureList = [
    {
        title: '央北一期',
        description: `土地整合已完成`,
        icon: achievementImage,
    },
    {
        title: '央北二期',
        description: `土地開發中`,
        icon: achievementImage,
    },
    {
        title: '新店區都更案',
        description: `整合中`,
        icon: achievementImage,
    },

]
</script>
<template>
    <div class="features" id="achievement">
        <div class="relative max-w-screen-xl mx-auto flex flex-col items-center py-20 justify-between">
            <div class="flex flex-col items-center gap-4">
                <h2 class="text-4xl text-[#444] font-bold z-10">實績展示</h2>
                <h2 class="absolute top-12 text-4xl sm:text-8xl text-[#e4edf2] font-bold">ACHIEVEMENT</h2>
                <span class="w-12 rounded-sm bg-yellow h-2"></span>
                <p class="sm:px-0 px-8 text-sm sm:text-base  tracking-wider leading-7">
                    以新北市為主，陸續進行大範圍土地整合、都市更新意願整合、都是更新課程開立與知識傳授。
                </p>
            </div>

            <div class="flex flex-col sm:flex-row px-8 mx-auto w-full gap-10 items-center justify-between">
                <div class="block" v-for="i in featureList">
                    <div class="w-full h-40 overflow-hidden">
                        <img :src="i.icon" class="w-full" />
                    </div>
                    <div class="p-4">
                        <h4 class="font-bold text-lg tracking-wide flex gap-1"><Location class="w-4 text-red-700" />{{ i.title }}</h4>
                        <p class="w-2/3 opacity-80 tracking-wider text-left text-sm sm:text-base">{{ i.description }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.features {
    @apply w-full sm:h-[80vh] min-h-[800px];
    background-image: url('../assets/images/home/features.jpg');
    background-position: center;
    background-size: cover;
}

.block {
    @apply bg-[#ffffff80] shadow-md border border-white backdrop-blur rounded overflow-hidden;

    &:nth-child(odd) {
        @apply sm:mt-32;
    }
}</style>