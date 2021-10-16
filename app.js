const faq = document.querySelector(".faq-questions")
let opened
faq.addEventListener("click", (e) => {
  const targetItem = e.target
  if (!targetItem.closest(".faq-toggle")) return
  if (opened && opened != targetItem) {
    opened.classList.remove("active")
  }
  targetItem.classList.toggle("active")
  opened = targetItem
})
