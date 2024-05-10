$(document).ready(function() {
	const apiUrl = 'https://randomuser.me/api/';
  
	function getRandomUser(containerId, role) {
	  $.ajax({
		url: apiUrl,
		dataType: 'json',
		success: function(data) {
		  renderUserData(containerId, data.results[0], role);
		},
		error: function(xhr, status, error) {
		  console.error('Error fetching random user:', error);
		}
	  });
	}
  
	function renderUserData(containerId, user, role) {
	  const container = $(`#${containerId}`);
	  container.empty();
  
	  const fullName = `${user.name.first} ${user.name.last}`;
	  const email = user.email;
	  const picture = user.picture.large;
	  const functionText = `Functie: ${role}`;
  
	  const userHtml = `
		<div>
		  <img src="${picture}" alt="Profile Picture">
		  <p><strong>Name:</strong> ${fullName}</p>
		  <p><strong>Email:</strong> ${email}</p>
		  <p><strong>${functionText}</strong></p>
		</div>
	  `;
  
	  container.append(userHtml);
	}
  
	renderUserData('Gebruiker', {
	  name: { first: 'Kobe', last: 'Van Eyck' },
	  email: 'kobe.vaneyck@student.ap.be',
	  picture: { large: './assets/fotovanmezelf.jpg' }
	}, 'Eigenaar');
  
	getRandomUser('Sitebeheerder', 'Sitebeheerder');
	getRandomUser('Netwerkbeheerder', 'Netwerkbeheerder');
  });
  