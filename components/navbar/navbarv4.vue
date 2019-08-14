<template>
    <div>
        <h1>CSS ToolTip Smooth Animation </h1>
        <p>
        position ofclass: {{box.style}}
        </p>
<!--    con = The Container for items -->
    <div class="con">
      
      <!-- Left tooltip -->
    <div class="con-tooltip left">
      <p> Left </p>
      <div class="tooltip ">
        <p>Left</p>
      </div>
    </div>
      <!-- Top tooltip-->
      <div class="con-tooltip top">
        <p> Top </p>
        <div class="tooltip ">
          <p>Top</p>
        </div>
      </div>
    
      
      <!-- Bottom tooltip-->
      <div class="con-tooltip bottom">
        <p> bottom </p>
        <div class="tooltip ">
          <p>bottom</p>
        </div>
      </div>

      <!-- Right tooltip-->
    <div class="con-tooltip right">
      <p> Right </p>
      <div class="tooltip ">
        <p>Right</p>
      </div>
    </div>
      
      <!--      End con = Container-->
    </div>
        <div style="width: 300px; border-color:blue;
        border-style:solid; border-width:1;">
        <span>Short span. </span>
        <span id="longspan">Long span that wraps within this div.</span>
        </div>

        <div id="box" style="position: absolute; border-color: red;
        border-width: 1; border-style: solid; z-index: 10">
        </div>
    </div>
</template>
<script>
export default {
    name:'navbarv4',
    data(){
        return {
           box : null,
           longspan : null,
           classPosition:null
        }
    },
    methods:{
        offset(el) {
        var rect = el.getBoundingClientRect(),
	    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
	    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        },
        divPosition(){
            var div = document.getElementsByClassName('bottom');
            var divOffset = this.offset(div);
	        console.log(divOffset.left, divOffset.top);
        }
    },
    mounted(){
        this.box = document.getElementById("box"),
        this.longspan = document.getElementById("longspan")
        this.box.style.left = this.longspan.offsetLeft + document.body.scrollLeft + "px";
        this.box.style.top = this.longspan.offsetTop + document.body.scrollTop + "px";
        this.box.style.width = this.longspan.offsetWidth + "px";
        this.box.style.height = this.longspan.offsetHeight + "px";
        
    }

}
</script>
<style scoped>
/* Start Fonts from Google Fonts */
/*Google Fonts*/

@import url('https://fonts.googleapis.com/css?family=Arapey|Cantarell|Comfortaa|Khand|Russo+One|Ubuntu');


/*End Fonts*/


/* Start Body */

body {
/*   background: #EEE; */
  	background: url("https://s16.postimg.org/4d17gd0vp/smbg.png");
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #444;
  font-family: 'Comfortaa', cursive;
  text-align: center;
  font: 16px;

}

/* End Body */

h1{
  margin-bottom: 7%;
}

/*tooltip Box*/
.con-tooltip {

  position: relative;
  background: #F2D1C9;
  
  border-radius: 9px;
  padding: 0 20px;
  margin: 10px;
  
  display: inline-block;
  
  transition: all 0.3s ease-in-out;
  cursor: default;

}

/*tooltip */
.tooltip {
  visibility: hidden;
  z-index: 1;
  opacity: .40;
  
  width: 100%;
  padding: 0px 20px;

  background: #333;
  color: #E086D3;
  
  position: absolute;
  top:-140%;
  left: -25%;
  

  border-radius: 9px;
  font: 16px;

  transform: translateY(9px);
  transition: all 0.3s ease-in-out;
  
  box-shadow: 0 0 3px rgba(56, 54, 54, 0.86);
}


/* tooltip  after*/
.tooltip::after {
  content: " ";
  width: 0;
  height: 0;
  
  border-style: solid;
  border-width: 12px 12.5px 0 12.5px;
  border-color: #333 transparent transparent transparent;

  position: absolute;
  left: 40%;

}

.con-tooltip:hover .tooltip{
  visibility: visible;
  transform: translateY(-10px);
  opacity: 1;
    transition: .3s linear;
  animation: odsoky 1s ease-in-out infinite  alternate;

}
@keyframes odsoky {
  0%{
    transform: translateY(6px);	
  }

  100%{
    transform: translateY(1px);	
  }

}

/*hover ToolTip*/
.left:hover {transform: translateX(-6px); }
.top:hover {transform: translateY(-6px);  }
.bottom:hover {transform: translateY(6px);}
.right:hover {transform: translateX(6px); }



/*left*/

.left .tooltip{ top:-20%; left:-170%; }

.left .tooltip::after{
  top:40%;
  left:90%;
  transform: rotate(-90deg);
}




/*bottom*/

.bottom .tooltip { top:115%; left:-10%; }

.bottom .tooltip::after{
  top:-17%;
  left:40%;
  transform: rotate(180deg);
}



/*right*/

.right .tooltip { top:-20%; left:115%; }

.right .tooltip::after{
  top:40%;
  left:-12%;
  transform: rotate(90deg);
}

h3 {
    background: #333;
    color: #E086D3;
    padding: 10px 20px;
    border-radius: 56px;
    width: 8em;
    margin: 20% auto 1% auto;
  
}

</style>