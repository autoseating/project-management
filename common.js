
    // Get the elements
    const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const sidebar = document.getElementById('sidebar');
    const mainContainer = document.querySelector('.mainContainer');
    const spaceListDropdownBtn = document.querySelectorAll('.space-list-dropdown-btn');
    const spaceProjectContainer = document.querySelectorAll('.spaces-projects-container');

    // const projectsBtn = document.getElementById('projectsBtn');
    // const projectsDropdown = document.getElementById('projectsDropdown');

    // Open or close Sidebar and shift content accordingly
    toggleSidebarBtn.addEventListener('click', function() {
      sidebar.classList.toggle('closed');  // Toggle sidebar open/close
      mainContainer.classList.toggle('shifted');  // Shift content when sidebar is open/closed
    });

    // Close Sidebar directly
    closeSidebarBtn.addEventListener('click', function() {
      sidebar.classList.add('closed');
      mainContainer.classList.add('shifted');  // Ensure content shifts to left when sidebar is closed
    });

    // Toggle dropdown visibility when "Projects" button is clicked
    spaceListDropdownBtn.forEach((btn, index) => {
      btn.addEventListener('click', function() {
        // Toggle the 'open' class for the corresponding container based on index
        const container = spaceProjectContainer[index];
        container.classList.toggle('open');
        console.log(container.classList); // Log the classes to verify if it's toggling correctly
      });
    });
    
    document.querySelectorAll('.toggle-dropdown').forEach(tab => {
      tab.addEventListener('click', (e) => {
          // Prevent toggling if clicked inside the dropdown (to avoid immediate hiding when clicking a list item)
          if (e.target.closest('.dropdown-menu')) return;
  
          const dropdown = tab.querySelector('.dropdown-menu');
          dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
          
          // Close other dropdowns
          document.querySelectorAll('.toggle-dropdown').forEach(otherTab => {
              if (otherTab !== tab) {
                  otherTab.querySelector('.dropdown-menu').style.display = 'none';
              }
          });
  
          e.stopPropagation(); // Prevent the event from propagating
      });
  });
  
  // Close all dropdowns if clicking outside the navtabs
  document.addEventListener('click', () => {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.style.display = 'none';
      });
  });
  