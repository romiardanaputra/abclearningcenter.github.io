var users = localStorage.getItem('romidb');
$(document).ready(function () {
	users = JSON.parse(users); // Convert String as an Object
	if (users === null)
		// If there is nothing intialize
		users = [];

	listRegistrants();
});

function listRegistrants() {
	var users = localStorage.getItem('romidb');
	users = JSON.parse(users); // Convert String as an Object
	if (users === null)
		// If there is nothing intialize
		users = [];

	$('#tbl-list').html('');
	$('#tbl-list').html(
		`<thead>
			<tr>
				<th>Name</th>
				<th>Email</th>
				<th>Password</th>
				<th>Course</th>
				<th>Mobile Phone</th>
				<th>Edit</th>
				<th>Delete</th>
			</tr>
		</thead>
		<tbody></tbody>
		`
	);

	for (var user in users) {
		var registrant = JSON.parse(users[user]);

		$('#tbl-list tbody').append(
			`<tr>
					<td>${registrant.fullName}</td>
					<td>${registrant.email}</td>
					<td>${registrant.password}</td>
					<td>${registrant.course}</td>
					<td>${registrant.mobile_phone}</td>
					<td><button class="btnEdit">Edit</button></td>
					<td><button class="btnDel">Delete</button> </td>
			</tr>`
		);
	}
}

$('.btnEdit').bind('click', function () {
	var registrant;

	for (var user in users) {
		registrant = JSON.parse(users[user]);
		if (registrant) {
			selected_index = parseInt($(this).attr('alt').replace('Edit', ''));
		}

		var registrant = JSON.parse(users[selected_index - 1]);

		$('#name').val(registrant.fullname);
		$('#email').val(registrant.email);
		$('#pwd').val(registrant.password);
		$('#course').val(registrant.course);
		$('#phone_number').val(registrant.mobile_phone);
		$('#name').attr('readonly', 'readonly');
		$('#email').focus();
	}
});
