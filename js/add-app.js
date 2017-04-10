			$(function () {
				$(document).on('click', '.add-app-checkbox input[type=checkbox]', function(e){
					var checkbox_name = $(this).attr('data-item');
					var checkbox_name_data = checkbox_name.replace(/\s+/g, '-').toLowerCase();
					if($(this).is(':checked')){
						var appended_row = '';
						appended_row = '<tr data-row="'+checkbox_name_data+'"><td data-title="Application(s)">'+checkbox_name+'</td><td data-title="System Role(s)"></td><td data-title="Role(s)"></td><td data-title="Action" class="actionBtn"><a href="" class="actionBlue"><i class="fa fa-pencil"></i></a></td></tr>';
						$(appended_row).appendTo('#add-app-row');
					}else{
						$('tr[data-row="'+checkbox_name_data+'"]').remove();
					}
				});
			});