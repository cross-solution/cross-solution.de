<!--
just the Logo
-->
<template>
  <div class="CROSSLogo">
    <div class="CROSS CROSS-blue1" />
    <div class="CROSS CROSS-blue2" />
    <div class="CROSS CROSS-blue3" />
    <div class="CROSS Name archivo">
      <a href="/">
        <q-tooltip
          transition-show="scale"
          transition-hide="scale"
        >Consulting &amp; Research Open Source Solutions</q-tooltip><span style="color: white">CR</span>OSS
      </a>
    </div>
  </div>
</template>

<style lang="scss">
$blue: $primary;
$orange: $secondary;
$width: 60px;
$top: 8px;
$left: 0px;
$margin: 3px;

.CROSSLogo {
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 70px;
  width: 180px;
  margin-top: 5px;
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
  background-color: $primary;
  animation: goright 1s linear forwards 0.5s;
  &:hover {
    animation: goleft 1.2s linear forwards 0.2s;
  }
}

.Name {
  top: 37px;
  left: $left + $width - 3;
  animation: goleft 1.2s linear forwards 0.2s;
  font-size: 28px;
}
.CROSS a {
  color: $blue;
  text-decoration: none;
  &:hover {
    color: orange;
  }
}

@keyframes goleft {
  100% {
    left: 16px;
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
    background-color: $orange;
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
