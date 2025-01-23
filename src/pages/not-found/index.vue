<template>
  <div class="not-found-page">
    <div class="not-found-page__inner">
      <div class="not-found-page__code">404</div>
      <div class="not-found-page__text">
        Кажется, что-то пошло нет так. <br>
        Страница, которую вы запрашиваете, не&nbsp;существует.
        Возможно, она&nbsp;устарела, была&nbsp;удалена, или&nbsp;был&nbsp;введен неверный&nbsp;адрес&nbsp;в&nbsp;адресной&nbsp;строке.
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.not-found-page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;

  &__inner {
    padding-top: 64px;
    padding-left: 16px;
    padding-right: 16px;
  }

  &__code {
    margin-top: 24px;
    margin-bottom: 4px;
    font-size: 64px;
    font-weight: 700;
    line-height: 72px;
    color: var(--color-black);
  }

  &__text {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: var(--color-grey-500);
    letter-spacing: 0.21px;
  }
}
</style>
