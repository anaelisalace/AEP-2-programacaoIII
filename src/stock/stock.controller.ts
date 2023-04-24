import { Request, Response } from "express"
import {StockService} from './stock.service'

class StockController {

    async adicionarStock (req: Request, res: Response) {
        const stock = await new StockService().criarStock()
        return res.status(200).json(stock)
    }

    async calcularTotalStock (req:Request, res: Response){
        const total = await new StockService().calcularTotalStock()
        return res.status(200).json(total)
    }
    
    async escreverArquivoProduto(req: Request, res: Response){
        const resposta = await new StockService().escreverArquivoProduto()
        return res.status(200).json(resposta)
    }

    async lerArquivo(req:Request, res: Response){
        const arquivo = await new StockService().lerArquivo()
        return res.status(200).json(arquivo)
    }
}

export default new StockController()