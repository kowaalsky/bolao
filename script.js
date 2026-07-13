const viewer = document.getElementById('viewer');
const burger = document.getElementById('burger');
const menu = document.getElementById('menuNav');

const darking = document.getElementById('darkScreen');

const duration = document.getElementById('palpiteAberto');
const playersMatch = document.getElementById('playersMatch');

burger.addEventListener('click', () => {
    menu.style.left = '0';
    getDark();
})

function closeMenu(){
    menu.style.left = '';
    ungetDark();
}

function getDark(){
    darking.style.backgroundColor = '#000000dc';
    darking.style.pointerEvents = 'all';
}

function ungetDark(){
    darking.style.backgroundColor = '';
    darking.style.pointerEvents = '';
}

function ganhadores(jogo){
    window.open(`ganhadoresdobolao/${jogo}.html`, "_blank")
}

function bolao(bolao){
    window.open(`bolao/${bolao}.html`, "_blank");
}

menu.addEventListener('click', closeMenu);

function openViewer(screen){

    let prompting;

    if(screen == 'members'){
        prompting = `        <h1>Membros cadastrados no Bolão</h1>
<table class="table table-striped table-hover">
    <thead>
        <tr>
            <th>Número</th>
            <th>Nome</th>
            <th>ID</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="blur">+55 31 8445-2641</td>
            <td>Adalton Lopes</td>
            <td>9618628994</td>
        </tr>
        <tr>
            <td class="blur">+55 98 8472-1805</td>
            <td>Adeilton Costa</td>
            <td>3688556229</td>
        </tr>
        <tr>
            <td class="blur">+55 82 9672-3785</td>
            <td>Afonso Venancio</td>
            <td>2620818657</td>
        </tr>
        <tr>
            <td class="blur">+55 24 99272-8686</td>
            <td>Alan Jonatas</td>
            <td>7212539014</td>
        </tr>
        <tr>
            <td class="blur">+55 92 8532-8962</td>
            <td>Alexandre Viana</td>
            <td>9746823302</td>
        </tr>
        <tr>
            <td class="blur">+55 61 9416-8788</td>
            <td>Alexandre Wiliam</td>
            <td>9155742271</td>
        </tr>
        <tr>
            <td class="blur">+55 84 9619-2238</td>
            <td>Anderson Lima</td>
            <td>4952975239</td>
        </tr>
        <tr>
            <td class="blur">+55 21 96676-3241</td>
            <td>André Luis</td>
            <td>8582164897</td>
        </tr>
        <tr>
            <td class="blur">+55 62 9809-5783</td>
            <td>Antônio Cruz</td>
            <td>6490667742</td>
        </tr>
        <tr>
            <td class="blur">+55 98 8837-0164</td>
            <td>Antôny Silvah</td>
            <td>9455437117</td>
        </tr>
        <tr>
            <td class="blur">+55 98 8450-9978</td>
            <td>Arthur Ribeiro</td>
            <td>6490667742</td>
        </tr>
        <tr>
            <td class="blur">+55 21 99269-7088</td>
            <td>Cláudia Rosa</td>
            <td>3220905641</td>
        </tr>
        <tr>
            <td class="blur">+55 61 8555-1165</td>
            <td>Claudio Laerte</td>
            <td>3233373059</td>
        </tr>
        <tr>
            <td class="blur">+55 98 8855-0544</td>
            <td>Cláudio Pedra</td>
            <td>4630616574</td>
        </tr>
        <tr>
            <td class="blur">+55 65 8102-0262</td>
            <td>Cleyton Ernani</td>
            <td>9635857178</td>
        </tr>
        <tr>
            <td class="blur">+55 21 96447-6853</td>
            <td>Cosme Freitas</td>
            <td>1960671979</td>
        </tr>
        <tr>
            <td class="blur">+55 71 8525-5201</td>
            <td>Diego Lima</td>
            <td>5002760660</td>
        </tr>
        <tr>
            <td class="blur">+55 69 9387-2030</td>
            <td>Dilmar Pires</td>
            <td>8004730781</td>
        </tr>
        <tr>
            <td class="blur">+55 35 8861-9194</td>
            <td>Divino Moreira</td>
            <td>6711048844</td>
        </tr>
        <tr>
            <td class="blur">+55 21 99479-9386</td>
            <td>Doni Freitas</td>
            <td>5160957851</td>
        </tr>
        <tr>
            <td class="blur">+55 21 98299-8323</td>
            <td>Edeson Oliveira</td>
            <td>8403789536</td>
        </tr>
        <tr>
            <td class="blur">+55 94 8150-7810</td>
            <td>Edmilson Brasil</td>
            <td>3736910688</td>
        </tr>
        <tr>
            <td class="blur">+1 443 735-4573</td>
            <td>Edinho U.S.A</td>
            <td>1425836601</td>
        </tr>
        <tr>
            <td class="blur">+55 82 98898-0223</td>
            <td>Eduardo Kowalsky</td>
            <td>8564462620</td>
        </tr>
        <tr>
            <td class="blur">+55 98 8147-0443</td>
            <td>Eliene Melo</td>
            <td>8963630534</td>
        </tr>
        <tr>
            <td class="blur">+55 75 9888-9437</td>
            <td>Emanuel Conceição</td>
            <td>6166000911</td>
        </tr>
        <tr>
            <td class="blur">+55 96 9117-5681</td>
            <td>Erom Almeida</td>
            <td>5699207952</td>
        </tr>
        <tr>
            <td class="blur">+55 98 8583-4648</td>
            <td>Fábio Costa</td>
            <td>2561980225</td>
        </tr>
        <tr>
            <td class="blur">+55 21 97546-2469</td>
            <td>Fábio Silva</td>
            <td>2246167615</td>
        </tr>
        <tr>
            <td class="blur">+55 21 97114-5752</td>
            <td>Fátima Melo</td>
            <td>1270544341</td>
        </tr>
        <tr>
            <td class="blur">+55 79 9946-7085</td>
            <td>Fernando Torres</td>
            <td>7773322637</td>
        </tr>
        <tr>
            <td class="blur">+55 21 98005-1395</td>
            <td>Francisco Santos</td>
            <td>5575507733</td>
        </tr>
        <tr>
            <td class="blur">+55 47 9787-3547</td>
            <td>Franke Oliveira</td>
            <td>2383238973</td>
        </tr>
        <tr>
            <td class="blur">+55 11 98366-6882</td>
            <td>Gabriel Silva</td>
            <td>7529513329</td>
        </tr>
        <tr>
            <td class="blur">+55 11 96141-6549</td>
            <td>Genessi Reis</td>
            <td>4547324255</td>
        </tr>
        <tr>
            <td class="blur">+55 22 99918-4095</td>
            <td>Gerson Júnior</td>
            <td>2515062216</td>
        </tr>
        <tr>
            <td class="blur">+55 83 9884-7549</td>
            <td>Glauber Araújo</td>
            <td>4906596160</td>
        </tr>
        <tr>
            <td class="blur">+55 79 9937-6586</td>
            <td>Hélio Dionisio</td>
            <td>8354224898</td>
        </tr>
        <tr>
            <td class="blur">+55 22 99957-9429</td>
            <td>Hudson Carlos</td>
            <td>5172498921</td>
        </tr>
        <tr>
            <td class="blur">+55 28 99981-2527</td>
            <td>Jalhon Oliveira</td>
            <td>2489155322</td>
        </tr>
        <tr>
            <td class="blur">+55 69 9237-5321</td>
            <td>Jardel Paulino</td>
            <td>4886527027</td>
        </tr>
        <tr>
            <td class="blur">+55 82 8118-7511</td>
            <td>José Barbosa</td>
            <td>5045043190</td>
        </tr>
        <tr>
            <td class="blur">+55 92 8120-6233</td>
            <td>José Fabrício</td>
            <td>5943784927</td>
        </tr>
        <tr>
            <td class="blur">+55 93 9110-2845</td>
            <td>José Felipe</td>
            <td>7528975790</td>
        </tr>
        <tr>
            <td class="blur">+55 63 9296-3289</td>
            <td>José Maria</td>
            <td>5303805958</td>
        </tr>
        <tr>
            <td class="blur">+55 62 8173-9471</td>
            <td>José Ribamar</td>
            <td>7241579872</td>
        </tr>
        <tr>
            <td class="blur">+55 27 99894-1219</td>
            <td>Josimar Cruz</td>
            <td>7000327668</td>
        </tr>
        <tr>
            <td class="blur">+55 21 97900-6485</td>
            <td>Juan Victor</td>
            <td>6431801060</td>
        </tr>
        <tr>
            <td class="blur">+55 83 9658-3092</td>
            <td>Jucelino Andrade</td>
            <td>8293563339</td>
        </tr>
        <tr>
            <td class="blur">+55 83 9803-5235</td>
            <td>Júlio Cesar</td>
            <td>9456812389</td>
        </tr>
        <tr>
            <td class="blur">+55 92 9201-9442</td>
            <td>Karlinha Freitas</td>
            <td>2257834319</td>
        </tr>
        <tr>
            <td class="blur">+55 21 97953-5543</td>
            <td>Lia Mara</td>
            <td>9558163942</td>
        </tr>
        <tr>
            <td class="blur">+55 91 9363-4744</td>
            <td>Luan Bastos</td>
            <td>1258053671</td>
        </tr>
        <tr>
            <td class="blur">+55 21 92015-2730</td>
            <td>Lucas Gabriel</td>
            <td>5884495329</td>
        </tr>
        <tr>
            <td class="blur">+55 97 8431-0508</td>
            <td>Lucas Santos</td>
            <td>8132748397</td>
        </tr>
        <tr>
            <td class="blur">+55 91 8435-1796</td>
            <td>Luis Barbosa</td>
            <td>5558421926</td>
        </tr>
        <tr>
            <td class="blur">+55 75 9928-6998</td>
            <td>Luís Carlos D.</td>
            <td>5829429949</td>
        </tr>
        <tr>
            <td class="blur">+55 77 9996-7412</td>
            <td>Luis Felipe</td>
            <td>8076960257</td>
        </tr>
        <tr>
            <td class="blur">+55 85 9244-0109</td>
            <td>Manoel Fla</td>
            <td>5922866049</td>
        </tr>
        <tr>
            <td class="blur">+55 33 8817-2952</td>
            <td>Marcelo Bispo</td>
            <td>7904861272</td>
        </tr>
        <tr>
            <td class="blur">+55 61 8114-2767</td>
            <td>Marcelo Cardoso</td>
            <td>2027434171</td>
        </tr>
        <tr>
            <td class="blur">+55 98 8450-6552</td>
            <td>Marcos Aurélio</td>
            <td>9884040547</td>
        </tr>
        <tr>
            <td class="blur">+55 11 99387-5453</td>
            <td>Matheus Marques</td>
            <td>2133759707</td>
        </tr>
        <tr>
            <td class="blur">+55 81 9114-6505</td>
            <td>Mikael França</td>
            <td>2690934898</td>
        </tr>
        <tr>
            <td class="blur">+55 41 9729-3976</td>
            <td>Reginaldo da Cunha</td>
            <td>7991092353</td>
        </tr>
        <tr>
            <td class="blur">+55 11 99393-3332</td>
            <td>Renan Cassaro</td>
            <td>5787880549</td>
        </tr>
        <tr>
            <td class="blur">+55 19 99268-7282</td>
            <td>Renan Ferreira</td>
            <td>7852008723</td>
        </tr>
        <tr>
            <td class="blur">+55 21 99225-8400</td>
            <td>Renato Ferreira</td>
            <td>6209865812</td>
        </tr>
        <tr>
            <td class="blur">+55 21 96826-8080</td>
            <td>Ronan Figueiredo</td>
            <td>8134823151</td>
        </tr>
        <tr>
            <td class="blur">+55 66 9283-0441</td>
            <td>Rosemilton Evangelista</td>
            <td>4205584918</td>
        </tr>
        <tr>
            <td class="blur">+55 71 8234-0641</td>
            <td>Saulo Reis</td>
            <td>8758520298</td>
        </tr>
        <tr>
            <td class="blur">+55 47 8913-6585</td>
            <td>Thalia Rodrigues</td>
            <td>5204841901</td>
        </tr>
        <tr>
            <td class="blur">+55 34 9678-0471</td>
            <td>Thalia Santos</td>
            <td>3609236801</td>
        </tr>
        <tr>
            <td class="blur">+55 84 9465-2224</td>
            <td>Thiago Lima</td>
            <td>7229732296</td>
        </tr>
        <tr>
            <td class="blur">+55 44 9767-5609</td>
            <td>Vagner Correa</td>
            <td>5492461532</td>
        </tr>
        <tr>
            <td class="blur">+55 62 8118-1798</td>
            <td>Valdecy José</td>
            <td>3970546104</td>
        </tr>
        <tr>
            <td class="blur">+55 81 8830-0671</td>
            <td>Vitória Rios</td>
            <td>4898547973</td>
        </tr>
        <tr>
            <td class="blur">+55 22 99700-1403</td>
            <td>Weslen Veiga</td>
            <td>6900254071</td>
        </tr>
        <tr>
            <td class="blur">+55 63 9240-9948</td>
            <td>Will RD</td>
            <td>5236928482</td>
        </tr>
        <tr>
            <td class="blur">+55 43 9935-9216</td>
            <td>WillIan Ostentação</td>
            <td>3103118022</td>
        </tr>
    </tbody>
</table>`
    }else if(screen == 'historic'){
        prompting = `
        <h1>Histórico dos Bolões</h1>
<div class="boloes">
    <div class="bolao-his" onclick="bolao('brasil-vs-marrocos')">
        <p class="data">13/06/2026, 19:00</p>
        <div class="brasoes">
            <span class="fi fi-br fis"></span>
            <p class="x">x</p>
            <span class="fi fi-ma fis"></span>
        </div>
        <p class="qtd-palpites">64 palpites</p>
    </div>
    <div class="bolao-his" onclick="bolao('brasil-vs-haiti')">
        <p class="data">19/06/2026, 21:30</p>
        <div class="brasoes">
            <span class="fi fi-br fis"></span>
            <p style="font-family:'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;">x</p>
            <span class="fi fi-ht fis"></span>
        </div>
        <p class="qtd-palpites">51 palpites</p>
    </div>
    <div class="bolao-his" onclick="bolao('escocia-vs-brasil')">
        <p class="data">24/06/2026, 19:00</p>
        <div class="brasoes">
            <span class="fi fi-gb-sct fis"></span>
            <p style="font-family:'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;">x</p>
            <span class="fi fi-br fis"></span>
        </div>
        <p class="qtd-palpites">41 palpites</p>
    </div>
    <div class="bolao-his" onclick="bolao('brasil-vs-japao')">
        <p class="data">29/06/2026, 14:00</p>
        <div class="brasoes">
            <span class="fi fi-br fis"></span>
            <p style="font-family:'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;">x</p>
            <span class="fi fi-jp fis"></span>
        </div>
        <p class="qtd-palpites">53 palpites</p>
    </div>
    <div class="bolao-his" onclick="bolao('riverplate-vs-flamengo')">
        <p class="data">03/07/2026, 15:30</p>
        <div class="brasoes">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Club_Atl%C3%A9tico_River_Plate_logo.svg/500px-Club_Atl%C3%A9tico_River_Plate_logo.svg.png" height="30px" alt="River Plate">
            <p style="font-family:'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;">x</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Clube_de_Regatas_do_Flamengo_logo.svg/500px-Clube_de_Regatas_do_Flamengo_logo.svg.png" height="30px" alt="Flamengo">
        </div>
        <p class="qtd-palpites">57 palpites</p>
    </div>    
    <div class="bolao-his" onclick="bolao('brasil-vs-noruega')">
        <p class="data">05/07/2026, 17:00</p>
        <div class="brasoes">
            <span class="fi fi-br fis"></span>
            <p style="font-family:'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;">x</p>
            <span class="fi fi-no fis"></span>
        </div>
        <p class="qtd-palpites">45 palpites</p>
    </div>
    <div class="bolao-his" onclick="bolao('laussane-vs-flamengo')">
        <p class="data">08/07/2026, 15:30</p>
        <div class="brasoes">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/FC_Lausanne-Sport_logo.svg/250px-FC_Lausanne-Sport_logo.svg.png" height="30px" alt="Lausane-Sport">
            <p style="font-family:'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;">x</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Clube_de_Regatas_do_Flamengo_logo.svg/500px-Clube_de_Regatas_do_Flamengo_logo.svg.png" height="30px" alt="Flamengo">
        </div>
        <p class="qtd-palpites">28 palpites</p>
    </div> 
    <div class="bolao-his" onclick="bolao('flamengo-vs-benfica')">
        <p class="data">11/07/2026, 15:30</p>
        <div class="brasoes">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Clube_de_Regatas_do_Flamengo_logo.svg/500px-Clube_de_Regatas_do_Flamengo_logo.svg.png" height="30px" alt="Flamengo">
            <p style="font-family:'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;">x</p>
            <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/a/a2/SL_Benfica_logo.svg/250px-SL_Benfica_logo.svg.png?_=20170427233121" height="30px"  alt="Benfica">
        </div>
        <p class="qtd-palpites">44 palpites</p>
    </div> 
    <div class="bolao-his" onclick="bolao('flamengo-vs-olimpia')">
        <p class="data">17/07/2026, 20:00</p>
        <div class="brasoes">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Clube_de_Regatas_do_Flamengo_logo.svg/500px-Clube_de_Regatas_do_Flamengo_logo.svg.png" height="30px" alt="Flamengo">
            <p style="font-family:'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;">x</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_de_Olimpia_2022_PNG_HD.png" height="30px"  alt="Olimpia">
        </div>
        <p class="qtd-palpites">0 palpite</p>
    </div> 
</div>
        `
    }else if(screen == 'winners'){
        prompting = `
        
<h1>Histórico dos Bolões</h1>
<div class="boloes">
    <div class="bolao-his" onclick="ganhadores('brasil-vs-marrocos')">
        <p class="data">13/06/2026, 19:00</p>
        <div class="brasoes">
            <span class="fi fi-br fis"></span>
            <p class="x">x</p>
            <span class="fi fi-ma fis"></span>
        </div>
        <p class="qtd-palpites">9 ganhadores</p>
    </div>
    <div class="bolao-his" onclick="ganhadores('brasil-vs-haiti')">
        <p class="data">19/06/2026, 21:30</p>
        <div class="brasoes">
            <span class="fi fi-br fis"></span>
            <p style="font-family:'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;">x</p>
            <span class="fi fi-ht fis"></span>
        </div>
        <p class="qtd-palpites">15 ganhadores</p>
    </div>
    <div class="bolao-his" onclick="ganhadores('escocia-vs-brasil')">
        <p class="data">24/06/2026, 19:00</p>
        <div class="brasoes">
            <span class="fi fi-gb-sct fis"></span>
            <p style="font-family:'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;">x</p>
            <span class="fi fi-br fis"></span>
        </div>
        <p class="qtd-palpites">7 ganhadores</p>
    </div>
    <div class="bolao-his" onclick="ganhadores('brasil-vs-japao')">
        <p class="data">29/06/2026, 14:00</p>
        <div class="brasoes">
            <span class="fi fi-br fis"></span>
            <p style="font-family:'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;">x</p>
            <span class="fi fi-jp fis"></span>
        </div>
        <p class="qtd-palpites">13 ganhadores</p>
    </div>
    <div class="bolao-his" onclick="ganhadores('riverplate-vs-flamengo')">
        <p class="data">03/07/2026, 15:30</p>
        <div class="brasoes">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Club_Atl%C3%A9tico_River_Plate_logo.svg/500px-Club_Atl%C3%A9tico_River_Plate_logo.svg.png" height="30px" alt="River Plate">
            <p style="font-family:'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;">x</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Clube_de_Regatas_do_Flamengo_logo.svg/500px-Clube_de_Regatas_do_Flamengo_logo.svg.png" height="30px" alt="Flamengo">
        </div>
        <p class="qtd-palpites">1 ganhador</p>
    </div>    
    <div class="bolao-his" onclick="ganhadores('brasil-vs-noruega')">
        <p class="data">05/07/2026, 17:00</p>
        <div class="brasoes">
            <span class="fi fi-br fis"></span>
            <p style="font-family:'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;">x</p>
            <span class="fi fi-no fis"></span>
        </div>
        <p class="qtd-palpites">0 ganhador</p>
    </div>
    <div class="bolao-his" onclick="ganhadores('laussane-vs-flamengo')">
        <p class="data">08/07/2026, 15:30</p>
        <div class="brasoes">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/FC_Lausanne-Sport_logo.svg/250px-FC_Lausanne-Sport_logo.svg.png" height="30px" alt="Lausane-Sport">
            <p style="font-family:'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;">x</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Clube_de_Regatas_do_Flamengo_logo.svg/500px-Clube_de_Regatas_do_Flamengo_logo.svg.png" height="30px" alt="Flamengo">
        </div>
        <p class="qtd-palpites">8 ganhadores</p>
    </div> 
    <div class="bolao-his" onclick="ganhadores('flamengo-vs-benfica')">
        <p class="data">11/07/2026, 15:30</p>
        <div class="brasoes">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Clube_de_Regatas_do_Flamengo_logo.svg/500px-Clube_de_Regatas_do_Flamengo_logo.svg.png" height="30px" alt="Flamengo">
            <p style="font-family:'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;">x</p>
            <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/a/a2/SL_Benfica_logo.svg/250px-SL_Benfica_logo.svg.png?_=20170427233121" height="30px"  alt="Benfica">
        </div>
        <p class="qtd-palpites">20 ganhadores</p>
    </div> 
</div>
        `
    }else if(screen == 'rank'){
        prompting = `
        <h2>RANKING GERAL</h2>
<table class="table table-striped table-hover">
    <thead>
        <tr>
            <th>Posição</th>
            <th>Nome</th>
            <th>PTS</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Eduardo Kowalsky</td>
            <td>28 pontos</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jalhon Oliveira</td>
            <td>25 pontos</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Glauber Araújo</td>
            <td>19 pontos</td>
        </tr>
        <tr>
            <td>4</td>
            <td>José Felipe</td>
            <td>18 pontos</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Alexandre Wiliam</td>
            <td>16 pontos</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Emanuel Conceição</td>
            <td>14 pontos</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Saulo Reis</td>
            <td>14 pontos</td>
        </tr>
        <tr>
            <td>8</td>
            <td>Doni Freitas</td>
            <td>13 pontos</td>
        </tr>
        <tr>
            <td>9</td>
            <td>Hélio Dionísio</td>
            <td>13 pontos</td>
        </tr>
        <tr>
            <td>10</td>
            <td>Jucelino Andrade</td>
            <td>13 pontos</td>
        </tr>
        <tr>
            <td>11</td>
            <td>Edinho U.S.A</td>
            <td>11 pontos</td>
        </tr>
        <tr>
            <td>12</td>
            <td>Eliene Melo</td>
            <td>11 pontos</td>
        </tr>
        <tr>
            <td>13</td>
            <td>José Barbosa</td>
            <td>11 pontos</td>
        </tr>
        <tr>
            <td>14</td>
            <td>Lucas Santos</td>
            <td>11 pontos</td>
        </tr>
        <tr>
            <td>15</td>
            <td>Michel Sasso</td>
            <td>11 pontos</td>
        </tr>
        <tr>
            <td>16</td>
            <td>Valdecy José</td>
            <td>11 pontos</td>
        </tr>
        <tr>
            <td>17</td>
            <td>Thiago Lima</td>
            <td>10 pontos</td>
        </tr>
        <tr>
            <td>18</td>
            <td>Anderson Lima</td>
            <td>9 pontos</td>
        </tr>
        <tr>
            <td>19</td>
            <td>Antôny Silvah</td>
            <td>9 pontos</td>
        </tr>
        <tr>
            <td>20</td>
            <td>Fábio Silva</td>
            <td>9 pontos</td>
        </tr>
        <tr>
            <td>21</td>
            <td>Alexandre Viana</td>
            <td>8 pontos</td>
        </tr>
        <tr>
            <td>22</td>
            <td>Hallyson Bonine</td>
            <td>8 pontos</td>
        </tr>
        <tr>
            <td>23</td>
            <td>José Maria</td>
            <td>8 pontos</td>
        </tr>
        <tr>
            <td>24</td>
            <td>Juan Victor</td>
            <td>8 pontos</td>
        </tr>
        <tr>
            <td>25</td>
            <td>Junior Fraimam</td>
            <td>8 pontos</td>
        </tr>
        <tr>
            <td>26</td>
            <td>Luis Carlos D.</td>
            <td>8 pontos</td>
        </tr>
        <tr>
            <td>27</td>
            <td>Vitória Rios</td>
            <td>8 pontos</td>
        </tr>
        <tr>
            <td>28</td>
            <td>Andinho Luiz</td>
            <td>6 pontos</td>
        </tr>
        <tr>
            <td>29</td>
            <td>Gustavo Silva</td>
            <td>6 pontos</td>
        </tr>
        <tr>
            <td>30</td>
            <td>Manoel Fla</td>
            <td>6 pontos</td>
        </tr>
        <tr>
            <td>31</td>
            <td>Wallace Turle</td>
            <td>6 pontos</td>
        </tr>
        <tr>
            <td>32</td>
            <td>José Ribamar</td>
            <td>5 pontos</td>
        </tr>
        <tr>
            <td>33</td>
            <td>Josimar Cruz</td>
            <td>5 pontos</td>
        </tr>
        <tr>
            <td>34</td>
            <td>Manoel Henrique</td>
            <td>5 pontos</td>
        </tr>
        <tr>
            <td>35</td>
            <td>Mikael França</td>
            <td>5 pontos</td>
        </tr>
        <tr>
            <td>36</td>
            <td>Renan Ferreira</td>
            <td>5 pontos</td>
        </tr>
        <tr>
            <td>37</td>
            <td>Rodrigo Dutra</td>
            <td>5 pontos</td>
        </tr>
        <tr>
            <td>38</td>
            <td>Vagner Correa</td>
            <td>5 pontos</td>
        </tr>
        <tr>
            <td>39</td>
            <td>Weslen Veiga</td>
            <td>5 pontos</td>
        </tr>
        <tr>
            <td>40</td>
            <td>André Luis</td>
            <td>3 pontos</td>
        </tr>
        <tr>
            <td>41</td>
            <td>Cláudia Rosa</td>
            <td>3 pontos</td>
        </tr>
        <tr>
            <td>42</td>
            <td>Cláudio Pedra</td>
            <td>3 pontos</td>
        </tr>
        <tr>
            <td>43</td>
            <td>Reginaldo da Cunha</td>
            <td>3 pontos</td>
        </tr>
        <tr>
            <td>44</td>
            <td>Antônio Cruz</td>
            <td>2 pontos</td>
        </tr>
        <tr>
            <td>45</td>
            <td>Luis Barbosa</td>
            <td>2 pontos</td>
        </tr>
        <tr>
            <td>46</td>
            <td>Marcelo Bispo</td>
            <td>2 pontos</td>
        </tr>
        <tr>
            <td>47</td>
            <td>Sérgio Henrique</td>
            <td>2 pontos</td>
        </tr>
        <tr>
            <td>48</td>
            <td>Igor Pereira</td>
            <td>1 ponto</td>
        </tr>
        <tr>
            <td>49</td>
            <td>Alfredo Silva</td>
            <td>1 ponto</td>
        </tr>

    </tbody>
        `
    }else if(screen == 'laws'){
        prompting = `
        <div class="reg-div">
        
            <h1>Regras do Bolão</h1>
            <h3>FLAMENGO RJ</h3>
            <div style="text-align: justify;" class="regras">
                <h2>Pontuação</h2>
                <p>1. Cada bolão terá pontuação diferente:</p>
                <ol type="a">
                    <li>3 pontos: Amistosos, Brasileirão.</li>
                    <li>5 pontos: Fase de grupos de Copa do Brasil, Copa Libertadores da América, Copa do Mundo de Seleções</li>
                    <li>6 pontos: Fase de grupos da Copa do Mundo de Clubes e 16 avos de final da Copa do Mundo de Seleções</li>
                    <li>7 pontos: oitavas de final de qualquer competição</li>
                    <li>8 pontos: quartas de final de qualquer competição e finais de competição de jogo único</li>
                    <li>9 pontos: semifinais de qualquer competição</li>
                    <li>10 pontos: final de qualquer competição</li>
                </ol>
                <p>2. O homem-gol será válido para 2 pontos em caso de gol e 1 ponto em caso de assistência.</p>
                <p>3. Poderão ter eventos no grupo com pontuações-extra de 1 ou 2 pontos, como enquetes ou pesquisas, mas só se autorizado pelo ADM.</p>
                <h2>Participação</h2>
                <p>4. É gratuito participar do bolão, mas só poderá participar quem estiver no grupo FLAMENGO RJ, no WhatsApp e mandar o palpite em grupo.</p>
                <p>5. Para participar do bolão, são necessárias as seguintes informações:</p>
                <ol type="a">
                    <li>Nome e sobrenome, ou Nome e apelido ou até mesmo um apelido composto, desde que consistam de dois nomes para que não haja confusão no ranking geral. <br>
                    <ol type="I">
                        <li>Basta enviar o nome uma única vez (presume-se a primeira participação), pois o administrador responsável pelo bolão cadastrará o nome do contato.</li>
                        <li>Para apelidos, não são válidos apelidos com palavrões, caracteres especiais e nem emojis.</li>
                    </ol></li>
                    <li>Placar da partida</li>
                    <li>Opcional: homem-gol</li>
                </ol>
                <h2>Palpites não contados</h2>
                <p>6. Palpites não serão contados caso:</p>
                <ol type="a">
                    <li>Envio após o fechamento do bolão, ainda que seja 1 minuto depois, salvo se comprovar atraso no envio da mensagem (ex: sem internet), mas é necessário print</li>
                    <li>Palpites que ensejam derrota ou empates que pressuponham desclassificação / eliminação</li>
                    <li>Palpites editados nos últimos 30 minutos</li>
                    <li>Palpites adicionados ao bolão por membros (não-administradores)</li>
                    <li>Membros que saíram do grupo, contados os palpites daqueles que retornarem ao grupo em até 30 minutos antes do jogo.</li>
                </ol>
                <h2>Editar / cancelar palpites</h2>
                <p>7. É permitido cancelar palpites a qualquer tempo, a pedido do membro.</p>
                <p>8. É permitido editar um palpite, desde que seja 1 hora antes do fechamento do bolão.</p>
                <h2>Suspensão do bolão</h2>
                <p>9. Será suspenso a participar do bolão, por 3 bolões, se o membro for removido do grupo por descumprir as regras.</p>
                <p>10. Será suspenso a participar do bolão, por 6 bolões, se o membro for removido pela segunda vez.</p>
                <p>11. Será banido permanentemente do bolão se o membro for removido por racismo ou preconceito, pedofilia ou coisas graves ou se agir para atrapalhar o andamento do bolão múltiplas vezes, mesmo com aviso.</p>
                <h2>Ranking</h2>
                <p>12. O ranking funcionará com base na somatória dos pontos obtidos a cada vitória no bolão ou pontuação-extra.</p>
                <p>13. Os membros que participaram e que não ganharam nenhum ponto não aparecerão no ranking.</p>
                <p>14. Logo após o término dos jogos, será feita uma mensagem informando os ganhadores da partida, que será fixada no grupo durante 5 horas.</p>        <p>15. O membro pode pedir a exclusão do nome no ranking, pra isso, basta falar com algum ADM.</p><h2>Premiações</h2>
        <p>16. A premiação do bolão será paga por parte dos administradores do grupo, sendo a responsabilidade da organização do bolão o ADM ~dudu e, pela organização dos prêmios, o dono do grupo, ~Jucelino Andrade.</p>
        <p>17. O primeiro, segundo e terceiro lugar receberão prêmio em dinheiro pagos por PIX ao resultado final do ranking no último bolão do ano de 2026.</p>
        <p>18. Para que seja válido o recebimento do prêmio, é necessário, ao mínimo, estar presente no grupo no último bolão do ano.</p>
                 <h2>Reações</h2>
         <p>19. As reações servem para indicar se o palpite foi anotado ou não.</p>
         <p>20. As reações são:</p>
         <ol type="a">
            <li>📝: caneta e papel, pra indicar que o palpite foi anotado</li>
            <li>⚠️: advertência, se já houver algum palpite no nome do membro ou se o palpite ficou com alguma informação incompleta</li>
            <li>🔎: lupa, pra quando estiver procurando algum palpite no nome do membro</li>
            <li>❌: x vermelho, se o palpite não for contado</li>
            <li>🚫: círculo barrado, caso o membro esteja suspenso ou banido do bolão</li>
            <li>🕒: relógio, caso o palpite tenha sido enviado após o fechamento do bolão (indica que o palpite não foi contado)</li>
         </ol>
         <h2>Menção</h2>
         <p>21. É importante mencionar o ADM responsável pelo bolão (~dudu) ao mandar o palpite para que o palpite não esteja vagando pelo grupo, sem ser anotado.</p>
         <p>22. Em caso de palpite não anotado por falta de menção ao ADM responsável pelo bolão (~dudu), mesmo com provas, o palpite não será validado.</p>
            </div>
    </div>
        `
    }else if(screen == 'gifts'){
        prompting = `
                 <h1>PREMIAÇÕES DO BOLÃO</h1>
         <p style="color: gold; font-size: 30px;margin-top: 20px;"><b>Primeiro Lugar: R$50,00</b></p>
         <p style="color: silver; font-size: 25px;"><b>Segundo Lugar: R$30,00</b></p>
         <p style="color: rgb(167, 123, 15); font-size: 20px;"><b>Terceiro Lugar: R$20,00</b></p>

         <p style="margin-top: 20px;">Veja as regras do bolão no menu <i class="bi bi-list"></i> para ver como funcionam e como serão pagas as premiações!</p>
        `
    }else if(screen == 'troble'){
        prompting = `
                 <div class="wppdiv">
            <p>Algum problema com alguma coisa do bolão? <br>Fale com o ADM responsável pelo bolão</p>
            <a href="https://wa.link/vq2l6p" target="_blank"><i class="bi bi-whatsapp"></i></a>
         </div>
        `
    }

    viewer.innerHTML = `${prompting}`
}