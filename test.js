// function display(x) {
//     let arrayss =[];
//     if (x <= 0){
//         document.write("Không có cặp số nguyên dương nào có tổng = " + x)
//     }else
//         for (i = 1; i < x; i++){
//             a = x - i;
//             arrayss.push([a,i])
//         }
//         document.write(arrayss)
// }
// In sao
// function display_star() {
//     let a = prompt("nhấp số sao muốn hiển thị");
//     for (i = 1; i < a; i++){
//         for (j = 1; j < i; j++){
//             document.write("*");
//         }document.write("<br/>");
//     }
//
// }
// function display_star() {
//     let a = prompt("nhập số sao muốn hiển thị")
//     for (i = a; i > 0; i--){
//         for (j = 1; j < i; j++){
//             document.write("*")
//         }document.write("<br>")
//     }
// }

// function print() {
//     for (let i = 1; i <= 100; i++){
//         if (i % 5 === 0){
//             continue;
//         }document.write(i +"-")
//     }
//
// }

// function print() {
//     for (i = 1; i < 30; i++){
//
//         document.write("<hr width="+ i +"%>")
//     }
//
// }
function tinh_tong() {
    let sum = 0;
    for (i = 10; i <=100; i++){
        if (i % 2 === 0){
            sum += i
        }
    }return sum;
}