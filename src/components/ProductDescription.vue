<template>
  <article>
    <div class="orange">
      <div
        class="content"
        style="width: 90%; margin: 0 auto; border: 1px solid #FEF1DF;"
      >
        <h1>{{title}}</h1>
        <product-icons :icons="icons" />

        <div class="content-info">{{description}}</div>
        <div class="btn-touch">
          <a
            class="btn_02 btn_01"
            href="#"
          >Get in touch!</a>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import ProductIcons from '../components/ProductIcons.vue'
export default {
  props: {
    name: String,
    title: String,
    subtitle: String,
    icons: Array,
    text: String,
    description: String
  },
  components: {
    ProductIcons
  }
}
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
  font-family: "Heebo", sans-serif;
  font-weight: 400;
  font-size: 35px;
  margin-top: 2rem;
}
a {
  text-decoration: none;
  opacity: 1;
  color: 0.5498d7;
  background-color: #fff;
}
a:hover {
}
.btn-touch {
  position: relative;
  z-index: 2;
  text-align: center;
  width: 100%;
  margin-bottom: 3.5rem;
}
.btn_01 a {
  cursor: pointer;
  color: #555;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.btn_01 {
  position: relative;
  text-transform: uppercase;
  border: 1px solid #5498d7;
  padding: 1rem 2rem;
  font-size: 1rem;
  letter-spacing: 2px;
  opacity: 0;
  -webkit-transition: opacity 0.25s, background-color 0.25s;
  transition: opacity 0.25s, background-color 0.25s;
  font-weight: 400;
  font-family: "Archivo Black", sans-serif;
}
.btn_01:hover::before,
.btn_01:hover::after {
  width: 100%;
  height: 100%;
}
.btn_01:before,
.btn_01:after {
  content: "";
  position: absolute;
  display: block;
  width: 1rem;
  height: 1rem;
  border: 2px solid transparent;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: width 0.5s, height 0.5s;
  transition: width 0.5s, height 0.5s;
}
.btn_01:before {
  top: 0;
  right: 0;
  border-top-color: #5498d7;
  border-right-color: #5498d7;
  opacity: 0.8;
}
.btn_01:after {
  left: 0;
  bottom: 0;
  border-bottom-color: #5498d7;
  border-left-color: #5498d7;
  opacity: 0.8;
}
.btn_01:hover:before,
.btn_01:hover:after {
  width: 100%;
  height: 100%;
}
#content-info {
  font-weight: 300;
  font-size: 18px;
  width: 70%;
  margin: 30px auto;
  line-height: 1.6rem;
}
#icons-bar {
  margin: 15px auto 0 0;
  padding-top: 10px;
  width: 100%;
  text-align: center;
}
</style>
