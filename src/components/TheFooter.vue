<template>
	<footer class="footer">
		<div class="container">
			<ul class="footer__links">
				<li>
					<router-link :to="{ name: 'Index' }" class="nav__link nav__logo" v-smooth-scroll><img src="@/assets/img/logo-inversed.svg" alt="Логотип салона botanika" width="100" height="33" /></router-link>
				</li>
				<li>
					<a class="footer__link" href="#">Каталог</a>
				</li>
				<li>
					<a class="footer__link" href="#">Доставка и оплата</a>
				</li>
				<li>
					<a class="footer__link" href="#">Отзывы</a>
				</li>
				<li>
					<a class="footer__link" href="#">Спецпредложения</a>
				</li>
				<li>
					<a class="footer__link" href="#">Контакты</a>
				</li>
			</ul>
		</div>
	</footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
	padding: 24px 0 40px;
	color: $white;
	background-color: $dark;
}

.footer__links {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 68px;
	flex-wrap: wrap;
}

.footer__link {
	color: $white;
	text-decoration: none;
}
</style>
