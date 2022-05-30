<template>
  <div class="card">
    <header>
      <img
        class="avatar"
        width="40px"
        height="40px"
        alt="flameking"
        src="../assets/logo.png"
      />
      <p class="name">flameking</p>
    </header>
    <footer>
      <input
        class="search"
        type="text"
        placeholder="search user..."
        @keyup="onKeyup"
      />
    </footer>
  </div>
</template>
<script>
export default {
  name: "Card",

  data() {
    return {};
  },
  methods: {
    onKeyup(e) {
      this.search(e.target.value);
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  padding: 12px;
  border-bottom: solid 1px #24272c;
}
footer {
  margin-top: 10px;
}

.avatar,.name{
  vertical-align: middle;
}

.avatar{
  border-radius: 2px;
}

.name{
  display: inline-block;
  margin: 0 0 0 15px;
  font-size: 16px;
}

.search {
        padding: 0 10px;
        width: 100%;
        font-size: 12px;
        color: #fff;
        height: 30px;
        line-height: 30px;
        border: solid 1px #3a3a3a;
        border-radius: 4px;
        outline: none;
        background-color: #26292E;
    }
</style>