sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("projetonetflix.controller.Inicio", {
            onInit: function () {
                var menu = {
                    primeiro: "BEGIN",
                    segundo: "MOVIES"
                }
                // Criae modelo e preenher com dados
                var menuModel = new JSONModel();
                menuModel.setData(menu);

                // Atribuir
                var tela = this.getView();
                tela.setModel(menuModel, "ModeloMenu")


            },
            onPressLinkInicio: function(){
                alert("Voce clicou no link Inicio");
            },
            onPressLinkSeries: function(){
                alert("Voce clicou no link Séries");
            },
            onApertarBuscar: function(){
                var query = this.byId("inputBuscar").getValue();
                alert(query)
            }
        });
    });
