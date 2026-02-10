self.addEventListener("install", e=>{
 e.waitUntil(
  caches.open("taixiu-v1").then(c=>c.addAll([
   "./",
   "./taixiu_full.html"
  ]))
 );
});
