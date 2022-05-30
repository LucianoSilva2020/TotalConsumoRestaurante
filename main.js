var consumo = document.querySelectorAll('input');
            var total = 0;

            for (var i=0; i<consumo.length; i++) {
                consumo[i].addEventListener('change',soma);
            }

            function soma() {
                total = 0
                for (var j=0; j<consumo.length; j++) {
                    let valor = parseFloat(consumo[j].value);
                        if (!isNaN(valor)){
                            total += valor;
                            console.log(total)
                        }else{
                            consumo[j].value = 0;
                        }
                        
                }

                document.getElementById('tot').innerHTML = 
                        "Total do consumo: "+total.toFixed(2);
                document.getElementById('gor').innerHTML = 
                        "Gorjeta (10%): "+(total*0.1).toFixed(2);
                document.getElementById('vlp').innerHTML = 
                        "Valor a pagar: "+(total*1.1).toFixed(2);
            }