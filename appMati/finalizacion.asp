
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equi="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Finalización</title>
	</head>
	<body>
		
			<%if Request.cookies("apellido") <> "" then%>
				<table>
					<tr>
						<th>Apellido</th>
						<th>Nombre</th>
						<th>Email</th>
					</tr>
					<tr>
						<td><%Response.Write(Request.cookies("apellido"))%></td>
						<td><%Response.Write(Request.cookies("nombre"))%></td>
						<td><%Response.Write(Request.cookies("email"))%></td>
					</tr>
				</table>
			<%else%>
				<table>
					<th>NO SE HAN CREADO LAS COOKIES<th>
				</table>
			<%END IF%>
	</body>
</html>