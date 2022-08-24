Dependencias:

```npm install prompt-sync```
```npm i --save-dev @types/node ```

Alterar ```tsconfig.json``` 

```json
...

"target": "ES2016", 

...
```


Representação de Tabuleiro: 
- Representação centrada nas casas - Array 2 dimensões 12x12 (representação moldura) (Ok)

Algoritmo de busca: 
- MinMax Alpha Beta Prunning (Ok)

Função Heurísitica:
- Vantagem Material(Ok) + Valoração Peça-Posição(Ok) + Mobilidade(TODO)

Fontes:

- https://www.chessprogramming.org/Simplified_Evaluation_Function
- https://bcc.ime.usp.br/tccs/2014/hvmds/Monografia.pdf
- https://www.chessprogramming.org/Mobility