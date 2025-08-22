let r4 = document.querySelector("#result4")


// 동기방식: 오래걸리는 일도 순서대로 말하기
console.log('==== 동기 방식 ====')
console.log('1. 라면 장보기')
console.log('2. 물 끓이기')
console.log('3. 끓는 물에 라면, 스프 넣고, 익히기')
console.log('4. 완성')

// 비동기방식: 순서대로 말하되, 지연시간을 다른 방법으로 해결한다.
console.log('==== 비동기 방식 ====')

setTimeout(() => {
    console.log('A. 라면 장보기')
}, 2000)

console.log('B. 물 끓이기')
console.log('C. 끓는 물에 라면, 스프 넣고, 익히기')
console.log('D. 완성')

사용1 // 라면 장보기 성공일때,,,
// ------------------- const 라면_장보기 = new Promise((성공, 실패) => {})
const 라면_장보기1 = new Promise((resulve, reject) => {
    setTimeout(() => {
        console.log('A. 라면 장보기')
        console.log('B. 라면 물 끓이기')
        resulve('라면 장보기 완료')
    }, 4000)
})

// 라면 장보기.then((결과) => {성공 이후 실행}).catch((결과) =>{예외상황 발생시 실행})
라면_장보기.then((result) => {
    console.log(result) //라면 장보기 완료
    console.log('C. 끓는 물에 라면, 스프 넣고, 익히기')
    console.log('D. 라면 완성 후 시식하기')
})
    .catch((result) => {
        console.log(result)
        console.log('라면 만들기 중단')
    })

// 커피 장보기 실패일 경우
const 커피_장보기1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('커피 장보기')
        console.log('커피 물 끓이기')
        reject('커피 품절')
    }, 6000)
})

// consr 커피_장보기 = new Promise(() => {})
커피_장보기
.then((result) => {
    console.log('G. 끓는 물에 커피 넣고, 젓기') 
    console.log('H. 커피 완성 후 마시기')
})
.catch((result) => {
    console.log(result) //커피 품절
    console.log('커피 만들기 중단')
})

// 파스타 장보기 팬딩일 경우
const 파스타_장보기 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('no result')
    }, 8000)
})


setTimeout(() => {
    console.log('라면 장보기: ', 라면_장보기)
    console.log('커피 장보기: ', 커피_장보기)
    console.log('파스타 장보기: ', 파스타_장보기)
, 10000})
// ================= 사용2 ==============

const 라면_장보기 = () => (new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('A. 라면 장보기')
        console.log('B. 라면 물 끓이기')
        resolve('라면 장보기 완료')
    }, 1000)
}))

const 커피_장보기 = () => (new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('E. 커피 장보기')
        console.log('F. 커피 물 끓이기')
        reject('커피 품절')
    }, 500)
}))

const 약속배려함수 = async () => {
    try {
      const result = await 라면_장보기();  //'라면 장보기 완료'
      console.log(result);
      console.log('C.  끓는 물에 라면, 스프 넣고, 익히기');
      console.log('D.  라면 완성 후 시식하기'); 
    } 
    catch (result) {
      console.log(result);
      console.log('라면 만들기 중단');
      return;
    }

    try {
      const result = await 커피_장보기();
      console.log('G. 끓는 물에 커피 넣고, 젖기');
      console.log('H. 커피 완성 후 마시기'); 
    } catch (result) {
      console.log(result);  //'커피 품절'
      console.log('커피 만들기 중단');   
    }
  }

  약속배려함수()
  // ----------------------
  const API_URL = "https://jsonplaceholder.typicode.com/users";

function getFetchUsers() {
  console.log("json 파일을 읽어보고 있어요...");

  fetch(API_URL)
  .then((response) => {
    console.log(response.status);
    if (!response.ok) {
      throw new Error(`응답오류! 상태: ${response.status}`);
    }
    return response.json();
  })
  .then((users) => {
    users.slice(0,3).forEach((user, index) => {
      console.log(`${index + 1} ${user.name} (${user.email})`);
    });
  })
  .catch((error) => {
    // 네트워크 또는 처리 오류시 실행
    console.error("Error fetching users:", error.message);
  });
}

getFetchUsers();