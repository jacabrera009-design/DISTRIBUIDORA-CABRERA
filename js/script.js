// DISTRIBUIDORA CABRERA - SCRIPT FIJO

function openWhatsApp(mensaje) {
  const telefono = "523329999999"; // <--- CAMBIA AQUI TU NUMERO CON LADA
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

function revealOffer() {
  const panel = document.getElementById("offer-reveal");
  if (panel) {
    panel.classList.remove("hidden");
    document.getElementById("offer-button").classList.add("hidden");
  }
}

async function copyDiscount() {
  try {
    await navigator.clipboard.writeText("CABRERA10");
    const fb = document.getElementById("copy-feedback");
    fb.textContent = "¡Código CABRERA10 copiado!";
    fb.classList.remove("hidden");
    setTimeout(() => fb.classList.add("hidden"), 2500);
  } catch {
    alert("Copia este código: CABRERA10");
  }
}

// Menu movil
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen);
    });
  }

  // Cierra el menu al dar click en un link
  document.querySelectorAll("#mobile-menu a").forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  });

  // Animacion suave al hacer scroll (sin esconder nada)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
    el.classList.add("visible"); // Por si el observer falla, que se vea
  });
});