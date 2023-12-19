<script setup lang="ts">
import { ref } from 'vue';

const navList = ref([
    {
        title: '服務一覽',
        link: '#feature',
    },
    {
        title: '實績展示',
        link: '#achievement',
    },
    {
        title: '課程講座',
        link: '#tutorials',
    },
    {
        title: '社區進駐',
        link: '#community',
    },
    {
        title: '常見問題',
        link: '#qa',
    },
    {
        title: '聯絡我們',
        link: '#contact',
    },
])

const isMobileMenuShow = ref(false)
const emit = defineEmits(['showRegisterModal', 'showLoginModal'])
</script>
<template>
    <div class="fixed sm:absolute sm:right-[unset] right-4 top-0 z-50 sm:w-full py-4 sm:py-10">
        <img @click="isMobileMenuShow = true" v-show="!isMobileMenuShow" class="sm:hidden block w-10 opacity-[0.7] drop-shadow" src="../assets/images/menu.svg"/>
        <div class="hidden max-w-screen-2xl mx-auto sm:flex items-center justify-end gap-10 text-white drop-shadow tracking-widest">
            <a v-for="i in navList" :href="i.link" class="cursor-pointer text-lg font-bold hover:font-bold">{{ i.title }}</a>
            <div class="bg-white rounded-full text-main px-8 py-1 font-bold">登入</div>
            <div @click="emit('showRegisterModal')" class="cursor-pointer bg-white rounded-full text-main px-8 py-1 font-bold">註冊</div>
        </div>

        <div v-show="isMobileMenuShow"  @click="isMobileMenuShow = false"  class="bg-main sm:hidden max-w-screen-2xl fixed top-0 w-full left-0 flex flex-col mx-auto items-center justify-center text-center text-white drop-shadow tracking-widest">
            <a v-for="i in navList" :href="i.link" class="py-6 w-full text-lg font-bold hover:font-bold">{{ i.title }}</a>
            <div>登入</div>
        </div>

        
    </div>
    <div v-show="isMobileMenuShow" @click="isMobileMenuShow = false" class="bg-black opacity-[0.66] transition ease-in-out duration-500 fixed top-0 w-full h-full z-20"></div>
</template>