<template>
  <div>
      <vue-typer
        :text="[
          'Welcome to a \nNew Nigeria!',
          'A Nigeria of \nLimitless Possibilities!'
        ]"
        :repeat="Infinity"
        :shuffle="false"
        initial-action="typing"
        :pre-type-delay="70"
        :type-delay="70"
        :pre-erase-delay="2000"
        :erase-delay="250"
        erase-style="select-all"
        :erase-on-complete="false"
        caret-animation="blink"
      ></vue-typer>
    </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
  };
</script>

<style >
.vue-typer {
    font-size: 6rem !important;
    line-height: 5rem;
    font-weight: bold;
    position: absolute;
    top: 15rem;
    left: 2rem;
    z-index: 1;
}
.vue-typer .custom.char {

    color: #fff;
    text-shadow: 2px 2px #000;
}
</style>