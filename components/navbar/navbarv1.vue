<template>
    <div id="navbarv1">
        <input type="checkbox" id="check"/>
        <label for="check">
        <svg viewBox="0 0 30 30" width="30" height="30">
            <path id="one" d="M4 10h22M4" stroke="#ccc" stroke-width="2" stroke-linecap="round"></path>
            <path id="two" d="M4 20h22M4" stroke="#ccc" stroke-width="2" stroke-linecap="round"></path>
            <path id="three" d="M4 15h22M4" stroke="#ccc" stroke-width="2" stroke-linecap="round"></path>
        </svg> Click me
        </label>
        <aside>
        <div class="top">
            <h2>{{menu.label}}</h2>
            <div
            v-for="item in menu.children" 
            :key="item.id">
            <treeMenu 
                :nodes="item.children" 
                :depth="0"   
                :label="item.label"
                />
            </div>
        </div>
        <div class="bottom">
            <p>&copy; pilot project fixed sidebar</p>
        </div>
        </aside>
        <article>
        <div class="wrapper">
            <div class="content">
            <h1>Off-Canvas menu on Pure CSS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum unde porro consequatur doloribus ex distinctio similique, voluptas repellendus voluptates nam dolorum! Repudiandae maxime, itaque vero dolorem distinctio inventore explicabo!</p>
            <p>Odio eaque cum blanditiis esse, earum saepe voluptate quae aliquid possimus facere non qui illo necessitatibus eveniet ab sit quaerat. Atque animi nulla veritatis molestiae qui ipsam ut assumenda facilis?</p>
            </div>
            <div class="footer">
            <p>Follow me <a href="https://twitter.com/andrejsharapov" target="_blank" title="">in Twitter</a></p>
            </div>
        </div>
        </article>
        <article>
        <div class="wrapper">
            <div class="content">
            <h1>Off-Canvas menu on Pure CSS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum unde porro consequatur doloribus ex distinctio similique, voluptas repellendus voluptates nam dolorum! Repudiandae maxime, itaque vero dolorem distinctio inventore explicabo!</p>
            <p>Odio eaque cum blanditiis esse, earum saepe voluptate quae aliquid possimus facere non qui illo necessitatibus eveniet ab sit quaerat. Atque animi nulla veritatis molestiae qui ipsam ut assumenda facilis?</p>
            </div>
            <div class="footer">
            <p>Follow me <a href="https://twitter.com/andrejsharapov" target="_blank" title="">in Twitter</a></p>
            </div>
        </div>
        </article>
        <article>
        <div class="wrapper">
            <div class="content">
            <h1>Off-Canvas menu on Pure CSS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum unde porro consequatur doloribus ex distinctio similique, voluptas repellendus voluptates nam dolorum! Repudiandae maxime, itaque vero dolorem distinctio inventore explicabo!</p>
            <p>Odio eaque cum blanditiis esse, earum saepe voluptate quae aliquid possimus facere non qui illo necessitatibus eveniet ab sit quaerat. Atque animi nulla veritatis molestiae qui ipsam ut assumenda facilis?</p>
            </div>
            <div class="footer">
            <p>Follow me <a href="https://twitter.com/andrejsharapov" target="_blank" title="">in Twitter</a></p>
            </div>
        </div>
        </article>
        <article>
        <div class="wrapper">
            <div class="content">
            <h1>Off-Canvas menu on Pure CSS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum unde porro consequatur doloribus ex distinctio similique, voluptas repellendus voluptates nam dolorum! Repudiandae maxime, itaque vero dolorem distinctio inventore explicabo!</p>
            <p>Odio eaque cum blanditiis esse, earum saepe voluptate quae aliquid possimus facere non qui illo necessitatibus eveniet ab sit quaerat. Atque animi nulla veritatis molestiae qui ipsam ut assumenda facilis?</p>
            </div>
            <div class="footer">
            <p>Follow me <a href="https://twitter.com/andrejsharapov" target="_blank" title="">in Twitter</a></p>
            </div>
        </div>
        </article>
    </div>
</template>
<script>
import treeMenu from './treemenunavbarv1'
export default {
    name:'navbarv1',
    components:{
        treeMenu
    },
    props:{
        menu:{
            type:Object,
            required:true
        }
    },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Signika");
*,
::before,
::after {
  box-sizing: border-box;
}


a {
  text-decoration: none;
  color: #3369e7;
}

#check{
  display: none;
}
#menu{
  display: none;
}

#check + label {
  position: absolute;
  top: 1em;
  left: 1em;
  z-index: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
}
#check + label::before {
  position: absolute;
  content: '';
  top: -1em;
  left: -1em;
  width: 100vw;
  height: 100vh;
  background-color: rgba(33, 33, 61, 0.5);
  transform-origin: 50% 50%;
  transform: scale(1.3);
  visibility: hidden;
  opacity: 0;
  transition: all 250ms linear;
}
#check + label svg {
  margin-right: 0.5em;
}
#check + label svg path {
  transform-origin: 35% 50%;
  transition: transform 166.6666666667ms cubic-bezier(0.06, 0.63, 0.91, 0.66);
}
#check:checked + label ~ aside {
  transform: none;
}
#check:checked + label::before {
  left: calc(25vw - 1em);
  transform: scale(1);
  visibility: visible;
  opacity: 1;
}
@media (max-width: 576px) {
  #check:checked + label::before {
    left: calc(50vw - 1em);
  }
}
#check:checked + label svg #one {
  transform: rotate(45deg);
}
#check:checked + label svg #two {
  transform: rotate(-45deg);
}
#check:checked + label svg #three {
  display: none;
}
#check:checked + label ~ article {
  z-index: -1;
  transform: translateX(25vw) scale(0.7);
  border-radius: 0.25em;
  user-select: none;
  pointer-events: none;
}

aside,
article {
  padding: 2.5em 1em 0.25em;
  transition: all 250ms cubic-bezier(0.06, 0.63, 0.91, 0.66);
}

aside {
  position: absolute;
  width: 25vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-image: linear-gradient(45deg, #3369e7, #2ede98); */
  transform: translateX(-100%);
}
@media (max-width: 576px) {
  aside {
    width: 50vw;
  }
}

article {
  position: relative;
  transform-origin: 10% 50%;
  width: 100%;
  /* background-image: linear-gradient(45deg, #1cc7d0, #2ede98); */
}
article .wrapper {
  margin: auto;
  padding: 2em;
  max-width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
article .wrapper h1 {
  margin: 0;
}
article .wrapper .footer {
  text-align: right;
}
</style>
