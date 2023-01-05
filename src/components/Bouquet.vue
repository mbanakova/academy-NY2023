<template>
	<section class="bouquet" id="bouquet">
		<h2>Выбор букета</h2>

		<ul class="bouquet__list">
			<li class="bouquet__list-item" v-for="(bouquet, index) in bouquets" :key="index">
				<div class="bouquet__img">
					<img :src="require(`@/assets/img/${bouquet.img}`)" :alt="bouquet.title" width="387" height="442" />
				</div>
				<a class="bouquet__link" href="#">
					<h3 class="section-title bouquet__title">{{ bouquet.title }}</h3>
					<p class="bouquet__text">{{ description }}</p>
				</a>
			</li>
		</ul>
	</section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
	setup() {
		const store = useStore();

		return { bouquets: computed(() => store.getters.getBouquets) };
	},
};
</script>

<style lang="scss" scoped>
.bouquet h2 {
	visibility: hidden;
}

.bouquet__list {
	list-style: none;
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 20px;
	color: $white;
	text-align: center;
}

.bouquet__list-item {
	background-color: $dark;
	border-radius: 10px;
	position: relative;

	&::after {
		position: absolute;
		content: "";
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: $transparent;
		border-radius: 10px;
	}
}

.bouquet__link {
	text-decoration: none;
	padding: 25px;
	color: inherit;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
}

.bouquet__title {
	margin: 0;
}

.bouquet__text {
	margin: 0;
}
</style>
