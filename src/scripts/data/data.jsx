export const MesAtual = () => {
    const stringMes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    const mes = new Date().getMonth()
    return stringMes[mes];
}
