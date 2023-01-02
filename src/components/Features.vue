<template>
	<div class="features">
		<h2 class="features__title">Наши преимущества</h2>

		<ul class="features__list">
			<li>
				<img src="@/assets/img/advantage-1.svg" alt="Иконка грузовика" width="82" height="52" />
				<div>
					<h3 class="features__list-title">Быстрая доставка</h3>
					<p>Можем собрать букет и передать его в доставку всего за час.</p>
				</div>
			</li>
			<li>
				<img src="@/assets/img/advantage-2.svg" alt="Иконка букета цветов" width="52" height="52" />
				<div>
					<h3 class="features__list-title">Всегда свежие цветы</h3>
					<p>Тщательно следим за состоянием цветов, а опытные флористы отбирают для букетов каждый цветок.</p>
				</div>
			</li>
			<li>
				<img src="@/assets/img/advantage-3.svg" alt="Иконка фотоаппарата" width="59" height="52" />
				<div>
					<h3 class="features__list-title">Отправляем фото цветов</h3>
					<p>Перед доставкой сделаем фотографию букета и отправим вам.</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.features__title {
	visibility: hidden;
}
.features__list {
	list-style: none;
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 40px;

	& li {
		display: flex;
		align-items: flex-start;
		gap: 20px;
	}
}

.features__list-title {
	margin: 0 0 8px;
	font-weight: 400;
}
</style>
