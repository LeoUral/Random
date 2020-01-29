//поставим оболочку для полной загрузки страницы
window.addEventListener('load', () => {

    this.findings = {
        who: "",
        congratulate: "",
        congrRnd: ""
    };

    //слушаем кнопки по выбору пола
    let who = document.querySelectorAll('.who');
    who.forEach(function (whoBtn) {
        whoBtn.addEventListener('click', function (event) {
            let whoWas = event.srcElement.dataset.one;
            findings.who = whoWas;

            const himBtn = document.querySelector('.congratulate_him');
            const herBtn = document.querySelector('.congratulate_her');
            const himBlock = document.querySelector('.congr_select_him');
            const herBlock = document.querySelector('.congr_select_her');
            const groupBtn = document.querySelector('.congratulate_group');
            const groupBlock = document.querySelector('.congr_select_group');

            //отключаем в html не активные кнопки, включаем выбранный блок
            if (findings.who === 'him') {
                herBtn.classList.add('off_block');
                groupBtn.classList.add('off_block');
                himBlock.classList.remove('off_block_off');
            } else if (findings.who === 'her') {
                himBtn.classList.add('off_block');
                groupBtn.classList.add('off_block');
                herBlock.classList.remove('off_block_off');
            } else if (findings.who === 'group') {
                himBtn.classList.add('off_block');
                herBtn.classList.add('off_block');
                groupBlock.classList.remove('off_block_off');
            }
        })
    });

    //слушаем кнопки по выбору темы поздравления
    let congr = document.querySelectorAll('.congr');
    congr.forEach(function (congrBtn) {
        congrBtn.addEventListener('click', function (ev) {
            let congrWhich = ev.srcElement.dataset.two;//определяем значение класса data-two
            findings.congratulate = congrWhich;

            findings.number = Math.floor(Math.random() * 4);// добавить в базу рандомное значение         

            requestCongratulate(); //вывод рандоманого поздравления
        });
    });

    console.log(findings);
}); // конец


//запрос JSON-а файла, определение случайного поздравления
async function requestCongratulate() {

    const url = "./server/congratulate.json";

    let response = await fetch(url);
    let jsonData = await response.json();

    console.log(jsonData);

    for (let i = 0; i < jsonData.length; i++) {
        if (jsonData[i].who == this.findings.who && jsonData[i].theme == this.findings.congratulate && jsonData[i].randomId == this.findings.number) {
            this.findings.congrRnd = jsonData[i].congratulate;
        }
    }

    console.log(this.findings.congrRnd);

    renderCongr(); //Рендерит поздравление на экран
};

//функция рендерит поздравление на экран
function renderCongr() {
    let position = document.querySelector('.comgratulate_text');
    position.innerHTML = this.findings.congrRnd;
};