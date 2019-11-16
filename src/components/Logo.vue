<!--
just the Logo
-->
<template>
  <div class="CROSSLogo">
    <div class="CROSS CROSS-blue1" />
    <div class="CROSS CROSS-blue2" />
    <div class="CROSS CROSS-blue3" />
    <div class="CROSS Name"><a href="/">CROSS</a></div>
  </div>
</template>

<style lang="scss">
$blue: #5498d7;
$orange: #faa427;
$width: 60px;

.CROSSLogo {
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 70px;
  width: 270px;
  font-size: 17px;
}

.CROSS {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}

.CROSS-blue1 {
  top: 10px;
  left: 0px;
  display: inline-block;
  height: $width;
  width: $width * 2 / 3;
  background-color: $blue;
}

.CROSS-blue2 {
  top: 30px;
  left: 20px;
  display: inline-block;
  height: 40px;
  width: 40px;
  background-color: $blue;
}

.CROSS-blue3 {
  top: 10px;
  left: 40px;
  display: inline-block;
  height: $width * 1 / 3;
  width: $width * 1 / 3;
  background-color: $blue;
  animation: goright 2s linear forwards 1.5s;
}

.Name {
  top: 51px;
  left: 70px;
  animation: goleft 0.5s linear forwards 1s;
}
.CROSS a {
  color: #fff;
}

@keyframes goleft {
  100% {
    left: 2.5px;
  }
}

@keyframes goright {
  1% {
    top: 5px;
    left: 45px;
  }
  10% {
    top: 5px;
    left: 45px;
    transform: rotate(-10deg);
  }
  20% {
    top: 5px;
    left: 45px;
    transform: rotate(20deg);
  }
  30% {
    top: 5px;
    left: 45px;
    background-color: $orange;
    transform: rotate(-20deg);
  }
  40% {
    top: 5px;
    left: 45px;
    background-color: $blue;
    transform: rotate(30deg);
  }
  50% {
    top: 5px;
    left: 45px;
    transform: rotate(-30deg);
  }
  60% {
    top: 5px;
    left: 45px;
    transform: rotate(40deg);
  }
  70% {
    top: 5px;
    left: 45px;
    transform: rotate(-40deg);
  }
  70% {
    top: 5px;
    left: 45px;
    transform: rotate(20deg);
  }
  80% {
    top: 5px;
    left: 45px;
    transform: rotate(-10deg);
  }
  100% {
    top: 5px;
    left: 45px;
    transform: rotate(-10deg);
    background-color: $orange;
  }
}
</style>
