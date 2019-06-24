<template>
<div>
  <div class="wrapper" v-if="!isLoading">
    <header class="header">
      <div class="headerChooseDistrict">
        <div class="headerChooseDistrict__title">空氣品質指標 (AQI)</div>
        <div class="districtsSelectorWrap">
          <select name="" id="districtsSelector" v-model="currentCounty">
            <option disabled="disabled">---請選擇地區---</option>
            <option :value="item" v-for="(item, index) in countySelectorData" :key="index"> {{ item }} </option>
          </select>
        </div>
      </div>
      <chart />
    </header>
    <div class="line">
      <div class="line__districtTitle">{{ currentCounty }}</div>
      <div class="line__dashDec"></div>
      <div class="line__updatedTime">{{ selectedDistrictData.PublishTime | ifEmpty }} 更新</div>
    </div>
    <main class="main">
      <div class="detail">
        <ul>
          <li class="detail__userChoosedDistrict">
            <div class="title" :class="{'font-s':selectedDistrictData.SiteName.length>2}">{{ selectedDistrictData.SiteName | ifEmpty }}</div>
            <div class="value" :class="AQIsituation(selectedDistrictData.AQI)">{{ selectedDistrictData.AQI | ifEmpty }}</div>
          </li>
          <li class="detail__item">
            <div class="detail__item__title">
              <span class="detail__item__title__zh">臭氧</span>
              <span class="detail__item__title__en">　O3 (ppb)</span>
            </div>
            <div class="detail__item__value">{{ selectedDistrictData.O3 | ifEmpty}}</div>
          </li>
          <li class="detail__item">
            <div class="detail__item__title">
              <span class="detail__item__title__zh">懸浮微粒</span>
              <span class="detail__item__title__en">　PM10 (μg/m³)</span>
            </div>
            <div class="detail__item__value">{{ selectedDistrictData.PM10 | ifEmpty}}</div>
          </li>
          <li class="detail__item">
            <div class="detail__item__title">
              <span class="detail__item__title__zh">細懸浮微粒</span>
              <span class="detail__item__title__en">　PM2.5 (μg/m³)</span>
            </div>
            <div class="detail__item__value">{{ selectedDistrictData['PM2.5'] | ifEmpty}}</div>
          </li>
          <li class="detail__item">
            <div class="detail__item__title">
              <span class="detail__item__title__zh">一氧化碳</span>
              <span class="detail__item__title__en">　CO (ppm)</span>
            </div>
            <div class="detail__item__value">{{ selectedDistrictData.CO | ifEmpty}}</div>
          </li>
          <li class="detail__item">
            <div class="detail__item__title">
              <span class="detail__item__title__zh">二氧化硫</span>
              <span class="detail__item__title__en">　SO2 (ppb)</span>
            </div>
            <div class="detail__item__value">{{ selectedDistrictData.SO2 | ifEmpty}}</div>
          </li>
          <li class="detail__item">
            <div class="detail__item__title">
              <span class="detail__item__title__zh">二氧化氮</span>
              <span class="detail__item__title__en">　NO2 (ppb)</span>
            </div>
            <div class="detail__item__value">{{ selectedDistrictData.NO2 | ifEmpty}}</div>
          </li>
        </ul>
      </div>
      <div class="districts">
        <ul>
          <li class="districts__item" v-for="(item, index) in replaceCounty" :key="index" @click="userSelectDistrick(item)">
            <div class="districts__item__title" :class="{'font-s':item.SiteName.length>2}">{{ item.SiteName}}</div>
            <div class="districts__item__value" :class="AQIsituation(item.AQI)">{{ item.AQI | ifEmpty }}</div>
          </li>
        </ul>
      </div>
    </main>
  </div>
  <Footer />  
  <Loading v-if="isLoading"/>
</div>
</template>

<script>
import Loading from '@/components/Loading';
import Chart from '@/components/Chart';
import Footer from '@/components/Footer';

export default {
  name: 'Index',
  components: {
    Chart,
    Footer,
    Loading,
  },
  data() {
    return {
      // api: 'https://script.google.com/macros/s/AKfycbxCXZjUDAF_i2DchP2dldBK2vbAjxRNhC50-7klXoeH9WjX9_s/exec?url=http://opendata2.epa.gov.tw/AQI.json',
      api: `${process.env.VUE_APP_GOOGLE_APPS_SCRIPT}?url=${process.env.VUE_APP_AQI_API}`,
      AQI_data: [],
      currentCounty: '新北市',
      selectedDistrictData: {},
      isLoading: false,
    }
  },
  methods: {
    ajaxPromise(api) {
      const vm = this;
      return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', api);
        xhr.send(null);
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(`連結失敗 ${xhr.status}`);
          }
        }
      })
    },
    AQIsituation(aqi) {
      let newVal = '';
      if (aqi > 0 && aqi <= 50) {
        newVal='level_A';
      } else if (aqi > 50 && aqi <= 100) {
        newVal='level_B';
      } else if (aqi > 100 && aqi <= 150) {
        newVal='level_C';
      } else if (aqi > 150 && aqi <= 200) {
        newVal='level_D';
      } else if (aqi > 200 && aqi <= 300) {
        newVal='level_E';
      } else if (aqi > 300 && aqi <= 400) {
        newVal='level_F';
      }
      !aqi ? newVal = 'font-s' : false;
      return newVal;
    },
    userSelectDistrick(areaData) {
      this.selectedDistrict = areaData.SiteName;
      this.selectedDistrictData = this.AQI_data.find((item, index) => {
        return item.SiteName === this.selectedDistrict;
      })
    },
    localSet(title, data) {
      localStorage.setItem(title, JSON.stringify(data));
    },
    localGet(title) {
      return JSON.parse(localStorage.getItem(title));
    },
    localStorageOrDefualt(title, defualtVal, dataName) {
      this.localGet(title) ? this[dataName] = this.localGet(title) : defualtVal;
    }
  },
  watch: {
    currentCounty() {
      this.localSet('_cc', this.currentCounty);
    },
    selectedDistrictData() {
      this.localSet('_dd', this.selectedDistrictData);
    }
  },
  computed: {
    countySelectorData() {
      const data = [];
      this.AQI_data.forEach((item) => {
        data.push(item.County);
      })
      const _data = data.filter((item, index, arr) => {
        return arr.indexOf(item) === index;
      })
      return _data;
    },
    replaceCounty() {
      return this.AQI_data.filter((item, index) => {
        return item.County == this.currentCounty;
      })
    },
  },
  filters: {
    ifEmpty(val) {
      return !val ? '-' : val;
    }
  },
  created() {
    this.localStorageOrDefualt('_cc', '新北市', 'currentCounty');
    this.localStorageOrDefualt('_dd', {}, 'selectedDistrictData');

    this.isLoading = true;
    this.ajaxPromise(this.api).then((res) => {
      this.AQI_data = Object.assign([], JSON.parse(res));
      this.isLoading = false;
    }).catch((error) => {
      console.log(error);
    });
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    max-width: 1280px;
    width: 100%;
    padding: 50px 0;
    margin: 0 auto;
    @include bp(2, '1280px', 0) {
      padding: 15px 15px 0 15px;
    }
  }
  //-------------------
  //header
  //-------------------
  .header {
    @include flex(space-around, center);
    // white-space: nowrap;
    // height: 110px;
    @include bp(2, '1280px', 0) {
      display: block;
    }
  }
  .headerChooseDistrict {
    width: 35%;
    height: 100%;
    margin-right: 20px;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @include bp(2, '1280px', 0) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 30px;
      padding: 0;
    }
    &__title {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 10px;
      @include bp(2, '1280px', 0) {
        font-size: 30px;
        margin-bottom: 25px;
      }
    }
    .districtsSelectorWrap {
      height: 50%;
      #districtsSelector {
        width: 100%;
        border: 3px solid #000;
        font-size: 16px;
        font-weight: bold;
        height: 50px;
        @include bp(2, '1280px', 0) {
          width: 100%;
          margin: 0 auto;
          padding: 0 15px;
        }
        @include bp(1, '1280px', 0) {
          width: 100%;
          margin: 0 auto;
          padding: 0 15px;
        }
      }
    }
  }

  //-----------------
  // line
  //-----------------
  .line {
    width: 100%;
    display: flex;
    margin: 35px 0;
    @include bp(2, '1280px', 0) {
      flex-wrap: wrap;
      justify-content: center;
    }
    &__districtTitle {
      font-size: 36px;
      flex: 0 0 150px;
    }
    &__dashDec {
      flex: 1 0;
      position: relative;
      margin: 0 15px;
      @include bp(2, '1280px', 0) {
        display: none;
      }
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
    min-height: calc(100vh - 369px);
    display: flex;
    flex-wrap: wrap;
  }
  .detail {
    width: 33%;
    @include bp(2, '1280px', 0) {
      width: 100%;
    }
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
        @include flex(center, center);
      }
      .value {
        width: 50%;
        padding: 16px 39px;
        // background-color: #FF5757;
        @include flex(center, center);
      }
    }
    &__item {
      padding: 20px 0;
      margin: 0 30px;
      display: flex;
      border-bottom: 1px solid #000;
      font-size: 24px;
      @include bp(2, '420px', 0) {
        font-size: 16px;
      }
      &__title {
        flex: 1 0;
        @include flex(flex-start, center);
        &__zh {}
        &__en {
          font-size: 16px;
        }
      }
      &__value {
        flex: 0 0 100px;
        @include flex(center, center);
        @include bp(2, '420px', 0) {
          flex: 0 0 60px;
        }
      }
      &:last-child {
        border-bottom: none;
      }
    }
    
  }
  .districts {
    width: 66%;
    @include bp(2, '1280px', 0) {
      margin-top: 30px;
      width: 100%;
    }
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
      cursor: pointer;
      @include bp(2, '1280px', 0) {
        flex: 0 0 100%;
        margin-left: 0;
      }
      &__title {
        background-color: #fff;
        padding: 16px 39px;
        width: 50%;
        border-right: 3px solid #000;
        @include flex(center, center);
      }
      &__value {
        // background-color: #FF5757;
        padding: 16px 39px;
        width: 50%;
        @include flex(center, center);
      }
    }
  }
</style>
