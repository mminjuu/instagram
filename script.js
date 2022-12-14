document.addEventListener("DOMContentLoaded",
    function(e){
        let configID = document.querySelector("#id i")
        let idText = document.querySelector("#id span")

        configID.addEventListener("click",
            function(e){
                idText.textContent = prompt("새로운 아이디를 입력하세요")
            }
        )
        // 요소를 뽑아와 변수에 활용
        let profileEditButton = document.querySelector("#profile_info button")
        let userInfo = document.querySelector("#userInfo")
        let summary = document.querySelector("#summary")
        let profileDetail = document.querySelector("#profileDetail")
        let changing = false
        //불리언 변수 생성
        //프로필 편집 버튼이 클릭되어 수정 모드가 실행되면 true
        //완료 클릭되어 프로필 수정 모드 종료 시 false
        profileEditButton.addEventListener("click",
            function (e) {
                if (changing) {
                    let _userInfo = userInfo.querySelector("input").value
                    let _summary = summary.querySelector("input").value
                    let _profileDetail = profileDetail.querySelector("input").value

                    userInfo.innerHTML = _userInfo
                    summary.innerHTML = _summary
                    //사용자가 input 내용물 조작 후 완료 버튼 클릭하면 if문 실행
                    if (_profileDetail.startsWith("http")) {
                        _profileDetail = "<a href=" + _profileDetail + ">" + _profileDetail + "</a>"
                    }

                    profileDetail.innerHTML = _profileDetail
                    e.target.textContent = "프로필 편집"
                    changing = false
                    //textContent:태그에 기재된 글자들 가져옴
                } else {
                    let _userInfo = userInfo.textContent
                    let _summary = summary.textContent
                    let _profileDetail = profileDetail.textContent
                    //innerHTML:태그 사이에 HTML 코드를 삽입하는 도구 or 태그에 기재된 글자들 가져옴
                    //         :HTML 태그를 직접 조작 가능, 새태그 할당한 경우 기존 태그 삭제됨
                    userInfo.innerHTML = "<input value=" + _userInfo + "></input>"
                    summary.innerHTML = "<input value=" + _summary + "></input>"
                    profileDetail.innerHTML = "<input value=" + _profileDetail + "></input>"
                    // 태그 변경
                    e.target.textContent = "프로필 편집 완료"
                    changing = true
                }
            }
        )
    }
)