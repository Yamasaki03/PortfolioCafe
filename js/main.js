/* ==========================================================
   路地珈琲 こはく — 共通スクリプト(ライブラリ不使用)
   ========================================================== */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasObserver = "IntersectionObserver" in window;

  /* ---------- 画像がまだ無い枠に仮表示を出す ----------
     data-placeholder を付けた枠の画像が読み込めなかったら .is-missing を付ける。
     画像ファイルを置けば、自動で写真が表示される。 */
  document.querySelectorAll("[data-placeholder]").forEach(function (frame) {
    var img = frame.querySelector("img");
    if (!img) return;

    var markMissing = function () {
      frame.classList.add("is-missing");
    };

    if (img.complete && img.naturalWidth === 0) {
      markMissing();
    } else {
      img.addEventListener("error", markMissing, { once: true });
    }
  });

  /* ---------- スクロールでの出現(一度だけ) ---------- */
  var revealTargets = document.querySelectorAll("[data-reveal]");

  if (reduceMotion || !hasObserver) {
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      // 画面の下から15%ほど入ったところで出す
      { rootMargin: "0px 0px -15% 0px" }
    );

    revealTargets.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* ---------- スマホの固定ボタン ----------
     ファーストビュー(下層はページ見出し)を過ぎてから表示する。 */
  var cta = document.querySelector(".fixed-cta");
  var trigger = document.querySelector("[data-cta-trigger]");

  if (cta && trigger && hasObserver) {
    new IntersectionObserver(function (entries) {
      var entry = entries[0];
      var passed = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      cta.classList.toggle("is-shown", passed);
    }).observe(trigger);
  } else if (cta) {
    cta.classList.add("is-shown");
  }
})();
