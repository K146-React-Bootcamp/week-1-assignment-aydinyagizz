// Cookie’ler girdiğimiz siteler tarafından bilgisayarımıza gönderilen küçük metin dosyalarıdır. 
// Web sitesinin sonraki ziyaretlerimizde bizi tanımasını sağlar.

// Cookie Oluşturma & Okuma & Güncelleme & Silme

var cookie_create = document.cookie = "name=Aydın";
console.log("cookie_create " + cookie_create);
//----------
var cookie_reading = document.cookie;
console.log("cookie_reading " + cookie_reading);
//----------
var cookie_update = document.cookie = "name=Aydın Yağız";
console.log("cookie_update " + cookie_update);
//----------
var cookie_delete = document.cookie = "name=Aydın; max-age=0";
console.log(document.cookie ? document.cookie : 'Cookie Silindi');




// Session Web tarayıcısında key/value değerlerini bir oturum süresi için tarayıcıya kaydedebilmesine izin veren bir özelliktir. 
// Tarayıcı sekmesi kapatıldığında veriler de kaybolur.

// Session Oluşturma & Okuma & Güncelleme & Silme

var session_create = sessionStorage.setItem('name', 'Aydın');
console.log("session_create " + sessionStorage.getItem('name'));
//----------
var session_reading = sessionStorage.getItem('name');
console.log("session_reading " + sessionStorage.getItem('name'));
//----------
var session_update = sessionStorage.setItem('name', 'Aydın Yağız');
console.log("session_update " + sessionStorage.getItem('name'));
//----------
var session_delete = sessionStorage.removeItem("name");
console.log(session_delete ? sessionStorage.getItem('name') : "Session Silindi");


