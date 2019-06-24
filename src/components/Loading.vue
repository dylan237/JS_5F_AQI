<template>
  <div class="loadingWrap">
    <div class="donut"></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

  .loadingWrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.84);
    @include flex(center, center);
  }

  @keyframes donut-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .donut {
    display: inline-block;
    border: 5px solid #000;
    border-left-color: #7983ff;
  /*   border-right-color: #7983ff; */
    border-radius: 50%;
    width: 70px;
    height: 70px;
    animation: donut-spin .8s linear infinite;
}

</style>