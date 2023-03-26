class Calculadora{
    isBuscado(arr,buscar){
        let pos=0,enc=0
        //[2,4,6]  4
        while(pos<arr.length && enc==0){
            if (arr[pos]==buscar){
               enc=1
            }else{
                pos+=1
            }
        }
        if (enc == 1){
            return pos    
        }else{
            return -1
        }
    }
    buscaArreglo(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let arreglo = cadena.split(",")
        console.log($input)
        console.log(cadena)
        console.log(arreglo)
        let buscado=prompt("Ingrese dato a buscar")
        let pos = this.isBuscado(arreglo,buscado)
        if (pos >= 0){
            $input.value=`[${arreglo}] - ${buscado} se encuentra en la posicion: ${pos}`
        }else{
            $input.value=`[${arreglo}] - ${buscado} no se encuentra en el arreglo`
        }
    }

     isPalabras(frase){
        let cp=1
        frase = frase.trim()
        for(let pos=0;pos<frase.length;pos++){
            
            if (frase[pos]==' ' && frase[pos+1]!=' ' ){
                cp+=1
            }
        }
        return cp
    }
    contarPalabras(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let cp = this.isPalabras(cadena)
        $input.value=`${cadena} tiene ${cp} palabras`
   
    }
     isCopiarCaracteres(frase,car){
        let copia=""
        frase = frase.trim()
        for(let pos=0;pos<frase.length;pos++){
            if (frase[pos]==car ){
                copia = copia + frase[pos]
            }
        }
        return copia
    }
    copiarCaracteres(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let caracter = prompt("Ingrese caracter")
        let cc = this.isCopiarCaracteres(cadena,caracter)
        $input.value=`${cadena} - ${cc} `
   
    }
      isDivisor(arr,divisor){
        let divisores=[],pos2=0
        for (let pos=0;pos<arr.length;pos++){
            let num=parseInt(arr[pos])
            if (num%divisor==0){
                divisores.push(num)
                //divisores[pos2]=arr[pos]
                //pos2+=1
            }

        }
        return divisores
    }
    copiarDivisor(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let arreglo = cadena.split(";")
        //console.log($input)
        //console.log(cadena)
        //console.log(arreglo)["ana","jose","dan"] jose
        let divisor=parseInt(prompt("Ingrese Divisor"))
        let divisores = this.isDivisor(arreglo,divisor)
        $input.value=`[${arreglo}] - ${divisores}`
        
        
    }
    palindroma(){
        let $input=document.getElementById("result")
        let cadena = $input.value // anitalavala  t  i  n  a
        //                           012345678910 11 12 13 14
        // 
        let cadenaPal=this.quitaEspacio(cadena).toLowerCase()                       
        let pi=0,pf=cadenaPal.length-1,pal=1
        while (pi <= pf && pal==1){
            if (cadenaPal[pi]==cadenaPal[pf]){
                pi++
                pf--
            }
            else{
                pal=0
            }
        }
        if (pal==1){
             $input.value=`[${cadena}] Es Palindroma`
        }else{
             $input.value=`[${cadena}] No es Palindroma`
        }
    }
    quitaEspacio(conespacio) {
        let sinEspacio="";
        conespacio = conespacio.trim();
        for (let i = 0; i < conespacio.length; i++) {
          if (conespacio[i] !== " ") {
            sinEspacio += conespacio[i];
          }
        }
        return sinEspacio;
      }
      
      buscacadena() {
        let $input=document.getElementById("result");
        let conespacio=$input.value
        let subcadena=prompt("Que desea buscar?")
        let cadena=this.quitaEspacio(conespacio)
        let posfinal=-1
        for (let i = 0; i <= cadena.length - subcadena.length; i++) {
          let coincidencias = 0;
          for (let j = 0; j < subcadena.length; j++) {
            if (cadena[i + j] == subcadena[j]) {
              coincidencias++;
            }
          }
          if (coincidencias == subcadena.length) {
            posfinal=i;
          }
        }
        if(posfinal!=-1){
            $input.value=`La subcadena "${subcadena}" se encuentra en la posicion: ${posfinal} de la cadena "${conespacio}"`;
        }else{
            $input.value=`La subcadena "${subcadena}" no se encuentró dentro de la cadena`;
        }
        
      }
    isExponente(base,exp){
        let res = 1
        for(let i=1;i<=exp;i++){
            res*=base
        }
        return res
    }   
    isDigitos(numero,base){
        let  digitos= []
        while(numero > 0){
            digitos.push(numero%base)
            numero = parseInt(numero/base)
        }
        return digitos
    }
    base10_2(){
        let $input=document.getElementById("result")
        let numero = parseInt($input.value)
        let arreglo=this.isDigitos(numero,2)
        let base2=""
        for(let i=arreglo.length-1;i>=0;i--){
            base2=base2+arreglo[i].toString()
        }
         $input.value=`[Base10=${numero}] ==> Base2=${base2}`
        
    }
    base2_10(){
        let $input=document.getElementById("result")
        let numero = parseInt($input.value)
        let arreglo=this.isDigitos(numero,10)
        let base10=0,limite=arreglo.length-1
        for(let i=arreglo.length-1;i>=0;i--){
            base10= base10 + arreglo[i]*this.isExponente(2,limite)
            limite=limite-1
        }
         $input.value=`[Base2=${numero}] ==> Base10=${base10}`
    }
    base_16(numero,base){
        let letras16= ["A","B","C","D","E","F"]
        let residuo
        let base16=[]
        let digitos=""
        while(numero > 0){
            residuo=numero%base
            if(residuo>9){
                digitos=letras16[residuo-10]
            }else{
                digitos=residuo.toString()
            }
            base16=digitos+base16
            numero=Math.trunc(numero/base)
        }
        return base16
    }
    base10_16(){
        let $input=document.getElementById("result")
        let numero=parseInt($input.value)
        let arreglo=this.base_16(numero,16) // pasa 16 como segundo argumento
        let base16=""
        for(let i=arreglo.length-1;i>=0;i--){
            base16=base16+arreglo[i].toString()
        }
        $input.value=`[Base10=${numero}] ==> Base16=${base16}` // actualiza el mensaje de salida
    }
    base2_16(){
        let $input=document.getElementById("result")
        let numero=parseInt($input.value)
        let arreglo=this.isDigitos(numero,10)
        let base10=0,limite=arreglo.length-1
        for(let i=arreglo.length-1;i>=0;i--){
            base10= base10 + arreglo[i]*this.isExponente(2,limite)
            limite=limite-1
        }
        let base16=""
        base10=this.base_16(base10,16)
        base16=base16+base10.toString()
        $input.value=`[Base2=${numero}] ==> Base16=${base16}`

    }
    base10_8(){
        let $input=document.getElementById("result")
        let numero = parseInt($input.value)
        let arreglo=this.isDigitos(numero,8)
        let base8=""
        for(let i=arreglo.length-1;i>=0;i--){
            base8=base8+arreglo[i].toString()
        }
        $input.value=`[Base10=${numero}] ==> Base8=${base8}`
    
    }
    base8(numero){
        let numero8=""
        let numero2=numero.length
        while(numero2 % 3 !==0){
            numero="0" + numero 
            numero2++
        } 
        for(let i=0; i<numero.length; i+= 3){
            let digitos = numero.substring(i,i+3)
            let digito8 = 0
            for(let j=0; j<digitos.length; j++){
                digito8+= parseInt(digitos[j])*Math.pow(2,2-j)
            }
            numero8+=digito8.toString()
        }
        return numero8
    }
    base2_8(){
        let $input=document.getElementById("result")
        let numero=$input.value
        let base8=this.base8(numero)
        $input.value=`[Base2=${numero}] ==> Base8=${base8}`
    }
    basen_n(){
        let $input=document.getElementById("result")
        let numero=$input.value
        let baseE=prompt("ingrese la base en la que ingreso el numero ")
        let baseS=prompt("ingrese la base en que quiere que salga el numero")
        
        if(baseE==10 && baseS==2){ //base 10 a base 2
            let arreglo=this.isDigitos(numero,2)
            let base2=""
            for(let i=arreglo.length-1;i>=0;i--){
            base2=base2+arreglo[i].toString()
            }
             $input.value=`[Base10=${numero}] ==> Base2=${base2}`
        }else if(baseE==10 && baseS==16){ //base 10 a base16
            let arreglo=this.base_16(numero,16) // pasa 16 como segundo argumento
            let base16=""
            for(let i=arreglo.length-1;i>=0;i--){
                base16=base16+arreglo[i].toString()
            }
            $input.value=`[Base10=${numero}] ==> Base16=${base16}`
        }else if(baseE==10 && baseS==8){  // base 10 a base 8
            let arreglo=this.isDigitos(numero,8)
            let base8=""
            for(let i=arreglo.length-1;i>=0;i--){
            base8=base8+arreglo[i].toString()
            }
            $input.value=`[Base10=${numero}] ==> Base8=${base8}`
        }else if(baseE==2 && baseS==10){  // base 2 a base 10
            let arreglo=this.isDigitos(numero,10)
            let base10=0,limite=arreglo.length-1
            for(let i=arreglo.length-1;i>=0;i--){
            base10= base10 + arreglo[i]*this.isExponente(2,limite)
            limite=limite-1
            }
             $input.value=`[Base2=${numero}] ==> Base10=${base10}`
        }else if(baseE==2 && baseS==16){    //base 2 a base 16
            let arreglo=this.isDigitos(numero,10)
            let base10=0,limite=arreglo.length-1
            for(let i=arreglo.length-1;i>=0;i--){
                base10= base10 + arreglo[i]*this.isExponente(2,limite)
                limite=limite-1
            }
            let base16=""
            base10=this.base_16(base10,16)
            base16=base16+base10.toString()
            $input.value=`[Base2=${numero}] ==> Base16=${base16}`
        }else if(baseE==2 && baseS==8){
            let base8=this.base8(numero)
            $input.value=`[Base2=${numero}] ==> Base8=${base8}`
        }

    }
    vuelto(numero){
        let billetes=[50,20,10,5,2,1] // invertimos el orden para empezar por los billetes grandes
        let  resultado=[]
        for(let i=0 ;i<billetes.length;i++){
            if(numero>=billetes[i]){
                let cantBilletes = Math.floor(numero/billetes[i]);
                resultado.push(`${cantBilletes} de $ ${billetes[i]}`); // agregamos un string con la cantidad de billetes y su valor
                numero=numero%billetes[i]; // actualizamos el valor de numero con el residuo
            }
        }
        return resultado;
    }  
    dvuelto(){
        let $input=document.getElementById("result");
        let numero=parseInt($input.value);
        let arreglo=this.vuelto(numero);
        $input.value=`[ cantidad  ingresada =${numero}] ==> su vuelto es= ${arreglo.join(", ")} `;
    }
    convertirARomanos(numero) {
        const valores = [
          { valor: 100, romano: 'C' },
          { valor: 90, romano: 'XC' },
          { valor: 50, romano: 'L' },
          { valor: 40, romano: 'XL' },
          { valor: 10, romano: 'X' },
          { valor: 9, romano: 'IX' },
          { valor: 5, romano: 'V' },
          { valor: 4, romano: 'IV' },
          { valor: 1, romano: 'I' },
        ];
      
        let resultado = '';
      
        for (let i = 0; i < valores.length; i++) {
          while (numero >= valores[i].valor) {
            resultado += valores[i].romano;
            numero -= valores[i].valor;
          }
        }
      
        return resultado;
    }    
    romanos() {
        let $input = document.getElementById("result");
        let numero = parseInt($input.value);
        let arreglo = this.convertirARomanos(numero);
        $input.value = `[ cantidad  ingresada = ${numero}] ==> su numero en romano es = ${arreglo}`;
    }
    mayorarreglo() {
        let $input = document.getElementById("result");
        let numeros = $input.value.split(",").map(parseFloat);
        let mayor = numeros[0];
         for (let i = 1; i < numeros.length; i++) {
             if (numeros[i] > mayor) {
                  mayor = numeros[i];
                 }
        }
  $input.value = `El numero mayor del arreglo ${numeros} es = ${mayor}`;
    }
    menorarreglo() {
        let $input = document.getElementById("result");
        let numeros = $input.value.split(",").map(parseFloat);
        let menor = numeros[0];
         for (let i = 1; i < numeros.length; i++) {
             if (numeros[i] < menor) {
                  menor = numeros[i];
                 }
        }
  $input.value = `El numero menor del arreglo ${numeros} es = ${menor}`;
    }  
    eliminarElemento(arreglo, eliminar) {
        let nuevoArreglo = [];
        for (let i = 0; i < arreglo.length; i++) {
          if (arreglo[i] !== eliminar) {
            nuevoArreglo.push(arreglo[i]);
          }
        }
        return nuevoArreglo;
      }
    eliminarDeArreglo() {
        let input = document.getElementById("result");
        let arreglo = input.value.split(",");
        let eliminar = prompt("Ingrese el elemento a eliminar");
      
        let nuevoArreglo = this.eliminarElemento(arreglo, eliminar);
        let resultado = "";
        for (let i = 0; i < nuevoArreglo.length; i++) {
          if (nuevoArreglo[i] !== "") {
            resultado += nuevoArreglo[i];
            if (i < nuevoArreglo.length - 1 && nuevoArreglo[i+1] !== "") {
              resultado += ",";
            }
          }
        }
        input.value =`el arreglo = ${arreglo} ya se elimino esta parte ${eliminar} queda asi ${resultado}`
       
      }
    insertarEnArreglo(arreglo, valor) {
        let nuevoArreglo = [];
        let insertado = false;
        for (let i = 0; i < arreglo.length; i++) {
          if (!insertado && arreglo[i] > valor) {
            nuevoArreglo.push(valor);
            insertado = true;
          }
          nuevoArreglo.push(arreglo[i]);
        }
        if (!insertado) {
          nuevoArreglo.push(valor);
        }
        return nuevoArreglo;
      }
      
    insertar() {
        let $input = document.getElementById("result");
        let arregloInicial = $input.value.split(",").map(Number);
        let valor = parseInt(prompt("Ingrese el valor a insertar: "));
        let arregloFinal = this.insertarEnArreglo(arregloInicial, valor);
        $input.value = `El arreglo [${arregloInicial}] ha sido actualizado con el valor ${valor}. El nuevo arreglo es [${arregloFinal}]`;
      }
       
    caracterespecial(){
        let $input = document.getElementById("result");
        let cadena = $input.value;
        let contpunto=0,contcoma=0,cont2=0,contpc=0
        for(let i=0;i<cadena.length;i++){
            if(cadena[i]=="."){
                contpunto+=1
            }
            if(cadena[i]==","){
                contcoma+=1
            }
            if(cadena[i]==":"){
                cont2+=1
            }
            if(cadena[i]==";"){
                contpc+=1
            }
        }
        $input.value = `La cadena ${cadena} tiene ${contpunto} ".", ${contcoma} ",", ${cont2} ":", ${contpc} ";"`
    }
    sumardigitoscadenas(){
        let $input=document.getElementById("result")
        let num = $input.value
        let sum=0
        for (let i = 0; i < num.length; i++) {
            let dig = parseInt(num.charAt(i));
            sum += dig;
        }
        console.log("La suma de los dígitos de " + num + " es " + sum);
        $input.value=(`La suma de los dígitos de  ${num}   es   ${sum}`)

    }
    Mayuscula(text) {
        let mayus = [];
        let palabra = "";
        let index = 0;
      
        while (index < text.length) {
          if (text[index] === " ") {
            mayus.push(palabra);
            palabra = "";
          } else if (palabra.length === 0) {
            palabra = text[index].toUpperCase();
          } else {
            palabra += text[index].toLowerCase();
          }
          index++;
        }
      
        mayus.push(palabra);
      
        return mayus;
      }
      
       convertiroracion() {
        let $input = document.getElementById("result");
        let text = $input.value;
        let textoConvertido = this.Mayuscula(text);
        let resultado = "";
        for (let i = 0; i < textoConvertido.length; i++) {
          resultado += textoConvertido[i] + " ";
        }
        $input.value +=( `    ====>    ${resultado}`);
      }
      cadenarreglo(){
        let $input = document.getElementById("result");
        let cadena = ($input.value);
    let caracter = ";";
    let arreglo = [];
    
    let numero = "";
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] === caracter) {
        arreglo.push((numero));
        numero = "";
      } else {
        numero += cadena[i];
      }
    }
    
    arreglo.push((numero));
    $input.value = ` cantidad  ingresada = "${cadena}" ==> su numero en arreglo es = [${arreglo}]`;
    
    
    }
    arregloACadena() {
        let $input = document.getElementById("result");
        let arreglo = $input.value;
        let caracter = ",";
        let caracter2=";"
        let numeros = "";
        
        let i = 0;
        while (i < arreglo.length) {
          if (arreglo[i] !== caracter) {
            numeros += arreglo[i];
            i++;
            continue;
          }
          while (i < arreglo.length && arreglo[i] === caracter) {
            i++;
          }
          if (numeros !== "") {
            numeros += caracter2;
          }
        }
        
        $input.value = `cantidad ingresada = [${arreglo}] ==> su número en cadena es = "${numeros}"`;
      }
      
} 
     
let cal = new Calculadora()
// console.log(cal.isExponente(5,3))
// console.log(cal.isDigitos(123,10))
// console.log(cal.isDigitos(25,2))
//console.log(cal.quitaEspacio(" anita  lava la tina"))