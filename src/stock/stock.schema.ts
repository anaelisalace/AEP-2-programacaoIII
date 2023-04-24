import {model, Schema} from "mongoose"

const StockSchema = new Schema (
    {
        nome: {require: true, type: String}, // require informa que é OBRIGATÓRIO
        quantidade: {type: Number},
        valor: {type: Number},
        stockValue: {type: Number}
    },
    { 
        timestamps: true
    }
)

export default model('ProductStock', StockSchema)

// vai exportar o nome da tabela no banco(ProductStock) e oq ela vai ter(StockSchema) q é a const q criei