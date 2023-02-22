// https://jsonplaceholder.typicode.com/users

const URL = "https://jsonplaceholder.typicode.com/users"

//fetch() は Promise を返す（返り値を変数に代入する場合）
const promiseResult = fetch(URL);

let dataDom = document.querySelector(".dataDom")
let jsonDataSample = "test"

//fetch() のレスポンス（リクエストの結果）を then() メソッドで処理
// promiseResult.then((response) => {
//   return response.json()
// })
//   .then((data) => {
//     jsonDataSample = data
//     console.log(jsonDataSample)
//     console.log(jsonDataSample[0].address.city)
//     dataDom.textContent = jsonDataSample[0].address.city
//   })

/**
 * async / awaitを使用する場合
 */
// async function resJson() {
//   const response = await fetch(URL)
//   const users = await response.json()
//   console.log(users)
// }
let responseJson = async () => {
  const response = await fetch(URL)
  const users = await response.json()
  // console.log(users)

  users.forEach(user => {
    console.log(user.name)
    let element = document.createElement("div")
    let item = user.name
    let title = `user.nameを表示します`
    element.textContent = item

    // containerクラスのDOMを生成し、その中にJSONデータで取得したユーザー名を挿入する
    let container = document.querySelector(".container")
    container.appendChild(element)

    // サブ見出しDOMを生成
    let heading__lv3 = document.querySelector(".heading__lv3")
    heading__lv3.textContent = title
  })
}

// 関数を実行
responseJson()
