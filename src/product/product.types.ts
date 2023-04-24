// Interfaces e tipos personalizados são usados em TypeScript para definir a estrutura e o formato dos objetos que são usados em um aplicativo. No caso do arquivo product.types.ts, ele pode definir interfaces ou tipos personalizados para os campos do modelo de produto, como nome, preço, descrição, etc.

export interface ProductType {
    nome : String,
    quantidade : Number,
    valor : Number 
}

//Interfaces são usadas em TypeScript para definir a forma (forma de um objeto) que um objeto deve ter. Elas definem a estrutura e os tipos de dados dos campos que devem ser incluídos em um objeto.

//No caso do código acima, a interface ProductType define três campos: nome, quantidade e valor. Cada campo tem um tipo de dados associado, como String para nome e Number para quantidade e valor.

//Essa interface provavelmente é usada para garantir que os objetos de produto no aplicativo estejam no formato correto e contenham os campos necessários. Isso pode ajudar a evitar erros de digitação ou outros erros relacionados à tipagem, e também pode tornar o código mais legível e fácil de manter.