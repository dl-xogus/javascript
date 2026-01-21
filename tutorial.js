/* [ const (변경불가) | let (변경가능) ] */

// el.명령
// document.querySelector('#el').명령
// el_p[0].명령      // p태그들 중 0번째에 명령
// el_p[1].명령      // p태그들 중 1번째에 명령

let el_p = document.querySelectorAll('p');          // document.querySelectorAll('p')의 이름을 el_p로 지어줌

el_p[0].innerText = '값을 변경할 때 이퀄기호를 사용함';
el_p[0].style = 'color: red; font-size: 30px;';     // css와 같은 방식
el_p[0].style.color = 'blue';                       // 특정 속성에 값을 부여하는 방식

console.log( el_p[0].innerText );                   // .innerText : 태그속 내용
console.log( el_p[0].style );                       // .style : style 값
console.log( el_p[0].style.cssText );               // .style.cssText : style 값들 중 cssText의 값
console.log( el_p[0].style.color );                 // .style.color : style 값들 중 color의 값

/* 상황 */
el_p[1].onclick = function(){
    if (el_p[1].style.color !== 'red') {
        el_p[1].style = 'color: red;'; 
    } else {
        el_p[1].style = 'color: blue;'; 
    }
}

// el_p = 100;
// num = 9;
// console.log( el_p % num );