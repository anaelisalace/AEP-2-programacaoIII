import ProductModel from "../product/product.schema"
import StockModel from "./stock.schema"
import { ProductType } from "../product/product.types"


export class StockService {

    async criarStock() {
        const produtosList: ProductType[] = await ProductModel.find()
        //A constante produtosList está recebendo um array de objetos do tipo ProductType, que é retornado da função find() do modelo ProductModel.

        const estoque = produtosList.map((item: ProductType) => {
            let produtoComEstoque = {
                nome: item.nome,
                quantidade: item.quantidade,
                valor: item.valor,
                stockValue: Number(item.quantidade) * Number(item.valor)
            }
            return produtoComEstoque
        })
        const salvarEstoque = await StockModel.insertMany(estoque)
        return salvarEstoque
    }
    //A função criarStock tem dois retornos porque ela executa duas ações diferentes e retorna o resultado de cada uma delas.
    //Primeiro, ela busca uma lista de produtos no banco de dados usando o método find() do modelo ProductModel. Em seguida, 
    //ela cria uma nova lista chamada estoque, que é uma transformação da lista de produtos original, onde cada item é um objeto 
    //contendo informações de estoque, como nome, quantidade, valor e valor total do estoque (calculado como a multiplicação de 
    //quantidade e valor). Em seguida, ela usa o método insertMany() do modelo StockModel para inserir a lista de estoque recém-criada no banco de dados.
    //Por fim, ela retorna o resultado da inserção, que pode ser uma lista de objetos que foram inseridos no banco de dados.
    //É comum ter vários retornos em funções assíncronas, especialmente em operações de banco de dados, onde é necessário aguardar 
    //a conclusão de uma operação antes de realizar a próxima. Nesse caso, cada retorno representa o resultado de uma operação diferente realizada no banco de dados.


    async calcularTotalStock() {
        const produtosList = await StockModel.find()

        const valorStock = produtosList.reduce((acumulador, valorAtual) => {
            return acumulador + valorAtual.stockValue!

        },0)

        return valorStock
    }

    async escreverArquivoProduto() {
        const produtosList = await ProductModel.find()

        try{
            const fs = require('fs/promises');
            fs.writefile('produtos.json', JSON.stringify(produtosList, null, 2))
            return "Arquivo gerado com sucesso!!"
        }
        catch(error){
            return "Falha: o arquivo não foi gerado."
        }
    //writeFile(parametro1, parametro2)
    // parametro 1: o nome do arquivo que será criado. No caso, o nome do arquivo é produtos.json.
    //parametro 2:  é o conteúdo que será gravado no arquivo. Aqui, é usado o método JSON.stringify() 
    //para converter a lista de produtos (a variável produtosList) em uma string JSON formatada com 
    //espaços em branco (o terceiro parâmetro 2 passado para a função).
    }


    async lerArquivo() {

        try {
            const fs = require('fs/promises')
            const minhaLista = fs.readFile('produtos.json', "utf-8")
            return minhaLista
        }
        catch(error){
            return "Falha: Arquivo não foi encontrado!"
        }
    }
    // readFile(parametro1, parametro2)
    //parametro1: é o nome do nosso arquivo com a extensão que desejamos ler, neste caso produtos.json
    //parametro2: é o formato unicode que desejamos
}

// O require('fs/promises') é utilizado para importar o módulo fs (File System) do Node.js que 
//fornece um conjunto de operações para trabalhar com arquivos e diretórios.