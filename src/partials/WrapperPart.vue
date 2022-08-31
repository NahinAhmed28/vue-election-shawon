<template>
  <div class="wrapper">
    <slot name="sidebar">
    </slot>
    <slot name="header">
    </slot>
    <div class="page-content-wrapper">
      <div class="page-content">
    <slot name="content">
    </slot>
    </div>
    </div>
  </div>
</template>
<script>
export default {
name: 'WrapperPart',
components: {
},
props: {
    msg: String
  }
}
</script>
