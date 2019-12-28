//поставим оболочку для полной загрузки страницы
window.addEventListener('load', () => {

    let findings = {
        who: "",
        congratulate: ""
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

            if (findings.who === 'him') {
                herBtn.classList.add('off_block');
                himBlock.classList.remove('off_block_off');
            } else {
                himBtn.classList.add('off_block');
                herBlock.classList.remove('off_block_off');
            }
        })
    });

    //слушаем кнопки по выбору темы поздравления
    let congr = document.querySelectorAll('.congr');
    congr.forEach(function (congrBtn) {
        congrBtn.addEventListener('click', function (ev) {
            let congrWhich = ev.srcElement.dataset.two;
            findings.congratulate = congrWhich;

            let namberRnd = Math.floor(Math.random() * 20);// добавить запрос к базе
            findings.number = namberRnd;

            let renderResult; // переменная с результатом отбор + рандом. для вывода.

            if (findings.who === 'him') {
                renderResult = `Поздравить ЕГО с `;
                switch (findings.congratulate) {
                    case 'birthday':
                        renderResult = renderResult + `Днем рождения` + ` поздравление ${findings.number}`;
                        findings.result = renderResult;
                        break;
                    case 'new_year':
                        renderResult = renderResult + `Новым годом` + ` поздравление ${findings.number}`;
                        findings.result = renderResult;
                        break;
                    case 'february_23':
                        renderResult = renderResult + `23 февраля` + ` поздравление ${findings.number}`;
                        findings.result = renderResult;
                        break;
                    case 'another':
                        renderResult = renderResult + `чем то другим` + ` поздравление ${findings.number}`;
                        findings.result = renderResult;
                        break;
                }
            } else {
                renderResult = `Поздравить ЕЁ с `;
                switch (findings.congratulate) {
                    case 'birthday':
                        renderResult = renderResult + `Днем рождения` + ` поздравление ${findings.number}`;
                        findings.result = renderResult;
                        break;
                    case 'new_year':
                        renderResult = renderResult + `Новым годом` + ` поздравление ${findings.number}`;
                        findings.result = renderResult;
                        break;
                    case 'march_8':
                        renderResult = renderResult + `8 марат` + ` поздравление ${findings.number}`;
                        findings.result = renderResult;
                        break;
                    case 'another':
                        renderResult = renderResult + `чем то другим` + ` поздравление ${findings.number}`;
                        findings.result = renderResult;
                        break;
                }
            }

            let position = document.querySelector('.comgratulate_text');
            position.innerHTML = renderResult;

        })
    })

    console.log(findings);
}); // конец