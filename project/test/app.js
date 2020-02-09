// "use strict"



let btn = document.querySelector('.btn');
let block2 = document.querySelector('.block_2');

let renderSection = `
<section class="sec_2">
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus quod ex.</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ullam facilis sit optio iusto id assumenda hic obcaecati nihil dolor. Cupiditate debitis harum quisquam facilis tempora at? Sit, vero exercitationem?</p>
    <button class="btn_2" onclick="appRun()">click</button>
</section>`;



btn.addEventListener('click', function () {
    block2.innerHTML = renderSection;
});

function appRun() {

    let block1 = document.querySelector('.block_1');


    let renderSection2 = `
    <section class="sec_3">
        <h1 
            style="color:red; background-color:aquamarine; padding: 50px;"
                >Привет мир!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ullam facilis sit optio iusto id assumenda hic obcaecati nihil dolor. Cupiditate debitis harum quisquam facilis tempora at? Sit, vero exercitationem?</p>
        <button class="btn">click</button>
    </section>`;

    block1.innerHTML = renderSection2;
};


