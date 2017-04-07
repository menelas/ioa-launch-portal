			$(function () {
				$(document).on('click', 'a.add-permission-row', function(e){
					e.preventDefault();
					var appended_row = $('#permision-row-container tr:first-child').clone();
					$(appended_row).appendTo('#permision-row-container');
				});
				$(document).on('click', 'a.add-system-roles-row', function(e){
					e.preventDefault();
					var appended_row = $('#system-roles-container tr:first-child').clone();
					$(appended_row).appendTo('#system-roles-container');
				});
				$(document).on('click', 'a.add-roles-row', function(e){
					e.preventDefault();
					var appended_row = $('#roles-container tr:first-child').clone();
					$(appended_row).appendTo('#roles-container');
				});
			});