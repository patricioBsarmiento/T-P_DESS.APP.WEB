<%
	Response.cookies("apellido")=Request.Form("txtApellido")
	Response.cookies("nombre")=Request.Form("txtNombre")
	Response.cookies("email")=Request.Form("email2")
	Response.cookies("apellido").expires=#Jul,02,2022#
	Response.cookies("nombre").expires=#Jul,02,2022#
	Response.cookies("email").expires=#Jul,02,2022#
%>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equi="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Confirmacion</title>
	</head>
	<body>
		
			<table border="2">
				<tr>
					<th>
						<%Response.Write("Encuentro: " & Request.Form("cboEquipos"))%>
					</th>
					<th>
						<%Response.Write("Ubicación: " & Request.Form("cboUbicacion"))%>
					</th>
					<th>
						<%Response.Write("Cantidad: " & Request.Form("cantidad"))%>
					</th>
					<th>
						<%Response.Write("DINERO")%>
					</th>
				<tr>
				<tr>
					<th>
						<%Response.Write("Apellido: " & Request.Form("txtApellido"))%>
					</th>
					<th>
						<%Response.Write("Nombre: " & Request.Form("txtNombre"))%>
					</th>
					<th>
						<%Response.Write("E-Mail: " & Request.Form("email2"))%>
					</th>
					<th>
						<%Response.Write("Tarjeta: " & Request.Form("rdoTarjeta"))%>
					</th>
				<tr>
			</table>
			
			<a href="finalizacion.asp">
				<img src="imagen/imagenQR.jpg" alt="qr" style="widht:50px;height:50px;">
			</a>
		
	</body>
</html>