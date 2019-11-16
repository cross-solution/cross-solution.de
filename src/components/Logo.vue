<!--
just the Logo
-->
<template>
  <div class="CROSSLogo">
    <div class="CROSS CROSS-blue1" />
    <div class="CROSS CROSS-blue2" />
    <div class="CROSS CROSS-blue3" />
    <div class="CROSS Name"><a href="/"><span style="color: white">CR</span>OSS Solution</a></div>
  </div>
</template>

<style lang="scss">
$blue: #5498d7;
$orange: #faa427;
$width: 30px;
$top: 8px;
$left: 0px;
$margin: 3px;

.CROSSLogo {
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 40px;
  width: 135px;
  font-size: 12px;
}

.CROSS {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}

.CROSS-blue1 {
  top: $top;
  left: $left;
  display: inline-block;
  height: $width;
  width: $width * 2 / 3;
  background-color: $blue;
}

.CROSS-blue2 {
  top: $top + $width / 3;
  left: $left + $width / 3;
  display: inline-block;
  height: $width * 2 /3;
  width: $width * 2 / 3;
  background-color: $blue;
}

.CROSS-blue3 {
  top: $top;
  left: $left + $width * 2 / 3;
  display: inline-block;
  height: $width * 1 / 3;
  width: $width * 1 / 3;
  background-color: $blue;
  animation: goright 2s linear forwards 1.5s;
}

.Name {
  top: 25px;
  left: $left + $width;
  animation: goleft 0.5s linear forwards 1s;
}
.CROSS a {
  color: $blue;
  text-decoration: none;
}

@keyframes goleft {
  100% {
    left: 15px;
  }
}

@keyframes goright {
  1% {
    top: $top - 3px;
    left: $left + $width * 2 / 3 + $margin;
  }
  10% {
    top: $top - 3px;
    left: $left + $width * 2 / 3 + $margin;
    transform: rotate(-10deg);
  }
  20% {
    top: $top - 3px;
    left: $left + $width * 2 / 3 + $margin;
    transform: rotate(20deg);
  }
  30% {
    top: $top - 3px;
    left: $left + $width * 2 / 3 + $margin;
    background-color: $orange;
    transform: rotate(-20deg);
  }
  40% {
    top: $top - 3px;
    left: $left + $width * 2 / 3 + $margin;
    background-color: $blue;
    transform: rotate(30deg);
  }
  50% {
    top: $top - 3px;
    left: $left + $width * 2 / 3 + $margin;
    transform: rotate(-30deg);
  }
  60% {
    top: $top - 3px;
    left: $left + $width * 2 / 3 + $margin;
    transform: rotate(40deg);
  }
  70% {
    top: $top - 3px;
    left: $left + $width * 2 / 3 + $margin;
    transform: rotate(-40deg);
  }
  70% {
    top: $top - 3px;
    left: $left + $width * 2 / 3 + $margin;
    transform: rotate(20deg);
  }
  80% {
    top: $top - 3px;
    left: $left + $width * 2 / 3 + $margin;
    transform: rotate(-10deg);
  }
  100% {
    top: $top - 3px;
    left: $left + $width * 2 / 3 + $margin;
    transform: rotate(-10deg);
    background-color: $orange;
  }
}
</style>
