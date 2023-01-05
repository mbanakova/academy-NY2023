<template>
	<div class="features">
		<h2 class="features__title">Наши преимущества</h2>

		<ul class="features__list">
			<li v-for="(feature, index) in features" :key="index">
				<img :src="require(`@/assets/img/${feature.svg}`)" :alt="feature.title" width="82" height="52" />
				<div>
					<h3 class="features__list-title">{{ feature.title }}</h3>
					<p>{{ feature.description }}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
	setup() {
		const store = useStore();

		return { features: computed(() => store.getters.getFeatures) };
	},
};
</script>

<style lang="scss" scoped>
.features__title {
	visibility: hidden;
}
.features__list {
	list-style: none;
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 40px;

	& li {
		display: flex;
		align-items: flex-start;
		gap: 20px;
	}
}

.features__list-title {
	margin: 0 0 8px;
	font-weight: 400;
}
</style>
