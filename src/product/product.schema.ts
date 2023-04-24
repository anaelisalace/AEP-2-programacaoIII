import { model, Schema} from "mongoose"

// A função "model" é utilizada para criar um modelo de dados a partir de um Schema
// e a função "Schema" é utilizada para definir a estrutura do Schema.

const ProductSchema = new Schema(
    {
        nome : {require: true, type: String}, //obrigatório
        quantidade : {type: Number},          // não obrigatório
        valor : {type: Number}
    },
    {
        timestamps : true // parametro que irá gerar log para auditorias
    }
)

export default model('Product', ProductSchema)

//O Schema é uma estrutura que define a forma e o formato dos dados que uma aplicação irá manipular. No contexto do TypeScript, o Schema pode ser utilizado para definir a forma dos dados que serão utilizados em uma aplicação, através da definição de tipos de dados específicos.

//O objeto tem três campos: "nome", "quantidade" e "valor". O campo "nome" é definido como obrigatório (require: true) e do tipo String. O campo "quantidade" é definido como não obrigatório e do tipo Number. O campo "valor" é definido como do tipo Number.

//O segundo argumento da função "Schema" é um objeto de configuração que define opções adicionais para o Schema. Neste caso, a opção "timestamps" é definida como "true", o que faz com que o mongoose automaticamente adicione campos "createdAt" e "updatedAt" ao documento sempre que o modelo é salvo.

//Em resumo, este código está criando um Schema para um modelo de dados de produtos, onde cada produto deve ter um nome obrigatório e pode ter uma quantidade e um valor. Além disso, o Schema inclui a opção "timestamps" para gerar logs de auditoria automaticamente.