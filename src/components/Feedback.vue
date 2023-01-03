<template>
	<section class="feedback" id="feedback">
		<h2 class="section-title">Отзывы</h2>
		<ul class="feedback__list">
			<li v-for="(feedback, index) in feedbacks" :key="index">
				<blockquote class="feedback__blockquote">{{ feedback.text }}</blockquote>
				<cite class="feedback__author">{{ feedback.author }}</cite>
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

		return { feedbacks: computed(() => store.getters.getFeedback) };
	},
};
</script>

<style lang="scss" scoped>
.feedback {
	border: 1px solid $dark;
	padding: 40px 44px 64px;
	text-align: center;
}

.feedback__list {
	list-style: none;
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 100px;
}

.feedback__blockquote {
	margin: 0 auto 16px;
}
</style>
