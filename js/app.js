let form = document.getElementById("khodamForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();

  if (!name) {
    console.error("Nama Kosong");
    Swal.fire({
      icon: "warning",
      title: "Nama Kosong",
      text: "Silakan masukkan nama Anda!",
      confirmButtonText: "OK",
    });
    return;
  }

  const loader = document.getElementById("loader");
  loader.classList.remove("hidden");


  const khodams = [
    'Javascript', 'PHP', 'Java', 'Golang', 'Python', 'Ruby', 'C++', 'C', 'C#', 'Kotlin', 'CSS','Figma', 'Draw IO'
  ];

  

  const random = Math.random();
  const length = name.length / 100;
  const index = Math.floor((random + length) * khodams.length) % khodams.length;

  const khodam = khodams[index];



  setTimeout(() => {
    document.getElementById('hasilKhodam').textContent = khodam;
    document.getElementById('result').classList.remove('hidden');

    loader.classList.add("hidden");

    setTimeout(() => {
      document.getElementById('result').classList.add('hidden');
      clearForm();
    }, 3000);
  }, 2000);

});

function clearForm(){
  document.getElementById('khodamForm').reset();
}
