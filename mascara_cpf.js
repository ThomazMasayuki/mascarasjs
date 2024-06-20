//Validação CPF e máscara XXX.XXX.XXX-XX

function valida_MascaraCPF (executionContext) {

var context = executionContext.getFormContext();

var nomeCampo = executionContext.getEventSource().getName()

var fieldAtrribute = context.getAttribute(nomeCampo);

var val = fieldAtrribute.getValue();

var fieldControl = context.getControl(nomeCampo);

fieldControl.clearNotification();

if (val !== null) {

    val = val.replace(/[^\d]+/g, "");

    if (val.length !== 11

        || val === "00000000000"

        || val === "11111111111"

        || val === "22222222222"

        || val === "33333333333"

        || val === "44444444444"

        || val === "55555555555"

        || val === "66666666666"

        || val === "77777777777"

        || val === "88888888888"

        || val === "99999999999") {

        fieldControl.setNotification("CPF inválido.");

        return;

    }

    fieldAtrribute.setValue(val.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"));

    // Valida 1o digito 

    var add = 0;

    var i;

    for (i = 0; i < 9; i++)

        add += parseInt(val.charAt(i)) * (10 - i);

    var rev = 11 - (add % 11);

    if (rev === 10 || rev === 11)

        rev = 0;

    if (rev !== parseInt(val.charAt(9))) {

        fieldControl.setNotification("CPF inválido.");

        return;

    }

    // Valida 2o digito 

    add = 0;

    for (i = 0; i < 10; i++)

        add += parseInt(val.charAt(i)) * (11 - i);

    rev = 11 - (add % 11);

    if (rev === 10 || rev === 11)

        rev = 0;

    if (rev !== parseInt(val.charAt(10))) {

        fieldControl.setNotification("CPF inválido.");

    } 

}

}