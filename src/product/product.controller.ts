import { Request, Response } from "express"
import { ProductService } from "./product.service"

class ProductController {
    async criarProduto(req: Request, res: Response) {
        const product = await new ProductService().CriarProduto(req.body)

        return res.status(200).json(product) //envia uma resposta HTTP para o cliente, com um código de status HTTP igual a 200 (OK) e um corpo JSON contendo o produto criado no banco de dados.
    }
  
    async listarProduto(req: Request, res: Response) {
        const productList = await new ProductService().listarTodosProdutos()
        return res.status(200).json(productList)
    }

    async buscarProdutoPeloId(req: Request, res: Response) {
        const product = await new ProductService().produtoPeloId(req.params.id)
        return res.status(200).json(product)
    }

    async buscarProdutoPeloNome(req: Request, res: Response) {
        const porNome = await new ProductService().buscarProdutopeloNome(req.query.meu_nome)
        return res.status(200).json(porNome)
    }
    // para chamar deve colocar no postman: localhost:3000/produto-nome?meu_nome=Ana
    // pode trocar meu_nome por qualquer coisa.. precisa trocar no parâmetro e na URL na hr de buscar
  

    async atualizarProduto(req: Request, res: Response){
        const atualizar = await new ProductService().atualizarProduto(req.params.id, req.body)
        return res.status(200).json(atualizar)
    }

    async deletarProduto(req: Request, res: Response) {
        const deletado = await new ProductService().deletarProduto(req.params.id)
        return res.status(200).json(deletado)
    }
}

//CriarProduto: O método criarProduto recebe dois parâmetros: o primeiro é um objeto de solicitação (req) do tipo Request, que contém as informações enviadas pelo cliente na solicitação HTTP, como o corpo da solicitação (req.body), que contém as informações do produto a ser criado. O segundo parâmetro é um objeto de resposta (res) do tipo Response, que é usado para enviar uma resposta ao cliente após a criação do produto no banco de dados.
//ListarProduto: o método listarProduto  uma nova instância da classe ProductService é criada e o método listarTodosProdutos é chamado assincronamente. Esse método retorna uma lista de produtos.
//listarProduto: O resultado é então enviado para o cliente como uma resposta JSON com o código de status HTTP 200 (OK), utilizando o método json da instância Response passada como parâmetro.
//listarProduto:Em resumo, esse método retorna uma lista de produtos em formato JSON como resposta HTTP.
export default new ProductController()