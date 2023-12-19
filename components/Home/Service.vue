<script setup lang="ts">
import icon from '@/assets/images/home/sketch.png'
const featureList = [
    {
        title: '初步整合都更委員會',
        description: `深入進註社區了解社區意願，協助一般住戶與地主戶成立都更委員會。`,
        icon: icon,
    },
    {
        title: '會同專業人士定期開會',
        description: `每月舉辦社區都更大會，彙整居民疑問與意見，並一一進行解答。每季邀請專業人士進行講座與會談。`,
        icon: icon,
    },
    {
        title: '評估整合比例與尋找建商',
        description: `了解每一戶居民的需求，整合都更意願，並協助居民尋找合適的建商。`,
        icon: icon,
    },
    {
        title: '協助審核建商合約內容',
        description: `建商合約停看聽！協助居民一起了解建商合約細節，追求雙方利益與居住安全的最大公約數。`,
        icon: icon,
    },
]
</script>
<template>
    <div class="w-full sm:h-[80vh] min-h-[800px] features" id="service">
        <div class="max-w-screen-xl mx-auto flex flex-col items-center py-20 justify-between">
            <div class="relative flex w-full flex-col items-center gap-4">
                <h2 class="text-4xl text-[#444] font-bold">社區進駐顧問服務</h2>
                <h2 class="absolute -top-8 text-4xl sm:text-8xl text-main opacity-10 font-bold">COMMUNITY</h2>
                <span class="block w-12 rounded-sm bg-yellow h-2"></span>
                <p class="px-6 sm:px-0 sm:w-1/2">想要都更不是只能乾等，先發制人才能搶得先機！讓踏取進駐社區，透過意見整合、定期會議、建商篩選，幫助您一步步取得都更的主動權！</p>
            </div>

            <div class="line flex flex-row mx-auto w-full items-center mt-20 justify-between">
                <!-- <div class="flex w-full items-center justify-between absolute left-1/2 -translate-x-1/2 -top-4">
                    <span v-for="i in 4" class="number">{{ i }}</span>
                </div> -->
                <div class="block-container">
                    <div class="blocks" v-for="(i, index) in featureList">
                        <span class="number">{{ index +1 }}</span>
                       <div class="bg-[#ffffff80] px-8 mt-4 backdrop-blur rounded-xl flex py-4 border-white border drop flex-col items-center">
                        <h4 class="font-bold text-lg tracking-wide">{{ i.title }}</h4>
                        <p class="opacity-80 tracking-wider text-left">{{ i.description }}</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.features {
    background-image: url('../assets/images/home/help.png');
    background-position: center;
    background-size: cover;
}

.number {
    @apply w-10 text-2xl h-10 block flex items-center justify-center font-bold bg-main text-white rounded-full;
}

.line {
    @apply relative;

    &:before {
        content: '';
        @apply sm:w-full sm:h-1 h-full w-1 rounded-xl top-0 sm:left-[unset] left-1/2 -translate-x-1/2 sm:translate-x-[unset] absolute bg-main;
    }
}



.block-container {
    @apply px-6 w-full sm:flex-row flex-col flex items-start gap-10 justify-between;

}

.blocks {
    @apply flex flex-col items-center -mt-4 z-10 sm:flex-[300px];
}
</style>