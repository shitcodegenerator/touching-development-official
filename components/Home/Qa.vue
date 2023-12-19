<script setup lang="ts">
import { ref } from 'vue';
import { ArrowDown } from '@element-plus/icons-vue'
const qaList = ref([
    {
        question: 'lorem5lorem5lorem5lorem5',
        answer: 'aaaaa',
        isOpen: false
    },
    {
        question: 'lorem5lorem5lorem5lorem5',
        answer: 'aaaaa',
        isOpen: false
    },
    {
        question: 'lorem5lorem5lorem5lorem5',
        answer: 'aaaaa',
        isOpen: false
    },
    {
        question: 'lorem5lorem5lorem5lorem5',
        answer: 'aaaaa',
        isOpen: false
    },
])

const onQuestionClick = (open) => {
    open = !open
}

</script>
<template>
    <div class="w-full sm:h-[80vh] min-h-[800px] qa" id="qa">
        <div class="relative z-10 max-w-screen-xl mx-auto flex flex-col items-center py-20 justify-between">
            <div class=" flex flex-col items-center sm:items-start gap-4 mb-10 w-full">
                <h2 class="text-4xl text-[#444] font-bold">常見問題</h2>
                <h2 class="absolute top-12 text-4xl sm:text-8xl text-main opacity-10 font-bold">Q&A</h2>
                <span class="block w-12 rounded-sm bg-yellow h-2"></span>
                <p class="px-6 sm:w-1/2 ">知己知彼百戰百勝！化繁為簡，讓複雜的房產、都更、地政事務也能快速上手！</p>
            </div>

            <div class="flex flex-col w-full gap-4 sm:px-0 px-6">
                <div v-for="i in qaList" class="relative">
                    <ArrowDown class="w-6 absolute right-4 top-4 duration-300 transition" :class="{ 'rotate-[180deg]': i.isOpen }"/>
                    <div class="bg-[#ccc] font-bold rounded-t-md px-4 py-4 cursor-pointer" @click="i.isOpen = !i.isOpen">{{ i.question }}</div>
                    <div class="pl-4 py-4 bg-white rounded-b-md " v-show="i.isOpen">{{ i.answer}}</div>
                </div>
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>

.qa {
    background: #fff;;
    background-size: 20px 20px;
    background-image:
        linear-gradient(to right, rgba(0, 105, 210, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 105, 210, 0.05) 1px, transparent 1px);
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