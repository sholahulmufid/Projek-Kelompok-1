// script.js

// Ambil elemen yang diperlukan
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const cards = document.querySelectorAll(".card");
const noResults = document.getElementById("noResults");

// Fungsi untuk mencari item berdasarkan input
function searchItems() {
  const filter = searchInput.value.trim().toLowerCase(); // Ambil input, hapus spasi, dan ubah ke huruf kecil
  let matchFound = false; // Variabel untuk memeriksa apakah ada hasil yang cocok

  // Periksa setiap card
  cards.forEach((card) => {
    const name = card.getAttribute("data-name").toLowerCase();

    // Cek apakah nama sesuai dengan input
    if (name === filter) {
      card.style.display = "block";
      matchFound = true; // Ada hasil yang cocok
    } else {
      card.style.display = "none";
    }
  });

  // Tampilkan/hilangkan pesan jika tidak ada hasil
  noResults.style.display = matchFound ? "none" : "block";
}

// Tambahkan event listener ke tombol search
searchButton.addEventListener("click", searchItems);