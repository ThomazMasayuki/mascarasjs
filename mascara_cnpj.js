//Validação CNPJ e máscara XX.XXX.XXX/XXXX-XX

function valida_MascaraCNPJ (executionContext) {

    var context = executionContext.getFormContext();

    var nomeCampo = executionContext.getEventSource().getName();

    var fieldAtrribute = context.getAttribute(nomeCampo);

    var val = fieldAtrribute.getValue();

    var fieldControl = context.getControl(nomeCampo);



    fieldControl.clearNotification();



    if (val !== null) {

        var exp = /\-|\.|\/|\(|\)| /g;

        val = val.replace(exp, "");

        if (val.length !== 14

            || val == "00000000000000"

            || val == "11111111111111"

            || val == "22222222222222"

            || val == "33333333333333"

            || val == "44444444444444"

            || val == "55555555555555"

            || val == "66666666666666"

            || val == "77777777777777"

            || val == "88888888888888"

            || val == "99999999999999") {

            fieldControl.setNotification("CNPJ inválido.");

            return;

        }



        fieldAtrribute.setValue(val.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5"));



        var valida = new Array(6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2);

        var dig1 = new Number;

        var dig2 = new Number;

        var digito = new Number(parseInt(val.substring(12, 14)));

        

        for (var i = 0; i < valida.length; i++) {

            dig1 += i > 0 ? val.charAt(i - 1) * valida[i] : 0;

            dig2 += val.charAt(i) * valida[i];

        }

        dig1 = dig1 % 11 >= 2 ? 11 - dig1 % 11 : 0;

        dig2 = dig2 % 11 < 2 ? 0 : 11 - dig2 % 11;

        if (dig1 * 10 + dig2 != digito) {

            fieldControl.setNotification("CNPJ inválido.");

            return;

        } 

    }

}
