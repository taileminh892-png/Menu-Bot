function analyzeMD5(){
  let h = md5.value.trim();
  if(h.length < 6){
    md5rs.innerText = "❌ MD5 không hợp lệ";
    md5rs.style.color = "red";
    return;
  }

  let part = h.substring(0,6);
  let num = parseInt(part,16);
  let p = num % 100;

  let kq = p >= 50 ? "TÀI" : "XỈU";

  md5rs.innerText = `MD5 → ${kq} (${p}%)`;
  md5rs.style.color = kq=="TÀI" ? "#22c55e" : "#ef4444";
}
