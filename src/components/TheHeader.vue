<template>
	<header class="header">
		<div class="container header__container">
			<nav class="nav">
				<ul class="nav__list" v-if="!mobile">
					<li>
						<a class="nav__link" href="#bouquet" v-smooth-scroll>Каталог</a>
					</li>
					<li>
						<a class="nav__link" href="#tabs" v-smooth-scroll>Доставка и оплата</a>
					</li>
					<li>
						<a class="nav__link" href="#feedback" v-smooth-scroll>Отзывы</a>
					</li>
					<li>
						<router-link :to="{ name: 'Index' }" class="nav__link nav__logo" v-smooth-scroll><img src="@/assets/img/logo.svg" alt="Логотип салона botanika" width="100" height="33" /></router-link>
					</li>
					<li>
						<a class="nav__link" href="#discount" v-smooth-scroll>Спецпредложения</a>
					</li>
					<li>
						<a class="nav__link" href="#contacts" v-smooth-scroll>Контакты</a>
					</li>
					<li>
						<a class="nav__link" href="#" v-smooth-scroll>Корзина</a>
					</li>
				</ul>

				<div class="mobile-menu" v-if="mobile">
					<p class="mobile-menu__title" :class="{ 'is-active': mobileNav }">Меню</p>
					<button class="hamburger" @click="toggleHamburger" :class="{ 'is-active': mobileNav }">
						<div class="bar"></div>
					</button>
				</div>

				<transition name="mobile-nav">
					<div class="mobile-nav" v-if="mobileNav">
						<ul class="mobile-nav__list">
							<li>
								<a class="nav__link" href="#bouquet" v-smooth-scroll @click="toggleHamburger">Каталог</a>
							</li>
							<li>
								<a class="nav__link" href="#tabs" v-smooth-scroll @click="toggleHamburger">Доставка и оплата</a>
							</li>
							<li>
								<a class="nav__link" href="#feedback" v-smooth-scroll @click="toggleHamburger">Отзывы</a>
							</li>
							<li>
								<a class="nav__link" href="#discount" v-smooth-scroll @click="toggleHamburger">Спецпредложения</a>
							</li>
							<li>
								<a class="nav__link" href="#contacts" v-smooth-scroll @click="toggleHamburger">Контакты</a>
							</li>
							<li>
								<a class="nav__link" href="#" v-smooth-scroll @click="toggleHamburger">Корзина</a>
							</li>
						</ul>
					</div>
				</transition>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
	name: "TheHeader",
	data() {
		return {
			mobile: null,
			mobileNav: null,
			windowWidth: null,
		};
	},
	created() {
		window.addEventListener("resize", this.checkScreen);
		this.checkScreen();
	},
	methods: {
		toggleHamburger() {
			this.mobileNav = !this.mobileNav;
		},
		checkScreen() {
			this.windowWidth = window.innerWidth;
			if (this.windowWidth <= 767) {
				this.mobile = true;
				return;
			}
			this.mobile = false;
			this.mobileNav = false;
			return;
		},
	},
};
</script>

<style lang="scss" scoped>
.header {
	border-top: 1px solid $dark;
	border-bottom: 1px solid $dark;
	margin-bottom: 80px;

	@media (max-width: $mobile) {
		border: none;
	}
}
.header__container {
	display: flex;
	align-items: center;
	justify-content: center;
}

.nav {
	position: relative;
	display: flex;
	flex-grow: 1;
	justify-content: space-between;
	transition: 0.5s ease-in-out all;
}

.nav__logo {
	margin-right: auto;
}

.nav__list {
	display: flex;
	align-items: center;
	justify-content: space-between;
	list-style: none;
	padding: 0;
	flex-grow: 1;
	margin: 0;
}

.nav__link {
	padding: 16px 10px;
	display: block;
	text-decoration: none;
	color: $dark;
	text-align: center;
	transition: $tr;
	position: relative;

	&::after {
		position: absolute;
		content: "";
		left: 10px;
		bottom: 8px;
		width: 0;
		height: 2px;
		transition: $tr;
		background-color: $light;
		@media (max-width: $mobile) {
			display: none;
		}
	}

	&:hover::after {
		width: calc(100% - 20px);
	}

	&.nav__logo:hover::after {
		width: 0;
	}
}

.mobile-menu {
	position: relative;
	margin-left: auto;
	display: flex;
	gap: 10px;
	align-items: center;
	position: absolute;
	z-index: 10;
	top: 15px;
	right: 0;
	z-index: 120;
}

.mobile-menu__title {
	margin: 0;
	color: $medium;

	&.is-active {
		color: $white;
	}
}

.hamburger {
	position: relative;
	width: 25px;
	height: 32px;
	cursor: pointer;
	appearance: none;
	background: none;
	border: none;
	outline: none;
	padding: 0;

	& .bar,
	&::before,
	&::after {
		content: "";
		display: block;
		width: 100%;
		height: 3px;
		border-radius: 2px;
		background-color: $medium;
		margin: 6px 0;
		transition: 0.5s ease-in-out all;
	}

	&.is-active::before {
		transform: rotate(-225deg) translate(6px, -7px);
		background-color: $white;
	}

	&.is-active .bar {
		transform: translateX(100%);
		opacity: 0;
		background-color: $white;
	}
	&.is-active::after {
		transform: rotate(225deg) translate(6px, 7px);
		background-color: $white;
	}
}

.bar {
	position: relative;
}

.mobile-nav {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: fixed;
	width: 100%;
	height: 100vh;
	background-color: $medium;
	top: 0;
	right: 0;
	margin: 0;
	padding: 50px 20px;
	z-index: 100;
	list-style: none;
	transition: opacity 0.8s 0.6s, clip-path 0.6s 0.4s;

	& .nav__link {
		color: $white;
	}
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
	transition: 1s ease all;
}

.mobile-nav-enter-from {
	clip-path: circle(100px at top right);
	opacity: 0;
}
.mobile-nav-enter-to {
	opacity: 1;
	clip-path: circle(100% at center);
}

.mobile-nav-leave-to {
	opacity: 0;
}

.mobile-nav__list {
	margin: 0 0 20px;
	padding: 0;
	list-style: none;
}

.mobile-nav__contacts {
	display: flex;
	justify-content: center;
	align-items: center;
	list-style: none;
	margin: 0;
	padding: 0;

	& svg {
		width: 30px;
		height: auto;
	}
}
</style>
