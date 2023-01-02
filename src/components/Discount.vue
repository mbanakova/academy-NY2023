<template>
	<section class="discount">
		<div class="discount__content">
			<h2 class="section-title">Скидка 10% на&nbsp;первый заказ</h2>
			<p>Если заказываете у нас букет впервые — при оформлении заказа введите промокод «Botanika2021» и получите скидку 10%.</p>
		</div>
		<div class="discount__img">
			<img src="@/assets/img/sale.jpg" alt="Букет из роз и гвоздики в крафтовой обертке" width="590" height="391" />
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.discount {
	background-color: $dark;
	color: $white;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
}

.discount__content {
	padding: 40px 120px 40px 100px;
	text-align: left;

	& .section-title {
		text-align: left;
		font-size: 44px;
		line-height: 59px;
	}
	& p {
		margin: 0;
		font-size: 24px;
		line-height: 29px;
	}
}

.discount__img img {
	width: 100%;
	object-fit: cover;
}
</style>
