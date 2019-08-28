<template>    
    <div class="tree-menu">
        <div v-if="clickable" class="label-wrapper" @click="toggleChildren" v-animation>
            <div :style="indent" :class="labelClasses">
                <a href="#" v-if="nodes">
                    <div class="arrow">
                        <span></span>
                    </div>
                <strong> {{ label }} </strong></a>
                <a href="#" v-else>{{ label }}</a>
            </div>
        </div>
        <div v-else class="label-wrapper" @mouseover="toggleChildren" v-animation>
            <div :style="indent" :class="labelClasses">
                <a href="#" v-if="nodes">
                    <div class="arrow">
                        <span></span>
                    </div>
                <strong> {{ label }} </strong></a>
                <a href="#" v-else>{{ label }}</a>
            </div>
        </div>
        <section v-if="showChildren" @mouseleave="toggleChildren">
            <tree-menu 
            v-for="node in nodes" 
            :nodes="node.children" 
            :label="node.label"
            :depth="depth + 1"   
            :key="node.id"
            >
        </tree-menu>
        </section>
    </div>
</template>

<script>
export default {
    name: 'tree-menu',
  props: [ 'nodes', 'label', 'depth' ,'clickable'],
  data() {
     return {
       showChildren: false,
     }
  },
  computed: {
    labelClasses() {
      return { 'has-children': this.nodes }
    },
    indent() {
      return { transform: `translate(${this.depth * 20}px)` }
    }
  },
  methods: {
    toggleChildren() {
       this.showChildren = !this.showChildren;
    }
  }
}
</script>
<style scoped>
/* start styling arrow  */
.arrow{
    position: relative;
    top: +15px;
    left: -15px;
    /* transform: translate(-50%,-50%); */
}
.arrow span{
    display: block;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid #06A8FF;
    border-right: 2px solid #06A8FF;
    transform: rotate(45deg);
    margin: 0px;
}

/* end styling arrow */

/*start styling of label */
.label-wrapper {
    display: inline-block;
    padding-left: 2em;
    padding-right: -1em;
    background-color: aquamarine;
}

.label-wrapper.v-enter {
    animation: fadein .20s;
}

.label-wrapper.v-leave {
    animation: fadeout .20s;
}

@keyframes fadein {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes fadeout {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(0);
    }
}
/* end styling label */
</style>
