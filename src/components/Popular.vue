<template>
	<section>
		<h2 class="section-title">Популярные букеты</h2>
		<Carousel :navigation="true" :pagination="true" :startAutoplay="false" :timeout="6000" v-slot="{ currentSlide }">
			<Slide v-for="(slide, index) in slides" :key="index">
				<div v-show="currentSlide === index + 1" class="slide__info">
					<div class="slider__content">
						<h3>{{ slide.name }}</h3>
						<p>{{ slide.description }}</p>
						<p>{{ slide.size }} см</p>
						<p>{{ slide.price }} ₽</p>
						<a class="button" href="#">Заказать</a>
					</div>
					<img :src="require(`@/assets/img/${slide.img}`)" :alt="slide.name" />
				</div>
			</Slide>
		</Carousel>
	</section>
</template>
<script>
import Carousel from "@/components/slider/Carousel.vue";
import Slide from "@/components/slider/Slide.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
	components: { Carousel, Slide },
	setup() {
		const store = useStore();

		return { slides: computed(() => store.getters.getSlides) };
	},
};
</script>

<style lang="scss" scoped>
.slide {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 438px;

	img {
		max-height: 410px;
		object-fit: cover;
	}
}

.slide__info {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
}

.slider__content {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex-grow: 1;

	& .button {
		margin-top: auto;
	}
}

//animation
.slide-enter-active,
.slide-leave-active {
	transition: opacity 0.7s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
	opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
	opacity: 1;
}
</style>
