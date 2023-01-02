<template>
	<div class="carousel">
		<slot :currentSlide="currentSlide"></slot>

		<div class="navigate" v-if="navigationEnabled">
			<div class="toggle-page left" @click="prevSlide" :style="{ backgroundImage: `url(${require('@/assets/img/arrow-left.svg')})` }"></div>
			<div class="toggle-page right" @click="nextSlide" :style="{ backgroundImage: `url(${require('@/assets/img/arrow-left.svg')})` }"></div>
		</div>

		<div class="pagination" v-if="paginationEnabled">
			<span class="pagination__circle" v-for="(slide, index) in getSlideCount" :key="index" :class="{ active: index + 1 === currentSlide }" @click="goToSlide(index)"> </span>
		</div>
	</div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
	props: ["startAutoplay", "timeout", "navigation", "pagination"],
	setup(props) {
		const currentSlide = ref(1);
		const getSlideCount = ref(null);
		const autoPlayEnabled = ref(props.startAutoplay === undefined ? true : props.startAutoplay);
		const timeoutDuration = ref(props.timeout === undefined ? 5000 : props.timeout); //ms
		const paginationEnabled = ref(props.pagination === undefined ? true : props.pagination);
		const navigationEnabled = ref(props.navigation === undefined ? true : props.navigation);

		//next slide
		const nextSlide = () => {
			if (currentSlide.value === getSlideCount.value) {
				currentSlide.value = 1;
				return;
			}
			currentSlide.value += 1;
		};

		//prev slide
		const prevSlide = () => {
			if (currentSlide.value === 1) {
				currentSlide.value = getSlideCount.value;
				return;
			}
			currentSlide.value -= 1;
		};

		//pagination
		const goToSlide = index => {
			currentSlide.value = index + 1;
		};

		//autoplay
		const autoPlay = () => {
			setInterval(() => {
				nextSlide();
			}, timeoutDuration.value);
		};

		if (autoPlayEnabled.value) {
			autoPlay();
		}

		onMounted(() => {
			getSlideCount.value = document.querySelectorAll(".slide").length;
		});

		return { currentSlide, nextSlide, prevSlide, getSlideCount, goToSlide, paginationEnabled, navigationEnabled };
	},
};
</script>

<style lang="scss" scoped>
.carousel {
	position: relative;
	width: 66%;
	height: 438px;
	margin: 0 auto;
}
.navigate {
	position: absolute;
	display: flex;
	justify-content: space-between;
	align-items: center;
	left: -100px;
	right: -100px;
	top: 50%;
	transform: translateY(-50%);
	z-index: 10;
}

.toggle-page {
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-position: center;
	background-size: 40px 20px;
	background-repeat: no-repeat;
	transition: $tr;
	cursor: pointer;

	&.right {
		transform: rotate(180deg);
	}
}
.pagination {
	position: absolute;
	display: flex;
	justify-content: space-between;
	align-items: center;
	left: 50%;
	bottom: 10px;
	transform: translateX(-50%);
	gap: 6px;
}

.pagination__circle {
	width: 20px;
	height: 20px;
	background-color: $light;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	border: 2px solid $medium;
	cursor: pointer;

	&.active {
		background-color: $medium;
	}
}
</style>
