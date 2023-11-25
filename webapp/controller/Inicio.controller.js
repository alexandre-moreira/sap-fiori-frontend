sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("projetonetflix.controller.Inicio", {
            onInit: function () {
                // Equivale ao Initialization do ABAP.
                // Evento que é executado quando o programa é iniciado.

                // Trabalhando com variáveis

                // Variaveis de texto
                    var serie = "Os Trapalhoes";

                //Variaveis numericas
                    var ano = 1980
                
                // Variaveis de lista de valores
                // Equivale a tabela interna no ABAP
                // Se chama Array no Javascript.
                    var elenco = ["Didi", "Dede","Mussum", "Zacarias"]

                    console.log(serie);
                    console.log(ano);
                    console.log(elenco);

                // Variavel do tipo objeto (Variavel composta por varias propriedades)
                // Equivale a estrutura no ABAP.
                    var liveAction = {
                        nome: "One Piece",
                        ano: 2023,
                        elenco: ['Luffy', 'Zoro', 'Nami', 'Usopp']
                    }
                    console.log(liveAction)
                    
                    var minhaLista = [
                        {
                            nome: "One Piece",
                            ano: 2023,
                            elenco: ['Luffy', 'Zoro', 'Nami', 'Usopp']
                        },
                        {
                            nome: "Trapalhoes",
                            ano: 1985,
                            elenco: ["Didi", "Dede","Mussum", "Zacarias"]
                        }
                    ]

                    console.log(minhaLista)

            },
            onPressLinkInicio: function(){
                alert("Voce clicou no link Inicio");
            },
            onPressLinkSeries: function(){
                alert("Voce clicou no link Séries");
            }
        });
    });
