<template>
  <footer class="footer">
    <span class="source">資料來源：行政院環境保護署</span>
    <span class="copyright">Copyright &#169; 2019 HexSchool. All rights reserved.</span>
  </footer>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .footer {
    background-color: #000;
    color: #fff;
    margin-top: 50px;
    min-height: 35px;
    padding: 0 85px;
    @include flex(space-between, center);
    flex-wrap: wrap;
    @include bp(2, '1280px', 0) {
      padding: 15px;
    }
    .source {
      @include bp(2, '1280px', 0) {
        display: block;
        width: 100%;
        margin-bottom: 10px;
      }
    }
    .copyright {
      font-family: 'Open Sans';
      font-weight: 100;
      font-size: 16px;
      @include bp(2, '1280px', 0) {
        display: block;
        width: 100%;
      }
    }
  }
</style>

