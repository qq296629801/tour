/**
* 格式化时间 
* @param {String} date 原始时间格式
* 格式后的时间：yyyy/mm/dd hh:mm:ss
**/
const formatTime = (date) => {
  var date = new Date(date);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return [year, month, day].map(formatNumber).join('/') 
}
module.exports = {
  formatTime
}
