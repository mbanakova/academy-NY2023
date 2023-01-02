<template>
	<div class="contacts">
		<iframe class="contacts__map" src="https://yandex.ru/map-widget/v1/-/CCUr68rJLD" allowfullscreen="true"> </iframe>
		<div class="container contacts__container">
			<div class="contacts__content">
				<h2 class="section-title contacts__title">Мы ждем вас</h2>
				<dl class="contacts__list">
					<dt class="contacts__list-title">Приходите к нам:</dt>
					<dd class="contacts__list-description">
						Санкт-Петербург, <br />
						ул. Большая Конюшенная, 19
					</dd>

					<dt class="contacts__list-title">Режим работы:</dt>
					<dd class="contacts__list-description">Пн-Вск, с 9-00 до 20-00</dd>

					<dt class="contacts__list-title">Звоните нам:</dt>
					<dd class="contacts__list-description"><a href="tel:88129834719">+ 7 (812) 983-47-19</a></dd>

					<dt class="contacts__list-title">Пишите нам:</dt>
					<dd class="contacts__list-description"><a href="mailto:info@botanika.ru">info@botanika.ru</a></dd>
				</dl>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contacts {
	position: relative;
	height: 644px;
}

.contacts__container {
	padding: 50px 40px 70px 110px;
	display: flex;
}
.contacts__map {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
	border: none;
	width: 100%;
	max-height: 644px;
	height: 100%;
}

.popup__content {
	display: none;
}

.contacts__content {
	position: relative;
	z-index: 10;
	background-color: $white;
	padding: 40px 35px 70px;
	max-width: 386px;
	width: 100%;
}

.contacts__title {
	font-family: $fontPlay;
	margin: 0 0 42px;
	text-align: left;
}

.contacts__list-title {
	margin-bottom: 13px;
}
.contacts__list-description {
	margin: 0 0 30px;
	font-weight: 500;

	& a {
		text-decoration: none;
		color: inherit;
		transition: $tr;
	}
}
</style>
