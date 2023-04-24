import { Router } from "express"
import productController from "./product/product.controller"
import stockController from "./stock/stock.controller"

const routes = Router()

// ROTAS DO PRODUTO -----------------------------------------------------
routes.post('/novo-produto', productController.criarProduto) // rota para criar produto na lista de produtos
routes.get('/lista-produto', productController.listarProduto) // rota para mostrar a lista de produtos
routes.get('/produto/:id', productController.buscarProdutoPeloId) //rota para listar UM único produto na tabela products
routes.get('/produto-nome', productController.buscarProdutoPeloNome) 
routes.put('/atualizar-produto/:id', productController.atualizarProduto)
routes.delete('/produto/:id', productController.deletarProduto)

// ROTAS DO ESTOQUE -----------------------------------------------------

routes.get('/adicionar-stock', stockController.adicionarStock)
routes.get('/total-stock', stockController.calcularTotalStock)
routes.get('/escrever-arquivo', stockController.escreverArquivoProduto) 
routes.get('/ler-arquivo', stockController.lerArquivo)

export default routes