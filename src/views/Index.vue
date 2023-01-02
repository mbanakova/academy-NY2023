<template>
	<main class="home">
		<div class="container">
			<Hero />
			<Popular />
			<Bouquet />
			<Discount />
			<Steps />
			<Feedback />
		</div>
		<Contacts />
	</main>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Popular from "@/components/Popular.vue";
import Contacts from "@/components/Contacts.vue";
import Feedback from "@/components/Feedback.vue";
import Steps from "@/components/Steps.vue";
import Discount from "@/components/Discount.vue";
import Bouquet from "@/components/Bouquet.vue";

export default {
	name: "Home",
	components: { Hero, Popular, Contacts, Feedback, Steps, Discount, Bouquet },
};
</script>

<style lang="scss" scoped>
.info {
	margin: 0;
	padding: 0;

	& ol {
		margin: 0 0 10px;
		padding: 0;
	}
}
</style>
