// ========================================
// VIZORA AI — App Controller
// ========================================

let selectedSize = "9:16";

const promptInput = document.getElementById("prompt");
const statusBox = document.getElementById("status");


// اختيار مقاس الفيديو
document.querySelectorAll(".option").forEach(option => {

  option.addEventListener("click", () => {

    document.querySelectorAll(".option").forEach(item => {
      item.classList.remove("active");
    });

    option.classList.add("active");

    selectedSize = option.dataset.size;

  });

});


// إنشاء الفيديو
function createVideo() {

  const prompt = promptInput.value.trim();

  if (!prompt) {

    showStatus(
      "اكتب فكرة الفيديو الأول ✍️",
      false
    );

    promptInput.focus();

    return;
  }


  showStatus(
    "تم استلام فكرتك ✅",
    true
  );


  console.log("VIZORA AI");
  console.log("Prompt:", prompt);
  console.log("Video Size:", selectedSize);


  /*
    ========================================
    محرك توليد الفيديو سيتم ربطه هنا
    ========================================

    prompt  = فكرة الفيديو
    selectedSize = مقاس الفيديو

    مثال مستقبلي:

    generateVideo(prompt, selectedSize);

    ========================================
  */
}


// عرض حالة العملية
function showStatus(message, success = true) {

  statusBox.style.display = "block";

  statusBox.textContent = message;

  if (success) {
    statusBox.style.color = "#9ce9bd";
  } else {
    statusBox.style.color = "#ffd1d1";
  }

}
