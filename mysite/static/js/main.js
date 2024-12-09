<!-- JavaScript -->
<script>
  // Mostrar las tarjetas al hacer clic en "Cursos"
  document.getElementById("show-courses").addEventListener("click", function () {
    const coursesSection = document.getElementById("courses");
    coursesSection.style.display = coursesSection.style.display === "none" ? "flex" : "none";
  });

  // Función para mostrar el detalle del curso Python
  function showPythonDetails() {
    document.getElementById("python-details").style.display = "block";
    document.getElementById("data-analysis-details").style.display = "none";
    document.getElementById("ai-details").style.display = "none";
  }

  // Función para mostrar el detalle del curso Análisis de Datos
  function showDataAnalysisDetails() {
    document.getElementById("python-details").style.display = "none";
    document.getElementById("data-analysis-details").style.display = "block";
    document.getElementById("ai-details").style.display = "none";
  }

  // Función para mostrar el detalle del curso Inteligencia Artificial
  function showAIADetails() {
    document.getElementById("python-details").style.display = "none";
    document.getElementById("data-analysis-details").style.display = "none";
    document.getElementById("ai-details").style.display = "block";
  }
</script>