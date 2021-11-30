// doCopyのボタンが押された時
document.getElementById("doCopy").onclick = function copyToClipboard() {
  const copyTarget = document.getElementById("copyTarget");
  copyTarget.select();
  document.execCommand("Copy");
  alert("生成したパスワードをコピーしました");
};
