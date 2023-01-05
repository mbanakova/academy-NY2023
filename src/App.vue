<template>
	<div class="wrapper">
		<TheHeader />
		<router-view v-slot="slotProps">
			<transition name="route" mode="out-in"> <component :is="slotProps.Component"> </component> </transition
		></router-view>
		<TheFooter />
	</div>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
	components: {
		TheHeader,
		TheFooter,
	},
};
</script>

<style lang="scss">
*,
*::after,
*::before {
	box-sizing: border-box;
}

@mixin font($size: 10px, $height: 10px, $weight: 400) {
	font-size: $size;
	line-height: $height;
	font-weight: $weight;
}

html {
	@include font();
}

body {
	@include font(1.6rem, 2rem, 400);
	font-family: $font;
	color: $dark;
	min-width: 320px;
	margin: 0 auto;
	padding-top: 26px;
	overflow-x: hidden;
	overflow-y: scroll;

	@media (max-width: $tablet) {
		&.no-scroll {
			overflow-y: hidden;
		}
	}
}

img {
	max-width: 100%;
	height: auto;
	display: block;
}

.container {
	max-width: 1280px;
	margin: 0 auto;
	padding: 0 40px;

	@media (max-width: $mobile) {
		padding: 0 20px;
	}
}

.wrapper {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
}

main {
	flex-grow: 1;
}

section {
	margin-bottom: 80px;
}

.button {
	position: relative;
	background-color: $medium;
	color: $white;
	display: block;
	text-decoration: none;
	text-align: center;
	padding: 30px 70px;
	border-radius: 40px;
	transition: $tr;
	overflow: hidden;
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.title {
	@include font(4.4rem, 6rem, 400);
	font-family: $fontPlay;
}

.section-title {
	font-size: 36px;
	line-height: 48px;
	text-align: center;
	margin: 0 auto 40px;
	font-family: $fontPlay;
}
</style>
