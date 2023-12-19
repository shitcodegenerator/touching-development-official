<script setup lang="ts">
import icon from '@/assets/images/home/sketch.png'
import land from '@/assets/images/home/img1.webp'
import Card from './Card.vue';
import { ref } from 'vue';
const cardList = [
    {
        title: 'OOXO',
        time: '2024/1/20',
        description: `L elit. Necessitatibus cupiditate voluptatem tempore nemo error ut perspiciatis earum impedit corporis eveniet.`,
        img: land,
        tag: '地政'
    },
    {
        title: 'OOXO',
        time: '2024/1/20',
        description: `L elit. Necessitatibus cupiditate voluptatem tempore nemo error ut perspiciatis earum impedit corporis eveniet.`,
        img: land,
        tag: '都更實務'
    },
    {
        title: 'OOXO',
        time: '2024/1/20',
        description: `L elit. Necessitatibus cupiditate voluptatem tempore nemo error ut perspiciatis earum impedit corporis eveniet.`,
        img: land,
        tag: '危老重建'
    },
    {
        title: 'OOXO',
        time: '2024/1/20',
        description: `L elit. Necessitatibus cupiditate voluptatem tempore nemo error ut perspiciatis earum impedit corporis eveniet.`,
        img: land,
        tag: '權狀分析'
    },
    // {
    //     title: 'OOXO',
    //     description: `L elit. Necessitatibus cupiditate voluptatem tempore nemo error ut perspiciatis earum impedit corporis eveniet.`,
    //     icon: icon,
    //     tag: '地政'
    // },
    // {
    //     title: 'OOXO',
    //     description: `L elit. Necessitatibus cupiditate voluptatem tempore nemo error ut perspiciatis earum impedit corporis eveniet.`,
    //     icon: icon,
    //     tag: '地政'
    // },
    // {
    //     title: 'OOXO',
    //     description: `L elit. Necessitatibus cupiditate voluptatem tempore nemo error ut perspiciatis earum impedit corporis eveniet.`,
    //     icon: icon,
    //     tag: '地政'
    // },
    // {
    //     title: 'OOXO',
    //     description: `L elit. Necessitatibus cupiditate voluptatem tempore nemo error ut perspiciatis earum impedit corporis eveniet.`,
    //     icon: icon,
    //     tag: '地政'
    // },
]

const isModalShow = ref(false)

const showTutorialModal = (item) => {
    isModalShow.value = true
    activeTutorial.value = item
}

const activeTutorial = ref({
    title: '',
    description: '',
    tag: '',
    time: '',
    img: ''
})
</script>
<template>
    <div class="w-full sm:h-[80vh] min-h-[800px] tutorials" id="tutorials">
        <div v-show="isModalShow" @click="isModalShow = false" class="bg-black opacity-[0.66] transition ease-in-out duration-500 fixed top-0 w-full h-full z-20"></div>
        <div v-show="isModalShow"  @click="isModalShow = false" class="fixed top-0 left-0 w-full flex items-center justify-center h-full z-50">
            <div class="bg-white w-2/3 flex items-center flex-col rounded-lg min-h-[600px] px-4 py-4">
                <img :src="activeTutorial.img" class="w-1/2"/>
                <h3 class="font-bold text-lg">{{ activeTutorial.title }}</h3>
                <span class="font-bold text-base">開課時間：{{ activeTutorial.time }}</span>
                <p>{{ activeTutorial.description }}</p>
            </div>
        </div>
        <div class="relative z-10 max-w-screen-xl mx-auto flex flex-col items-center py-20 justify-between">
           
            <div class=" flex flex-col items-center sm:items-start gap-4 mb-10 w-full">
                <h2 class="text-4xl text-[#444] font-bold z-10">課程教學</h2>
                <h2 class="absolute top-12 text-4xl sm:text-8xl text-[#e4edf2] font-bold">TUTORIALS</h2>
                <span class="block w-12 rounded-sm bg-yellow h-2"></span>
                <p class="px-6 sm:w-1/2 ">知己知彼百戰百勝！化繁為簡，讓複雜的房產、都更、地政事務也能快速上手！</p>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 w-full gap-4 sm:px-0 px-6">
                <Card @click="showTutorialModal(i)" :btnText="'查看資訊'" :img="i.img" :tag="i.tag" :title="i.title" :desc="i.description" class="w-full border border-[#f3f3f3] shadow-md hover:scale-[1.05] ease-in-out duration-300" v-for="i in cardList"/>
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.tutorials {
    @apply relative overflow-hidden;
    background: #fff;;
    background-size: 20px 20px;
    background-image:
        linear-gradient(to right, rgba(0, 105, 210, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 105, 210, 0.05) 1px, transparent 1px);
    // &::after {
    //     content:'';
    //     @apply absolute right-0 top-0 h-full w-2/3 z-0 bg-[#ccc] ;
    //     animation: longer 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1;
    //     animation-fill-mode: none;
    // }
}

@keyframes longer {
    0% {
       @apply h-0;
    }
   100% {
       @apply h-full;
    }
}
</style>