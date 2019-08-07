<template>
	<div class="container">
		<div class="pages_wrap">
			<span>1</span>
			<span>2</span>
			<span>3</span>
			<span>4</span>
			<span>5</span>
			<span>6</span>
			<span>7</span>
			<span>8</span>
			<span>9</span>
			<span>10</span>
			<span>11</span>
			<span>12</span>
			<span>13</span>
			<span>14</span>
			<span>15</span>
			<span>16</span>
			<span>17</span>
			<span>18</span>
			<span>19</span>
			<span>20</span>
		</div>
		<div class="pagination"></div>
	</div>
</template>

<script>
export default {
	name:'pagiant',
	data(){
		return {
			spans: document.querySelectorAll('span'),
			pagination: document.querySelector('.pagination'),
			nodeListArr: [],
			pagesWrap: document.querySelector('.pages_wrap'),
			divWrap,
			anchor
		}
	},
	mounted(){
		
	}
for (let el in spans) {
  nodeListArr.push(spans[el])
  nodeListArr = nodeListArr.filter(el => el.nodeName === 'SPAN')
}

nodeListArr.forEach(
  (el, ind) => {
    if (ind % 3 === 0) {
      let nodeListSeg = nodeListArr.slice(ind, ind + 3)
      divWrap = document.createElement('div')
      divWrap.setAttribute('id', 'page_' + (ind / 3 + 1))
      divWrap.classList.add('page')
      nodeListSeg.forEach(el => {
        divWrap.appendChild(el)
      })
      pagesWrap.appendChild(divWrap)
      anchor = document.createElement('a')
      anchor.setAttribute('href', '#page_' + (ind / 3 + 1))
      anchor.textContent = (ind / 3 + 1)
      pagination.appendChild(anchor)
    }
  }
)

let activePage = document.querySelector(
  pagination.childNodes[0].getAttribute('href')
)

activePage.classList.add('active')
pagination.addEventListener('click', event => {  
  if(event.target.nodeName === 'A') {
    event.preventDefault()
    activePage.classList.remove('active')
    activePage = document.querySelector(
      event.target.getAttribute('href')
    )
    activePage.classList.add('active')
  }
})
}
</script>

<style>
body {
  background: #222;
  font-family: 'Josefin Sans', sans-serif;
}

.container {
  margin: auto;
  position: relative;
  width: 240px;
}

.pages_wrap {
  align-items: center;
  border: 2px solid #eee;
  box-shadow: 8px 8px #fff;
  color: #eee;
  display: flex;
  font-size: 36px;
  height: 360px;
  justify-content: center;
  margin: auto;
  max-width: 240px;
}

.page {
  opacity: 0;
  position: absolute;
  transition: all 0.7s ease;
  z-index: 0;
}
.page.active {
  opacity: 1;
  z-index: 1;
}
.page span {
  font-size: 66px;
}
.page span::after {
  content: "\00a0";
}
.page span:last-child::after {
  content: none;
}

.pagination {
  display: block;
  margin: 10px auto 0;
  position: absolute;
  left: -45px;
  top: 50%;
  text-align: center;
  transform: translateY(-50%);
  width: 40px;
}
.pagination a {
  color: #eee;
  display: block;
  font-size: 36px;
  text-decoration: none;
  transition: all 0.3s ease;
}
.pagination a:hover {
  color: #f00;
}
</style>

