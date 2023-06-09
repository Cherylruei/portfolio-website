import debounce01 from '../../assets/forBlogs/id01/debounce01.jpg';
import debounce01_1 from '../../assets/forBlogs/id01/debounce01_1.webp';
import debounce02 from '../../assets/forBlogs/id01/debounce02.webp';
import debounce03 from '../../assets/forBlogs/id01/debounce03.webp';
import debounce04 from '../../assets/forBlogs/id01/debounce04.webp';
import code01 from '../../assets/forBlogs/id01/code01.jpg';
import code02 from '../../assets/forBlogs/id01/code02.jpg';
import code03 from '../../assets/forBlogs/id01/code03.jpg';
import code04 from '../../assets/forBlogs/id01/code04.jpg';
import groupby01 from '../../assets/forBlogs/id02/groupby01.jpg';
import groupby02 from '../../assets/forBlogs/id02/groupby02.jpg';
import groupby03 from '../../assets/forBlogs/id02/groupby03.jpg';
import groupby04 from '../../assets/forBlogs/id02/groupby04.jpg';
import groupby05 from '../../assets/forBlogs/id02/groupby05.jpg';
import groupby06 from '../../assets/forBlogs/id02/groupby06.jpg';
import groupby07 from '../../assets/forBlogs/id02/groupby07.jpg';
import groupby08 from '../../assets/forBlogs/id02/groupby08.jpg';
import fibonacci01 from '../../assets/forBlogs/id03/fibonacci01.jpg';
import fibonacci02 from '../../assets/forBlogs/id03/fibonacci02.jpg';
import fibonacci03 from '../../assets/forBlogs/id03/fibonacci03.jpg';
import fibonacci04 from '../../assets/forBlogs/id03/fibonacci04.jpg';
import fibonacci05 from '../../assets/forBlogs/id03/fibonacci05.jpg';
import fibonacci06 from '../../assets/forBlogs/id03/fibonacci06.jpg';
import fibonacci07 from '../../assets/forBlogs/id03/fibonacci07.jpg';
import fibonacci08 from '../../assets/forBlogs/id03/fibonacci08.jpg';

const Data = [
  {
    id: 1,
    title: 'Leetcode 2627. Debounce : 前端優化必備知識 Debounce 防抖',
    content: [
      `這題 Leetcode 不只很有趣，對前端優化也很重要，解完今天這題學到了debounce ，覺得實在太實用了  😍.

Debounce 手寫防抖:. 
TechTarget 給的英文定義.
Debouncing is removing unwanted input noise from buttons, switches or other user input..

Input 是最常聽到的範例，在搜尋框寫 input onChange 事件處理器，我們每打一個字就會送請求給伺服器端，可能打了十個字才是我們想送出的內容，但是前面九個字都有分別送出請求給 Server，送一次和送十次請求這個效能一定就有差。.

如果用中文來記的話，防抖也可以想成防止手抖線上購物按了兩次付款會被收費兩次，也是可以透過 debounce 來設置。.

要寫 debounce 函式，他會接收兩個參數.

要執行的函式 和 延遲的時間 (ms).
以 Input 來舉例的話，參照影片與一般Input 比對(default) 思路:.

(1) 可以設置 Input 打字的時候，若使用者還在輸入，嘗試呼叫同個 function 去作用，我們可以把它先忽略，或是解除這個呼叫。.
(2) 呈上，可在第一次呼叫 fn 時，就設置 setTimeout，如果特定的時間內沒有呼叫的話，我們就可以確認使用者可能已完成輸入，送出請求。.
(3) 若在這個時間內呼叫同個 fn，那就可以在前一次的請求送出前把它刪除。.

如下，我們先設置 setTimeout 回傳的 timeoutId 先宣告此變數 timeout.
一開始雖然沒有被賦值，使用 clearTimeout(undefined) 也不會被影響，所以其實也可以不用加 if (timeout).

只要一呼叫這個 fn，就先 clearTimout 之前的操作，在設置新的操作`,
      `完整codepen 操作程式碼可以點`,
      `了解以後，接下來我們來看這次的Leetcode題目，完全是相同的概念，可以直接解題下去!`,

      `Given a function fn and a time in milliseconds t, return a debounced version of that function..

給定我們函式 fn 和時間的設置 t , 回傳同個函式的 debounce 版本。.

      A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also recieve the passed parameters..

      debounce 防抖函式是一個可以延遲時間 t (ms) 來執行的，且如果在此時間內又被呼叫一次函式，原本的函式執行動作就會被取消。 debounce 防抖函式應該會接受被傳進來的參數。`,

      `For example, let’s say t = 50ms, and the function was called at 30ms, 60ms, and 100ms. The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms. If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.`,

      `例如: 我們在設置 t = 50ms 時，函式分別在 30ms, 60ms 和 100ms 被呼叫，前兩次函式呼叫都會被取消，然後第三個函式會在 150ms 被執行。
如果 設置 t = 35ms 時，在30ms呼叫的函式會被取消，第二個函式會在 95ms (35+ 60) 被執行，第三個函式會在 (35+100) 135ms 時被執行。`,
      `題目提供的圖片參考概念`,
      `The above diagram shows how debounce will transform events. Each rectangle represents 100ms and the debounce time is 400ms. Each color represents a different set of inputs..

Please solve it without using lodash’s _debounce() function..

以上圖表是告訴我們 debounce 防抖是怎麼轉化這些事件。.
每一個長方形代表 100ms，而它抖動的時間為 400ms。每個顏色代表每一組的 inputs.

不太懂的話，我們就來看Example 再來畫圖~`,
      `從這邊可以看到，第一次呼叫預計要在 50 + 50 ms 以後執行的函式，因為 75ms 出現了第二次呼叫，就取消了原本第一次呼叫要執行的函式。
因為後面並沒有再呼叫函式，這次呼叫有在 50+75ms 順利執行，並出來 inputs [2]。`,
      `而這個範例的兩次呼叫，因為沒有在時間範圍內重疊出現，所以都有成功被執行。`,
      `因為範例3 呼叫順序是 藍色 → 橙色 → 綠色.
第一次呼叫的函式要延遲50ms 加上固定延遲的 150ms，在 200ms 被執行.
第二次呼叫的函式要延遲 300ms 加上固定延遲的150ms，還正要計算第三次呼叫函式就立刻接著來了，直接取消第二次的呼叫。.
第三次呼叫的函式也是延遲 300ms 加上固定延遲的150ms，在450ms 被執行。`,

      `解法按照之前的思路.
宣告 debounce 變數是一個函式，接收執行的函式 fn 和延遲的時間 t.
用 let 宣告 id 變數 來做為管理 setTimeout 的變數.
在debonce函式裡，回傳要執行的函式，如果前一次setTimeout的 id 存在，要將它清除。.
並設置新的 setTimeout，賦值新的 id.
設置的setTimeout 如果在設定的時間內都不會被刪除的話，就會執行該函式。.`,
      `補充: 這裡儲存的 id 變數就是用到閉包的概念可以被存取值來操作哦!`,

      `此Leetcode 題放在 replit 連結，可以自己帶不同的參數來玩看看`,

      `學習參考資料 :`,
      `Learn Debounce And Throttle In 16 Minutes`,
      `Javascript Debounce Tutorial | JS Debouncing Functions Explained with Examples`,
      `Explain this 筆記: 介紹 Debounce & Throttle,`,
    ],
    mainImage: debounce01,
    otherImages: [
      debounce01_1,
      debounce02,
      debounce03,
      debounce04,
      code01,
      code02,
      code03,
      code04,
    ],
  },
  {
    id: 2,
    title: 'Leetcode 2631. Group By 解題',
    content: [
      'JS 30 天挑戰Leetcode 2631. Group By 題目:',
      `Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.,
      需要寫一段程式可以使用任何的 array 呼叫 array.groupBy(fn) 方法, 並且回傳分組後的陣列版本,
      A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.,
      每一組被分類的陣列是被 一個外層的 object 包住， key 值是 fn(arr[i]) 的 output，然後其對應的 value 值是一個陣列包含在原始陣列裡有著相同 key 的項目 (Item => value),
      The provided callback fn will accept an item in the array and return a string key.,
      提供的 callback fn 會接受陣列的 item，並回傳一個字串 key。,
      The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.,
      Please solve it without lodash’s _.groupBy function.,
      每個值的順序應需要按照原始陣列裡的項目順序排列，keys 的順序不同是可接受的。,
      請不要使用 lodash’s _.groupBy function 解題。,
      題目看不是很懂? 直接看 Example
      `,
      `思路:,

1. 要把回傳值當作 key 存進去 空物件 { } ，他的原始陣列的項目 item 為其 value,
2. 使用 for of loop 存進去 key value pair,
3. 若有相同的 key，則不用重複存進去，直接將其分類把對應的 item 值存進所屬 key 值的 value 值,
4. 題目的開頭如下，是將Array 的 prototype 加入此 groupBy方法，每個Array 都能有此方法。`,
      `寫this 的地方不能直接寫 Array的原因是什麼?`,

      `這是我犯的錯誤，一開始在this 的地方寫 關鍵字Array`,
      `因為Array 是一個構造函數(constructor)，用於建構新的陣列,
當我使用到 Array 關鍵字時，實際上是引用到 Array 構造函數本身，而不是一個特定的陣列對象。,
所以要使用 this 關鍵字 ，引用調用 groupBy 方法對象的特定陣列。,

const myArray = new Array(), 

這邊也是使用 new 关键字来調用 Array 構造函数`,
      `Logical OR assignment (||=)`,
      `The logical OR assignment (x ||= y) operator only assigns if x is falsy.`,
      `groupBy方法在現實生活中非常有用,
我們可以使用 groupBy 方法來分類資料，整理記錄做簡單的分析,
也可以用 groupBy 將得到的錯誤做分類，看哪種錯誤最常發生。,`,
    ],
    mainImage: groupby01,
    otherImages: [
      groupby01,
      groupby02,
      groupby03,
      groupby04,
      groupby05,
      groupby06,
      groupby07,
      groupby08,
    ],
  },
  {
    id: 3,
    title: 'Leetcode 2648. Generate Fibonacci Sequence Generator Function',
    content: [
      `解這題以前，若是像我一樣不了解 “yield” Generator Functions 的用法，需要先一起認識一下來解這題。JavaScript 裡的 Generator functions 是比較特別的函式，它可以暫停在繼續，在不同次的呼叫使它們 yield 出產生多個不同的 outputs。`,
      `Generator functions 使用function*關鍵字來定義，呼叫時回傳 generator object。 
      當 generator function 被呼叫時，它會回傳一個 generator object。這個物件是一個迭代器，它有這個 next() 的方法可以被呼叫從generator 來產生一個值。`,
      `next() 的語法如下:,

每一次呼叫會回傳一個物件包含兩個屬性: value and done ,
此 value屬性是此排序中現在項目的 value 數值 ,
done 屬性是一個布林值，如果執行了排序中的最後一個項目的value ， done屬性回傳 true，否則回傳 false ,
yield 有類似於一般 function “return” 的效果，都是回傳值，但是執行 yield 不代表函式結束，Generator 函式裡有多少個 yield 就代表我們賦予給它幾個值，但函式被呼叫時，就會出現 yield “value” 值。`,
      `前面介紹了 Generator Function，,
這題當然就是要用 Generator Function 來 Generate Fibonacci Sequence 。,

題目說明:,
Write a generator function that returns a generator object which yields the fibonacci sequence.,

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.,

The first few numbers of the series are 0、 1、 1、 2、3、 5、 8、 13.`,
      `解題思路1:
0 1 1 2 3 5 8 13 21 34 55…
除了 base case 最前面兩個數字 0 1, 其他都是取前面兩個數字相加而來的，
我們要利用 yield 來回傳值 + while loop`,
      `yield* 用來表示不只是yield 的回傳值，會yield 另一個 generator，然後就會產生遞迴效果，因此這裡可以無限產生 Fibonacci sequence`,

      `參考資料:`,
      `LeetCode 30days Challenge 2648. Generate Fibonacci Sequence`,

      `Learn JavaScript Generators In 12 Minutes`,
    ],
    mainImage: fibonacci01,
    otherImages: [
      fibonacci01,
      fibonacci02,
      fibonacci03,
      fibonacci04,
      fibonacci05,
      fibonacci06,
      fibonacci07,
      fibonacci08,
    ],
  },
];

export default Data;
