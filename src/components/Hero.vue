<template>
	<section class="hero">
		<div class="hero__top">
			<div>
				<h2 class="title hero__title">Авторские букеты<br /><span>в Петербурге</span></h2>
				<p class="hero__text">Оригинальные свежие букеты с доставкой по всему городу</p>
				<a class="button" href="#">Смотреть каталог</a>
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

export default {
	components: { Features },
};
</script>

<style lang="scss" scoped>
.hero__top {
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-column-gap: 24px;
	margin-bottom: 48px;
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
</style>
