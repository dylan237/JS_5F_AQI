<template>
  <footer class="footer">
    <div class="wrap">
      <span class="source">資料來源：行政院環境保護署</span>
      <span class="copyright">Copyright &#169; 2019 HexSchool. All rights reserved.</span>
    </div>
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
    padding: 15px 0;
    .wrap {
      @include flex(space-between, center);
      flex-wrap: wrap;
      max-width: 1280px;
      min-width: 320px;
      width: 100%;
      margin: 0 auto;
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

