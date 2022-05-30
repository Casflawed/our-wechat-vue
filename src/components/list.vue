<template>
  <div class="list">
    <ul >
      <li v-for="session in sessions" :key="session">
        <img
        class="avatar"
        width="40px"
        height="40px"
        :alt="session"
        key="session"
        src="../assets/logo.png"
      />
      <p class="name">{{session}}</p>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
    name: 'List',
    data(){
        return {
          sessions:[
            "陈正浩",
            "谢勤严",
            "龙思宇",
            "王威",
            "岳鸿昊"
          ]
        }
    }
}
</script>

<style scoped>
    li {
        padding: 12px 15px;
        border-bottom: 1px solid #292C33;
        cursor: pointer;
        transition: background-color .1s;
        list-style-type: none;
        
    }
    .avatar, .name {
        vertical-align: middle;
    }
    .avatar {
        border-radius: 2px;
    }
    .name {
        display: inline-block;
        margin: 0 0 0 15px;
    }
</style>