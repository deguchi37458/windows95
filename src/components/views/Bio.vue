<template>
<div>
    <!-- <img class="self" src="@/assets/Biography/self.webp" /> -->
    <h2 class="header">ﾃﾞｸﾞﾁ ﾋﾛｷ (出口裕樹)</h2>
    <h4 class="subtitle" style="padding-bottom: 10px;">Web Engineer</h4>
    <h4 class="subtitle">Japan 📍</h4>
    <!-- <div class="badge-grid">
        <img class="badge" alt="Swift" src="https://img.shields.io/badge/-Swift-orange" />
        <img class="badge" alt="Python" src="https://img.shields.io/badge/-Python-blue" />
        <img class="badge" alt="JavaScript" src="https://img.shields.io/badge/-Javascript-yellow" />
        <img class="badge" alt="SQL" src="https://img.shields.io/badge/-SQL-lightgrey" />
        <img class="badge" alt="Git" src="https://img.shields.io/badge/-Git-critical" />
        <img class="badge" alt="HTML/CSS" src="https://img.shields.io/badge/-HTML%2FCSS-yellowgreen" />
        <img class="badge" alt="SwiftUI" src="https://img.shields.io/badge/-SwiftUI-3e8bc3" />
        <img class="badge" alt="Vue" src="https://img.shields.io/badge/-VueJS-61b083" />
        <img class="badge" alt="Flask" src="https://img.shields.io/badge/-Flask-406893" />
        <img class="badge" alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-4ca158" />
        <img class="badge" alt="SQLite" src="https://img.shields.io/badge/-SQLite-64a2c9" />
        <img class="badge" alt="Figma" src="https://img.shields.io/badge/-Figma-8c5aee" />
    </div> -->
    <div class="inner-content">
        <h3 class="heading"><b>Personal Information</b></h3>
        <p class="paragraph">Date of Birth: 1994/05/07</p>
        <p class="paragraph">Address: Osaka</p>
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
