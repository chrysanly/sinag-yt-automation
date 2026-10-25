// TikTok sends the sign-in result here (https). Hand it to the Sinag YTAutomation app on this
// computer. The target is fixed: this page never forwards anywhere else.
(function () {
  var target = 'http://127.0.0.1:47380/tiktok/callback/' + window.location.search;
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('go').href = target;
  });
  window.location.replace(target);
})();
