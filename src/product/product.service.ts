//O arquivo product.service.ts provavelmente é um arquivo TypeScript que define um serviço para manipular dados de produtos em um aplicativo.
//No caso do arquivo product.service.ts, ele provavelmente contém métodos que permitem que o aplicativo realize operações de CRUD (criação, leitura, atualização e exclusão) em um banco de dados ou outra fonte de dados relacionada aos produtos. Esses métodos podem incluir coisas como adicionar um novo produto, atualizar um produto existente, excluir um produto e obter uma lista de produtos.
// define a regra de negócio
// vai fazer o CRUD


import UserModel from './product.schema'         //pode ser UserModel ou ProductModel, é uma variavel que pode ter qualquer nome
import { ProductType } from './product.types'

export class ProductService {

    async CriarProduto(produto: ProductType){
        return await UserModel.create(produto)
    }

    async listarTodosProdutos() {
        //const listaPokemon = await fetch ("http://localhost:portaserverpokemon/rota")
        return await UserModel.find() //find é o metodo do mongodb que retorna todos os registros em uma coleção específica
    }

    async produtoPeloId(id: any) { // O parâmetro id está sendo definido com o tipo any. Isso significa que o tipo de dado que pode ser atribuído a esse parâmetro é qualquer tipo de dado válido em JavaScript, como string, number, boolean, object, entre outros.
        const produtoPeloId = await UserModel.findById(id)
        return produtoPeloId
    }

    async buscarProdutopeloNome (nomeParametro: any) {
        const produtoPeloNome = await UserModel.find({ nome: nomeParametro})
        return produtoPeloNome
    }

    async atualizarProduto(id: any, dataBody: ProductType) {
        const produtoAtualizado = await UserModel.findOneAndUpdate (
           
            { _id: id  }, // 1o parametro é o filtro, algo que identifique o registro que será alterado
           
            { nome: dataBody.nome,
              quantidade: dataBody.quantidade,
              valor: dataBody.valor
            }, // 2o parametro são as informação que queremos substituir 

            { new: true}) // 3o parametro - se new: true estiver definido, a variável produtoAtualizado armazenará o documento atualizado após a atualização ter sido realizada, caso contrário, armazenará o documento anterior à atualização.

        return produtoAtualizado
    }

    async deletarProduto(idParametro: any) {
        await UserModel.findByIdAndDelete({_id: idParametro})
        return ("Produto deletado com sucesso!")
    }

}
