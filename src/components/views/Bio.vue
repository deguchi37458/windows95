<template>
<div>
    <!-- <img class="self" src="@/assets/Biography/self.webp" /> -->
    <h2 class="header">Hiroki Deguchi</h2>
    <h4 class="subtitle" style="padding-bottom: 10px;">Web Engineer</h4>
    <h4 class="subtitle">📍 Japan Osaka</h4>
    <div class="inner-content">
        <h3 class="heading"><b>Personal Information</b></h3>
        <p class="paragraph">Birth: 1994/05/07</p>
        <p class="paragraph">E-mail: deguchi37458@gmail.com</p>
    </div>
    <div class="inner-content">
        <h3 class="heading"><b>Resume</b></h3>
        <a style="color: #FF5733;" href="/files/resume.pdf" class="paragraph">Check out my resume here.</a>
    </div>
</div>
</template>

<style scoped>
.badge-grid {
    display: table;
    align-items: center;
    margin-top: 20px;
}

.badge {
    width: auto;
    height: 20px;
    border-radius: 0px;
    font-size: 12px;
    padding-right: 10px;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 6px 20px 0 rgba(0, 0, 0, 0.1); */
}

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
    padding-bottom: 5px;
}

.header {
    padding-top: 20px;
    padding-bottom: 20px;
    font-weight: normal;
}

.inner-content {
    padding-top: 30px;
}

h2, h4, h3 {
    padding: 0;
    margin: 0;
}
</style>
