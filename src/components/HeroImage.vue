<template>
  <section id="hero-img">
    <div class="container">
        <img src="../assets/bg.png" alt="" ref="img">
    </div>
  </section>
</template>

<script>
export default {
  created () {
    // $(this.$refs.img).click(function () {
    //   console.log('WORKS')
    // })
    console.log($(this.$refs.img))
  }
}
</script>
