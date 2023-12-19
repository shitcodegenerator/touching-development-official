<script setup lang="ts">
import icon from '@/assets/images/home/sketch.png'
const featureList = [
    {
        title: '社區進駐都更顧問',
        description: `提供社區都更顧問進駐服務，更貼近居民了解社區需求。定期開立社區會議，整合各項專業與社區居民意見。`,
        icon: icon,
    },
    {
        title: '都更課程講座',
        description: `我們開設專業的都市更新課程，面向公眾傳授都市規劃與更新知識，提升社會大眾對城市發展的認識和參與度。`,
        icon: icon,
    },
    {
        title: '土地整合、都更服務',
        description: `專業團隊運用創新策略，致力於都市更新項目，改善城市環境，提升居住品質，創造可持續發展的未來。`,
        icon: icon,
    },
    {
        title: '危老建築重建',
        description: ` 針對危老建築提供專業重建服務，結合最新技術，確保結構安全，同時注入現代設計元素，賦予新生命。`,
        icon: icon,
    },
]
</script>
<template>
    <div class="w-full sm:h-[80vh] min-h-[800px] bg-[#fcfcfc] feature" id="feature">
        <div class="relative max-w-screen-xl mx-auto flex flex-col items-center py-20 justify-between">
            <div class="flex flex-col items-center gap-4">
                <h2 class="text-4xl text-[#444] font-bold z-10">服務一覽</h2>
                <h2 class="absolute top-12 text-4xl sm:text-8xl  text-[#e4edf2] font-bold">SERVICES</h2>
                <span class="block w-12 rounded-sm bg-yellow h-2"></span>
                <p class="sm:px-0 px-8 text-sm sm:text-base sm:w-1/2 tracking-wider leading-7">
                    我們的目標在於成為民眾和建商之間的溝通橋樑，消弭大眾對於都市更新的疑慮，化繁為簡，將都市更新需留意的的眉眉角角，授予有意都更的鄰里，並協助鄰里建立都市更新委員會。小至解除疑難雜症，大至輔助都更合建，一條龍完整服務，都可以在踏取獲得。
                </p>
            </div>

            <div class="flex flex-col sm:flex-row px-8 mx-auto w-full gap-6 sm:gap-0 items-center justify-between">
                <div class="circles" v-for="i in featureList">
                    <img :src="icon" class="w-8 sm:w-10" />
                    <h4 class="font-bold text-lg tracking-wide">{{ i.title }}</h4>
                    <p class="w-2/3 opacity-80 tracking-wider text-left text-sm sm:text-base">{{ i.description }}</p>
                </div>
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.feature {
    background-size: 20px 20px;
    background-image:
        linear-gradient(to right, rgba(0, 105, 210, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 105, 210, 0.05) 1px, transparent 1px);
}
.circles {
    @apply hover:scale-[1.05] transition duration-300 border text-main text-center sm:py-0 py-4 sm:w-[300px] bg-[#fff] flex items-center flex-col justify-center gap-2 sm:h-[300px] w-full h-full border-[#ccc] sm:border-main rounded-sm sm:rounded-full odd:border-yellow;

    &:nth-child(odd) {
        @apply sm:mt-32;
    }
}
</style>