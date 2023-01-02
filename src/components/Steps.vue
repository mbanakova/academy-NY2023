<template>
	<section class="steps" id="steps">
		<h2 class="section-title">4 шага к идеальному букету</h2>
		<ul class="steps__list">
			<li>
				<img src="@/assets/img/step-1.svg" alt="Иконка ноутбука" width="66" height="52" />
				<h3>Заказ</h3>
				<p>Выбирите понравившейся букет из каталога и оформите заказ</p>
			</li>
			<li>
				<img src="@/assets/img/step-2.svg" alt="Иконка человека" width="38" height="52" />
				<h3>Уточнение деталей</h3>
				<p>Наш флорист позвонит вам после оформления заказа, чтобы уточнить детали</p>
			</li>
			<li>
				<img src="@/assets/img/step-3.svg" alt="Иконка банковской карты" width="70" height="52" />
				<h3>Оплата</h3>
				<p>Оплатить заказ можно онлайн на сайте или при получении</p>
			</li>
			<li>
				<img src="@/assets/img/advantage-1.svg" alt="Иконка грузовика" width="83" height="52" />
				<h3>Доставка</h3>
				<p>Курьер позвонит за час до прибытия и доставит заказ вовремя</p>
			</li>
		</ul>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.steps {
	text-align: center;
}
.steps__list {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 20px;
	list-style: none;

	& li {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	img {
		margin-bottom: 10px;
	}

	h3 {
		font-weight: 400;
		margin: 0 auto 8px;
	}

	p {
		margin: 0;
	}
}
</style>
