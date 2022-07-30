//? Banco de Dados

class CidadeInfo {
  cidade: number;
  latitude: number;
  longitude: number;

  constructor(cidade: number, latitude: number, longitude: number) {
    this.cidade = cidade;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  calcularDistancia(cidadeDestino: CidadeInfo): number {
    return Math.sqrt(
      Math.pow(cidadeDestino.longitude - this.longitude, 2) +
        Math.pow(cidadeDestino.latitude - this.latitude, 2)
    );
  }
}

let falhou: boolean = false;
const cidadesInfo: CidadeInfo[] = [
  new CidadeInfo(1, 24748.3333, 50840.0),
  new CidadeInfo(2, 24758.8889, 51211.9444),
  new CidadeInfo(3, 24827.2222, 51394.7222),
  new CidadeInfo(4, 24904.4444, 51175.0),
  new CidadeInfo(5, 24996.1111, 51548.8889),
  new CidadeInfo(6, 25010.0, 51039.4444),
  new CidadeInfo(7, 25030.8333, 51275.2778),
  new CidadeInfo(8, 25067.7778, 51077.5),
  new CidadeInfo(9, 25100.0, 51516.6667),
  new CidadeInfo(10, 25103.3333, 51521.6667),
  new CidadeInfo(11, 25121.9444, 51218.3333),
  new CidadeInfo(12, 25150.8333, 51537.7778),
  new CidadeInfo(13, 25158.3333, 51163.6111),
  new CidadeInfo(14, 25162.2222, 51220.8333),
  new CidadeInfo(15, 25167.7778, 51606.9444),
  new CidadeInfo(16, 25168.8889, 51086.3889),
  new CidadeInfo(17, 25173.8889, 51269.4444),
  new CidadeInfo(18, 25210.8333, 51394.1667),
  new CidadeInfo(19, 25211.3889, 51619.1667),
  new CidadeInfo(20, 25214.1667, 50807.2222),
  new CidadeInfo(21, 25214.4444, 51378.8889),
  new CidadeInfo(22, 25223.3333, 51451.6667),
  new CidadeInfo(23, 25224.1667, 51174.4444),
  new CidadeInfo(24, 25233.3333, 51333.3333),
  new CidadeInfo(25, 25234.1667, 51203.0556),
  new CidadeInfo(26, 25235.5556, 51330.0),
  new CidadeInfo(27, 25235.5556, 51495.5556),
  new CidadeInfo(28, 25242.7778, 51428.8889),
  new CidadeInfo(29, 25243.0556, 51452.5),
  new CidadeInfo(30, 25252.5, 51559.1667),
  new CidadeInfo(31, 25253.8889, 51535.2778),
  new CidadeInfo(32, 25253.8889, 51549.7222),
  new CidadeInfo(33, 25256.9444, 51398.8889),
  new CidadeInfo(34, 25263.6111, 51516.3889),
  new CidadeInfo(35, 25265.8333, 51545.2778),
  new CidadeInfo(36, 25266.6667, 50969.1667),
  new CidadeInfo(37, 25266.6667, 51483.3333),
  new CidadeInfo(38, 25270.5556, 51532.7778),
  new CidadeInfo(39, 25270.8333, 51505.8333),
  new CidadeInfo(40, 25270.8333, 51523.0556),
  new CidadeInfo(41, 25275.8333, 51533.6111),
  new CidadeInfo(42, 25277.2222, 51547.7778),
  new CidadeInfo(43, 25278.3333, 51525.5556),
  new CidadeInfo(44, 25278.3333, 51541.3889),
  new CidadeInfo(45, 25279.1667, 51445.5556),
  new CidadeInfo(46, 25281.1111, 51535.0),
  new CidadeInfo(47, 25281.3889, 51512.5),
  new CidadeInfo(48, 25283.3333, 51533.3333),
  new CidadeInfo(49, 25283.6111, 51546.6667),
  new CidadeInfo(50, 25284.7222, 51555.2778),
  new CidadeInfo(51, 25286.1111, 51504.1667),
  new CidadeInfo(52, 25286.1111, 51534.1667),
  new CidadeInfo(53, 25286.6667, 51533.3333),
  new CidadeInfo(54, 25287.5, 51537.7778),
  new CidadeInfo(55, 25288.0556, 51546.6667),
  new CidadeInfo(56, 25290.8333, 51528.3333),
  new CidadeInfo(57, 25291.9444, 51424.4444),
  new CidadeInfo(58, 25292.5, 51520.8333),
  new CidadeInfo(59, 25298.6111, 51001.6667),
  new CidadeInfo(60, 25300.8333, 51394.4444),
  new CidadeInfo(61, 25306.9444, 51507.7778),
  new CidadeInfo(62, 25311.9444, 51003.0556),
  new CidadeInfo(63, 25313.8889, 50883.3333),
  new CidadeInfo(64, 25315.2778, 51438.6111),
  new CidadeInfo(65, 25316.6667, 50766.6667),
  new CidadeInfo(66, 25320.5556, 51495.5556),
  new CidadeInfo(67, 25322.5, 51507.7778),
  new CidadeInfo(68, 25325.2778, 51470.0),
  new CidadeInfo(69, 25326.6667, 51350.2778),
  new CidadeInfo(70, 25337.5, 51425.0),
  new CidadeInfo(71, 25339.1667, 51173.3333),
  new CidadeInfo(72, 25340.5556, 51293.6111),
  new CidadeInfo(73, 25341.9444, 51507.5),
  new CidadeInfo(74, 25358.8889, 51333.6111),
  new CidadeInfo(75, 25363.6111, 51281.1111),
  new CidadeInfo(76, 25368.6111, 51226.3889),
  new CidadeInfo(77, 25374.4444, 51436.6667),
  new CidadeInfo(78, 25377.7778, 51294.7222),
  new CidadeInfo(79, 25396.9444, 51422.5),
  new CidadeInfo(80, 25400.0, 51183.3333),
  new CidadeInfo(81, 25400.0, 51425.0),
  new CidadeInfo(82, 25404.7222, 51073.0556),
  new CidadeInfo(83, 25416.9444, 51403.8889),
  new CidadeInfo(84, 25416.9444, 51457.7778),
  new CidadeInfo(85, 25419.4444, 50793.6111),
  new CidadeInfo(86, 25429.7222, 50785.8333),
  new CidadeInfo(87, 25433.3333, 51220.0),
  new CidadeInfo(88, 25440.8333, 51378.0556),
  new CidadeInfo(89, 25444.4444, 50958.3333),
  new CidadeInfo(90, 25451.3889, 50925.0),
  new CidadeInfo(91, 25459.1667, 51316.6667),
  new CidadeInfo(92, 25469.7222, 51397.5),
  new CidadeInfo(93, 25478.0556, 51362.5),
  new CidadeInfo(94, 25480.5556, 50938.8889),
  new CidadeInfo(95, 25483.3333, 51383.3333),
  new CidadeInfo(96, 25490.5556, 51373.6111),
  new CidadeInfo(97, 25492.2222, 51400.2778),
  new CidadeInfo(98, 25495.0, 50846.6667),
  new CidadeInfo(99, 25495.0, 50965.2778),
  new CidadeInfo(100, 25497.5, 51485.2778),
  new CidadeInfo(101, 25500.8333, 50980.5556),
  new CidadeInfo(102, 25510.5556, 51242.2222),
  new CidadeInfo(103, 25531.9444, 51304.4444),
  new CidadeInfo(104, 25533.3333, 50977.2222),
  new CidadeInfo(105, 25538.8889, 51408.3333),
  new CidadeInfo(106, 25545.8333, 51387.5),
  new CidadeInfo(107, 25549.7222, 51431.9444),
  new CidadeInfo(108, 25550.0, 51433.3333),
  new CidadeInfo(109, 25560.2778, 51158.6111),
  new CidadeInfo(110, 25566.9444, 51484.7222),
  new CidadeInfo(111, 25567.5, 50958.8889),
  new CidadeInfo(112, 25574.7222, 51486.3889),
  new CidadeInfo(113, 25585.5556, 51151.3889),
  new CidadeInfo(114, 25609.4444, 51092.2222),
  new CidadeInfo(115, 25610.2778, 51475.2778),
  new CidadeInfo(116, 25622.5, 51454.4444),
  new CidadeInfo(117, 25645.8333, 51450.0),
  new CidadeInfo(118, 25650.0, 51372.2222),
  new CidadeInfo(119, 25666.9444, 51174.4444),
  new CidadeInfo(120, 25683.8889, 51505.8333),
  new CidadeInfo(121, 25686.3889, 51468.8889),
  new CidadeInfo(122, 25696.1111, 51260.8333),
  new CidadeInfo(123, 25700.8333, 51584.7222),
  new CidadeInfo(124, 25708.3333, 51591.6667),
  new CidadeInfo(125, 25716.6667, 51050.0),
  new CidadeInfo(126, 25717.5, 51057.7778),
  new CidadeInfo(127, 25723.0556, 51004.1667),
  new CidadeInfo(128, 25734.7222, 51547.5),
  new CidadeInfo(129, 25751.1111, 51449.1667),
  new CidadeInfo(130, 25751.9444, 50920.8333),
  new CidadeInfo(131, 25758.3333, 51395.8333),
  new CidadeInfo(132, 25765.2778, 51019.7222),
  new CidadeInfo(133, 25772.2222, 51483.3333),
  new CidadeInfo(134, 25775.8333, 51023.0556),
  new CidadeInfo(135, 25779.1667, 51449.7222),
  new CidadeInfo(136, 25793.3333, 51409.4444),
  new CidadeInfo(137, 25808.3333, 51060.5556),
  new CidadeInfo(138, 25816.6667, 51133.3333),
  new CidadeInfo(139, 25823.6111, 51152.5),
  new CidadeInfo(140, 25826.6667, 51043.8889),
  new CidadeInfo(141, 25829.7222, 51245.2778),
  new CidadeInfo(142, 25833.3333, 51072.2222),
  new CidadeInfo(143, 25839.1667, 51465.2778),
  new CidadeInfo(144, 25847.7778, 51205.8333),
  new CidadeInfo(145, 25850.0, 51033.3333),
  new CidadeInfo(146, 25856.6667, 51083.3333),
  new CidadeInfo(147, 25857.5, 51298.8889),
  new CidadeInfo(148, 25857.5, 51441.3889),
  new CidadeInfo(149, 25866.6667, 51066.6667),
  new CidadeInfo(150, 25867.7778, 51205.5556),
  new CidadeInfo(151, 25871.9444, 51354.7222),
  new CidadeInfo(152, 25872.5, 51258.3333),
  new CidadeInfo(153, 25880.8333, 51221.3889),
  new CidadeInfo(154, 25883.0556, 51185.2778),
  new CidadeInfo(155, 25888.0556, 51386.3889),
  new CidadeInfo(156, 25900.0, 51000.0),
  new CidadeInfo(157, 25904.1667, 51201.6667),
  new CidadeInfo(158, 25928.3333, 51337.5),
  new CidadeInfo(159, 25937.5, 51313.3333),
  new CidadeInfo(160, 25944.7222, 51456.3889),
  new CidadeInfo(161, 25950.0, 51066.6667),
  new CidadeInfo(162, 25951.6667, 51349.7222),
  new CidadeInfo(163, 25957.7778, 51075.2778),
  new CidadeInfo(164, 25958.3333, 51099.4444),
  new CidadeInfo(165, 25966.6667, 51283.3333),
  new CidadeInfo(166, 25983.3333, 51400.0),
  new CidadeInfo(167, 25983.6111, 51328.0556),
  new CidadeInfo(168, 26000.2778, 51294.4444),
  new CidadeInfo(169, 26008.6111, 51083.6111),
  new CidadeInfo(170, 26016.6667, 51333.3333),
  new CidadeInfo(171, 26021.6667, 51366.9444),
  new CidadeInfo(172, 26033.3333, 51116.6667),
  new CidadeInfo(173, 26033.3333, 51166.6667),
  new CidadeInfo(174, 26033.6111, 51163.8889),
  new CidadeInfo(175, 26033.6111, 51200.2778),
  new CidadeInfo(176, 26048.8889, 51056.9444),
  new CidadeInfo(177, 26050.0, 51250.0),
  new CidadeInfo(178, 26050.2778, 51297.5),
  new CidadeInfo(179, 26050.5556, 51135.8333),
  new CidadeInfo(180, 26055.0, 51316.1111),
  new CidadeInfo(181, 26067.2222, 51258.6111),
  new CidadeInfo(182, 26074.7222, 51083.6111),
  new CidadeInfo(183, 26076.6667, 51166.9444),
  new CidadeInfo(184, 26077.2222, 51222.2222),
  new CidadeInfo(185, 26078.0556, 51361.6667),
  new CidadeInfo(186, 26083.6111, 51147.2222),
  new CidadeInfo(187, 26099.7222, 51161.1111),
  new CidadeInfo(188, 26108.0556, 51244.7222),
  new CidadeInfo(189, 26116.6667, 51216.6667),
  new CidadeInfo(190, 26123.6111, 51169.1667),
  new CidadeInfo(191, 26123.6111, 51222.7778),
  new CidadeInfo(192, 26133.3333, 51216.6667),
  new CidadeInfo(193, 26133.3333, 51300.0),
  new CidadeInfo(194, 26150.2778, 51108.0556),
];

//? Funções
function gerarCidadeAleatoria(cidadesInfo: CidadeInfo[]) {
  return cidadesInfo[Math.floor(Math.random() * cidadesInfo.length)].cidade;
}

function gerarSolucaoAleatoria() {
  const solucaoGerada: number[] = [];
  let cidadesInfoCopia = cidadesInfo;
  let cidadeAleatoria = 0;

  while (cidadesInfoCopia.length) {
    cidadeAleatoria = gerarCidadeAleatoria(cidadesInfoCopia);
    solucaoGerada.push(cidadeAleatoria);
    cidadesInfoCopia = cidadesInfoCopia.filter(
      (cidadeInfo) => cidadeInfo.cidade !== cidadeAleatoria
    );
  }
  return solucaoGerada;
}

function calcularCustoTotal(solucao: number[]) {
  let custoTotal: number = 0;
  for (const cidade of solucao) {
    const index = solucao.indexOf(cidade);
    const proxIndex = index + 1;

    if (proxIndex < solucao.length) {
      const cidadeInfoAtual = cidadesInfo.find(
        (cidadeInfo) => cidadeInfo.cidade === cidade
      );
      const cidadeInfoProx = cidadesInfo.find(
        (cidadeInfo) => cidadeInfo.cidade === solucao[proxIndex]
      );

      if (cidadeInfoProx && cidadeInfoAtual) {
        custoTotal += cidadeInfoAtual.calcularDistancia(cidadeInfoProx);
      }
    }
  }

  return custoTotal;
}

function calcularMenorDistancia(cidadeInfo: CidadeInfo) {
    let distancias = cidadesInfo.map((cidadesInfo) =>
      cidadesInfo.calcularDistancia(cidadeInfo)
    );

    distancias = distancias.map((distancia) => {
      if (distancia === 0) {
        return 999999999999999;
      }
      return distancia;
    });

    const menorDistancia = Math.min(...distancias);
    const indexMenorDistancia = distancias.indexOf(menorDistancia);

    distancias = distancias.map((distancia) => {
      if (distancia === menorDistancia) {
        return 99999999999;
      }
      return distancia;
    });

    const segundaMenorDistancia = Math.min(...distancias);
    const indexSegundaMenorDistancia = distancias.indexOf(
      segundaMenorDistancia
    );

    return {
      menorDistancia,
      indexMenorDistancia,
      segundaMenorDistancia,
      indexSegundaMenorDistancia,
    };
}

function gerarSolucoesFilhos(solucao: number[]) {
  const solucaoAntiga = solucao;
  const solucoesFilhos: number[][] = [];

  for (let i = 0; i < 50; i++) {
    let indexMenorDistancia: number;
    let indexSegundaMenorDistancia: number;
    let cidadeMenorDistancia;
    let cidadeSegundaMenorDistancia;
    let relacao;
    let novaSolucao: number[];
    let cidadeAleatoria1 = gerarCidadeAleatoria(cidadesInfo);

    const indexCidadeAleatoria = solucaoAntiga.indexOf(cidadeAleatoria1);
    const cidadeInfoAleatoria = cidadesInfo.find(
      (cidadeInfo) => cidadeInfo.cidade === cidadeAleatoria1
    );

    if (cidadeInfoAleatoria) {
      relacao = calcularMenorDistancia(cidadeInfoAleatoria);
      cidadeMenorDistancia = cidadesInfo[relacao.indexMenorDistancia].cidade;
      cidadeSegundaMenorDistancia =
        cidadesInfo[relacao.indexSegundaMenorDistancia].cidade;
    }

    if (cidadeMenorDistancia && cidadeSegundaMenorDistancia) {

      indexMenorDistancia = solucaoAntiga.indexOf(cidadeMenorDistancia);
      indexSegundaMenorDistancia = solucaoAntiga.indexOf(
        cidadeSegundaMenorDistancia
      );

      let cidadePosterior: number;
      let cidadeAnterior: number;

      if (indexCidadeAleatoria === 0) {
        cidadePosterior = solucaoAntiga[indexCidadeAleatoria + 1];

        novaSolucao = solucaoAntiga.map((cidade, i) => {
          if (i === indexCidadeAleatoria + 1 && i !== indexMenorDistancia) {
              return solucaoAntiga[indexMenorDistancia];
          } else if (i === indexMenorDistancia) {
            return cidadePosterior;
          }
          return cidade;
        });
      } else if (indexCidadeAleatoria === solucaoAntiga.length - 1) {
          cidadeAnterior = solucaoAntiga[indexCidadeAleatoria - 1];
        
          novaSolucao = solucaoAntiga.map((cidade, i) => {
            if (i === indexCidadeAleatoria - 1 && i !== indexMenorDistancia) {
             return solucaoAntiga[indexMenorDistancia];
           } else if (i === indexMenorDistancia) {
             return cidadeAnterior;
            }
           return cidade;
        });
      } else {
        novaSolucao = solucaoAntiga;
        cidadeAnterior = solucaoAntiga[indexCidadeAleatoria - 1];
        cidadePosterior = solucaoAntiga[indexCidadeAleatoria + 1];
        let cidadeAnteriorCopia: number = 0;
        let cidadePosteriorCopia: number = 0;


        for(const cidade of solucaoAntiga) {

          const index = solucaoAntiga.indexOf(cidade);

          if (cidade === cidadeAnterior && cidadeAnterior !== solucaoAntiga[indexMenorDistancia]) {
            cidadeAnteriorCopia = cidade;
            novaSolucao[index] = solucaoAntiga[indexMenorDistancia];
            novaSolucao[indexMenorDistancia] = cidadeAnteriorCopia;
        }

        if (cidade === cidadePosterior && cidadePosterior !== solucaoAntiga[indexSegundaMenorDistancia]) {
            cidadePosteriorCopia = cidade;
            novaSolucao[index] = solucaoAntiga[indexSegundaMenorDistancia];
            novaSolucao[indexSegundaMenorDistancia] = cidadePosteriorCopia;
        } 
      }

      }
      solucoesFilhos.push(novaSolucao);
    } 
  }

  const solucaoFilhoEscolhida =
    solucoesFilhos[Math.floor(Math.random() * solucoesFilhos.length)];

  return solucaoFilhoEscolhida;
}

function otimizarSolucao(solucaoAtual: number[]) {
  const custoAntigo = calcularCustoTotal(solucaoAtual);
  const solucaoNova = gerarSolucoesFilhos(solucaoAtual);
  const custoNovo = calcularCustoTotal(solucaoNova);

  if (custoNovo >= custoAntigo) {
    falhou = true;
    return solucaoAtual;
  } else {
    return solucaoNova;
  }
}

//? Main
let custoTotalFinal = 0;
let contador = 0;
let solucaoAtual = gerarSolucaoAleatoria();
let custoTotalInicial = calcularCustoTotal(solucaoAtual);
console.log(`Custo da Solução Inicial: ${custoTotalInicial}\n`);

while (true) {
  solucaoAtual = otimizarSolucao(solucaoAtual);

  if (falhou) {
    custoTotalFinal = calcularCustoTotal(solucaoAtual);
    console.log(`Não foi possivel otimizar mais. \n\n\n`);
    break;
  } else {
    contador++;

    console.log(
      `Melhoria: ${contador}. Custo da Solução Atual: ${calcularCustoTotal(
        solucaoAtual
      )}\n`
    );
  }
}

const diff = custoTotalInicial - custoTotalFinal;
const melhora = (custoTotalInicial / custoTotalFinal) * 100;

console.log(
  `Custo Inicial: ${custoTotalInicial}\nCusto Final: ${custoTotalFinal}\nDiferença de custos: ${diff}\n`
);
console.log(`Melhoria(%): ${melhora - 100}\n`);
