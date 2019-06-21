<template>
<div>
  <div class="wrapper">
    <header class="header">
      <div class="headerChooseDistrict">
        <div class="headerChooseDistrict__title">空氣品質指標 (AQI)</div>
        <div class="districtsSelectorWrap">
          <select name="" id="districtsSelector">
            <option value="----">請選擇地區</option>
          </select>
        </div>
      </div>
      <div class="chart">
        <ul>
          <li class="chart__item">
            <div class="chart__item__header">0～50</div>
            <div class="chart__item__body">良好</div>
          </li>
          <li class="chart__item">
            <div class="chart__item__header">0～50</div>
            <div class="chart__item__body">良好</div>
          </li>
          <li class="chart__item">
            <div class="chart__item__header">0～50</div>
            <div class="chart__item__body">良好</div>
          </li>
          <li class="chart__item">
            <div class="chart__item__header">0～50</div>
            <div class="chart__item__body">良好</div>
          </li>
          <li class="chart__item">
            <div class="chart__item__header">0～50</div>
            <div class="chart__item__body">良好</div>
          </li>
          <li class="chart__item">
            <div class="chart__item__header">0～50</div>
            <div class="chart__item__body">良好</div>
          </li>
        </ul>
      </div>
    </header>
    <div class="line">
      <div class="line__districtTitle">基隆市</div>
      <div class="line__dashDec"></div>
      <div class="line__updatedTime">2019-06-21 10:00更新</div>
    </div>
    <main class="main">
      <div class="detail">
        <ul>
          <li class="detail__userChoosedDistrict">
            <div class="title">基隆</div>
            <div class="value">23</div>
          </li>
          <li class="detail__item">
            <div class="detail__item__title">
              <span class="detail__item__title__zh">臭氧</span>
              <span class="detail__item__title__en">O3(ppb)</span>
            </div>
            <div class="detail__item__value">30</div>
          </li>
          <li class="detail__item">
            <div class="detail__item__title">
              <span class="detail__item__title__zh">臭氧</span>
              <span class="detail__item__title__en">O3(ppb)</span>
            </div>
            <div class="detail__item__value">30</div>
          </li>
          <li class="detail__item">
            <div class="detail__item__title">
              <span class="detail__item__title__zh">臭氧</span>
              <span class="detail__item__title__en">O3(ppb)</span>
            </div>
            <div class="detail__item__value">30</div>
          </li>
          <li class="detail__item">
            <div class="detail__item__title">
              <span class="detail__item__title__zh">臭氧</span>
              <span class="detail__item__title__en">O3(ppb)</span>
            </div>
            <div class="detail__item__value">30</div>
          </li>
        </ul>
      </div>
      <div class="districts">
        <ul>
          <li class="districts__item">
            <div class="districts__item__title">基隆</div>
            <div class="districts__item__value">30</div>
          </li>
          <li class="districts__item">
            <div class="districts__item__title">基隆</div>
            <div class="districts__item__value">30</div>
          </li>
          <li class="districts__item">
            <div class="districts__item__title">基隆</div>
            <div class="districts__item__value">30</div>
          </li>
          <li class="districts__item">
            <div class="districts__item__title">基隆</div>
            <div class="districts__item__value">30</div>
          </li>
        </ul>
      </div>
    </main>
  </div>
  <footer class="footer">
    <span>資料來源：行政院環境保護署</span>
    <span class="copyright">Copyright © 2019 HexSchool. All rights reserved.</span>
  </footer>
</div>
</template>

<script>

export default {
  name: 'home',
  components: {

  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    max-width: 1280px;
    margin: 50px auto 0 auto;
  }
  //-------------------
  //header
  //-------------------
  .header {
    @include flex(space-around, center);
    // white-space: nowrap;
    height: 110px;
  }
  .headerChooseDistrict {
    width: 35%;
    height: 100%;
    margin-right: 20px;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__title {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .districtsSelectorWrap {
      height: 50%;
      #districtsSelector {
        width: 100%;
        border: 3px solid #000;
        height: 90%;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
  .chart {
    width: 75%;
    > ul {
      display: flex;
      border: 3px solid #000;
    }
    &__item {
      flex: 1 1;
      text-align: center;
      &__header {
        background-color: #95F084;
        border-bottom: 3px solid #000;
        padding: 16px 25px;
      }
      &__body {
        background-color: #fff;
        padding: 16px 25px;
      }
    }
    &__item:not(:last-child) .chart__item__header,
    &__item:not(:last-child) .chart__item__body {
      border-right: 3px solid #000;
    }
  }
  //-----------------
  // line
  //-----------------
  .line {
    width: 100%;
    display: flex;
    margin: 35px 0;
    &__districtTitle {
      font-size: 36px;
      flex: 0 0 150px;
    }
    &__dashDec {
      flex: 1 0;
      position: relative;
      margin: 0 15px;
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        width: 100%;
        border-bottom: 3px dashed #000;
      }
    }
    &__updatedTime {
      flex: 0 0 200px;
      padding-top: 15px;
    }
  }
  //-----------------
  // main
  //-----------------
  .main {
    min-height: calc(100vh - 378px);
    display: flex;
    flex-wrap: wrap;
  }
  .detail {
    width: 33%;
    > ul {
      border: 3px solid #000;
      background-color: #fff;
    }
    &__userChoosedDistrict {
      display: flex;
      text-align: center;
      border-bottom: 3px solid #000;
      font-size: 36px;
      .title {
        width: 50%;
        padding: 16px 39px;
        border-right: 3px solid #000;
      }
      .value {
        width: 50%;
        padding: 16px 39px;
        background-color: #FF5757;

      }
    }
    &__item {
      padding: 20px 0;
      margin: 0 30px;
      display: flex;
      border-bottom: 1px solid #000;
      &__title {
        flex: 0 0 150px;
        font-size: 24px;
        &__zh {}
        &__en {
          font-size: 16px;
        }
      }
      &__value {
        flex: 1 0;
        font-size: 24px;
        @include flex(center, center);
      }
      &:last-child {
        border-bottom: none;
      }
    }
    
  }
  .districts {
    width: 66%;
    > ul {
      display: flex;
      flex-wrap: wrap;
    }
    &__item {
      flex: 0 0 calc(50% - 40px);
      display: flex;
      font-size: 36px;
      margin-left: 40px;
      margin-bottom: 40px;
      border: 3px solid #000;
      &__title {
        background-color: #fff;
        padding: 16px 39px;
        width: 50%;
        border-right: 3px solid #000;
      }
      &__value {
        background-color: #FF5757;
        padding: 16px 39px;
        width: 50%;
      }
    }
  }
  //-----------------
  // footer
  //-----------------  
  .footer {
    background-color: #000;
    color: #fff;
    margin-top: 50px;
    height: 35px;
    padding: 0 85px;
    @include flex(space-between, center);
    .copyright {
      font-family: 'Open Sans';
      font-weight: 100;
      font-size: 16px;
    }
  }
</style>
