AOS.init();

const dataDoEvento = new Date("Jun 15,2024 19:00:00");
const timeStampEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();
  const minutoEmMS=1000*60

  const distanciaAteOEvento = timeStampEvento - timeStampAtual;
  const diasAteOEvento = Math.floor(
    distanciaAteOEvento / (1000 * 60 * 60 * 24)
  );
  const minutosAteOEvento=Math.floor((distanciaAteOEvento%(1000))/(1000*60))
  const horasAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60 * 24))/(1000*60*60));
  const segundosAteOEvento=Math.floor((distanciaAteOEvento%minutoEmMS)/1000)
  document.getElementById('contador').innerHTML=`${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}min ${segundosAteOEvento}s`
  if (distanciaAteOEvento<0) {
    clearInterval(contaHoras)
    document.getElementById('contador').innerHTML='Evento expirado'
}
}, 1000);
