<?php

require_once 'classes/Usuarios.php';
$u = new Usuarios();

?>


<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <title>Barbearia El Macho </title>
    <link rel="stylesheet" href="style/main.css">
    <link rel="shortcut icon" href="file:///C:/xampp/htdocs/Sistema-login-master/imagens/123.jpg">
</head>

<body>

<div id="corpo-form">
    <h1>Barbearia El Macho</h1>

    <form method="POST">
        <input type="email" name="email" placeholder="Usuário"/>
        <input type="password" name="senha" placeholder="Senha"/>
        <input type="submit" value="ACESSAR" name=""/>
        
    </form>
<div>
</body>

<?php

if(isset($_POST['email'])):
    
    $email = addslashes($_POST['email']);
    $senha = addslashes($_POST['senha']);

    if(!empty($email) && !empty($senha)):

        $u->conectar("projeto_login", "localhost", "root", "");

        if($u->msgERRO == ""):

            if($u->logar($email, $senha)):

                header("location: index.html");

        
            else: 

                ?>

                <div class="msg-erro">
                    E-mail e/ou Senha Incorretos!
                </div>

                <?php

            endif;

        else:

            ?>
           
            <div class="msg-erro"> 
                
                 <?php echo "Erro: ".$u->msgERRO; ?>
            
            </div>

            <?php


        
        endif;

    else:

        ?>

            <div class="msg-erro">
                Preencha Todos os Campos!
            </div>

        <?php




    endif;


endif;



?>

</html>
