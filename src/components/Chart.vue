<template>
  <div class="chart">
    <ul>
      <li class="chart__item" v-for="item in chartData" :key="item.text">
        <div class="chart__item__header" :class="item.className">{{ item.score }}</div>
        <div class="chart__item__body">{{ item.text }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartData: [
        {
          text: '良好',
          score: '0 ~ 50',
          className: 'level_A'
        },
        {
          text: '普通',
          score: '51 ~ 100',
          className: 'level_B'
        },
        {
          text: '對敏感族群不健康',
          score: '101 ~ 150',
          className: 'level_C'
        },
        {
          text: '不健康',
          score: '151 ~ 200',
          className: 'level_D'
        },
        {
          text: '非常不健康',
          score: '201 ~ 300',
          className: 'level_E'
        },
        {
          text: '高危害',
          score: '301 ~ 400',
          className: 'level_F'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .chart {
    width: 75%;
    > ul {
      display: flex;
      border: 3px solid #000;
    }
    &__item {
      flex: 1 1;
      text-align: center;
      border-right: 3px solid #000;
      background-color: #fff;
      &:last-child {
        border-right: none;
      }
      &__header {
        border-bottom: 3px solid #000;
        padding: 16px 25px;
        height: 54px;
      }
      &__body {
        padding: 16px 25px;
        @include flex(center, center);
        height: 56px;
      }
    }
  }
</style>

