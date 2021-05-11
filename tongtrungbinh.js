let vatly;
let hoahoc;
let sinhhoc;
vatly = prompt("Nhập điểm vật lý:");
hoahoc = prompt("Nhập điểm hóa học:");
sinhhoc = prompt("Nhập điểm sinh học:");

vatly = parseInt(vatly);
hoahoc = parseInt(hoahoc);
sinhhoc = parseInt(sinhhoc);

let tongtrungbinh = (vatly + hoahoc + sinhhoc)/3;
//*khai báo 1 biến n có kiểu chữ là float
let n = parseFloat(tongtrungbinh);
//* làm tròn tới số thứ 2 sau dấu phẩy
tongtrungbinh = Math.round(n *100)/100;
document.write("Điểm trung bình các môn học là: " + tongtrungbinh);