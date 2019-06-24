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
    @include bp(2, '1280px', 0) {
      width: 100%;
      font-size: 12px;
    }
    > ul {
      display: flex;
      border: 3px solid #000;
      @include bp(2, '1280px', 0) {
        flex-wrap: wrap;
      }
    }
    &__item {
      flex: 1 1;
      text-align: center;
      border-right: 3px solid #000;
      background-color: #fff;
      @include bp(2, '1280px', 0) {
        flex: 0 0 33.33333%;
        border-right: none;
      }
      &:last-child {
        border-right: none;
        @include bp(2, '1280px', 0) {
          border-right: none;
        }
      }
      &__header {
        border-bottom: 3px solid #000;
        padding: 16px 25px;
        height: 54px;
        @include bp(2, '1280px', 0) {
          border-bottom: none;
        }
      }
      &__body {
        padding: 16px 25px;
        @include flex(center, center);
        height: 56px;
      }
    }
  }
</style>

