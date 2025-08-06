document.addEventListener('DOMContentLoaded', function() {
  // Get modal elements
  const modal = document.getElementById('courseModal');
  const modalTitle = document.getElementById('modalCourseTitle');
  const modalDescription = document.getElementById('modalCourseDescription');
  const closeModal = document.querySelector('.close-modal');
  
  // Course descriptions data
  const courseDescriptions = {
    'project-manager': {
      title: 'PROJECT MANAGER 2.0 - Nowoczesne Zarządzanie Projektami',
      description: 'Szkolenie „Project Manager 2.0” to kompleksowy program rozwojowy skierowany do osób, które chcą zdobyć praktyczne umiejętności w zakresie planowania i zarządzania projektami w nowoczesnym, cyfrowym środowisku. Program został opracowany z myślą o aktualnych potrzebach rynku pracy i oparty na sprawdzonych metodykach zarządzania, takich jak Agile, Scrum i Kanban. Uczestnicy szkolenia nauczą się, jak skutecznie kierować zespołem projektowym, analizować ryzyko i efektywność działań, a także wykorzystywać narzędzia cyfrowe wspomagające pracę Project Managera.\n\nProgram szkolenia obejmuje m.in.:\n• Planowanie i kontrolę realizacji projektów,\n• Metodyki Agile, Scrum, Kanban - zastosowanie w praktyce,\n• Zarządzanie zespołem, komunikacja i rozwiązywanie konfliktów,\n• Narzędzia cyfrowe wykorzystywane przez Project Managerów, analiza ryzyka, harmonogramowanie, budżetowanie.'
    },
    'content-creator': {
      title: 'KONTENT KREATOR z wykorzystaniem narzędzi AI',
      description: 'Szkolenie „Kontent kreator z wykorzystaniem narzędzi AI” to innowacyjny program skierowany do osób, które chcą rozwijać swoje umiejętności w zakresie tworzenia treści marketingowych i kreatywnych z wykorzystaniem sztucznej inteligencji. Program łączy elementy komunikacji, brandingu, automatyzacji oraz nowoczesnych narzędzi cyfrowych, odpowiadając na aktualne potrzeby rynku pracy i sektora kreatywnego.\n\nProgram szkolenia obejmuje m.in.:\n• Podstawy komunikacji marketingowej i procesu twórczego,\n• Tworzenie treści graficznych, tekstowych i wideo z wykorzystaniem narzędzi AI, planowanie strategii promocyjnych w mediach cyfrowych,\n• Budowanie wizerunku osobistego i marki w sieci,\n• Narzędzia organizacji pracy: automatyzacja, współpraca, zarządzanie feedbackiem.'
    },
    'data-analyst': {
      title: 'ANALITYK DANYCH z elementami AI',
      description: 'Szkolenie „Analityk danych z elementami AI” to praktyczny kurs przygotowujący do pracy z danymi w różnych środowiskach zawodowych. Uczestnicy poznają podstawy analizy danych i statystyki, nauczą się wykorzystywać popularne narzędzia cyfrowe (Excel, Google Sheets), a także dowiedzą się, jak tworzyć wizualizacje i interaktywne dashboardy. Dodatkowym atutem szkolenia jest wprowadzenie do wykorzystania sztucznej inteligencji w analizie danych oraz rozwój kompetencji miękkich niezbędnych w pracy analityka.\n\nProgram szkolenia obejmuje m.in.:\n• Podstawy analizy danych i statystyki,\n• Praca z danymi w Excelu i Google Sheets - tabele, funkcje, wykresy, wizualizacja danych i tworzenie interaktywnych dashboardów, wprowadzenie do sztucznej inteligencji i uczenia maszynowego,\n• Kompetencje miękkie analityka: komunikacja, interpretacja wyników, etyka pracy z danymi'
    },
    'office-worker': {
      title: 'PRACOWNIK BIUROWY - finanse, kadry, płace',
      description: 'Szkolenie „Pracownik biurowy - finanse, kadry, płace” to praktyczny kurs przygotowujący do pracy w środowisku administracyjno-biurowym. Uczestnicy zdobędą wiedzę z zakresu organizacji pracy biurowej, kadr, płac, podstaw księgowości oraz obsługi klienta. Program został opracowany z myślą o osobach, które chcą poszerzyć swoje kwalifikacje lub przygotować się do zmiany zawodu.\n\nProgram szkolenia obejmuje m.in.:\n• Podstawy organizacji pracy biurowej i zarządzania dokumentacją, \n• Wprowadzenie do prawa pracy i podstawy zatrudniania pracowników,\n• Naliczanie wynagrodzeń i świadczeń pracowniczych, podstawy finansów i księgowości w pracy administracyjnej, rozwój kompetencji miękkich i obsługi klienta'
    },
    'program-overview': {
      title: 'Lubelskie LevelUp - Program Szkoleń',
      description: 'Szkolenia są dofinansowane w 100% przez UE z programu Fundusze Europejskie dla Lubelskiego na lata 2021-2027.\n\nForma: Szkolenie stacjonarne\nul. Stanisława Leszczyńskiego\nlub\nul. Gabriela Narutowicza\n\nCzas trwania: 150 godzin dydaktycznych\n\nCzas trwania kursu jest elastyczny i dopasowany do potrzeb uczestników!\n\nKto może wziąć udział?\nSzkolenia skierowane są do osób:\n• Mieszkających na terenie województwa lubelskiego\n• Zatrudnionych na podstawie umowy o pracę na okres nie dłuższy niż 6 miesięcy\n• Otrzymujących wynagrodzenie nie wyższe niż najniższa krajowa\n• Zatrudnionych na umowę zlecenie\n\nMożna wybrać tylko jedno szkolenie!'
    }
  };
  
  // Close modal when clicking X
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // Close modal when clicking outside content
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
    }
  });
  
  // Set up click handlers for all "Rozwiń opis" buttons
  document.querySelectorAll('[href="#rozwin-opis"]').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      showModal(this.getAttribute('data-course'));
    });
  });
  
  // Set up click handler for "Dowiedz się więcej" button
  document.querySelector('.frame-4').addEventListener('click', function(e) {
    e.preventDefault();
    showModal('program-overview');
  });
  
  // Function to show modal with content
  function showModal(courseId) {
    if (!courseId || !courseDescriptions[courseId]) {
      console.error('Unknown course type:', courseId);
      return;
    }
    
    // Set modal content
    modalTitle.textContent = courseDescriptions[courseId].title;
    modalDescription.textContent = courseDescriptions[courseId].description;
    
    // Show modal
    modal.style.display = 'block';
    
    // Set focus to modal for accessibility
    modal.setAttribute('aria-hidden', 'false');
    modalTitle.focus();
  }
});