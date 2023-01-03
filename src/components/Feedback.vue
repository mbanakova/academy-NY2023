<template>
	<section class="feedback" id="feedback">
		<h2 class="section-title">Отзывы</h2>
		<ul class="feedback__list">
			<li>
				<blockquote class="feedback__blockquote">Всё очень понравилось! Быстрое оформление заказа, выбор удобного времени доставки. Всем большое спасибо!</blockquote>
				<cite class="feedback__author">Марина</cite>
			</li>
			<li>
				<blockquote class="feedback__blockquote">Внимательные флористы, вежливые. Магазин находится прям рядом с метро. Букет очень понравился, буду ещё заказывать!</blockquote>
				<cite class="feedback__author">Татьяна</cite>
			</li>
			<li>
				<blockquote class="feedback__blockquote">Выбор букетов на любой вкус и цену. Бывают хорошие скидки, а флористы всегда помогут и точно соберут красивый букет!</blockquote>
				<cite class="feedback__author">Ольга</cite>
			</li>
		</ul>
	</section>
</template>

<script>
export default {};
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
