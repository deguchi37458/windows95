<template>
<div>
    <h2>ｵｰﾌﾟﾝｿｰｽ</h2>

    <div class="inner-content">
        <p class="paragraph">Vue.jsを用いたﾃｰﾏの作成を行なっております。</p>
    </div>

    <div class="inner-content">
        <a href="https://main-preview-site.netlify.app/" target="_blank">
            <img src="@/assets/open-source/main.png" alt="screenshot of main preview template" />
            <h4 class="subtitle">Linux Theme</h4>
        </a>
    </div>
    <div class="inner-content">
        <a href="https://windows-template.netlify.app/" target="_blank">
            <img src="@/assets/open-source/win95.png" alt="screenshot of windows 95 template" />
            <h4 class="subtitle">Windows95 Theme</h4>
        </a>
    </div>
</div>
</template>

<style scoped>
.self {
    width: 100%;
    height: auto;
    /* border-radius: 5px; */
}

.subtitle {
    font-size: 12px;
    color: gray;
}

.heading {
    padding-bottom: 20px;
}

.header {
    padding-top: 20px;
    padding-bottom: 20px;
}

.inner-content {
    padding-top: 30px;
}

h2,
h4,
h3 {
    padding: 0;
    margin: 0;
}

img {
    width: 100%;
    height: auto;
}

a, .subtitle {
    color: #FF5733 !important;
}
</style>
