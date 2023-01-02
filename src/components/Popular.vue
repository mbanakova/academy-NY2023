<template>
	<section>
		<h2 class="section-title">Популярные букеты</h2>
		<Carousel :navigation="true" :pagination="true" :startAutoplay="false" :timeout="6000" v-slot="{ currentSlide }">
			<Slide v-for="(slide, index) in carouselSlides" :key="index">
				<div v-show="currentSlide === index + 1" class="slide__info">
					<div class="slider__content">
						<h3>Букет «Нежность»</h3>
						<p>Элегантный букет, который станет отличным подарком на день рождения или юбилей.</p>
						<p>30 × 40 см</p>
						<p>3600 ₽</p>
						<a class="button" href="#">Заказать</a>
					</div>
					<img :src="require(`@/assets/img/${slide}.png`)" alt="" />
				</div>
			</Slide>
		</Carousel>
	</section>
</template>
<script>
import Carousel from "@/components/slider/Carousel.vue";
import Slide from "@/components/slider/Slide.vue";
export default {
	components: { Carousel, Slide },
	setup() {
		const carouselSlides = ["popular", "popular-2"];

		return { carouselSlides };
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
