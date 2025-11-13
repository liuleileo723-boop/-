/* ===== 无忧谷联盟指南 - 游戏风格交互脚本 ===== */
document.addEventListener("DOMContentLoaded", () => {
  // --- ① 滚动时淡入动画 ---
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => {
    slide.style.opacity = 0;
    slide.style.transform = "translateY(40px)";
    slide.style.transition = "all 0.8s ease";
  });

  const revealOnScroll = () => {
    slides.forEach(slide => {
      const rect = slide.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        slide.style.opacity = 1;
        slide.style.transform = "translateY(0)";
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // 初始加载时触发一次

  // --- ② 返回顶部按钮 ---
  const btn = document.createElement("button");
  btn.textContent = "↑ 返回顶部";
  btn.id = "backTopBtn";
  btn.style.cssText = `
    position: fixed; bottom: 25px; right: 25px;
    padding: 10px 16px; font-size: 14px;
    background: linear-gradient(90deg,#00ffd5,#00ffa3);
    color:#001a12; border:none; border-radius:10px;
    cursor:pointer; font-weight:bold;
    box-shadow: 0 0 10px rgba(0,255,200,0.5);
    transition: all 0.3s ease; z-index:9999;
  `;
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.style.opacity = 1;
      btn.style.transform = "scale(1)";
    } else {
      btn.style.opacity = 0;
      btn.style.transform = "scale(0)";
    }
  });

  btn.style.opacity = 0;
  btn.style.transform = "scale(0)";
  btn.style.transition = "opacity 0.4s ease, transform 0.4s ease";

  // --- ③ 卡片点击发光动画 ---
  slides.forEach(slide => {
    slide.addEventListener("click", () => {
      slide.style.boxShadow = "0 0 35px rgba(0,255,200,0.8)";
      setTimeout(() => {
        slide.style.boxShadow = "0 0 20px rgba(0,255,200,0.15)";
      }, 500);
    });
  });
});
// === 红橙炫彩菜单按钮交互逻辑 ===
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
}
