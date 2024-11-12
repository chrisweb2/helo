// Kích hoạt GSAP và ScrollTrigger cho hiệu ứng cuộn
gsap.registerPlugin(ScrollTrigger);

// Hiệu ứng cuộn mượt và xuất hiện khi cuộn đến các phần tử
gsap.from("#about", {
  scrollTrigger: "#about",
  opacity: 0,
  y: 50,
  duration: 1
});

gsap.from("#tokenomics", {
  scrollTrigger: "#tokenomics",
  opacity: 0,
  y: 50,
  duration: 1
});

gsap.from("#roadmap", {
  scrollTrigger: "#roadmap",
  opacity: 0,
  y: 50,
  duration: 1
});

gsap.from("#community", {
  scrollTrigger: "#community",
  opacity: 0,
  y: 50,
  duration: 1
});
