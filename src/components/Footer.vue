<template>
  <footer class="footer">
    <span>資料來源：行政院環境保護署</span>
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

