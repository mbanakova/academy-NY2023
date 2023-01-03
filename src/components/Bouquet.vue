<template>
	<section class="bouquet" id="bouquet">
		<h2>Выбор букета</h2>

		<ul class="bouquet__list">
			<li class="bouquet__list-item">
				<div class="bouquet__img">
					<img src="@/assets/img/select-1.jpg" alt="Букет 1" width="387" height="442" />
				</div>
				<a class="bouquet__link" href="#">
					<h3 class="section-title bouquet__title">Свадебные букеты</h3>
					<p class="bouquet__text">Букеты для невест</p>
				</a>
			</li>
			<li class="bouquet__list-item">
				<div class="bouquet__img">
					<img src="@/assets/img/select-2.jpg" alt="Букет 2" width="387" height="442" />
				</div>
				<a class="bouquet__link" href="#">
					<h3 class="section-title bouquet__title">Букеты с пионами</h3>
					<p class="bouquet__text">Букеты с сезонными пионами</p>
				</a>
			</li>
			<li class="bouquet__list-item">
				<div class="bouquet__img">
					<img src="@/assets/img/select-3.jpg" alt="Букет 3" width="387" height="442" />
				</div>
				<a class="bouquet__link" href="#">
					<h3 class="section-title bouquet__title">Выбрать букет</h3>
					<p class="bouquet__text">Букеты в ассортименте</p>
				</a>
			</li>
		</ul>
	</section>
</template>

<script>
export default {};
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
