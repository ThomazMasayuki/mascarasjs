function valida_MascaraCEP(executionContext) {
    var context = executionContext.getFormContext();
    var nomeCampo = executionContext.getEventSource().getName();
    var fieldAttribute = context.getAttribute(nomeCampo);
    var val = fieldAttribute.getValue();
    var fieldControl = context.getControl(nomeCampo);

    fieldControl.clearNotification();

    if (val !== null) {
        // Remove caracteres não numéricos
        val = val.replace(/[^\d]+/g, "");

        // Verifica se o CEP possui a quantidade correta de dígitos
        if (val.length !== 8) {
            fieldControl.setNotification("CEP inválido.");
            return;
        }

        // Adiciona a máscara ao CEP
        fieldAttribute.setValue(val.replace(/^(\d{5})(\d{3})/, "$1-$2"));




    }
}