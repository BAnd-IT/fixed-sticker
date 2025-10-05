<template>
    <div class="sticker" :class="{ 'sticker--loaded': isLoaded, 'sticker--opened': isExpanded }"
        @mouseenter="isExpanded = true" @mouseleave="isExpanded = false">
        <div class="sticker__content">
            <transition name="fade-delay">
                <div v-show="isExpanded" class="sticker__title">Консультация эксперта</div>
            </transition>

            <div class="specialists" :class="{ 'specialists--horizontal': isExpanded }">
                <NuxtImg v-for="(cat, index) in cats" :key="index" :src="cat.url" class="specialists__item"
                    :style="{ zIndex: index + 1 }" @load="onImageLoad()" />
            </div>
            <transition name="fade-delay">
                <Icon v-show="!isExpanded" name="app-icon:arrow-back" class="sticker__icon" />
            </transition>

            <transition name="fade-delay">
                <button v-show="isExpanded" class="sticker__cta-btn">
                    Получить консультацию
                </button>
            </transition>

        </div>
    </div>
</template>

<script setup lang="ts">
const imagesToLoad = 3;
const loadedCount = ref(0);
const isExpanded = ref(false);

const { fetchCats } = useCats();
const { data: cats } = useAsyncData('cats', () => fetchCats(imagesToLoad));

const isLoaded = computed(() => loadedCount.value === imagesToLoad);
const onImageLoad = () => loadedCount.value++;
</script>

<style lang="scss">
.sticker {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translate(68px, -50%);
    width: 68px;
    height: 266px;
    background-color: $lightgray-color;
    border-radius: 16px 0 0 16px;
    z-index: 1000;
    transition: width .25s ease, transform .15s ease;

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
        height: 100%;
        padding-top: 22px;
    }

    &__title {
        width: 216px;
        height: 56px;
        font-size: 23px;
        line-height: 1.2;
        font-weight: 600;
        text-align: center;
    }

    &__icon {
        width: 16px;
        height: 16px;
    }

    &__cta-btn {
        width: 232px;
        height: 50px;
        background-color: #fff;
        font-weight: 500;
        border-radius: 6px;
        box-shadow: $default-shadow;
        border: none;
        cursor: pointer;
    }

    &--loaded {
        transform: translate(0, -50%);
    }

    &--opened {
        width: 280px;

        .sticker__content {
            justify-content: center;
            gap: 24px;
            padding-top: 0;

        }
    }
}

.specialists {
    display: grid;
    width: 64px;
    height: 152px;
    grid-template-areas: "overlay";
    gap: 40px;

    &__item {
        border: 3px solid $lightgray-color;
        border-radius: 16px;
        overflow: hidden;
        grid-area: overlay;
        width: 64px;
        height: 64px;
        justify-self: center;
        align-self: center;
        transition: transform .25s ease;

        &:first-child {
            transform: translate(0, -44px);
        }

        &:last-child {
            transform: translate(0, 44px);
        }

        img {
            object-fit: cover;
        }
    }

    &--horizontal {
        width: 170px;
        height: 64px;

        .specialists__item:first-child {
            transform: translate(-49px, 0);
        }

        .specialists__item:last-child {
            transform: translate(49px, 0);
        }
    }
}

.fade-delay-enter-active {
    transition: all 0.25s ease;
    transition-delay: 0.25s;
}

.fade-delay-leave-active {
    transition: all 0.15s ease;
}

.fade-delay-enter-from,
.fade-delay-leave-to {
    opacity: 0;
}
</style>
