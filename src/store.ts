import { writable, readable } from "svelte/store";

// 読み書きが可能なストア。
// set(), update()が使える
let countForSet = writable(0);

const incrementBySet = () => {
  let currentValue = 0;
  countForSet.subscribe((value) => {
    currentValue = value;
  })();

  // countの値を増やす
  // 状態が変化したとき、現在の状態にマージされる
  countForSet.set(currentValue + 1);
};
console.log(incrementBySet());

let countForUpdate = writable(0);

const incrementByUpdate = () => {
  // マージせず、更新して状態を変化させる
  countForUpdate.update((n) => n + 1);
};
console.log(incrementByUpdate());

// 1秒ごとにストアを新しい日時に更新する
// 第二引数のset関数で値を更新
const time = readable(new Date(), (set) => {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);
  return () => clearInterval(interval);
});
