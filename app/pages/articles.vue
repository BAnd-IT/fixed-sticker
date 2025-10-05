<template>
    <div class="app-page">
        <NuxtLink class="app-navigation-link" to="/">Назад</NuxtLink>
        <div v-for="(_, index) in 20" :key="index">
           <ArticleComponent /> 
        </div>
        <StickerComponent />
    </div>
</template>