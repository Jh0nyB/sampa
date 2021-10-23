
//formulário residencial
    function limpa_formulario_cep() {
            //Limpa valores do formulário de cep.
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('estado').value=("");

    }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            document.getElementById('rua').value=(conteudo.logradouro);
            document.getElementById('bairro').value=(conteudo.bairro);
            document.getElementById('cidade').value=(conteudo.localidade);
            document.getElementById('estado').value=(conteudo.uf);
        } //end if.
        else {
            //CEP não Encontrado.
            limpa_formulario_cep();
            alert("CEP não encontrado.");
            document.getElementById('cep').value=("");
        }
    }

    function pesquisacep(valor) {

        //Nova variável "cep" somente com dígitos.
        var cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep !== "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                document.getElementById('rua').value="...";
                document.getElementById('bairro').value="...";
                document.getElementById('cidade').value="...";
                document.getElementById('estado').value="...";

                //Cria um elemento javascript.
                var script = document.createElement('script');

                //Sincroniza com o callback.
                script.src = '//viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
                limpa_formulario_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulario_cep();
        }
    }
//formulario residencial

//formulario Dedicado
function limpa_formulario_cep2() {
        //Limpa valores do formulário de cep.
        document.getElementById('rua2').value=("");
        document.getElementById('bairro2').value=("");
        document.getElementById('cidade2').value=("");
        document.getElementById('estado2').value=("");

}

function meu_callback2(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua2').value=(conteudo.logradouro);
        document.getElementById('bairro2').value=(conteudo.bairro);
        document.getElementById('cidade2').value=(conteudo.localidade);
        document.getElementById('estado2').value=(conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulario_cep2();
        alert("CEP não encontrado.");
        document.getElementById('cep2').value=("");
    }
}

function pesquisacep2(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep2 = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep2 !== "") {

        //Expressão regular para validar o CEP.
        var validacep2 = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep2.test(cep2)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua2').value="...";
            document.getElementById('bairro2').value="...";
            document.getElementById('cidade2').value="...";
            document.getElementById('estado2').value="...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = '//viacep.com.br/ws/'+ cep2 + '/json/?callback=meu_callback2';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulario_cep2();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulario_cep2();
    }
}
//formulario dedicado


function formatar(mascara, documento){
  var i = documento.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i);

  if (texto.substring(0,1) != saida){
            documento.value += texto.substring(0,1);
  }

}

function idade (){
    var data=document.getElementById("dtnasc").value;
    var dia=data.substr(0, 2);
    var mes=data.substr(3, 2);
    var ano=data.substr(6, 4);
    var d = new Date();
    var ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate();

        ano=+ano,
        mes=+mes,
        dia=+dia;

    var idade=ano_atual-ano;

    if (mes_atual < mes || mes_atual == mes_aniversario && dia_atual < dia) {
        idade--;
    }
return idade;
}


function exibe(i) {



	document.getElementById(i).readOnly= true;




}

function desabilita(i){

     document.getElementById(i).disabled = true;
    }
function habilita(i)
    {
        document.getElementById(i).disabled = false;
    }


function showhide()
 {
       var div = document.getElementById("newpost");

       if(idade()>=18){

    div.style.display = "none";
}
else if(idade()<18) {
    div.style.display = "inline";
}

 }

 function sendcontato(){
   chat_id = "-1001483428121";
   token = "1156231231:AAH3JQHfgE4iijdP_wX6oky_1dButyqZgCY";
   nome3tele = document.getElementById("nome3").value;
   email3tele = document.getElementById("email3").value;
   celular3tele = document.getElementById("celular3").value;
   telefone3tele = document.getElementById("telefone3").value;
   message3tele = document.getElementById("message3").value;
   $.get("https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chat_id+"&text= Nome: "+nome3tele+"%0AEmail: "+email3tele+"%0ACelular: "+celular3tele+"%0ATelefone: "+telefone3tele+"%0AMensagem: "+message3tele+"");
   }


 function sendempresa(){
   chat_id = "-1001483428121";
   token = "1065873994:AAFd-Us0WKjWweSpu9AVOePThIa85Ni2hbQ";
   nomeempresatele = document.getElementById("nomeempresa").value;
   cpfcnpjtele = document.getElementById("cpfcnpj").value;
   emailempresatele = document.getElementById("email2").value;
   celularempresatele = document.getElementById("celular2").value;
   telefoneempresatele = document.getElementById("telefone2").value;
   cep2tele = document.getElementById("cep2").value;
   rua2tele = document.getElementById("rua2").value;
   numero2tele = document.getElementById("numero2").value;
   complemento2tele = document.getElementById("complemento2").value;
   bairro2tele = document.getElementById("bairro2").value;
   cidade2tele = document.getElementById("cidade2").value;
   estado2tele = document.getElementById("estado2").value;
  $.get("https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chat_id+"&text= Nome Empresa: "+nomeempresatele+ "%0ACPF: "+cpfcnpjtele+ "%0ACelular: "+celularempresatele+ "%0ATelefone: "+telefoneempresatele+ "%0AEmail: "+emailempresatele+ "%0ACEP: "+cep2tele+ "%0ARua: "+rua2tele+"%0ANumero: "+numero2tele+ "%0AComplemento: "+complemento2tele+"%0ABairro: "+bairro2tele+"%0ACidade: "+cidade2tele+"%0AEstado: "+estado2tele+"");
 }

 function sendresidencia(){
   chat_id = "-1001483428121";
   token = "1065873994:AAFd-Us0WKjWweSpu9AVOePThIa85Ni2hbQ";
   nometele = document.getElementById("nome").value;
   cpftele = document.getElementById("cpf").value;
   rgtele = document.getElementById("rg").value;
   nascimentotele = document.getElementById("nascimento").value;
   celulartele = document.getElementById("celular").value;
   telefonetele = document.getElementById("telefone").value;
   emailtele = document.getElementById("email").value;
   ceptele = document.getElementById("cep").value;
   ruatele = document.getElementById("rua").value;
   numerotele = document.getElementById("numero").value;
   complementotele = document.getElementById("complemento").value;
   bairrotele = document.getElementById("bairro").value;
   cidadetele = document.getElementById("cidade").value;
   estadotele = document.getElementById("estado").value;
   planotele = document.getElementById("plano").value;
   vencimentotele = document.getElementById("vencimento").value;
   periodotele = document.getElementById("periodo").value;
   $.get("https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chat_id+"&text= Nome: "+nometele+"%0ACPF: "+cpftele+ "%0ARG: "+rgtele+ "%0AData de nascimento: "+nascimentotele+ "%0ANº Celular: "+celulartele+ "%0ANº Telefone: "+telefonetele+ "%0AEmail: "+emailtele+ "%0ACEP: "+ceptele+ "%0ARua: "+ruatele+"%0ANumero: "+numerotele+ "%0AComplemento: "+complementotele+"%0ABairro: "+bairrotele+"%0ACidade: "+cidadetele+"%0AEstado: "+estadotele+ "%0APlano Escolhido: "+planotele+"%0AData do vencimento: "+vencimentotele+ "%0APeriodo de instalação: "+periodotele+"");
 }

 function sendcombustivel(){
   chat_id = "-1001171139169";
   token = "1516048497:AAHt2WsOcuBUArQWYz1z4EHMLojHfAVdllE";
   carrocombust = document.getElementById("carros").value;
   condutorcombust = document.getElementById("condutores").value;
   autorizadorescombust = document.getElementById("autorizadores").value;
   placacombust = document.getElementById("placa").value;
   combustivelcombust = document.getElementById("combustivel").value;
   kilometragemcombust = document.getElementById("kilometragem").value;
   valorcombust = document.getElementById("valor").value;
  $.get("https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chat_id+"&text= Carro: "+carrocombust+ "%0Condutor: "+condutorcombust+ "%0AAutorizador: "+autorizadorescombust+ "%0APlaca: "+placacombust+ "%0ACombustivel: "+combustivelcombust+ "%0KM: "+kilometragemcombust+ "%0AValor: "+valorcombust+"");
 }
