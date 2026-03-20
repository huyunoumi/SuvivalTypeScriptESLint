export const helloWorld = "Hello World!";

// 下記のようにルールを無視できる
// eslint-disable-next-line no-console
console.log(helloWorld);

type Choice = "A" | "B" | "C";
 
export function func(choice: Choice) {
  switch (choice) {
    case "A":
      break;
    case "B":
      break;
    // このcaseをコメントアウトするとwarningが表示される
    case "C":
      break;
  }
}