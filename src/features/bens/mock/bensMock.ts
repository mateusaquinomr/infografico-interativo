import { Bem } from "../types/Bem";

// Imagens das figuras
import arteKusiwa from '../../../assets/images/figuras/arte-kusiwa-figura.png';
import sambaRodaReconcavo from '../../../assets/images/figuras/samba-roda-reconcavo.png';
import jongoSudeste from '../../../assets/images/figuras/jongo-sudeste.png';
import frevo from '../../../assets/images/figuras/frevo.png';
import tamborCrioulaMaranhao from '../../../assets/images/figuras/tambor-crioula.png';
import matrizesSamba from '../../../assets/images/figuras/matrizes-samba.png';
import rodaCapoeira from '../../../assets/images/figuras/roda-capoeira.png';
import toqueSinos from '../../../assets/images/figuras/toque-sinos.png';
import ritxoko from '../../../assets/images/figuras/ritxoko.png';
import fandangoCaicara from '../../../assets/images/figuras/fandango-caicara.png';
import carimbo from '../../../assets/images/figuras/carimbo.png';
import maracatuNacao from '../../../assets/images/figuras/maracatu-nacao.png';
import maracatuBaqueSolto from '../../../assets/images/figuras/maracatu-baque-solto.png';
import cavaloMarinho from '../../../assets/images/figuras/cavalo-marinho.png';
import teatroBonecosNordeste from '../../../assets/images/figuras/teatro-bonecos-nordeste.png';
import caboclinho from '../../../assets/images/figuras/caboclinho.png';
import literaturaCordel from '../../../assets/images/figuras/literatura-cordel.png';
import marabaixo from '../../../assets/images/figuras/marabaixo.png';
import cirandaNordeste from '../../../assets/images/figuras/ciranda-nordeste.png';
import repente from '../../../assets/images/figuras/repente.png';
import matrizesForro from '../../../assets/images/figuras/matrizes-forro.png';
import arteSanteira from '../../../assets/images/figuras/arte-santeira.png';
import choro from '../../../assets/images/figuras/choro.png';
import sambaBumbo from '../../../assets/images/figuras/samba-bumbo.png';

// Imagens das localizações
import arteKusiwaLocalizacao from '../../../assets/images/localizacao/arte-kusiwa-localizacao.svg';
import sambaRodaReconcavoLocalizacao from '../../../assets/images/localizacao/samba-roda-reconcavo-localizacao.svg';
import jongoSudesteLocalizacao from '../../../assets/images/localizacao/jongo-sudeste-localizacao.svg';
import frevoLocalizacao from '../../../assets/images/localizacao/frevo-localizacao.svg';
import tamborCrioulaMaranhaoLocalizacao from '../../../assets/images/localizacao/tambor-crioula-maranhão-localizacao.svg';
import matrizesSambaLocalizacao from '../../../assets/images/localizacao/matrizes-samba-rj-localizacao.svg';
import rodaCapoeiraLocalizacao from '../../../assets/images/localizacao/roda-capoeira-localizacao.svg';
import toqueSinosLocalizacao from '../../../assets/images/localizacao/toque-sinos-mg-localizacao.svg';
import ritxokoLocalizacao from '../../../assets/images/localizacao/ritxoko-localizacao.svg';
import fandangoCaicaraLocalizacao from '../../../assets/images/localizacao/fandango-caicara-localizacao.svg';
import carimboLocalizacao from '../../../assets/images/localizacao/carimbo-localizacao.svg';
import maracatuNacaoLocalizacao from '../../../assets/images/localizacao/maracatu-nacao-localizacao.svg';
import maracatuBaqueSoltoLocalizacao from '../../../assets/images/localizacao/maracatu-baque-solto-localizacao.svg';
import cavaloMarinhoLocalizacao from '../../../assets/images/localizacao/cavalo-marinho-localizacao.svg';
import teatroBonecosNordesteLocalizacao from '../../../assets/images/localizacao/teatro-bonecos-nordeste-localizacao.svg';
import caboclinhoLocalizacao from '../../../assets/images/localizacao/caboclinho-localizacao.svg';
import literaturaCordelLocalizacao from '../../../assets/images/localizacao/literatura-cordel-localizacao.svg';
import marabaixoLocalizacao from '../../../assets/images/localizacao/marabaixo-localizacao.svg';
import cirandaNordesteLocalizacao from '../../../assets/images/localizacao/ciranda-nordeste-localizacao.svg';
import repenteLocalizacao from '../../../assets/images/localizacao/repente-localizacao.svg';
import matrizesForroLocalizacao from '../../../assets/images/localizacao/matrizes-forro-localizacao.svg';
import arteSanteiraLocalizacao from '../../../assets/images/localizacao/arte-santeira-pi-localizacao.svg';
import choroLocalizacao from '../../../assets/images/localizacao/choro-localizacao.svg';
import sambaBumboLocalizacao from '../../../assets/images/localizacao/samba-bumbo-sp-localizacao.svg';

export const bensMock: Bem[] = [
    {
        id: 1,
        title: "Arte Kusiwa",
        subtitulo: "Pintura Corporal e Arte Gráfica Wajãpi",
        date: "2002",
        image: arteKusiwa,
        description: "A Arte Kusiwa é uma forma de pintura corporal e arte gráfica exclusiva dos povos indígenas Wajãpi. Esse sistema visual representa a sua cultura e visão de mundo, com a pintura corporal sendo uma prática comum e integrada ao dia a dia. As artes Kusiwa mostram figuras como onças, cobras e pássaros, feitas no corpo e em objetos, usando tinta de urucum, gordura de macaco, suco de jenipapo verde e resinas perfumadas.",
        localizacao: arteKusiwaLocalizacao,
        estados: ["Amapá"],
        registro: "O registro foi aprovado em dezembro de 2002 pelo Conselho Executivo do IPHAN, tornando a Arte Kusiwa um dos primeiros bens imateriais reconhecidos como Patrimônio Cultural do Brasil. Também foi o primeiro a ser revalidado.",
        midias: []
    },
    {
        id: 2,
        title: "Samba de Roda do Recôncavo Baiano",
        date: "2004",
        image: sambaRodaReconcavo,
        description: "O Samba de Roda é uma manifestação musical, coreográfica, poética e festiva, muito presente em toda a Bahia, especialmente no Recôncavo. Essa prática em grupo, com registros desde 1860, tem suas raízes profundamente fincadas na herança africana de escravizados e seus descendentes, abrangendo o culto aos orixás e caboclos, o jogo da capoeira e a chamada comida de azeite.",
        localizacao: sambaRodaReconcavoLocalizacao,
        estados: ["Bahia"],
        registro: "O registro foi oficializado em outubro de 2004, de acordo com a decisão da 44º reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    },
    {
        id: 3,
        title: "Jongo no Sudeste",
        date: "2005",
        image: jongoSudeste,
        description: "O jongo é uma expressão afro-brasileira nascida dos saberes e crenças dos povos africanos, especialmente os de língua bantu. Consolidou-se entre escravizados das lavouras de café e cana-de-açúcar no Sudeste, principalmente no Vale do Paraíba do Sul. É uma louvação aos antepassados, funcionando como um símbolo de identidade e resistência que une percussão de tambores, dança coletiva e práticas de magia.",
        localizacao: jongoSudesteLocalizacao,
        estados: ["São Paulo", "Rio de Janeiro", "Espírito Santo", "Minas Gerais"],
        registro: "O registro foi oficializado em dezembro de 2005, de acordo com a decisão da 48º reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    },
    {
        id: 4,
        title: "Frevo",
        date: "2007",
        image: frevo,
        description: "O frevo é uma manifestação musical, coreográfica e poética da cultura pernambucana, concentrada especialmente em Recife e Olinda. Sua origem remonta ao final do século XIX, em um contexto de carnaval e grandes transformações sociais, que envolviam a libertação de escravizados, a presença de capoeiristas e a formação da classe operária. O frevo tem um expressivo repertório de bandas, com três modalidades ainda ativas: Frevo de Rua, Frevo de Bloco e Frevo Canção.",
        localizacao: frevoLocalizacao,
        estados: ["Pernambuco"],
        registro: "O registro foi oficializado em fevereiro de 2007, de acordo com a decisão da 52º reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    },
    {
        id: 5,
        title: "Tambor de Crioula do Maranhão",
        date: "2007",
        image: tamborCrioulaMaranhao,
        description: "O Tambor de Crioula é uma manifestação afro-brasileira presente na maioria dos municípios do Maranhão. Envolve uma dança circular feminina, canto e a intensa percussão de tambores. É formado pelas coreiras (mulheres que participam do Tambor de Crioula), tocadores e cantadores. O ritmo contínuo dos tambores guia todos, culminando na punga (ou umbigada) — um movimento onde as dançarinas tocam o ventre uma da outra, como saudação e convite.",
        localizacao: tamborCrioulaMaranhaoLocalizacao,
        estados: ["Maranhão"],
        registro: "O registro foi oficializado em junho de 2007, de acordo com a decisão da 53º reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    },
    {
        id: 6,
        title: "Matrizes do Samba no Rio de Janeiro",
        subtitulo: "partido alto, samba de terreiro e samba-enredo",
        date: "2007",
        image: matrizesSamba,
        description: "A partir das influências rítmicas, poéticas e musicais do jongo, do samba de roda baiano, do maxixe e da marcha carnavalesca, três novas formas de samba se consolidaram e são cultivadas há mais de 90 anos por suas comunidades. O partido alto está ligado ao cotidiano e é uma criação coletiva. Consiste em uma parte de coral (refrão) e uma parte solo com versos improvisados ou do repertório tradicional, que podem ou não se relacionar ao refrão. O samba-enredo, com ritmo inventado nas rodas do bairro do Estácio de Sá, foi apropriado pelas nascentes escolas de samba para animar seus desfiles de Carnaval. Ele é um elemento estético do samba e serve para narrar musicalmente e transmitir as mensagens das escolas. E o samba de terreiro, com raízes nos terreiros afro-brasileiros, hoje também é encontrado na quadra da escola, no quintal do subúrbio e nas rodas de samba de botequim.",
        localizacao: matrizesSambaLocalizacao,
        estados: ["Rio de Janeiro"],
        registro: "O registro foi oficializado em novembro de 2007, de acordo com a decisão da 54º reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    },
    {
        id: 7,
        title: "Roda de Capoeira",
        date: "2008",
        image: rodaCapoeira,
        description: "A capoeira é uma manifestação cultural multifacetada, que combina dança, luta e jogo, presente em todo o Brasil. Suas modalidades mais conhecidas são a Capoeira Angola e a Capoeira Regional. Em todas as práticas atuais de capoeira, a orquestração musical, a dança, os golpes e o jogo coexistem. No entanto, o enfoque se diferencia de acordo com a singularidade de cada vertente, grupo ou mestre.",
        localizacao: rodaCapoeiraLocalizacao,
        estados: ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"],
        registro: "O registro foi oficializado em outubro de 2008, de acordo com a decisão da 57º reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    },
    {
        id: 8,
        title: "Toque dos Sinos em Minas Gerais",
        date: "2009",
        image: toqueSinos,
        description: "O Toque dos Sinos é uma expressão sonora de Minas Gerais, caracterizada pelo som dos sinos de igrejas católicas. Ele serve para anunciar rituais e celebrações, como festas de santos, Semana Santa, Natal, batizados, funerais, casamentos e a marcação das horas, entre outras comunicações. As cidades que mantêm essa tradição a consideram um elemento importante de sua identidade.",
        localizacao: toqueSinosLocalizacao,
        estados: ["Minas Gerais"],
        registro: "O registro foi oficializado em dezembro de 2009, de acordo com a decisão da 62º reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    },
    {
        id: 9,
        title: "Ritxòkò",
        subtitulo: "Expressão Artística e Cosmológica do Povo Karajá",
        date: "2012",
        image: ritxoko,
        description: "As Ritxòkò são bonecas de cerâmica feitas por mulheres indígenas Karajá. Conhecidas também como bonecas karajá, elas condensam importantes aspectos da identidade do grupo e simbolizam diversos planos de sua sóciocosmologia. Essas bonecas são vistas como representações culturais com significados sociais profundos, através das quais se reproduz a organização sociocultural e familiar dos Karajá.",
        localizacao: ritxokoLocalizacao,
        estados: ["Goiás", "Mato Grosso", "Pará", "Tocantins"],
        registro: "O registro foi oficializado em janeiro de 2012, de acordo com a decisão da 69º reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    },
    {
        id: 10,
        title: "Fandango Caiçara",
        date: "2012",
        image: fandangoCaicara,
        description: "O Fandango Caiçara é uma expressão musical, coreográfica, poética e festiva. Ele surgiu da forte interação entre a população nativa e os europeus, criando um modo de vida único. As práticas do fandango permeiam o trabalho, a religião, o divertimento, a música e a dança. Sua formação instrumental inclui basicamente tocadores de viola, rabeca, adufo, violão, cavaquinho e instrumentos de percussão. Os versos podem ser improvisados ou parte de repertórios tradicionais.",
        localizacao: fandangoCaicaraLocalizacao,
        estados: ["Paraná", "São Paulo"],
        registro: "O registro foi oficializado em novembro de 2012, de acordo com a decisão da 71º reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    },
    {
        id: 11,
        title: "Carimbó",
        date: "2014",
        image: carimbo,
        description: "O carimbó é uma expressão cultural que mistura música, dança e diversas manifestações sociais. Presente o ano inteiro, sua origem remonta ao século XVII, trazida por pessoas africanas escravizadas, com influências indígenas e ibéricas. A palavra carimbó significa tambor, que é fundamental para essa prática. A dança se caracteriza por passos 'miúdos' e giros, enquanto as letras das canções falam da natureza local e do trabalho dos catimbozeiros (como são chamados os praticantes).",
        localizacao: carimboLocalizacao,
        estados: ["Pará"],
        registro: "O registro foi oficializado em setembro de 2014, de acordo com a decisão da 76º reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    },
    {
        id: 12,
        title: "Maracatu Nação",
        date: "2014",
        image: maracatuNacao,
        description: "O Maracatu Nação, ou de Baque Virado, é uma expressão cultural de Pernambuco que une um conjunto musical de percussão a um cortejo real. Seus grupos, formados principalmente por homens e mulheres negras, remetem às antigas coroações de reis e rainhas do congo. Com destaque no Carnaval, o batuque é feito por batuqueiros que tocam os ritmos e as toadas, sob a regência de um mestre. O Maracatu Nação tem forte ligação com as religiões de terreiro (candomblé ou xangô, jurema e umbanda), sendo praticado em grande parte por pessoas negras.",
        localizacao: maracatuNacaoLocalizacao,
        estados: ["Pernambuco"],
        registro: "O registro foi oficializado em dezembro de 2014, de acordo com a decisão da 77º reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    },
    {
        id: 13,
        title: "Maracatu de Baque Solto",
        date: "2014",
        image: maracatuBaqueSolto,
        description: "O Maracatu de Baque Solto (ou Rural) é uma expressão cultural que une dança, música e poesia. Ele surgiu da fusão de várias manifestações populares, como as cambindas e o cavalo-marinho, e se destaca pelo seu baque solto, coreografia vibrante, figurinos e ricos versos. O Caboclo de Lança é um personagem central: uma figura imponente e enigmática, com lança, chocalhos e vestes coloridas que dominam a cena. Nascido nos engenhos de cana-de-açúcar do século XX, o maracatu está profundamente ligado ao ambiente rural canavieiro.",
        localizacao: maracatuBaqueSoltoLocalizacao,
        estados: ["Pernambuco"],
        registro: "O registro foi oficializado em dezembro de 2014, de acordo com a decisão da 77º reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    },
    {
        id: 14,
        title: "Cavalo-Marinho",
        date: "2014",
        image: cavaloMarinho,
        description: "O Cavalo-Marinho é uma expressão cultural popular típica do período natalino. Essa tradição combina performances dramáticas, musicais e coreográficas e personagens mascarados. Ela representa cenas do cotidiano e está profundamente relacionado ao contexto do trabalho dos lavradores das zonas rurais, especialmente nos antigos engenhos de cana-de-açúcar. A manifestação também integra a louvação ao Divino Santo Rei do Oriente e o culto à Jurema Sagrada.",
        localizacao: cavaloMarinhoLocalizacao,
        estados: ["Paraíba", "Pernambuco"],
        registro: "O registro foi oficializado em dezembro de 2014, de acordo com a decisão da 77º reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    },
    {
        id: 15,
        title: "Teatro de Bonecos Popular do Nordeste",
        subtitulo: "Mamulengo, Babau, João Redondo e Cassimiro Coco",
        date: "2015",
        image: teatroBonecosNordeste,
        description: "O teatro de bonecas popular do Nordeste é conhecido por diversos nomes como Mamulengo, Babau, João Redondo e Cassimiro Coco. Embora cada um tenha suas particularidades, compartilham a essência de representações dramáticas encenadas com bonecos, manipulados por artistas ocultos atrás de um pano ou barraca. Essa expressão artística incorporou e reflete as tradições e influências de múltiplos grupos étnicos, resultando em uma manifestação com múltiplas influências.",
        localizacao: teatroBonecosNordesteLocalizacao,
        estados: ["Alagoas", "Ceará", "Distrito Federal", "Paraíba", "Pernambuco", "Rio Grande do Norte"],
        registro: "O registro foi oficializado em março de 2015, de acordo com a decisão da 78º reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    },
    {
        id: 16,
        title: "Caboclinho",
        date: "2016",
        image: caboclinho,
        description: "Os Caboclinhos são grupos populares que encenam a cultura indígena no Brasil, baseados em símbolos e elementos afro-indígena-brasileiros. Suas apresentações ocorrem principalmente durante o Carnaval. A dimensão religiosa dos Caboclinhos liga-se fortemente aos preceitos do culto da Jurema e à identidade associadas às entidades espirituais dos caboclos. Geralmente, os participantes utilizam uma preaca, um adereço e instrumento musical em formato de arco e flecha.",
        localizacao: caboclinhoLocalizacao,
        estados: ["Pernambuco"],
        registro: "O registro foi oficializado em novembro de 2016, de acordo com a decisão da 84º reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    },
    {
        id: 17,
        title: "Literatura de Cordel",
        date: "2018",
        image: literaturaCordel,
        description: "É um gênero literário com uma linguagem completa, atuando como um meio de comunicação e uma fonte de sustento para muitos brasileiros. Sua principal característica são as narrativas com ritmo e métrica fortes, apresentadas em pequenos folhetos. Visualmente, a xilogravura se tornou a marca registrada do cordel, dando-lhe uma identidade única e facilmente reconhecível.",
        localizacao: literaturaCordelLocalizacao,
        estados: ["Alagoas", "Bahia", "Ceará", "Distrito Federal", "Maranhão", "Paraíba", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "São Paulo", "Sergipe"],
        registro: "O registro foi oficializado em setembro de 2018, de acordo com a decisão da 89º reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    },
    {
        id: 18,
        title: "Marabaixo",
        date: "2018",
        image: marabaixo,
        description: "Manifestando-se principalmente por meio de danças em círculo, com giros e rodopios de longas saias, essa prática acompanha o ritmo das cantigas conhecidas como ladrão - poesias orais musicadas pelos toques das caixas, instrumentos de percussão confeccionados pelos próprios músicos. Mais do que uma manifestação artística, o Marabaixo constitui um conjunto de práticas que reverenciam as ancestralidades africanas, acontecendo dentro do contexto do catolicismo popular e associado às festividades católicas da região.",
        localizacao: marabaixoLocalizacao,
        estados: ["Amapá"],
        registro: "O registro foi oficializado em novembro de 2018, de acordo com a decisão da 91º reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    },
    {
        id: 19,
        title: "Ciranda do Nordeste",
        date: "2021",
        image: cirandaNordeste,
        description: "A ciranda é uma expressão cultural que combina música e poesia para embalar uma dança de roda coletiva. Nela, os participantes se unem, de mãos dadas ou braços entrelaçados, girando em um círculo fechado numa única direção. Sua origem remonta à colonização do Nordeste brasileiro, um período de escravidão e monocultura açucareira. Essa forma cultural é profundamente moldada pelas matrizes identitárias indígenas e afro-brasileiras, que a permeiam em sua essência.",
        localizacao: cirandaNordesteLocalizacao,
        estados: ["Alagoas", "Paraíba", "Pernambuco"],
        registro: "O registro foi oficializado em setembro de 2021, de acordo com a decisão da 97º reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    },
    {
        id: 20,
        title: "Repente",
        date: "2021",
        image: repente,
        description: "O repente é uma forma de expressão baseada no diálogo poético entre dois repentistas. Eles se alternam cantando estrofes improvisadas, com o acompanhamento de violas. A disputa oral se une às respostas diretas aos pedidos do público. Em sua composição, o repente tem laços históricos com a literatura de cordel, compartilhando uma estrutura focada em métrica, rima e oração.",
        localizacao: repenteLocalizacao,
        estados: ["Alagoas", "Bahia", "Ceará", "Distrito Federal", "Maranhão", "Paraíba", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "São Paulo", "Sergipe"],
        registro: "O registro foi oficializado em novembro de 2021, de acordo com a decisão da 98º reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    },
    {
        id: 21,
        title: "Matrizes Tradicionais do Forró",
        date: "2021",
        image: matrizesForro,
        description: "É uma expressão multimodal, centrada na performance social de diversos tipos de música e dança. As Matrizes Tradicionais do Forró são conhecidas pelos seus ritmos, danças e instrumentos tradicionais. Desde o início do século XX, a palavra forró passou a designar um estilo musical específico para ouvir e dançar. Além disso, também nomeia um evento com música e dança ao vivo, onde há presença de gêneros musicais como xote, baião e xaxado.",
        localizacao: matrizesForroLocalizacao,
        estados: ["Acre", "Alagoas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Maranhão", "Minas Gerais", "Paraíba", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "São Paulo", "Sergipe"],
        registro: "O registro foi oficializado em dezembro de 2021, de acordo com a decisão da 99º reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    },
    {
        id: 22,
        title: "Arte Santeira em Madeira do Piauí",
        date: "2024",
        image: arteSanteira,
        description: "É uma manifestação plástica que utiliza a madeira como matéria-prima. Seus atributos artísticos e culturais se revelam na talha de esculturas tridimensionais sacras, além de oratórios, paineis e outras peças. As peças frequentemente retratam figuras sagradas como anjos e santos, além de pessoas comuns chamadas de caboclos. Apesar de similaridades, cada santeiro possui um estilo único, muitas vezes com referências visuais do agreste piauiense, como carnaúbas e mandacarus.",
        localizacao: arteSanteiraLocalizacao,
        estados: ["Piauí"],
        registro: "O registro foi oficializado em novembro de 2024, de acordo com a decisão da 106ª reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    },
    {
        id: 23,
        title: "Choro",
        date: "2024",
        image: choro,
        description: "O Choro é um conjunto de práticas musicais surgido no século XIX, presente em diversas regiões do Brasil com variadas estéticas. Ele resulta do contato entre músicas de dança de salão europeias e a diáspora negra. Esse encontro gerou complexos processos de apropriação e transformação de musicalidades transnacionais com as práticas musicais locais, consolidando um gênero rico e diversificado.",
        localizacao: choroLocalizacao,
        estados: ["Distrito Federal", "Rio de Janeiro", "São Paulo", "Minas Gerais", "Pernambuco", "Ceará", "Paraná", "Rio Grande do Sul", "Bahia", "Pará", "Goiás", "Maranhão", "Mato Grosso", "Santa Catarina"],
        registro: "O registro foi oficializado em fevereiro de 2024, de acordo com a decisão da 103ª reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    },
    {
        id: 24,
        title: "Samba de Bumbo Paulista",
        date: "2024",
        image: sambaBumbo,
        description: "O Samba de Bumbo Paulista é uma expressão que une música, dança e poesia, praticada por grupos de tradição familiar. Seu objetivo é promover a união coletiva, a devoção religiosa e a manutenção dos laços entre os participantes. Existem três modalidades principais: Samba de Bumbo, samba-lenço e samba caipira. As formas de cantar e os santos de devoção variam entre os grupos. Essa expressão surgiu nas fazendas de café paulistas no século XIX, com origem entre as populações africanas deslocadas brutalmente durante a escravidão.",
        localizacao: sambaBumboLocalizacao,
        estados: ["São Paulo"],
        registro: "O registro foi oficializado em maio de 2024, de acordo com a decisão da 104ª reunião do Conselho Consultivo do Patrimônio Cultural.",
        midias: []
    }
];