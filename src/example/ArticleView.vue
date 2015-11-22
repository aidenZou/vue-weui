<template>
  <div class="page article">
      <div class="hd">
          <h1 class="page_title">Article</h1>
      </div>
      <div class="bd">
          <article class="weui_article">
              <h1>大标题</h1>
              <section>
                  <h2 class="title">章标题</h2>
                  <section>
                      <h3>1.1 节标题</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute</p>
                  </section>
                  <section>
                      <h3>1.2 节标题</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </section>
              </section>
          </article>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleView'
}
</script>

<style lang="less">
@import "../style/base/fn";

.weui_article {
    padding: 20px 15px;
    font-size: 15px;
    section {
        margin-bottom: 1.5em;
    }
    h1 {
        font-size: 17px;
        font-weight:400;
        margin-bottom: .75em;
    }
    h2 {
        font-size: 16px;
        font-weight:400;
        margin-bottom: .3em;
    }
    h3 {
        font-weight:400;
        font-size: 15px;
    }
}
</style>
