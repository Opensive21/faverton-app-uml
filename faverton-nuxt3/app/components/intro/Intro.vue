<script setup lang="ts">
import logo from '~/assets/favertonLogo.png';

const targetSection = ref<HTMLElement | null>(null);

function scrollToSection() {
  targetSection.value?.scrollIntoView({ behavior: `smooth` });
}

const isScrolled = ref(false);

onMounted(() => {
  window.addEventListener(`scroll`, () => {
    isScrolled.value = window.scrollY > 50;
  });
});
const chang = ref(false);
</script>

<template>
  <div>
    <div
      class="fixed z-index-[-1] m-0 p-0 bg-[url(~/assets/backgroundImage.jpg)] transition-all duration-500 ease-in-out bg-cover bg-center w-full h-screen "
      :class="{ 'filter brightness-[0.3]': chang }"
    />
    <div class="relative z-index-1">
      <ClientOnly>
        <AppHeader />
      </ClientOnly>
      <div class="flex justify-end">
        <div class="max-w-[86vw] text-white flex flex-col items-center gap-7 h-screen w-full sm:max-w-[92vw] md:max-w-[94vw] lg:max-w-[95vw]">
          <div class="mt-20 max-w-[50pt] flex justify-center sm:max-w-24 lg:max-w-32">
            <img
              :src="logo"
              alt="faverton"
            >
          </div>
          <div class="flex flex-col items-center gap-5">
            <h1
              class="text-xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-6xl"
            >
              GO GREEN & SAVE THE PLANET
            </h1>
            <p class="max-w-[230pt] text-xs font-bold text-justify sm:max-w-[400pt] md:max-w-[405pt] lg:max-w-[530pt] 2xl:max-w-[660pt] sm:text-base md:text-lg lg:text-xl 2xl:text-2xl">
              Bienvenue dans le monde serein des maisons de ferme vertes, où durabilité et charme de la vie à la campagne se rencontrent. Une maison de ferme verte n'est pas simplement un logement ; c'est l'incarnation de la conscience écologique, d'une vie harmonieuse avec la nature et de l'engagement envers la préservation de l'environnement.
            </p>
          </div>
          <div class="mt-20 sm:mt-36 md:mt-36">
            <img
              src="~/assets/scroll-down.svg"
              alt="scroll"
              class="size-24 animate-bounce cursor-pointer md:size-36"
              @click="scrollToSection"
            >
          </div>
        </div>
      </div>
      <div
        ref="targetSection"
        class="min-h-screen flex justify-end"
      >
        <IntroProjectPresentation @hover-change="(value) => chang = value" />
      </div>
    </div>
  </div>
</template>
