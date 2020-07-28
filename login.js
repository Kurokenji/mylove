function validate() {
var u = document.getElementById("username").value;
var p1 = document.getElementById("password").value;

if (u=="admin" , p1=="123456"){
	alert("Đăng nhập thành công");
	return false;
}