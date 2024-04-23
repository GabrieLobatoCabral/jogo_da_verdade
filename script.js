const questions = [
"O que não pode faltar para você na parte física de um namoro?",
"Qual foi a coisa mais embaraçosa que seus pais já pegaram você fazendo?",
"Qual seria a primeira coisa que você faria se acordasse por um dia sendo do gênero oposto?",
"Qual foi a coisa mais cruel que você já fez com um namorado ou namorada?",
"Qual foi a coisa mais estranha que você já fez em frente ao espelho?",
"Você já enviou alguma fotografia comprometedora para a pessoa errada?",
"Quem foi a última pessoa com que ficou?",
"Qual foi o lugar mais esquisito ou curioso em que ficou com alguém?",
"Já ficou com alguém do Tinder?",
"Qual o maior segredo que já escondeu de algum namorado ou namorada?",
"Já teve algum sonho 'sugestivo' com alguém desta sala?",
"Quando foi a última vez que te deram um fora e como lidou com isso?",
"Qual a maior mentira que já contou para algum namorado ou namorada e nunca foi descoberta?",
"Com quem gostaria de esquecer que ficou?",
"O que você nunca toparia fazer pelo(a) namorado(a)?",
"Com quem quer muito ficar de novo?",
"Já mandou a mesma fotografia para mais de uma pessoa?",
"Já ficou com algum professor?",
"Já viu algum vizinho trocando de roupa sem querer?",
"O que faria se pegasse seu namorado ou namorada com outro(a)?",
"Já foi traído(a)?",
"Já terminou um relacionamento porque se interessou por outra pessoa?",
"O que te entrega quando está afim de alguém?",
"Qual foi o máximo de tempo que já ficou sem beijar alguém?",
"Já teve que esconder marcas deixadas no seu pescoço?",
"Tem alguma tatuagem escondida?",
"Já ficou com o(a) ex-namorado(a) de um(a) amigo(a)?",
"Em quem desta roda tem vontade de dar um beijo?",
"Já ficou com alguém famoso ou semi famoso?",
"Já ficou com alguém sabendo que era comprometido(a)?",
"Já foi o(a) amante?",
"Em qual lugar do corpo gosta de receber massagem?",
"Já estudou para ser melhor no momento do romance? Qual a bibliografia?(meu cachorro quer saber)",
"Qual é o tipo de provocação a que você não resiste?",
"Qual é a sua técnica de conquista que mais funciona?",
"Já ficou com pai ou mãe de amigo(a)?",
"Já ficou com primo(a)?",
"Já traiu algum namorado ou namorada?",
"Já sofreu algum tipo de acidente na hora H?",
"Já passou vergonha com o crush e não conseguiu mais ficar com a pessoa?",
"Já percebeu que cometeu um erro de roupas bem na hora H?",
"Já ficou com mais de uma amigo do mesmo grupo?",
"Já inventou um namorado ou namorada para fazer ciúmes ao ex?",
"Já nadou sem roupa?",
"Tem algum piercing em um lugar que não podemos ver?",
"O que mais te faz sentir borboletas no estômago?",
"Qual foi a razão mais ridícula pela qual terminou com alguém?",
"Quando foi a última vez que chorou e por quê?",
"Conte uma coisa que espera que seus pais nunca descubram.",
"Qual é a mania mais nojenta que você tem?",
"De qual pessoa não famosa você tem inveja?",
"O que você adora, mas tem vergonha de admitir?",
"Qual foi a coisa mais embaraçosa que já fez?",
"Qual foi a pessoa mais aleatória que stalkeou nas redes sociais?",
"Qual é o apelido mais vergonhoso que alguém já lhe deu?",
"Qual site no seu histórico de navegação te deixaria constrangido se alguém visse?",
"Qual foi o sonho mais assustador que já teve?",
"Quem é a pessoa mais bonita da roda?",
"Qual foi a coisa mais embaraçosa que você já fez bêbado?",
"Qual o passeio que você já fez que foi mais 'rolê errado' e você só queria fugir?",
"Conte algo infantil que você ainda faz.",
"Qual é o seu medo mais sombrio?",
"Qual foi o pior presente que já deu para alguém?",
"Com quem se arrepende de já ter se envolvido?",
"Qual é a coisa mais estranha ou vergonhosa que já fez por dinheiro?",
"Se pudesse mudar de vida com uma celebridade por um dia, com quem seria?",
"O que você faria se fosse do sexo oposto por uma semana?",
"O que a maioria das pessoas pensa que é verdade sobre você, mas não é?",
"Já se arrependeu imediatamente após enviar uma mensagem? Qual foi?",
"Qual é a maior mentira que já contou para alguém da sua família?",
"Você tem alguma lacuna de conhecimento? Algo simples que todos sabem fazer, mas você não",
"Qual a maior vergonha que você já passou no meio da rua?",
"Qual a foto mais constrangedora que tem no seu telefone?",
"Que erro simples você ainda comete com frequência?",
"O que não consegue viver sem?",
"Qual o 'caminho' online mais longo que já fez para stalkear alguém?",
"Se tivesse que beijar um dos jogadores, quem seria?",
"Por que você terminou com seu último namorado ou namorada?",
"Se um(a) amigo(a) do mesmo sexo falasse que está a fim de você, você ficaria com ele?",
"Já ficou com o(a) ex de algum melhor amigo seu?",
"É verdade que você já acobertou uma traição de um(a) amigo(a) bem próximo(a)?",
"Já ficou com alguém desta roda?",
"Se tivesse que escolher, preferiria saber quando ou como irá morrer?",
"Já terminou com alguém e pegou um(a) amigo(a) para fazer ciúmes?",
"Já teve um relacionamento tóxico e só percebeu após terminar?",
"Se tivesse que beijar um dos jogadores, quem seria?",
"Já pensou que estava grávida ou havia engravidado alguém?",
"Qual o site que você mais acessa quando está sozinho(a)?",
"Três coisas que ninguém sabe que você fez, mas será contado agora?",
"Qual foi a maior mentira que já contou para algum(a) crush?",
"Qual foi a coisa mais estranha que você já fez na frente de um espelho?",
"Fale alguma coisa que tem no seu histórico de navegação que você ficaria constrangido se alguém visse?",
"Já traiu?",
"Já aceitou namorar alguém por pena ou por ficar sem graça em recusar o pedido?",
"O que acha de quem mantém amizade com os(as) ex?",
"Qual foi a a pior decisão que já tomou na vida?",
"Se pudesse, como escolheria morrer?",
"Qual a maior loucura que faria por um amigo?",
"Qual hábito seu podem considerar estranho ou feio?",
"Se você fosse morrer hoje, do que você se arrependeria?",
"Por qual situação difícil já passou que não deseja nem para o seu inimigo?",
"O que quer que esteja escrito na sua lápide?",
"Já fez mal a alguém de propósito?",
"Namoraria com alguém só pela química, mesmo que não tivessem mais nada em comum?",
"Já se relacionou com uma pessoa mesmo sabendo que ela era comprometida?",
"Qual foi o maior número de pessoas que já beijou em um mesmo dia?",
"Qual foi a coisa mais fútil com a qual gastou dinheiro?",
"Perdoaria uma traição?",
"Qual foi a cena mais constrangedora em que já pegou seus pais?",
"Voltaria com algum dos seus ex/alguma das suas ex?",
"Casaria por dinheiro?",
"Pegaria um ex de algum amigo por dinheiro, mesmo sabendo que isso poderia magoar a pessoa?",
"Uma verdade que ninguém aceita?",
"Deixaria de falar com a pessoa que você mais gosta por dinheiro?",
"Vazaria algum vídeo seu para ganhar dinheiro?",
"Já teve sonhos apimentados com alguém desta roda? Com quem foi?",
"Qual é o seu maior medo atualmente?",
"Do que se arrepende de não ter pedido perdão?",
"Já julgou alguém sem conhecer a pessoa direito?",
"Já inventou um namorado ou namorada imaginários para fazer ciúmes no ex?",
"Qual foi o maior boato que já inventaram sobre você?",
"Qual item do seu quarto você teria vergonha que alguém visse?",
"A coisa mais louca que já fez entre quatro paredes?",
"Um milhão de reais e ser sozinho para sempre ou ser pobre rodeado por pessoas?",
"Arrepende-se de algo que fez por estar apaixonado?",
"Já ficou com algum(a) professor(a)?",
"Teria um sugar daddy/uma sugar mommy?",
"Já teve um caso com alguém que era muito mais velho ou mais novo que você?",
"Qual foi a pior coisa que já fez por dinheiro?",
"Já usou 'foto isca' para o crush vir falar com você na redes sociais?",
"Já teve um relacionamento com alguém que não era do mesmo país ou cultura que você e teve algum choque cultural?",
"Qual é o seu maior arrependimento dos últimos cinco anos?",
"O que fazem com você que mais te magoa?",
"Já fez algo ilegal e nunca foi pego?",
"Já fingiu na hora H?",
"Qual foi o pior conselho que já deu a alguém?",
"Já teve um comportamento do qual se envergonha?",
"Já se apaixonou por alguém que sabia que não era bom para você?",
"Qual pedido inusitado faria a um gênio da lâmpada?",
"Qual foi a cena mais constrangedora em que seus pais pegaram você?",
"Já feriu alguém emocionalmente de propósito?",
"De que parte de você mesmo sente vergonha?",
"Se considera uma pessoa sensual?",
"Do que você não se orgulha de já ter feito nessa vida?",
"O que te faz gozar e não é sexo?",
"Já foi algemado?",
"O que você compraria agora com mil reais?",
"Se o histórico do seu WhatsApp vazasse agora e você só pudesse apagar a conversa com uma pessoa, qual seria?",
"Qual a maior mentira que você já contou só para conquistar um crush?",
"1 ano na cadeia ou para todo o sempre com seu ex?",
"Qual o maior mico que você já pagou na vida?",
"Qual foi o pior fora que você já levou de um crush?",
"Seu primeiro beijo teve gosto de quê?",
"Sabe onde está o clítoris?",
"Prefere o cu raspado ou peludo?",
    
];

function getRandomQuestion() {
    return questions[Math.floor(Math.random() * questions.length)];
}

function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.textContent = getRandomQuestion();
}

document.getElementById("next-button").addEventListener("click", displayQuestion);

displayQuestion();


// Array de nomes
let nomes = [];

// Função para sortear um nome
function sortearNome() {
    const index = Math.floor(Math.random() * nomes.length);
    return nomes[index];
}

// Função para exibir os nomes cadastrados na página
function mostrarNomes() {
    const listaNomes = document.getElementById("listaNomes");
    listaNomes.innerHTML = ""; // Limpar a lista antes de atualizar

    nomes.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaNomes.appendChild(li);
    });
}

// Função para exibir o nome sorteado na página
function mostrarNome() {
    if (nomes.length === 0) {
        alert("Por favor, adicione nomes antes de sortear.");
        return;
    }
    const nomeSorteado = sortearNome();
    const output = document.getElementById("output");
    output.innerText = `O nome sorteado é: ${nomeSorteado}`;
}

// Função para adicionar um nome à lista
function adicionarNome() {
    const nomeInput = document.getElementById("nomeInput");
    const nome = nomeInput.value.trim();
    if (nome) {
        nomes.push(nome);
        nomeInput.value = "";
        mostrarNomes(); // Atualizar a lista de nomes na página
        // alert("Nome adicionado com sucesso!");
    } else {
        alert("Por favor, insira um nome válido.");
    }
}

// Event listener para o botão de adicionar nome
document.getElementById("adicionarBtn").addEventListener("click", adicionarNome);

// Event listener para o botão de sorteio
document.getElementById("sortearBtn").addEventListener("click", mostrarNome);
