import app from './app'


// server.ts vai levantar o servidor. 
// Informar a porta que vai utilizar
// Try / Catch - usado para capturar o erro se algo der errado
function main() {
    try {
        const porta = 3001
        app.listen( porta, 'localhost', async () => {
            console.log('Servidor inicialiado na porta: ', porta)
        })
    }

        catch(err){
            console.log('Erro ao inicializar o servidor: ', err)
        }
}

main()

//O código acima importa o módulo "app" de um arquivo "app.ts" (ou "app.js", dependendo da configuração do projeto) e define uma função "main" que inicia o servidor Node.js na porta 3000.

//A função "main" usa o método "listen" do objeto "app" para iniciar o servidor na porta definida pela constante "porta" (no caso, 3000) e exibe uma mensagem no console informando que o servidor foi inicializado com sucesso.

//O método "listen" aceita vários argumentos. No caso deste exemplo, o primeiro argumento é a porta em que o servidor será executado e o segundo argumento é o endereço IP ou o nome do host em que o servidor está sendo executado (no caso, "localhost").

//O bloco "try/catch" é utilizado para capturar erros que possam ocorrer durante a inicialização do servidor. Se ocorrer um erro, ele será capturado pelo bloco "catch" e uma mensagem de erro será exibida no console.

//Por fim, a função "main" é chamada para iniciar o servidor.