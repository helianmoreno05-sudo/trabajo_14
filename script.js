const { DateTime } = luxon;

flatpickr("#fecha", {
  locale: "es",
  dateFormat: "d/m/Y",
  maxDate: "today"
});

document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const resultado = document.getElementById("resultado");
  const valor = document.getElementById("fecha").value;

  const nacimiento = DateTime.fromFormat(valor, "dd/MM/yyyy");
  const hoy = DateTime.now().startOf("day");

  if (!nacimiento.isValid || nacimiento > hoy) {
    resultado.textContent = "Por favor, ingresa una fecha de nacimiento válida.";
    return;
  }

  const edad = hoy.diff(nacimiento, ["years", "months", "days"]).toObject();

  resultado.innerHTML = "Tienes <strong>" + edad.years + " años, " +
    edad.months + " meses y " + Math.floor(edad.days) + " días</strong>";
});