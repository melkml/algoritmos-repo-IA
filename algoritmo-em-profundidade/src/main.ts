//? Banco de Dados

class CaminhoReal {
  cidadeOrigem: string;
  cidadeDestino: string;

  constructor(origem: string, destino: string) {
    this.cidadeOrigem = origem;
    this.cidadeDestino = destino;
  }
}

const caminhosReais: CaminhoReal[] = [
  new CaminhoReal("Arad", "Zerind"),
  new CaminhoReal("Arad", "Sibiu"),
  new CaminhoReal("Arad", "Timisoara"),
  new CaminhoReal("Zerind", "Oradea"),
  new CaminhoReal("Timisoara", "Lugoj"),
  new CaminhoReal("Lugoj", "Mehadia"),
  new CaminhoReal("Mehadia", "Drobeta"),
  new CaminhoReal("Oradea", "Sibiu"),
  new CaminhoReal("Drobeta", "Craiova"),
  new CaminhoReal("Sibiu", "Fagaras"),
  new CaminhoReal("Sibiu", "Rimnicu V."),
  new CaminhoReal("Craiova", "Rimnicu V."),
  new CaminhoReal("Craiova", "Pitesti"),
  new CaminhoReal("Rimnicu V.", "Pitesti"),
  new CaminhoReal("Fagaras", "Bucharest"),
  new CaminhoReal("Pitesti", "Bucharest"),
  new CaminhoReal("Giurgiu", "Bucharest"),
  new CaminhoReal("Bucharest", "Urziceni"),
  new CaminhoReal("Neamt", "Iasi"),
  new CaminhoReal("Iasi", "Vaslui"),
  new CaminhoReal("Vaslui", "Urziceni"),
  new CaminhoReal("Urziceni", "Hirsova"),
  new CaminhoReal("Hirsova", "Eforie"),
  new CaminhoReal("Zerind", "Arad"),
  new CaminhoReal("Sibiu", "Arad"),
  new CaminhoReal("Timisoara", "Arad"),
  new CaminhoReal("Oradea", "Zerind"),
  new CaminhoReal("Lugoj", "Timisoara"),
  new CaminhoReal("Mehadia", "Lugoj"),
  new CaminhoReal("Drobeta", "Mehadia"),
  new CaminhoReal("Sibiu", "Oradea"),
  new CaminhoReal("Craiova", "Drobeta"),
  new CaminhoReal("Fagaras", "Sibiu"),
  new CaminhoReal("Rimnicu V,", "Sibiu"),
  new CaminhoReal("Rimnicu V.", "Craiova"),
  new CaminhoReal("Pitesti", "Craiova"),
  new CaminhoReal("Pitesti", "Rimnicu V."),
  new CaminhoReal("Bucharest", "Fagaras"),
  new CaminhoReal("Bucharest", "Pitesti"),
  new CaminhoReal("Bucharest", "Giurgiu"),
  new CaminhoReal("Urziceni", "Bucharest"),
  new CaminhoReal("Iasi", "Neamt"),
  new CaminhoReal("Vaslui", "Iasi"),
  new CaminhoReal("Urziceni", "Vaslui"),
  new CaminhoReal("Hirsova", "Urziceni"),
  new CaminhoReal("Eforie", "Hirsova"),
];

const todasCidades: string[] = [
  "Arad",
  "Bucharest",
  "Craiova",
  "Drobeta",
  "Eforie",
  "Fagaras",
  "Giurgiu",
  "Hirsova",
  "Iasi",
  "Lugoj",
  "Mehadia",
  "Neamt",
  "Oradea",
  "Pitesti",
  "Rimnicu V.",
  "Sibiu",
  "Timisoara",
  "Urziceni",
  "Vaslui",
  "Zerind",
];

//? Retorna um array de caminhos possíveis dado uma cidade de origem.
function caminhosPossiveis(
  cidadeAtual: string,
  caminhosPecorridos?: CaminhoReal[],
): CaminhoReal[] {
  const caminhoPossiveisFinal: CaminhoReal[] = [];
  const existeCidade = todasCidades.filter((cidade) => cidade === cidadeAtual);

  if (!existeCidade.length) {
    throw new Error('Cidade não existe');
  }

  let caminhosPossiveis = caminhosReais.filter((caminho) => {
    return caminho.cidadeOrigem === cidadeAtual;
  });

  if (caminhosPecorridos) {
    for (const caminhoPecorrido of caminhosPecorridos) {
      const [caminhoPossivelAtual] = caminhosPossiveis.filter((caminho) => 
        caminho.cidadeDestino !== caminhoPecorrido.cidadeOrigem &&
        caminho.cidadeOrigem === caminhoPecorrido.cidadeDestino);

      if(caminhoPossivelAtual) {
        caminhoPossiveisFinal.push(caminhoPossivelAtual);
      }
    }
    return caminhoPossiveisFinal;
  }

    return caminhosPossiveis;
}

//?Main

let cidadeAtual = "Iasi";
let caminhosPecorridos: CaminhoReal[] = [];
let caminhosAPecorrer: CaminhoReal[] = [];

console.log('Cidade de Origem: ', cidadeAtual);

let caminhosDisponiveis = caminhosPossiveis(cidadeAtual);

console.log(Date.now());

for (const caminho of caminhosDisponiveis) {
  caminhosAPecorrer.push(caminho);
}

if(cidadeAtual === 'Bucharest') {
  caminhosAPecorrer = [];
}

while(caminhosAPecorrer.length) {
    let caminhoEscolhido = caminhosAPecorrer.pop();
    
    
    if(caminhoEscolhido) {
      
      console.log(`Foi para ${caminhoEscolhido.cidadeDestino}`);

      if(caminhoEscolhido.cidadeDestino == 'Bucharest') {
        break; 
      }

      caminhosPecorridos.push(caminhoEscolhido);

      caminhosDisponiveis = caminhosPossiveis(caminhoEscolhido.cidadeDestino, caminhosPecorridos);  
      
      if(caminhosDisponiveis.length) {
        for (const caminho of caminhosDisponiveis) {
          caminhosAPecorrer.push(caminho);
        }
      } else {
        console.log(`Voltou para ${caminhoEscolhido.cidadeOrigem}`)
      }
      
      
    } 
}

if(!caminhosAPecorrer.length && cidadeAtual !== 'Bucharest') {
  console.log('Foi para Bucharest.\nChegou no destino.');
} else {
  console.log('Chegou no destino.');
}

console.log(Date.now());
