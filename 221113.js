// document 객체를 대상으로 이벤트리스너를 추가.
// EventListener(이벤트, 함수):이벤트 감지 도구
// 이벤트 종류는 "DOMContentLoaded"
//DOMContentLoaded:문서의 콘텐츠 로딩이 완료되었음
document.addEventListener("DOMContentLoaded",
    
    // 이벤트 핸들러:수행되는 작업
    // HTML 코드가 로딩된 다음 비동기적으로 수행될 작업들임
    function(e){
        // input 태그를 찾아 button 변수에 저장
        let button = docutment.querySelector("input")
        // querySelector:선택자를 활용해 HTML요소 선택 도구
        // button 변수에 이벤트 리스너 추가
        // 이벤트 종류는 input
        button.addEventListener("input",
        function(e){
            // 콘솔에 입력창의 값을 출력
            console.log(e.target.value)
        })
    })

function hi(){
    alert("hi")
}