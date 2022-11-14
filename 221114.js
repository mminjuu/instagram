// document 객체를 대상으로 이벤트리스너를 추가.
// EventListener(이벤트, 함수):이벤트 감지 도구
// 이벤트 종류는 "DOMContentLoaded"
//DOMContentLoaded:문서의 콘텐츠 로딩이 완료되었음
document.addEventListener("DOMContentLoaded",
    function(e){
        let nameEditButton = document.querySelector("#nameEditButton")
        let editName = document.querySelector("#editNameField")
        let okButton = document.querySelector("#okButton")
        let newName = document.querySelector("#newName")
        let nameHere = document.querySelector("#nameHere")

        nameEditButton.addEventListener("click",
            function(e){
                editName.style.display = "block"
                nameEditButton.style.display = "none"
            }
        )

        okButton.addEventListener("click",
            function(e){
                nameHere.textContent = newName.value
                editName.style.display = "none"
                nameEditButton.style.display = "inline"
            }
        )
    }
)