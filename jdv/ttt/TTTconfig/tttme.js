const tttme = (pushname, userWins, userDefeats, userTies, userPoints) => {
  return `
ใ ๐๐ฎ Tic Tac Toe ๐ฎ๐ ใ
๐๐ซ๐ข๐ฏ๐๐ญ๐ ๐๐จ๐ญ
โ NOME: ${pushname} 

    โฃ Vitรณrias: ${userWins} ๐
    โฃ Derrotas: ${userDefeats} ๐ฅ
    โฃ Empates : ${userTies} ๐
    โฃ Pontos  : ${userPoints} โจ
    `
}

exports.tttme = tttme
