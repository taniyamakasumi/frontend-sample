const URL = "https://jsonplaceholder.typicode.com/users"

// https://mebee.info/2020/10/15/post-20763/

// axios.get(URL)
//   .then(res => console.log(res.data))
//   .catch(err => console.error(err))
//   .finally(res => console.log('finally'))
/**
 * async / awaitを使用する場合
 */
let responseJson = async () => {
  const users = await axios.get(URL)

  users.data.forEach(user => {
    console.log(user.address.city)
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

responseJson()