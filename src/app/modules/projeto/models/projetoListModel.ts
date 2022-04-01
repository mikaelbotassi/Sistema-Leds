import { MembroModel } from "../../membro/models/membroModel";

const TITULO:string[] = [" Combate ao abuso infantil e apoio às vítimas", "Educação de crianças e jovens", "Crianças desaparecidas", "Apoio a mulheres vítimas de violência", "Empoderamento feminino"]
const PRAZOS:string[] = ["2010-2011", "2011-2012", "2012-2013", "2013-2014", "2014-2015"]
const OBJETIVOS:string[] = [
  "a Associação ajuda crianças e adolescentes que foram vítimas de violência doméstica e sexual, além de crianças que vivem com HIV/Aids. Entre os serviços oferecidos estão o atendimento social e psicológico, reforço escolar, psicopedagogia, assistência social, visitas domiciliares e assistência jurídica.",
  " a instituição promove a implementação de ações públicas, fortalecimento de organizações não governamentais e governamentais para prestação de serviços ou defesa de direitos, e articulação política e social em prol dos direitos da criança e do adolescente",
  "a ONG Desaparecidos do Brasil trabalha com ajuda psicológica para as famílias dos desaparecidos, orientação para as buscas e divulgação dos casos. Além disso, atua no combate ao abuso e à violência contra crianças, como sequestros para fins de exploração sexual infantil, exploração do trabalho escravo de crianças e adultos e tráfico de órgãos",
  " a associação acolhe mulheres e filhos em abrigos sigilosos. Segundo dados da ONG, foram cerca de 32 mil famílias acompanhadas e 800 pessoas acolhidas nos abrigos.",
  "o movimento consiste em uma corrente através das redes sociais que incentiva as mulheres a compartilharem experiências, principalmente em relação à violência de gênero que sofrem na rua. Além disso, o movimento busca empoderar através da informação e prega a sororidade (irmandade feminina)."
]

export class ProjetoListModel {

  titulo:string;
  coordenador: MembroModel;
  prazo:string;
  objetivo:string;


  constructor() {
    let random = this.getRandomInt(0,5);
    this.titulo = TITULO[random];
    this.coordenador = new MembroModel();
    this.prazo = PRAZOS[random];
    this.objetivo = OBJETIVOS[random];
  }

  getRandomInt(min:number, max:number):number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
