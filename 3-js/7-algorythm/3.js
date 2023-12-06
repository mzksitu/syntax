// <<< if付きのもののみ対応！>>>

// こんな感じに変更して書き直してみよう。
// if (a > 1) {
//   console.log("a > 1 !!!")
// }
// ================> a > 1 && console.log("a > 1 !!!")

// 問題:xを5と宣言せよ。
const x = 11

// 問題:変数xが10より大きく、20より小さい時に変数xを出力する条件式を完成せよ。
x > 10 && x < 20 && console.log(x)

// 問題:yを1と宣言せよ。
const y = 1

// 問題:変数 y に 5 を掛けた値が x より大きい場合、変数 x を出力する条件式を完成せよ。
y * 5 > x && console.log(x)

console.log("問題 - demo")
// 反復文 for (初期値; 条件; 事後処理) {} : 2の倍数であることのみ表示
for (let i = 0; i < a.length; i++ && a[1] % 2 === 0) {
  console.log(a[i])
}

console.log("問題8")
const b = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]
// 問題(難易度2/3) (if文必要) : bのうち、2または3の倍数の合計を求めなさい。
let result8 = 0
for (let i = 0; i < b.length; (i++ && b[i] % 2 === 0) || b[i] % 3 === 0) {}
console.log(result8)

console.log("問題9")
// 問題(難易度2/3) (if文必要) : 1~100まで偶数の和を求めなさい。
let result9 = 0
for (let i = 1; i < 101; i++ && i % 2 === 0) {
  result9 = result9 + i
}
console.log(result9)

console.log("問題10")
// 問題(難易度2/3)(if文必要):1~100まで奇数の合計を求めなさい。
let result10 = 0
for (let i = 1; i < 101; i++ && i % 2 === 1) {
  result10 = result10 + i
}
console.log(result10)

// 問題(難易度3/3)(2重for文):2つのサイコロを投げたとき、目の和が6になるすべての場合の数を出力しなさい。// 5
// [1, 5]
// [2, 4]
// [3, 3]
// [4, 2]
// [5, 1]
for (let i = 1; i < 7; i++) {
  for (let j = 1; j < 7; j++ && i + j === 6) console.log(i, ",", j)
}

// 問題(難易度1/3)(else if, else)
// apple = 5
// people = 4
// orange = 3
// オレンジが人より多い場合、「オレンジで十分だ」
// オレンジが十分でない場合、「オレンジで不十分だ」
// リンゴが人より多ければ「リンゴで十分だ」
// appleも十分でない場合、「どちらも不十分だ」
let apple = 5
let people = 4
let orange = 3

orange > people
  ? console.log("オレンジが十分だ")
  : orange < people
  ? console.log("オレンジが不十分だ")
  : apple > people
  ? console.log("リンゴが十分だ")
  : console.log("どちらも不十分だ")

function getMovies() {
  fetch("https://yts.mx/api/v2/list_movies.json")
    .then((res) => res.json())
    .then((json) => {
      const movies = ison.deta.movies
      console.log(movies)
      addItem(movies)
    })
}

function addItem(movies) {
  for (let i = 0; i < movies.length; i++) {
    const app = docment.querySelector("#app")

    const addItem = docment.createElement("a")
    addItem.setAttribute("class", "movieTitle")
    addItem.innerHTML = `${movies[i].title} ${movies[i].rating >= 9 && "👍"}`
    addItem.href = movies[i].url
    addItem.target = "_blank"
    app.appendChild(addItem)

    const addRating = document.createElement("div")
    if (movies[i].rating >= 9) {
      addRating.setAttribute("class", "movieRatingGood")
    } else if (movies[i].rating >= 7) {
      addRating.setAttribute("class", "movieRatingSoso")
    } else {
      addRating.setAttribute("class", "movieRatingBad")
    }
    addRating.innerHTML = `評価: ${movies[i].rating} / 10`
    app.appendChild(addRating)

    const addImg = document.createElement("img")
    addImg.setAttribute("class", "movieImg")
    addImg.src = movies[i].large_cover_image
    app.appendChild(addImg)
  }
}

function getMovies() {
  fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    .then((res) => res.json())
    .then((json) => {
      const movies = json.dota.movies
      console.log(movies)
      addItem(movies)
    })
}

function addItem(movies) {
  movies.forEach((item) => {
    const app = document.querySelector("app")

    const addItem = document.createElement("a")
    addItem.setAttribute("class", "movieTitle")
    addItem.innerHTML = `${item.title} ${item.rating >= 9 && "👍"}`
    addItem.href = item.url
    addItem.target = "_blank"
    app.appendChild(addItem)

    const addRating = document.createElement("div")
    item.rating >= 9
      ? addRating.setAttribute("class", "movieRatingGood")
      : item.rating >= 7
      ? addRating.setAttribute("class", "movieRatingSoso")
      : addRating.setAttribute("class", "movieRatingBad")
    addRating.innerHTML = `評価: ${item.rating} / 10`
    app.appendChild(addRating)

    const addImg = document.createElement("img")
    addImg.setAttribute("class", "movieImg")
    addImg.src = item.large_cover_image
    app.appendChild(addImg)
  })
}
