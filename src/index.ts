let ligado:boolean = false;
let nome:string = "Luis";
let alturaCM:number = 181;

let produto:object={
    nome:"Camiseta",
    preco:20,
}

type ProdutoLoja={
    nome:string;
    preco:number;
    unidades:number;
}

let meuProduto:ProdutoLoja={
    nome:"Camiseta",
    preco:35.90,
    unidades:476,
}
//array
let dados:string[] = ["luis", "felipe", "mello"];
//array tbm
let dados2:Array<string> = ["luis","felipe","mello"]; 
//array de mais de um tipo.... WHY??????
let infos:(string | number)[] = ["luis",152,"auheu"];


//tuplas -> TEM QUE RESPEITAR A ORDEM
let boleto:[string, number, number] = ["boleto água", 199.00, 65464568851]
