//? Banco de Dados

class CaminhoReal {
  cidadeOrigem: string;
  cidadeDestino: string;
  distancia: number;

  constructor(origem: string, destino: string, distancia: number) {
    this.cidadeOrigem = origem;
    this.cidadeDestino = destino;
    this.distancia = distancia;
  }
}
class CaminhoLinhaReta {
  cidade: string;
  distanciaLinhaReta: number;

  constructor(cidade: string, distanciaLinhaReta: number) {
    this.cidade = cidade;
    this.distanciaLinhaReta = distanciaLinhaReta;
  }
}

const caminhosReais: CaminhoReal[] = [
  new CaminhoReal("Arad", "Zerind", 75),
  new CaminhoReal("Arad", "Sibiu", 140),
  new CaminhoReal("Arad", "Timisoara", 118),
  new CaminhoReal("Zerid", "Oradea", 71),
  new CaminhoReal("Timisoara", "Lugoj", 111),
  new CaminhoReal("Lugoj", "Mehadia", 70),
  new CaminhoReal("Mehadia", "Drobeta", 75),
  new CaminhoReal("Oradea", "Sibiu", 151),
  new CaminhoReal("Drobeta", "Craiova", 120),
  new CaminhoReal("Sibiu", "Fagaras", 99),
  new CaminhoReal("Sibiu", "Rimnicu V.", 80),
  new CaminhoReal("Craiova", "Rimnicu V.", 146),
  new CaminhoReal("Craiova", "Pitesti", 138),
  new CaminhoReal("Rimnicu V.", "Pitesti", 97),
  new CaminhoReal("Fagaras", "Bucharest", 211),
  new CaminhoReal("Pitesti", "Bucharest", 101),
  new CaminhoReal("Giurgiu", "Bucharest", 90),
  new CaminhoReal("Bucharest", "Urziceni", 85),
  new CaminhoReal("Neamt", "Iasi", 87),
  new CaminhoReal("Iasi", "Vaslui", 92),
  new CaminhoReal("Vaslui", "Urziceni", 142),
  new CaminhoReal("Urziceni", "Hirsova", 98),
  new CaminhoReal("Hirsova", "Eforie", 86),
  new CaminhoReal("Zerind", "Arad", 75),
  new CaminhoReal("Sibiu", "Arad", 140),
  new CaminhoReal("Timisoara", "Arad", 118),
  new CaminhoReal("Oradea", "Zerind", 71),
  new CaminhoReal("Lugoj", "Timisoara", 111),
  new CaminhoReal("Mehadia", "Lugoj", 70),
  new CaminhoReal("Drobeta", "Mehadia", 75),
  new CaminhoReal("Sibiu", "Oradea", 151),
  new CaminhoReal("Craiova", "Drobeta", 120),
  new CaminhoReal("Fagaras", "Sibiu", 99),
  new CaminhoReal("Rimnicu V,", "Sibiu", 80),
  new CaminhoReal("Rimnicu V.", "Craiova", 146),
  new CaminhoReal("Pitesti", "Craiova", 138),
  new CaminhoReal("Pitesti", "Rimnicu V.", 97),
  new CaminhoReal("Bucharest", "Fagaras", 211),
  new CaminhoReal("Bucharest", "Pitesti", 101),
  new CaminhoReal("Bucharest", "Giurgiu", 90),
  new CaminhoReal("Urziceni", "Bucharest", 85),
  new CaminhoReal("Iasi", "Neamt", 87),
  new CaminhoReal("Vaslui", "Iasi", 92),
  new CaminhoReal("Urziceni", "Vaslui", 142),
  new CaminhoReal("Hirsova", "Urziceni", 98),
  new CaminhoReal("Eforie", "Hirsova", 86),
];

const caminhosLinhaRetaToBucharest: CaminhoLinhaReta[] = [
  new CaminhoLinhaReta("Arad", 366),
  new CaminhoLinhaReta("Bucharest", 0),
  new CaminhoLinhaReta("Craiova", 160),
  new CaminhoLinhaReta("Drobeta", 242),
  new CaminhoLinhaReta("Eforie", 161),
  new CaminhoLinhaReta("Fagaras", 176),
  new CaminhoLinhaReta("Giurgiu", 77),
  new CaminhoLinhaReta("Hirsova", 151),
  new CaminhoLinhaReta("Iasi", 226),
  new CaminhoLinhaReta("Lugoj", 244),
  new CaminhoLinhaReta("Mehadia", 241),
  new CaminhoLinhaReta("Neamt", 234),
  new CaminhoLinhaReta("Oradea", 380),
  new CaminhoLinhaReta("Pitesti", 100),
  new CaminhoLinhaReta("Rimnicu V.", 193),
  new CaminhoLinhaReta("Sibiu", 253),
  new CaminhoLinhaReta("Timisoara", 329),
  new CaminhoLinhaReta("Urziceni", 80),
  new CaminhoLinhaReta("Vaslui", 199),
  new CaminhoLinhaReta("Zerind", 374),
];

//? Retorna um array de caminhos possíveis dado uma cidade de origem.
function caminhosPossiveis(
  cidadeAtual: string,
  ultimoCaminhoPecorrido: object | CaminhoReal
): CaminhoReal[] {
  const todasCidades = caminhosLinhaRetaToBucharest.map((({cidade}) => cidade));
  const existeCidade = todasCidades.filter((cidade) => cidade === cidadeAtual);
  

  if (!existeCidade.length) {
    throw new Error('Cidade não existe');
  }

  let caminhosPossiveiss = caminhosReais.filter((caminho) => {
    return caminho.cidadeOrigem === cidadeAtual;
  });
 
  if (ultimoCaminhoPecorrido && ultimoCaminhoPecorrido instanceof CaminhoReal) {

    caminhosPossiveiss = caminhosPossiveiss.filter(
      (caminho) =>
        caminho.cidadeDestino !== ultimoCaminhoPecorrido.cidadeOrigem &&
        caminho.cidadeOrigem === ultimoCaminhoPecorrido.cidadeDestino
    );
  }

  return caminhosPossiveiss;
}

//?Calcula o menor caminho dado um array de caminhos.
function menorCaminho(caminhosPossiveiss: CaminhoReal[]) {
  const cidadesPossiveis = caminhosPossiveiss.map(
    ({ cidadeDestino }) => cidadeDestino
  );
  
  
  const caminhosLinhaReta: CaminhoLinhaReta[] = [];

  for (const cidadeDestino of cidadesPossiveis) {
    const caminhoLinhaRetaEncontrado = caminhosLinhaRetaToBucharest.find((caminho) => {
      return caminho.cidade === cidadeDestino;
    });
   
    if (caminhoLinhaRetaEncontrado) {
      caminhosLinhaReta.push(caminhoLinhaRetaEncontrado);
    }  
  }

  const somas: number[] = [];

  for (const caminhoPossivel of caminhosPossiveiss) {
    let index = caminhosPossiveiss.indexOf(caminhoPossivel);
    somas.push(
      caminhoPossivel.distancia + caminhosLinhaReta[index].distanciaLinhaReta
    );
  }

  const distanciaMenor = Math.min(...somas);
  const index = somas.indexOf(distanciaMenor);

  const caminhoMenor = caminhosPossiveiss[index];

  return caminhoMenor;
}

//?Main
let caminhoMenor: CaminhoReal | object = {};
let ultimoCaminhoPecorrido: object | CaminhoReal= {};
let chegouAoDestino = false;
let cidadeAtual = "Iasi"; //? Defina aqui a cidade de origem do algoritmo.
console.log(`\nCidade origem: ${cidadeAtual}\n`);

console.log(Date.now());
while (!chegouAoDestino) {
  
  if(cidadeAtual === 'Bucharest') {
    console.log("Chegou ao destino!");
    chegouAoDestino = true;
    break;
  }

  const caminhosDisponiveis = caminhosPossiveis(cidadeAtual, ultimoCaminhoPecorrido);
  
  if(caminhosDisponiveis) {
    caminhoMenor = menorCaminho(caminhosDisponiveis);
  } else {
    console.log('Não existe caminhos possiveis.')
    break;
  }

  if (caminhoMenor && caminhoMenor instanceof CaminhoReal) {
    console.log(`Foi para ${caminhoMenor.cidadeDestino}\n`);
    cidadeAtual = caminhoMenor.cidadeDestino;
    ultimoCaminhoPecorrido = caminhoMenor;
  }

  if (cidadeAtual === "Bucharest") {
    console.log("Chegou ao destino!");
    chegouAoDestino = true;
  }
}

console.log(Date.now());