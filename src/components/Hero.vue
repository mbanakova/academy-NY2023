<template>
	<section class="hero">
		<div class="hero__top">
			<div class="hero__content">
				<h2 class="title hero__title">Авторские букеты<br /><span>в Петербурге</span></h2>
				<p class="hero__text">Оригинальные свежие букеты с доставкой по всему городу</p>
				<a class="button" href="#" ref="wrapper" @mousemove="spawnBubbles" @mouseleave="removeBubbles"
					>Смотреть каталог
					<span class="bubble" v-if="bubble.isOnTarget" :style="{ left: bubble.left, top: bubble.top }"></span>
				</a>
			</div>
			<div class="hero__img-list">
				<div class="hero__img">
					<img src="@/assets/img/promo-1.jpg" alt="Букет розовых тюльпанов" width="386" height="404" />
				</div>
				<div class="hero__img"><img src="@/assets/img/promo-2.jpg" alt="Букет с розовыми розами и гвоздиками" width="387" height="420" /></div>
			</div>
		</div>

		<Features />
	</section>
</template>

<script>
import Features from "@/components/Features.vue";
import { ref, reactive } from "vue";
export default {
	components: { Features },
	setup() {
		const bubble = reactive({
			isOnTarget: false,
			left: 0,
			top: 0,
		});
		const wrapper = ref(null);

		function spawnBubbles(event) {
			const rect = wrapper.value.getBoundingClientRect();

			const left = Math.round(event.clientX - rect.left);
			const top = Math.round(event.clientY - rect.top);

			bubble.left = `${left}px`;
			bubble.top = `${top}px`;

			bubble.isOnTarget = true;
		}

		function removeBubbles() {
			bubble.isOnTarget = false;
		}

		return {
			spawnBubbles,
			removeBubbles,
			bubble,
			wrapper,
		};
	},
};
</script>

<style lang="scss" scoped>
.hero__top {
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-column-gap: 24px;
	margin-bottom: 48px;
}

.hero__content {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.hero__img-list {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 20px;

	&:last-child {
		align-self: flex-end;
	}
}
.hero__title {
	margin-bottom: 24px;

	& span {
		font-style: italic;
	}
}

.hero__text {
	font-size: 24px;
	line-height: 29px;
	margin-bottom: 64px;
}

.hero__img {
	padding-top: 60px;
	border-radius: 10px;

	&:last-child {
		padding-top: 0;
	}
}

.bubble {
	position: absolute;
	background-color: $white;
	transform: translate(-50%, -50%);
	pointer-events: none;
	border-radius: 50%;
	z-index: 10;
	animation: bubbles 1s linear infinite;
}

@keyframes bubbles {
	0% {
		width: 0;
		height: 0;
		opacity: 0.3;
	}

	100% {
		width: 100px;
		height: 100px;
		opacity: 0;
	}
}
</style>
