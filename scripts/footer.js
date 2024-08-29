const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = '../stylesheets/footer.css';
document.head.appendChild(linkElement);

const footer = document.createElement('div');
footer.id = 'copyright';

footer.innerHTML = `
    <div id="copyline">
        <img src="../assets/images/logo.png" height="50px">
        <span class="copyright" style="font-size:20px; color:white; margin-left:5px">경기북과학고등학교 유일 환경·에너지 동아리 GLOBE</span>
        <p class="copyright" style="font-size:17px; margin-left:60px">Global Learning and Observations to Benefit the Environment</p>
        <p class="copyright" style="font-size:13px; margin-left:60px; color:grey">경기도 의정부시 체육로135번길 32</p>
    </div>
`;

document.body.appendChild(footer);