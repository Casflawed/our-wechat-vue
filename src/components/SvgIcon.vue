<template>
    <svg class="svg-icon" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
export default {
    name: 'SvgIcon',
    props: {
        iconname: {
            type: String,
            required: true
        }
    },
    computed: {
        iconName() {
            return `#${this.iconname}`
        }
    }
}
</script>

<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.svg-icon{
    height: 20px;
    width: 20px;
}
</style>