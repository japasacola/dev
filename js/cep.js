$(document).ready(function() {
    function a() {
        $("#rua").val(""), $("#bairro").val(""), $("#cidade").val(""), $("#uf").val(""), $("#ibge").val("")
    }
    $("#inf_field_ZipFour1").blur(function() {
        var e = $(this).val().replace(/\D/g, "");
        if ("" != e) {
            /^[0-9]{8}$/.test(e) ? ($.getJSON("https://viacep.com.br/ws/" + e + "/json/?callback=?", function(a) {
                if ("erro" in a) Swal.fire({
                    title: "CEP não identificado!",
                    text: "Não conseguimos localizar o seu CEP.",
                    icon: "warning",
                    showCancelButton: !0,
                    confirmButtonText: "Digitar novamente",
                    cancelButtonText: "Inserir CEP novamente."
                }).then(a => {
                    a.value ? $("#inf_field_ZipFour1").val("") : ($("#rua").prop("disabled", !1), $("#numero").prop("disabled", !1), $("#bairro").prop("disabled", !1), $("#cidade").prop("disabled", !1), $("#uf").prop("disabled", !1))
                });
                else switch ($("#rua").val(a.logradouro), $("#bairro").val(a.bairro), $("#cidade").val(a.localidade), $("#uf").val(a.uf), a.uf) {
                    case "AC":
                        $("amostra-form select").val("AC");
                        break;
                    case "AL":
                        $("amostra-form select").val("AL");
                        break;
                    case "AP":
                        $("amostra-form select").val("AP");
                        break;
                    case "AM":
                        $("amostra-form select").val("AM");
                        break;
                    case "BA":
                        $("amostra-form select").val("BA");
                        break;
                    case "CE":
                        $("amostra-form select").val("CE");
                        break;
                    case "DF":
                        $("amostra-form select").val("DF");
                        break;
                    case "ES":
                        $("amostra-form select").val("ES");
                        break;
                    case "GO":
                        $("amostra-form select").val("GO");
                        break;
                    case "MA":
                        $("amostra-form select").val("MA");
                        break;
                    case "MT":
                        $("amostra-form select").val("MT");
                        break;
                    case "MS":
                        $("amostra-form select").val("MS");
                        break;
                    case "MG":
                        $("amostra-form select").val("MG");
                        break;
                    case "PA":
                        $("amostra-form select").val("PA");
                        break;
                    case "PB":
                        $("amostra-form select").val("PB");
                        break;
                    case "PR":
                        $("amostra-form select").val("PR");
                        break;
                    case "PE":
                        $("amostra-form select").val("PE");
                        break;
                    case "PI":
                        $("amostra-form select").val("PI");
                        break;
                    case "RJ":
                        $("amostra-form select").val("RJ");
                        break;
                    case "RN":
                        $("amostra-form select").val("RN");
                        break;
                    case "RS":
                        $("amostra-form select").val("RS");
                        break;
                    case "RO":
                        $("amostra-form select").val("RO");
                        break;
                    case "RR":
                        $("amostra-form select").val("RR");
                        break;
                    case "SC":
                        $("amostra-form select").val("SC");
                        break;
                    case "SP":
                        $("amostra-form select").val("SP");
                        break;
                    case "SE":
                        $("amostra-form select").val("SE");
                        break;
                    case "TP":
                        $("amostra-form select").val("TP")
                }
            }), $("#inf_field_StreetAddress1").prop("disabled", !1),$("#inf_field_StreetAddress2").prop("disabled", !1)) : (a(), alert("Formato de CEP inválido."))
        } else a()
    })
});