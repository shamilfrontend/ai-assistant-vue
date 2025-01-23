<template>
  <div class="forbidden">
    <div class="forbidden__inner">
      <div class="forbidden__code">403</div>
      <div class="forbidden__text">
        К сожалению, у вас нет доступа
        <br>к просмотру информации <br>в данной компании
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.forbidden {
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
